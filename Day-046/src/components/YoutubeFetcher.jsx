import { useState, useEffect } from "react";
import "./YouTubeFetcher.css";

const API_KEY = "AIzaSyD1wp-9CwaankOq9Rk4tUpONJ4GXa0YoIM"; // Replace with your API key
const CHANNEL_ID = "UCuPmOehcQ2uRQwJS8OrxBpA"; // Replace with your YouTube Channel ID
const MAX_RESULTS = 10; // Number of videos to fetch

const YouTubeFetcher = () => {
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchChannelDetails();
    fetchVideos();
  }, []);

  const fetchChannelDetails = async () => {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${API_KEY}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setChannel(data.items[0]);
    } catch (error) {
      console.error("Error fetching channel details:", error);
    }
  };

  const fetchVideos = async () => {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setVideos(data.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className="youtube-container">
      {channel && (
        <div className="channel-info">
          <img src={channel.snippet.thumbnails.default.url} alt="Channel Logo" />
          <h2>{channel.snippet.title}</h2>
          <p>Subscribers: {channel.statistics.subscriberCount}</p>
        </div>
      )}

      <h3>Latest Videos & Shorts</h3>
      <div className="videos-list">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-card">
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            </a>
            <p>{video.snippet.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeFetcher;

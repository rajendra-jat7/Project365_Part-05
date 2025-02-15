import { useState } from "react";
import "./ValentineWish.css";

const ValentineWish = () => {
  const [name, setName] = useState("");
  const [showWish, setShowWish] = useState(false);

  const handleWish = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      setShowWish(true);
    }
  };

  return (
    <div className="valentine-container">
      {!showWish ? (
        <form className="valentine-form" onSubmit={handleWish}>
          <h2>💕 Enter Your Love&apos;s Name 💕</h2>
          <input
            type="text"
            placeholder="Enter name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button type="submit">Show Wish</button>
        </form>
      ) : (
        <div className="valentine-message">
          <h2>Happy Valentine&apos;s Day, {name}! ❤️</h2>
          <p>You&apos;re the sweetest part of my life! 💖💞</p>
          <div className="hearts">
            <span>💖</span>
            <span>💞</span>
            <span>💗</span>
            <span>💘</span>
            <span>❤️</span>
          </div>
          <button onClick={() => setShowWish(false)}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default ValentineWish;

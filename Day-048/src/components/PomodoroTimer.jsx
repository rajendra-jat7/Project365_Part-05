import { useState, useEffect } from "react";
import "../styles/PomodoroTimer.css";

const PomodoroTimer = () => {
  const defaultWorkTime = 25 * 60;
  const defaultBreakTime = 5 * 60;

  const [timeLeft, setTimeLeft] = useState(defaultWorkTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsBreak((prev) => !prev);
      setTimeLeft(isBreak ? defaultWorkTime : defaultBreakTime);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, isBreak, defaultWorkTime, defaultBreakTime]);

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsBreak(false);
    setTimeLeft(defaultWorkTime);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="pomodoro-container">
      <h1>🍅 Pomodoro Timer</h1>
      <div className={`timer-circle ${isBreak ? "break-time" : "work-time"}`}>
        <span>{formatTime(timeLeft)}</span>
      </div>
      <p className="session-text">{isBreak ? "Break Time!" : "Work Time!"}</p>
      <div className="buttons">
        <button onClick={toggleTimer}>{isRunning ? "Pause" : "Start"}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default PomodoroTimer;

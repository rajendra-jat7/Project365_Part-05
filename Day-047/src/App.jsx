import { useState, useEffect } from "react";
import Notes from "./components/Notes";
import ThemeToggle from "./components/ThemeToggle";
// import "./styles/Notes.css";
// import "./styles/ThemeToggle.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"; // Get theme from localStorage
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`App ${theme}`}>
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      <Notes />
    </div>
  );
}

export default App;

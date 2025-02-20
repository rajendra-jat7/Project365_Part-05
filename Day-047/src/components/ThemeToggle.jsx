import PropTypes from "prop-types";
import "../styles/ThemeToggle.css";

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "dark" ? "🌙 Dark Mode" : "🌞 Light Mode"}
    </button>
  );
};

ThemeToggle.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default ThemeToggle;

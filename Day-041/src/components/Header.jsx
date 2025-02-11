import "./Header.css";
import Background from "../assets/Snow.jpg";

const Header = () => {
  return (
    <header className="header" style={{ backgroundImage: `url(${Background})` }}>
      <h1 className="title">🚜 Shivam Borwells</h1>
      <p className="subtitle">Precision Borewell Drilling in Himachal Pradesh</p>
      <nav>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import "./Hero.css";
import Background from "../assets/Snow.jpg";

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${Background})` }}>
    <div>
    <nav>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
        </div>
      <h1>🚜 Shivam Borwells</h1>
      <p>Precision Borewell Drilling in Himachal Pradesh</p>
    </section>
  );
};

export default Hero;

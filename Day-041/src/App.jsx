import Header from "./components/Header";
// import Hero from "./components/Hero";
import Services from "./components/Services";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      {/* <Hero /> */}
      <Services />
      <Carousel />
      <Contact />
    </div>
  );
}

export default App;

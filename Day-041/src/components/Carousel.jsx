import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const images = [
  "https://5.imimg.com/data5/SELLER/Default/2023/5/310463498/HL/QF/VX/147162885/whatsapp-image-2023-05-24-at-11-05-15-am-1000x1000.jpeg",
  "https://5.imimg.com/data5/ANDROID/Default/2023/3/FF/GP/GD/163096507/product-jpeg-500x500.jpg",
  "https://5.imimg.com/data5/ANDROID/Default/2023/6/313703156/HW/RG/CM/147162885/product-jpeg-1000x1000.jpg",
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="gallery" className="carousel">
      <h2>📸 Borewell Work in Action</h2>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="carousel-slide">
            <img src={img} alt="Borewell Work" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;

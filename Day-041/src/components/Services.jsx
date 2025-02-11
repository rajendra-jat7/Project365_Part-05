import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>🔩 Our Borewell Services</h2>
      <div className="service-container">
        <div className="service-card">
        <img src="https://3.imimg.com/data3/PX/DQ/MY-501501/tractor-mounted-cd-rigs-250x250.jpg" alt="Borewell Drilling" />
          <h3>Deep Borewell Drilling</h3>
          <p>Efficient and reliable drilling for water extraction.</p>
        </div>
        <div className="service-card">
        <img src="https://5.imimg.com/data5/UB/XF/BN/SELLER-13444823/tractor-mounted-drilling-rig-500x500.jpg" alt="Tractor Borewell" />
          <h3>Tractor-Mounted Borewell</h3>
          <p>High-powered borewell machine for tough terrains.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;

import './Contact.css';
import OwnerImage from '../assets/Owner.webp'; // Replace with actual image

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <h2>📞 Contact Us</h2>
      <div className='contact-card'>
        <div className='image-container'>
          <img src={OwnerImage} alt='Rajendra Jat' className='profile-image' />
        </div>
        <h3>Rajendra Jat</h3>
        <p>📍 Nandsi, Bhinay, Ajmer, Rajasthan, 305628</p>
        <p>
          📞{' '}
          <a href='tel:+919772388069' className='call-link'>
            9772388069
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;

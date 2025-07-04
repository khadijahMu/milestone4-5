import React, { useState } from 'react';
import menuIcon from './assets/Vector.svg';
import { Link } from 'react-router-dom';
import shoppingBag from './assets/shopping_bag_FILL0_wght300_GRAD0_opsz24.svg';
import instagram from './assets/Instagram.svg';
import facebook from './assets/Facebook.svg';
import twitter from './assets/twitter.svg';
import telegram from './assets/telegram.svg';
import pinterest from './assets/pinterest.svg';
import rose from './assets/Rectangle74.png';
import img75 from './assets/Rectangle75.png';
import img76 from './assets/Rectangle76.png';
function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className="navbar">
        {/* Mobile view */}
        <div className="mobile-nav">
          <div className="icon-wrapper left">
            <div className="vertical-line"></div>
            <img
              src={menuIcon}
              alt="Menu"
              className="icon"
              onClick={toggleMenu}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="icon-wrapper right">
            <img src={shoppingBag} alt="Bag" className="icon" />
            <div className="vertical-line"></div>
          </div>
        </div>
        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="dropdown-menu">
            <ul>
              <li><a href="/" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="/category" onClick={() => setIsMenuOpen(false)}>Category</a></li>
              <li><a href="/product" onClick={() => setIsMenuOpen(false)}>Product</a></li>
              <li><a href="/about" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="/checkout" onClick={() => setIsMenuOpen(false)}>Checkout</a></li>
            </ul>
          </div>
        )}
        {/* Desktop view */}
        <div className="desktop-nav">
          <div className="nav-left">
            <span className="nav-item">Shop</span>
            <div className="nav-divider"></div>
            <span className="nav-item">Contact</span>
          </div>
          <div className="nav-right">
          <Link to="/signin" className="nav-item">Sign In</Link> <div className="nav-divider"></div>
          <div className="nav-divider"></div>
            <span className="nav-item">Cart</span>
          </div>
        </div>
      </div>
      {/* About Section Body */}
      <div className="layout-wrapper">
  <div className="content-div">
    <div className="abt-body">
        <h1>Our Story</h1>
        <h4>About</h4>
        <h1>Kyiv LuxeBouquets</h1>
      </div>
      <div className = "round-socialcons">
          <img src={instagram} alt="Instagram" className="social-icon" />
          <img src={pinterest} alt="Pinterest" className="social-icon" />
          <img src={facebook} alt="Facebook" className="social-icon" />
          <img src={twitter} alt="Twitter" className="social-icon" />
          <img src={telegram} alt="Telegram" className="social-icon" />
      </div>
  </div>
  <div className="img-25-container">
  </div>
</div>
     <div className='founder'>
      <h4>OUR STORY</h4>
      <h1>Our Founder's Passion </h1>
      <h4>Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska  with the goal of bringing unique and exquisite bouquets to the people of Kyiv. Natalia has always had a passion for flowers and design, and his vision was to create a local floral studio that would specialize in the creation and delivery of fresh, beautiful, and distinctive bouquets.</h4> 
     </div>
     <div className='rose'>
  <img src={rose} alt="rose" className='rose-img'/>
  <div className="rose-text">
    <h2>Expertly Crafted Bouquets</h2>
    <h4>
      At Kyiv LuxeBouquets, we take pride in our team of talented and experienced florists who carefully select each bloom,
      ensuring that only the freshest and most stunning flowers make it into our bouquets. We work directly with farms to
      source the highest quality flowers, and our skilled florists expertly craft each bouquet to perfection.
    </h4>
  </div>
</div>
<div className='rect-75'>
  <img src={img75} alt="rect75" className='rect75'/>
  <div className="text">
    <h2>Bouquets, Gifts & Ambiance</h2>
    <h4>
      In addition to our stunning bouquets, we also offer a collection of dried bouquets, house plants, and fragrant candles
      from luxury brands to create the perfect ambiance. We believe that sending flowers, plants, and gifts should be easy
      and stress-free, which is why we offer same or next-day delivery throughout Kyiv.
    </h4>
  </div>
</div>
<div className='rect-76'>
  <img src={img76} alt="rect76" className='rect76'/>
  <div className="text">
    <h2>Making Every Day Special</h2>
    <h4>
      Our mission is simple: to make every day special and memorable for our customers. We are dedicated to providing the
      highest quality flowers, exceptional customer service, and a seamless online experience that will make you feel
      confident and satisfied with your purchase. Thank you for choosing Kyiv LuxeBouquets.
    </h4>
  </div>
</div>
  <div className='discovery'>
    <h1>Discover Our Beautiful Bouquets</h1>
    <h4>Explore our collection of exquisite bouquets and surprise your loved ones with the perfect gift. Click the button below to start shopping</h4>
    <button className='shop-btn'>Shop Now</button>
  </div>
  <div className="footer">
          {/* Reminder section */}
          <div className="reminder">
            <h5>
              Remember to offer beautiful flowers from Kyiv <br />
              LuxeBouquets Valentines Day, Mothers Day,<br />
              Christmas... Reminds you 7 days before. No spam or <br />
              sharing your address
            </h5>
            <input type="text" placeholder="Your Email" className="input-txt" />
            <button className="button">Remind</button>
          </div>
          {/* Contact section */}
          <div className="contact">
            <h4>Address</h4>
            <h5>15/4 Khreshchatyk Street, Kyiv</h5>
            <h4>Phone</h4>
            <h5>+380980099777</h5>
            <h4>General Enquiry</h4>
            <h4>Kiev.Florist.Studio@gmail.com</h4>
            <h2>Follow us</h2>
            <div className="social-icons">
              <img src={instagram} alt="Instagram" className="social-icon" />
              <img src={pinterest} alt="Pinterest" className="social-icon" />
              <img src={facebook} alt="Facebook" className="social-icon" />
              <img src={twitter} alt="Twitter" className="social-icon" />
              <img src={telegram} alt="Telegram" className="social-icon" />
            </div>
          </div>
          {/* Shop section */}
          <div className="shop">
            <h2>Shop</h2>
            <h5>All products</h5>
            <h5>Fresh Flowers</h5>
            <h5>Dried Flowers</h5>
            <h5>Live plants</h5>
            <h5>Designer Vases</h5>
            <h5>Aroma Candles</h5>
            <h5>Freshner Diffuser</h5>
            <h2>Service</h2>
            <h5>Flower Subscription</h5>
            <h5>Delivery</h5>
            <h5>wedding & event Decor</h5>
          </div>
          {/* About Us section */}
          <div className="about-us">
            <h2>About Us</h2>
            <h5>Our Story</h5>
            <h5>Blog</h5>
            <h5>Shipping & return</h5>
            <h5>Terms & Conditions</h5>
            <h5>Privacy Policy</h5>
          </div>
        </div>  
  </div>
  );
}
export default About;

import React, { useState } from 'react';
import menuIcon from './assets/Vector.svg';
import shoppingBag from './assets/shopping_bag_FILL0_wght300_GRAD0_opsz24.svg';
import  background  from './assets/left colum.png';
import  six  from './assets/card item (6).png';
import  seven  from './assets/card item (7).png';
import  eight from './assets/card item (8).png';
import  nine  from './assets/card item (9).png';
import  ten from './assets/card item (10).png';
import  eleven  from './assets/card item (11).png';
import  twelve  from './assets/card item (12).png';
import  thirteen  from './assets/card item (13).png';
import   fourteen  from './assets/card item (14).png';
import  fifteen  from './assets/card item (15).png';
import instagram from './assets/Instagram.svg';
import facebook from './assets/Facebook.svg';
import twitter from './assets/twitter.svg';
import telegram from './assets/telegram.svg';
import pinterest from './assets/pinterest.svg';
function CategoryPage() {
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
            <span className="nav-item">Sign In</span>
            <div className="nav-divider"></div>
            <span className="nav-item">Cart</span>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="desktop-wrapper">
  <div className="category-content"></div>
  <div className="body-images">
    <img src={six} alt="img" />
    <img src={seven} alt="img" />
    <img src={eight} alt="img" />
    <img src={nine} alt="img" />
    <img src={ten} alt="img" />
    <img src={eleven} alt="img" />
    <img src={twelve} alt="img" />
    <img src={thirteen} alt="img" />
    <img src={fourteen} alt="img" />
    <img src={fifteen} alt="img" />
  </div>
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
export default CategoryPage;
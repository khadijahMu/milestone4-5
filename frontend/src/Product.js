import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import menuIcon from './assets/Vector.svg';
import shoppingBag from './assets/shopping_bag_FILL0_wght300_GRAD0_opsz24.svg';
import leftee from './assets/left colum (1).png';
import card16 from './assets/card item (16).png';
import card17 from './assets/card item (17).png';
import card18 from './assets/card item (18).png';
import card19 from './assets/card item (19).png';
import instagram from './assets/Instagram.svg';
import facebook from './assets/Facebook.svg';
import twitter from './assets/twitter.svg';
import telegram from './assets/telegram.svg';
import pinterest from './assets/pinterest.svg';
function Product() {
  const [count, setCount] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
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
      {/* Main product layout */}
      <div className="product-page">
        <div className="product-wrapper">
          <div className="body-image">
            <img src={leftee} alt="Product" className="leftee" />
          </div>
          <div className="details">
            <div className="rosy">
              <h5>Bouquets Fresh Flowers / Quick Order</h5>
              <h2>Rosy Delight - $100</h2>
              <h4>
                Large exceptional bouquet composed of a selection of David Austin roses,
                known for their beauty and subtle fragrance...
              </h4>
            </div>
            <div className="quantity">
              <h2>Quantity</h2>
              <div className="quantity-box">
                <button className="qty-btn" onClick={() => setCount(prev => Math.max(1, prev - 1))}>-</button>
                <span className="qty-value">{count}</span>
                <button className="qty-btn" onClick={() => setCount(prev => prev + 1)}>+</button>
              </div>
              <button className="basket" onClick={() => navigate('/checkout')}>
                Add to Basket
              </button>
            </div>
          </div>
        </div>
        {/* "You May Also Like" section */}
        <div className="diffuser-section">
          <h1>You May Also Like</h1>
          <div className="diffuser-img">
            <img src={card16} alt="item" />
            <img src={card17} alt="item" />
            <img src={card18} alt="item" />
            <img src={card19} alt="item" />
          </div>
        </div>
      </div>
      {/* Footer */}
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
export default Product;

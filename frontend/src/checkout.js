import React, { useState } from 'react';
import menuIcon from './assets/Vector.svg';
import shoppingBag from './assets/shopping_bag_FILL0_wght300_GRAD0_opsz24.svg';
import card1 from './assets/card item (5).png';
import lock from './assets/Vector (2).svg';
import instagram from './assets/Instagram.svg';
import facebook from './assets/Facebook.svg';
import twitter from './assets/twitter.svg';
import telegram from './assets/telegram.svg';
import pinterest from './assets/pinterest.svg';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_2x8J3utxkAoS3vK0mnmAxyHfvCeiZ9Wh'); 
const handleCheckout = async () => {
  try {
    const res = await fetch('http://localhost:5000/checkout/create-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: [{ id: "snowfall", quantity: 1 }]
      })
    });
    const data = await res.json();
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId: data.id });
  } catch (error) {
    console.error('Checkout Error:', error);
  }
};
function Checkout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="checkout-isolated">
      {/* NAVIGATION */}
      <div className="navbar">
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
      {/* CHECKOUT WRAPPER */}
      <div className="page-wrapper">
        <div className="right-section">
          <div className="product-card">
            <img src={card1} alt="flower" className="product-image" />
            <div className="product-text">
              <h5 className="product-name">Snowfall</h5>
            </div>
            <h5 className="product-price">$100</h5>
          </div>
          <div className="total">
            <div className="line-item">
              <h5>Subtotal</h5>
              <h5>$100.00</h5>
            </div>
            <div className="line-item">
              <h5>Shipping</h5>
              <h5>calculated at next step</h5>
            </div>
          </div>
          <div className="checkout-total">
            <div className="line-item">
              <h5>Total</h5>
              <h5>$100.00</h5>
            </div>
            <button className="checkout-btn-desktop" onClick={handleCheckout}>
                          Checkout
            </button>
            <div className="secure">
              <img src={lock} alt="lock" className="padlock" />
              <h5>Secure Checkout</h5>
            </div>
          </div>
        </div>
        <div className="left-section"></div>
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
export default Checkout;

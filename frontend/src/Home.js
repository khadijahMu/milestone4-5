import './App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from './assets/Vector.svg';
import shoppingBag from './assets/shopping_bag_FILL0_wght300_GRAD0_opsz24.svg';
import imgHero from  './assets/img hero.png';
import arrowRight from  './assets/arrow-right.svg';
import card1 from  './assets/card item (5).png';
import card2 from  './assets/card item (1).png';
import arrowLeft from  './assets/arrow-left.svg';
import card3 from  './assets/card item (2).png';
import card4 from  './assets/card item (3).png';
import card5 from  './assets/card item (4).png';
import button from  './assets/button (1).svg';
import rightColum from  './assets/Right colum.png';
import call from   './assets/call.svg';
import pin from './assets/pin_drop.svg';
import service from './assets/image (24).png';
import imgBtn from './assets/button (9).svg';
import deco from './assets/Service.png'; 
import google from './assets/google.svg';
import instagram from './assets/Instagram.svg';
import facebook from './assets/Facebook.svg';
import twitter from './assets/twitter.svg';
import telegram from './assets/telegram.svg';
import pinterest from './assets/pinterest.svg';
function Home() {
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
      <div className="body">
        <h1>
          Kyiv<br />
          LuxeBouquets®
        </h1>
        <h4>
          Discover Uniquely Crafted Bouquets and Gifts for Any <br />Occasion: Spread Joy with Our Online Flower Delivery<br />Service
        </h4>
      </div>
      <div className="bodyimage">
  <img src={imgHero} alt="hero" className="heroImg" />
  <div className="vertical-divider"></div>
  <div className="text-block">
    <h4>
      Experience the joy of giving with our <br />
      modern floral studio.Order online and send <br /> 
      fresh flowers, plants and gifts today.
    </h4>
  </div>
</div>
<div className="card-container">
  <div className="card-text">
    <h2>Fresh flowers</h2>
    <Link to="/category" className="shop-now">
      <h4>Shop Now</h4>
      <img src={arrowRight} alt="arrowRight" className="arrow" />
    </Link>
  </div>
  <img src={card1} alt="card1" className="card-img" />
</div>
<div className="card-container2">
  {/* Image on left - comes first in DOM */}
  <img src={card2} alt="dried flowers" className="card-img" />
  {/* Text content on right */}
  <div className="card-text">
    <h2>Dried flowers</h2>
    <Link to="/category" className="shop-now">
      <h4>Shop Now</h4>
      <img src={arrowRight} alt="arrowRight" className="arrow" />
    </Link>
  </div>
</div>
<div className="card-container">
  <div className="card-text">
    <h2>Live Plants</h2>
    <Link to="/category" className="shop-now">
      <h4>Shop Now</h4>
      <img src={arrowRight} alt="arrowRight" className="arrow" />
    </Link>
  </div>
  <img src={card3} alt="Live plants" className="card-img" />
</div>
<div className="card-container2">
  <img src={card4} alt="Aromatic Candles" className="card-img" />
  <div className="card-text">
    <h2>Aromatic Candles</h2>
    <Link to="/category" className="shop-now">
      <h4>Shop Now</h4>
      <img src={arrowLeft} alt="arrowLeft" className="arrow" />
    </Link>
  </div>
</div>
<div className="card-container">
  <div className="card-text">
    <h2>Freshners</h2>
    <Link to="/category" className="shop-now">
      <h4>Shop Now</h4>
      <img src={arrowRight} alt="arrowRight" className="arrow" />
    </Link>
  </div>
  <img src={card5} alt="Freshners" className="card-img" />
</div>  
  <div className="about-wrapper">
  <div className="About">
    <h1>About Us</h1>
  </div>
  <div className="vertical-divider"></div>
  <div className="story">
    <h4>Our story</h4>
    <h2>Kyiv LuxeBouquets</h2>
    <h4>
      We are a modern local floral studio, which specializes in the design and delivery of <br />
      unique bouquets. We have the best florists who carefully select each look, our <br />
      studio cooperates directly with farms for growing different flowers, so we always<br />
      have fresh flowers, which are collected by our florists in exquisite bouquets. We <br />
      have a collection of fresh bouquets, collections of dried bouquets, house plants, as<br />
      well as fragrant candles from luxury brands to create the perfect atmosphere.<br />
      Make someone's day amazing by sending flowers, plants and gifts the same or<br />
      next day. Ordering flowers online has never been easier.
    </h4>
    <img src={button} alt="Learn More" className="btn" />
  </div>
</div>
<div className="why">
  <div className="why-left">
    <h1>Why Choose Us</h1>
  </div>
  <div className="why-right">
    <div className="stylish">
      <h2>Stylish bouquets by florists</h2>
      <h4>At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.</h4>
    </div>
    <div className="delivery">
      <h2>On-time Delivery</h2>
      <h4>Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.</h4>
    </div>
    <div className="safe">
      <h2>Safe Payment</h2>
      <h4>You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.</h4>
    </div>
    <div className="sub">
      <h2>Subscription By Your Needs</h2>
      <h4>With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs.</h4>
    </div>
  </div>
</div>
<div className="main-container">
<div className="contact-us">
    <img src={rightColum} alt="colum" className="colum" />
  </div>
  <div className="left-section">
    <div className="cnt">
      <h1>To Contact Us</h1>
      <h4>We will call you back</h4>
      <input type="text" placeholder="+380 XXX XXX XXX" className="input-txt" />
      <button className="button">Book a Call</button>
    </div>
    <div class="bottom-info">
  <div class="phone">
    <h1>Phone</h1>
    <div class="phone-content">
      <h4><img src={call} alt="call" class="call" /> +380980099777</h4>
      <h4><img src={call} alt="call" class="call" /> +380980099111</h4>
    </div>
  </div>
  <div class="address">
    <h1>Address</h1>
    <div class="address-content">
      <h4>Opening hours: 8 to 11 p.m.</h4>
      <div class="address-line">
        <img src={pin} alt="location" class="location" />
        <h4>15/4 Khreshchatyk Street, Kyiv</h4>
      </div>
    </div>
  </div>
</div> 
</div>
</div>
<div className="our-service">
  <div className="service-left">
    <h1>Our Service</h1>
    <img src={service} alt="service" className="ourService" />
  </div>
  <div className="divider"></div>
  <div className="sub">
    <h4>Service</h4>
    <h1>Flower Subscriptions</h1>
    <h5>
      Experience the convenience and savings of <br />
      regular flower deliveries with our flexible<br />
      subscription service – up to 30% more <br />
      profitable than one-time purchases.
    </h5>
    <img src={imgBtn} alt="btn" className="btn2" />
  </div>
</div>
<div className="deco-container">
  <img src={deco} alt="Decorative Element" className="deco-img" />
</div>
<div className="google-container">
  <span className="arrow arrow-left">&lt;</span>
  <div className="google">
    <img src={google} alt="Google Logo" className="social" />
    <h5>Reviews</h5>
    <h1>Our Clients Say</h1>
    <h4>
      “Ordered flowers online and they were the best bouquet! Impressed everyone
      around. Highly recommend this flower shop!”
    </h4>
    <button className="rvw-btn">Read Reviews</button>
  </div>
  <span className="arrow arrow-right">&gt;</span>
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
export default Home;

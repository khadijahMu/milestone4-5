import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Category from './Category';
import ProductPage from './Product';
import About from './about'; 
import Checkout from './checkout';
import SignIn from './SignIn';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}
export default App;

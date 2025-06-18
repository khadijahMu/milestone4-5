import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Category from './Category';
import ProductPage from './Product';
import About from './about'; 
import Checkout from './checkout';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}
export default App;

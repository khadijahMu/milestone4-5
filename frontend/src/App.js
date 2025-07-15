import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Category from './Category';
import ProductPage from './Product';
import About from './about'; 
import Checkout from './checkout';
import SignIn from './SignIn';
import Success from './Success';
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
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}
export default App;

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "./pages/Product";
import Finance from "./pages/Finance";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>My Simple Website</h1>
        <nav>
          <Link to="/Product" className="nav-btn">Product</Link>
          <Link to="/Finance" className="nav-btn">Finance</Link>
          <Link to="/AboutUs" className="nav-btn">About Us</Link>
          <Link to="/ContactUs" className="nav-btn">Contact Us</Link>
        </nav>
        <Routes>
          <Route path="/Product" element={<Product />} />
          <Route path="/Finance" element={<Finance />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/" element={<Product />} /> {/* Default page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Product from './components/Product';
import FinanceCalculator from './components/Finance';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  const [activeTab, setActiveTab] = useState('Product');

  return (
    <div className="container">
      <h1>My Simple Website</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="tab-content">
        {activeTab === 'Product' && <Product />}
        {activeTab === 'Finance' && <Finance />}
        {activeTab === 'About Us' && <AboutUs />}
        {activeTab === 'Contact Us' && <ContactUs />}
      </div>
    </div>
  );
}

export default App;
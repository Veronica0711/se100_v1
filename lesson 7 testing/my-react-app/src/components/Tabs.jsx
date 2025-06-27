import React from 'react';

const tabNames = ['Product', 'Finance', 'About Us', 'Contact Us'];

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      {tabNames.map(tab => (
        <button
          key={tab}
          className={activeTab === tab ? 'active' : ''}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
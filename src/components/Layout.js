import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="App">
      <div className="header">
        <h1>লেনদেন হিসাব</h1>
      </div>

      <div className="main">
        <div className="container">{children}</div>
      </div>

      <div className="footer">&copy; 2024 Learn Redux Tookit</div>
    </div>
  );
};

export default Layout;

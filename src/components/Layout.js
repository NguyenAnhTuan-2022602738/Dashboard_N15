// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'; // Create a CSS file for styling

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="logo">Product</div>
        <nav className="menu">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/products">Products</Link>
          <Link to="/reports">Reports</Link>
          <Link to="/settings">Settings</Link>
        </nav>
      </aside>
      <div className="main">
        <header className="topnav">
          <div className="search-bar">
            <input type="text" placeholder="Search ..." />
            <select>
              <option>Name</option>
            </select>
          </div>
          <div className="user-options">
            <i className="notification-icon"></i>
            <i className="message-icon"></i>
            <div className="user-profile">Username</div>
          </div>
        </header>
        <main className="content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

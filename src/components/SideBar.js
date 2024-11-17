import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/SideBar.css'; // Đảm bảo bạn đã tạo file Sidebar.css

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List>
        <ListItem button component={Link} to="/admin/dashboard" className="sidebar-item">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/admin/car_items" className="sidebar-item">
          <ListItemText primary="Quản lý xe" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;

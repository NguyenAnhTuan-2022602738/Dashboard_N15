// src/components/Sidebar.js
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <List>
      <ListItem button component={Link} to="/admin/dashboard">
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/admin/car_items">
        <ListItemText primary="Quản lý xe" />
      </ListItem>
    </List>
  );
};

export default Sidebar;
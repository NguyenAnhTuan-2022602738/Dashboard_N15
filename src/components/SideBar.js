import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/SideBar.css'; // Đảm bảo bạn đã tạo file Sidebar.css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCar} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List>
        <ListItem button component={Link} to="/admin/dashboard" className="sidebar-item">
            <ListItemIcon>
              <FontAwesomeIcon icon={faHouse} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/admin/car_items" className="sidebar-item">
            <ListItemIcon>
              <FontAwesomeIcon icon={faCar} />
            </ListItemIcon>
            <ListItemText primary="Quản lý xe" />
          </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;

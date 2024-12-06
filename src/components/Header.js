import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Import icon tài khoản từ Font Awesome
import { useNavigate } from 'react-router-dom'; // Hook dùng để điều hướng
import "../styles/Header.css";

const Header = () => {
  const navigate = useNavigate(); // Hook điều hướng

  const handleAccountClick = () => {
    navigate('/user-profile'); // Điều hướng đến trang thông tin người dùng
  };

  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <IconButton color="inherit" onClick={handleAccountClick}>
            <FontAwesomeIcon icon={faUserCircle} />{" "}
            {/* Sử dụng icon Font Awesome */}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

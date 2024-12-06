import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/SideBar';
import { Box } from '@mui/material';
import "../styles/Header.css";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default DefaultLayout;

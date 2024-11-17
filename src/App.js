// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CarManagement from './pages/CarManagement';
import ForgotPassword from './pages/ForgotPassword';
import { Box } from '@mui/material';
import CreateCar from './pages/Create';
import EditCar from './pages/Edit';
import Deleted from './pages/Deleted';

const App = () => {
  return (
    <Router>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/car_items" element={<CarManagement />} />
            <Route path="/admin/car_items/create" element={<CreateCar />} />
            <Route path="/admin/car_items/edit/:id" element={<EditCar />} />
            <Route path="/admin/car_items/deleted" element={<Deleted />} />
            <Route path="/" element={<Navigate to="/admin/dashboard" />} />  {/* Đặt trang mặc định */}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
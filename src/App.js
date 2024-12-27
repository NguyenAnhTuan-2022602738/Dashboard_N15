import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DefaultLayout from '../src/components/DefaultLayout'; // Layout cho trang chính
import AuthLayout from '../src/components/AuthLayout';       // Layout cho trang auth
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CarManagement from './pages/CarManagement';
import ForgotPassword from './pages/ForgotPassword';
import CreateCar from './pages/Create';
import EditCar from './pages/Edit';
import Deleted from './pages/Deleted';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth Layout */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/password/forgot"
          element={
            <AuthLayout>
              <ForgotPassword />
            </AuthLayout>
          }
        />
        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />

        {/* Default Layout */}
        <Route
          path="/admin/dashboard"
          element={
            < >
              <DefaultLayout>
                <Dashboard />
              </DefaultLayout>
            </ >
          }
        />
        <Route
          path="/admin/car_items"
          element={
            < >
              <DefaultLayout>
                <CarManagement />
              </DefaultLayout>
            </ >
          }
        />
        <Route
          path="/admin/car_items/create"
          element={
            < >
              <DefaultLayout>
                <CreateCar />
              </DefaultLayout>
            </ >
          }
        />
        <Route
          path="/admin/car_items/edit/:id"
          element={
            < >
              <DefaultLayout>
                <EditCar />
              </DefaultLayout>
            </ >
          }
        />
        <Route
          path="/admin/car_items/deleted"
          element={
            < >
              <DefaultLayout>
                <Deleted />
              </DefaultLayout>
            </ >
          }
        />
        <Route path="/user-profile" element={<UserProfile />} /> 

        {/* Redirect default */}
        <Route path="/" element={<Navigate to="/admin/dashboard" />} />
      </Routes>
    </Router>
  );
};

export default App;

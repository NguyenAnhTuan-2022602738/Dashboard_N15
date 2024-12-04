import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Lấy token từ localStorage

  // Kiểm tra nếu không có token hoặc token không hợp lệ
  if (!token || token !== "OuIn9u3fpnHLpahbcD4M8u4uyN61u1") {
    // Nếu không có token hợp lệ, chuyển hướng đến trang login
    return <Navigate to="/login" />;
  }

  // Nếu có token hợp lệ, tiếp tục hiển thị nội dung
  return children;
};

export default ProtectedRoute;

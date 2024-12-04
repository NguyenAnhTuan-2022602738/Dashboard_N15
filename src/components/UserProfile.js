import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      setUser(JSON.parse(userData)); // Lấy thông tin người dùng từ localStorage và lưu vào state
    }
  }, []); // Chạy chỉ một lần khi component mount

  if (!user) {
    return <div>Không có thông tin người dùng.</div>;
  }

  return (
    <div>
      <h2>Thông tin người dùng</h2>
      <p>Họ và tên: {user.fullname}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';
import '../styles/register.css';

const Register = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({ fullname, email, password });

      // Kiểm tra phản hồi từ API
      if (response.code === 500) {
        setError(response.message || 'Đăng ký thất bại');
      } else {
        alert('Đăng ký thành công!');
        navigate('/login'); // Chuyển hướng sang trang đăng nhập
      }
    } catch (error) {
      setError(error.message || 'Đăng ký thất bại');
      console.error('Đăng ký thất bại', error);
    }
  };

  return (
    <div className="container">
      <div className="register-container">
        <h2>Đăng ký</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Họ và tên"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Đăng ký</button>
        </form>
        <p>
          Đã có tài khoản?{' '}
          <span
            className="login-link"
            onClick={() => navigate('/login')}
            style={{ color: 'blue', cursor: 'pointer' }}
          >
            Đăng nhập
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;

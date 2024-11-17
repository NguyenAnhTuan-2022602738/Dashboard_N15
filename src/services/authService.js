import axios from 'axios';

const API_URL = 'https://btl-ptpmhdv-nhom-15.vercel.app/api/users';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const loginUser = async (loginData) => {
  const response = await axios.post(`${API_URL}/login`, loginData);
  return response.data;
};

export const forgotPassword = async (email) => {
  const response = await axios.post(`${API_URL}/password/forgot`, { email });
  return response.data;
};

// New API call for sending OTP
export const forgotPasswordOtp = async (email, otp) => {
  const response = await axios.post(`${API_URL}/password/otp`, { email, otp });
  return response.data;
};

// New API call for resetting password
export const forgotPasswordReset = async (email, otp, newPassword) => {
  const response = await axios.post(`${API_URL}/password/reset`, { email, otp, newPassword });
  return response.data;
};
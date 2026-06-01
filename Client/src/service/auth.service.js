import api from "@/api/axios";

class Auth {
  baseURL = "/users";
  register = async (formData) => {
    const response = await api.post(`${this.baseURL}/register`, formData);
    return response;
  };
  login = async (formData) => {
    const response = await api.post(`${this.baseURL}/login`, formData);
    return response;
  };
  logout = async () => {
    const response = await api.post(`${this.baseURL}/logout`);
    return response;
  };
  googleOAuth = async (formData) => {
    const response = await api.post(`${this.baseURL}/google-login`, formData);
    return response?.data;
  };
  sendOtp = async (formData) => {
    const response = await api.post(`${this.baseURL}/send-otp`, formData);
    return response;
  };
  verifyOtp = async (formData) => {
    const response = await api.post(`${this.baseURL}/verify-otp`, formData);
    return response;
  };
}

export const auth = new Auth();

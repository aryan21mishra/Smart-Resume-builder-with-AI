import api from "@/api/axios";
class Auth {
  baseURL = "/users";
  register = async (formData) => {
    const response = await api.post(`${this.baseURL}/register`, formData);
    return response?.data;
  };
  login = async (formData) => {
    const response = await api.post(`${this.baseURL}/login`, formData);
    return response?.data;
  };
  logout = async () => {
    const response = await api.post(`${this.baseURL}/logout`);
    return response?.data;
  };
  googleOAuth = async (formData) => {
    const response = await api.post(`${this.baseURL}/google-login`, formData);
    return response?.data;
  };
  sendOtp = async (formData) => {
    const response = await api.post(`${this.baseURL}/send-otp`, formData);
    return response?.data;
  };
  verifyOtp = async (formData) => {
    const response = await api.post(`${this.baseURL}/verify-otp`, formData);
    return response?.data;
  };
}
export const auth = new Auth();

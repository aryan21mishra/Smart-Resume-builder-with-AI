import api from "@/api/axios";
class User {
  constructor() {
    this.baseURL = "/users";
  }
  async getProfile() {
    const response = await api.get(`${this.baseURL}/me`);
    return response?.data;
  }
  async updateProfile(formData) {
    const response = await api.put(`${this.baseURL}/update-profile`, formData);
    return response?.data;
  }
  async updateAvatar(formData) {
    const response = await api.patch(`${this.baseURL}/update-avatar`, formData);
    return response?.data;
  }
  async changePassword(formData) {
    const response = await api.put(`${this.baseURL}/change-password`, formData);
    return response?.data;
  }
  async forgotPassword(formData) {
    const response = await api.post(
      `${this.baseURL}/forgot-password`,
      formData,
    );
    return response?.data;
  }
}
export const user = new User();

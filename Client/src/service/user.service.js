const { default: api } = require("@/api/axios");

class User {
  constructor() {
    this.baseURL = "/users";
  }
  async getProfile() {
    const response = await api.get(`${this.baseURL}/me`);
    return response;
  }
  async updateProfile(formData) {
    const response = await api.put(`${this.baseURL}/update-profile`, formData);
    return response;
  }
  async updateAvatar(formData) {
    const response = await api.put(`${this.baseURL}/update-avatar`, formData);
    return response;
  }
  async deleteAvatar() {
    const response = await api.delete(`${this.baseURL}/delete-avatar`);
    return response;
  }
  async changePassword(formData) {
    const response = await api.put(`${this.baseURL}/change-password`, formData);
    return response;
  }
  async forgotPassword(formData) {
    const response = await api.post(
      `${this.baseURL}/forgot-password`,
      formData,
    );
    return response;
  }
}

export default new User();

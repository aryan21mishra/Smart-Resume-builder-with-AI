import api from "@/api/axios";
class ResumeService {
  baseURL = "/resumes";
  createResume = async (data) => {
    const response = await api.post(`${this.baseURL}/`, data);
    return response;
  };
  getResumeById = async (id) => {
    const response = await api.get(`${this.baseURL}/${id}`);
    return response;
  };
  updateResumeById = async ({ id, data }) => {
    const response = await api.post(`${this.baseURL}/${id}`, data);
    return response;
  };
  deleteResumeById = async (id) => {
    const response = await api.post(`${this.baseURL}/${id}/delete`);
    return response;
  };
    duplicateResumeById = async (id) => {
      const response = await api.get(`${this.baseURL}/${id}/duplicate`);
      return response;
    };
  getAllResumes = async () => {
    const response = await api.get(`${this.baseURL}/all-resumes`);
    return response?.data;
  };
}
export const resumeService = new ResumeService();

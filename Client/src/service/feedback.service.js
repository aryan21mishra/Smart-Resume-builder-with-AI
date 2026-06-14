import api from "@/api/axios";
class FeedbackService {
  baseURL = "/feedback";
  analyzeResume = async ({ resumeId, file, jobDescription }) => {
    const formData = new FormData();
    if (file) {
      formData.append("resume", file);
      if (jobDescription) formData.append("jobDescription", jobDescription);
      const response = await api.post(`${this.baseURL}/analyze`, formData);
      return response?.data;
    } else {
      if (resumeId) formData.append("resumeId", resumeId);
      if (jobDescription) formData.append("jobDescription", jobDescription);
      const response = await api.post(`${this.baseURL}/analyze`, formData);
      return response?.data;
    }
  };
}
export const feedbackService = new FeedbackService();
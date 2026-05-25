import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // send cookies automatically
});


let isRefreshing = false;
let refreshSubscribers = [];


const subscribeTokenRefresh = (callback) => {
  refreshSubscribers.push(callback);
};

const onRefreshed = () => {
  refreshSubscribers.forEach((callback) => callback());

  refreshSubscribers = [];
};

// REFRESH ACCESS TOKEN

const refreshAccessToken = async () => {
  try {
    await axios.post(
      "http://localhost:5000/api/auth/refresh-token",
      {},
      {
        withCredentials: true,
      },
    );

    return true;
  } catch (error) {
    return false;
  }
};

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    // Access token expired
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // If refresh already running
      if (isRefreshing) {
        return new Promise((resolve) => {
          subscribeTokenRefresh(() => {
            resolve(api(originalRequest));
          });
        });
      }

      isRefreshing = true;

      const refreshSuccess = await refreshAccessToken();

      isRefreshing = false;

      if (refreshSuccess) {
        onRefreshed();

        return api(originalRequest);
      }

      // Logout user if refresh failed
      window.location.href = "/login";

      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);

export default api;

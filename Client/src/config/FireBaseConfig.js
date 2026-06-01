
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FireBaseApiKey,
  authDomain: import.meta.env.VITE_FireBaseAuthDomain,
  projectId: import.meta.env.VITE_FireBaseProjectId,
  storageBucket: import.meta.env.VITE_FireBaseStorageBucket,
  messagingSenderId: import.meta.env.VITE_FireBaseMessagingSenderId,
  appId: import.meta.env.VITE_FireBaseAppId,
  measurementId: import.meta.env.VITE_FireBaseMeasurementId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

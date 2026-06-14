import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: null,
  title: "",
  template: "",
  personalInformation: {},
  experiences: [],
  educations: [],
  skills: [],
  projects: [],
  certifications: [],
  languages: [],
};
const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updateForm: (state, action) => {
      const { field, data } = action.payload;
      if (field === "id") {
        state.id = data;
      } else if (field === "title") {
        state.title = data;
      } else if (field === "template") {
        state.template = data;
      } else if (field === "personalInformation") {
        state.personalInformation = data;
      } else if (field === "experiences") {
        state.experiences.push(data);
      } else if (field === "education" || field === "educations") {
        state.educations = data;
      } else if (field === "projects") {
        state.projects.push(data);
      } else if (field === "skills") {
        state.skills = [data];
      } else if (field === "certifications") {
        state.certifications.push(data);
      } else if (field === "others") {
        state.others.push(data);
      }
    },
    addExperience: (state, action) => {
      state.experiences.push(action.payload);
    },
    updateExperience: (state, action) => {
      const { index, data } = action.payload;
      state.experiences[index] = data;
    },
    deleteExperience: (state, action) => {
      state.experiences.splice(action.payload, 1);
    },
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    updateProject: (state, action) => {
      const { index, data } = action.payload;
      state.projects[index] = data;
    },
    deleteProject: (state, action) => {
      state.projects.splice(action.payload, 1);
    },
    addCertification: (state, action) => {
      state.certifications.push(action.payload);
    },
    updateCertification: (state, action) => {
      const { index, data } = action.payload;
      state.certifications[index] = data;
    },
    deleteCertification: (state, action) => {
      state.certifications.splice(action.payload, 1);
    },
    setResume: (state, action) => {
      return {
        ...initialState,
        ...action.payload,
      };
    },
    removeResumes: (state) => {
      return initialState;
    },
  },
});
export const {
  updateForm,
  addExperience,
  updateExperience,
  deleteExperience,
  addProject,
  updateProject,
  deleteProject,
  addCertification,
  updateCertification,
  deleteCertification,
  setResume,
  removeResumes,
} = resumeSlice.actions;
export const selectResumes = (state) => state.resume;
export default resumeSlice.reducer;

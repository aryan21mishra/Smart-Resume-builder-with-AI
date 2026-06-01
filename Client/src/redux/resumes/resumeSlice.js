import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  template: "",
  title: "",
  personalInformation: {},
  experiences: [],
  educations: [],
  projects: [],
  skills: [],
  certifications: [],
  others: [],
};
const resumeSlice = createSlice({
  name: "resumes",
  initialState,
  reducers: {
    updateForm: (state, action) => {
      const { field, data } = action.payload;
      if(field === "title"){
        state.title = data;
      }
      else if(field === "template"){
        state.template = data;
      }
      else if(field === "personalInformation"){
        state.personalInformation = data;
      }
      else if(field === "experiences"){
        state.experiences.push(data);
      }
      else if(field === "educations"){
        state.educations.push(data);
      }
      else if(field === "projects"){
        state.projects.push(data);
      }
      else if(field === "skills"){
        state.skills.push(data);
      }
      else if(field === "certifications"){
        state.certifications.push(data);
      }
      else if(field === "others"){
        state.others.push(data);
      }
    },
    removeResumes: (state) => {
      state = initialState;
    },
  },
});

export const { updateForm, removeResumes } = resumeSlice.actions;
export const selectResumes = (state) => state.resumes;

export default resumeSlice.reducer;

import { Home } from "lucide-react";
import { lazy } from "react";

import AuthLayout from "./auth/layout.jsx";
export const LoginPage = lazy(() => import("../pages/auth/login/page.jsx"));
export const RegisterPage = lazy(() => import("../pages/auth/register/page"));
export const HomePage = lazy(() => import("../pages/home/HomePage"));
export const DashBoardLayout = lazy(
  () => import("../pages/dashboard/layout.jsx"),
);
export const AiFeedback = lazy(
  () => import("../pages/dashboard/ai-feedback/AiFeedbackPage.jsx"),
);
export const KeywordsPage = lazy(
  () => import("../pages/dashboard/keywords/KeywordsPage.jsx"),
);
export const MyResumesPage = lazy(
  () => import("../pages/dashboard/my-resumes/MyResumesPage.jsx"),
);
export const ProfilePage = lazy(
  () => import("../pages/dashboard/profile/ProfilePage.jsx"),
);
export const RewritePage = lazy(
  () => import("../pages/dashboard/rewrite/RewritePage.jsx"),
);
export const SettingsPages = lazy(
  () => import("../pages/dashboard/settings/SettingsPage.jsx"),
);
export const TemplatesPage = lazy(
  () => import("../pages/dashboard/templates/TemplatesPage.jsx"),
);
export const DashBoardMainPage = lazy(
  () => import("../pages/dashboard/page.jsx"),
);

import DashboardMainPage from "../pages/dashboard/page.jsx";
import BuildResumePage from "./dashboard/my-resumes/build-resume/BuildResumePage";
import PersonalInformationPage from "./dashboard/my-resumes/build-resume/personal-information/PersonalInformationPage";
import ExperiencePage from "./dashboard/my-resumes/build-resume/experience/ExperiencePage.jsx";
import EducationPage from "./dashboard/my-resumes/build-resume/education/EducationPage.jsx";
import SkillsPage from "./dashboard/my-resumes/build-resume/skills/SkillPage.jsx";
import CertificationsPage from "./dashboard/my-resumes/build-resume/certifications/CertificationPage.jsx";
import ProjectsPage from "./dashboard/my-resumes/build-resume/projects/ProjectPage.jsx";
import AwardsAndHonorsPage from "./dashboard/my-resumes/build-resume/awards-and-honors/AwardsAndHonorsPage";

export {
  AuthLayout,
  DashboardMainPage,
  BuildResumePage,
  PersonalInformationPage,
  ExperiencePage,
  EducationPage,
  SkillsPage,
  CertificationsPage,
  ProjectsPage,
  AwardsAndHonorsPage,
};

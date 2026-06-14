import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/auth/authSlice";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  AuthLayout,
  AiFeedback,
  DashBoardLayout,
  KeywordsPage,
  MyResumesPage,
  ProfilePage,
  RewritePage,
  SettingsPages,
  TemplatesPage,
  DashboardMainPage,
  BuildResumePage,
  PersonalInformationPage,
  ExperiencePage,
  EducationPage,
  SkillsPage,
  CertificationsPage,
  ProjectsPage,
  AwardsAndHonorsPage,
} from "../pages/pagesImport";
import SingleResumePage from "@/pages/dashboard/my-resumes/SingleResumePage";

const ProtectedRoute = () => {
  const isAuthenticated = useSelector(selectAuth);
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="/" element={<HomePage />} />,
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashBoardLayout />}>
          <Route index element={<DashboardMainPage />} />
          <Route path="ai-feedback" element={<AiFeedback />} />
          <Route path="keywords" element={<KeywordsPage />} />
          <Route path="my-resumes">
            <Route index element={<MyResumesPage />} />
            <Route path="single-resume/:id" element={<SingleResumePage />} />
            <Route path="build-resume" element={<BuildResumePage />}>
              <Route
                path="personal-information"
                element={<PersonalInformationPage />}
              />
              <Route path="experience" element={<ExperiencePage />} />
              <Route path="education" element={<EducationPage />} />
              <Route path="skills" element={<SkillsPage />} />
              <Route path="certifications" element={<CertificationsPage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="awards-and-honors" element={<AwardsAndHonorsPage />} />
            </Route>
          </Route>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="rewrite" element={<RewritePage />} />
          <Route path="settings" element={<SettingsPages />} />
          <Route path="templates" element={<TemplatesPage />} />
        </Route>
      </Route>
    </Route>,
  ),
);

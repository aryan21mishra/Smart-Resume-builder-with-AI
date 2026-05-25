import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  Routes,
} from "react-router-dom";
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

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="/" element={<HomePage />} />,
      <Route path="/dashboard" element={<DashBoardLayout />}>
        <Route index element={<DashboardMainPage />} />
        <Route path="ai-feedback" element={<AiFeedback />} />
        <Route path="keywords" element={<KeywordsPage />} />
        <Route path="my-resumes">
          <Route index element={<MyResumesPage />} />
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
    </Route>,
  ),
);

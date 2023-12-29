import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage/AboutUsPage.jsx"));
const DonationPage = lazy(() =>
  import("./pages/DonationPage/DonationPage.jsx")
);
const MediaPage = lazy(() => import("./pages/MediaPage/MediaPage.jsx"));

const VolunteerRegistrationPage = lazy(() =>
  import("./pages/VolunteerRegistrationPage/VolunteerRegistrationPage.jsx")
);

const ContactUs = lazy(() => import("./pages/ContactUsPage/ContactUsPage.jsx"));
const ProjectReadMore1 = lazy(() =>
  import("./pages/ProjectReadMore/ProjectReadMore1.jsx")
);
const ProjectReadMore2 = lazy(() =>
  import("./pages/ProjectReadMore/ProjectReadMore2.jsx")
);

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="aboutus" element={<AboutUsPage />} />
      <Route path="donation" element={<DonationPage />} />
      <Route path="media" element={<MediaPage />} />
      <Route
        path="volunteerregistration"
        element={<VolunteerRegistrationPage />}
      />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="projectreadmore1" element={<ProjectReadMore1 />} />
      <Route path="projectreadmore2" element={<ProjectReadMore2 />} />

      <Route path="*" element={<>Not found</>} />
    </Routes>
  );
};

export default RoutesComponent;

import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage/AboutUsPage.jsx"));
const DonationPage = lazy(() =>
  import("./pages/DonationPage/DonationPage.jsx")
);
const MediaPage = lazy(() => import("./pages/MediaPage/MediaPage.jsx"));

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="aboutus" element={<AboutUsPage />} />
      <Route path="donation" element={<DonationPage />} />
      <Route path="media" element={<MediaPage />} />
      <Route path="*" element={<>Not found</>} />
    </Routes>
  );
};

export default RoutesComponent;

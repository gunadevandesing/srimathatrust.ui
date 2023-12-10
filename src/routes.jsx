import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage.jsx"));

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="aboutus" element={<AboutUsPage />} />
      <Route path="*" element={<>Not found</>} />
    </Routes>
  );
};

export default RoutesComponent;

import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage/AboutUsPage.jsx"));

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

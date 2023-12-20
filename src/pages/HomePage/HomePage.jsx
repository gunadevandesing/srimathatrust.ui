import KnowAboutUSSection from "../../components/HomePageComponents/KnowAboutUsSection";
import VideoSection from "../../components/HomePageComponents/VideoSection";
import WhatWeDoSection from "../../components/HomePageComponents/WhatWeDoSection";
import "./homepage.scss";

const HomePage = () => {
  return (
    <>
      <VideoSection />
      <KnowAboutUSSection />
      <WhatWeDoSection />
    </>
  );
};

export default HomePage;

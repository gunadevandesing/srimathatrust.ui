import KnowAboutUSSection from "../../components/HomePageComponents/KnowAboutUsSection";
import VideoSection from "../../components/HomePageComponents/VideoSection";
import WhatWeDoSection from "../../components/HomePageComponents/WhatWeDoSection";
import ContributionSection from "../../components/commonComponents/ContributionSectionComponents/ContributionSection";
import "./homepage.scss";

const HomePage = () => {
  return (
    <>
      <VideoSection />
      <KnowAboutUSSection />
      <WhatWeDoSection />
      <ContributionSection />
    </>
  );
};

export default HomePage;

import KnowAboutUSSection from "../../components/HomePageComponents/KnowAboutUsSection";
import VideoSection from "../../components/HomePageComponents/VideoSection";
import WhatWeDoSection from "../../components/HomePageComponents/WhatWeDoSection";
import ContributionSection from "../../components/commonComponents/ContributionSectionComponents/ContributionSection";
import EventsSection from "../../components/commonComponents/EventsSectionComponents/EventsSection";
import "./homepage.scss";

const HomePage = () => {
  return (
    <>
      <VideoSection />
      <KnowAboutUSSection />
      <WhatWeDoSection />
      <ContributionSection />
      <EventsSection />
    </>
  );
};

export default HomePage;

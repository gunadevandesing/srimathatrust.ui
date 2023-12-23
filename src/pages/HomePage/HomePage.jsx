import KnowAboutUSSection from "../../components/HomePageComponents/KnowAboutUsSection";
import ProjectsSection from "../../components/HomePageComponents/ProjectsSection";
import VideoSection from "../../components/HomePageComponents/VideoSection";
import WhatWeDoSection from "../../components/HomePageComponents/WhatWeDoSection";
import ContributionSection from "../../components/commonComponents/ContributionSectionComponents/ContributionSection";
import EventsSection from "../../components/commonComponents/EventsSectionComponents/EventsSection";
import FooterComponent from "../../components/commonComponents/FooterComponents/FooterComponent";
import "./homepage.scss";

const HomePage = () => {
  return (
    <>
      <VideoSection />
      <KnowAboutUSSection />
      <WhatWeDoSection />
      <ProjectsSection />
      <ContributionSection />
      <EventsSection />
      <FooterComponent />
    </>
  );
};

export default HomePage;

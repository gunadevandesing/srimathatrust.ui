import KnowAboutUSSection from "../../components/AboutUsPageComponents/KnowAboutUsSection";
import OurVisionSection from "../../components/AboutUsPageComponents/OurVisionSection";
import ContributionSection from "../../components/commonComponents/ContributionSectionComponents/ContributionSection";
import EventsSection from "../../components/commonComponents/EventsSectionComponents/EventsSection";
import FooterComponent from "../../components/commonComponents/FooterComponents/FooterComponent";
import AwardsRecognitionsSection from "../../components/AboutUsPageComponents/AwardsRecognitionsSection";
import Journey from "../../components/AboutUsPageComponents/Journey";
import OurTeam from "../../components/AboutUsPageComponents/OurTeam";

const AboutUsPage = () => {
  return (
    <>
      <KnowAboutUSSection />
      <OurVisionSection />
      <AwardsRecognitionsSection/>
      <Journey/>
      <OurTeam/>
      <ContributionSection />
      <EventsSection />
      <FooterComponent />
    </>
  );
};

export default AboutUsPage;

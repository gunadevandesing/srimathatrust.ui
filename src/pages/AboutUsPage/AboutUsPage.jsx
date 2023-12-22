import KnowAboutUSSection from "../../components/AboutUsPageComponents/KnowAboutUsSection";
import OurVisionSection from "../../components/AboutUsPageComponents/OurVisionSection";
import ContributionSection from "../../components/commonComponents/ContributionSectionComponents/ContributionSection";
import EventsSection from "../../components/commonComponents/EventsSectionComponents/EventsSection";
import FooterComponent from "../../components/commonComponents/FooterComponents/FooterComponent";

const AboutUsPage = () => {
  return (
    <>
      <KnowAboutUSSection />
      <OurVisionSection />
      <ContributionSection />
      <EventsSection />
      <FooterComponent />
    </>
  );
};

export default AboutUsPage;

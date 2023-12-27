import ContributeSection from "../../components/DonationPageComponents/ContributeSection";
import DonateNowComponent from "../../components/DonationPageComponents/DonateNowComponent";
import DonationPaymentDetails from "../../components/DonationPageComponents/DonationPaymentDetailsSection";
import FooterComponent from "../../components/commonComponents/FooterComponents/FooterComponent";

const DonationPage = () => {
  return (
    <>
      <DonateNowComponent />
      <ContributeSection />
      <DonationPaymentDetails />
      <FooterComponent />
    </>
  );
};

export default DonationPage;

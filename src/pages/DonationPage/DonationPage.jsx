import { useState } from "react";
import ContributeSection from "../../components/DonationPageComponents/ContributeSection";
import DonateNowComponent from "../../components/DonationPageComponents/DonateNowComponent";
import DonationPaymentDetails from "../../components/DonationPageComponents/DonationPaymentDetailsSection";
import DonationSuccessComponent from "../../components/DonationPageComponents/DonationSuccessComponent";
import FooterComponent from "../../components/commonComponents/FooterComponents/FooterComponent";

const DonationPage = () => {
  const [showThanks, setShowThanks] = useState(false);

  return (
    <>
      {showThanks && <DonationSuccessComponent />}
      {!showThanks && (
        <>
          <DonateNowComponent />
          <ContributeSection />
          <DonationPaymentDetails setShowThanks={setShowThanks} />
          <FooterComponent />
        </>
      )}
    </>
  );
};

export default DonationPage;

import VolunteerRegistrationForm from "../../components/VolunteerRegistrationPageComponents/VolunterRegistrationForm";
import FooterComponent from "../../components/commonComponents/FooterComponents/FooterComponent";
import "./volunteerRegistrationPage.scss";

const VolunteerRegistrationPage = () => {
  return (
    <>
      <div className="registration-container">
        <div className="registration-content">
          <div className="registration-title">
            <span className="horizontal-line"></span>
            VOLUNTEER REGISTRATION
          </div>
          <p className="registration-textcontent">
            A wonderful opportunity to be a changemaker. Help be part of the
            solutions to India&apos;s gravest problems . Smile Foundation has
            been driving transformation for over a decade in India. You can be
            part of their journey . We need all types of people and all levels
            of support . Do fill this interest form and we will revert to you
            with some options suited to your motivations and skills .
          </p>
        </div>
      </div>

      <VolunteerRegistrationForm />
      <FooterComponent />
    </>
  );
};

export default VolunteerRegistrationPage;

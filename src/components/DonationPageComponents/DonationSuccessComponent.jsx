import "./donationSuccessComponent.scss";

import ConfettiIcon from "../../assets/svg-icons/confetti-party-icon.svg";
import NamasteIcon from "../../assets/svg-icons/namaste-icon.svg";

import FacebookIcon from "../../assets/svg-icons/facebook-icon.svg";
import TwitterIcon from "../../assets/svg-icons/twitter-icon.svg";
import EmailIcon from "../../assets/svg-icons/email-icon.svg";

const DonationSuccessComponent = () => {
  return (
    <div className="donation-success-container">
      <div className="donation-success-content">
        <img src={ConfettiIcon} alt="confetti" className="confetti-icon" />
        <img src={NamasteIcon} alt="thanks" className="namaste-icon mt-5" />
        <div className="donation-success-header">Donation Successful!</div>
        <div className="donation-confetti-text">
          <img
            src={ConfettiIcon}
            alt="confetti"
            className="confetti-icon flipY"
          />
          <p className="donation-success-text">
            Your donation of <span className="donation-amount">₹10000.00</span>{" "}
            has been processed.
            <br />
            100% of your money will fund for cancer people in need.
          </p>
          <img src={ConfettiIcon} alt="confetti" className="confetti-icon" />
        </div>
        <div className="share-with-others">
          <p>Share with Friends</p>
          <div className="share-icons">
            <img src={FacebookIcon} alt="facebook" />
            <img src={TwitterIcon} alt="twitter" />
            <img src={EmailIcon} alt="email" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationSuccessComponent;

import ButtonComponent from "../commonComponents/ButtonComponent";
import "./donateNowComponent.scss";

const DonateNowComponent = () => {
  return (
    <div className="donate-container">
      <div className="donate-content">
        <div className="donate-leftsection">
          <div className="donate-title">
            <span className="horizontal-line"></span>
            DONATE
          </div>
          <div className="donate-textcontent">
            <div className="donate-header">
              Making a donation for our cancer patient.
            </div>
            <div className="donate-paragraph">
              When you donate, you’re supporting effective care to children with
              special needs—an investment in the leaders of tomorrow.
            </div>
            <ButtonComponent
              customClassName="donate-learnmore"
              buttonType="primary"
              buttonText="Donate now"
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="donate-video"></div>
      </div>
    </div>
  );
};

export default DonateNowComponent;

import "./contributionSection.scss";
import ButtonComponent from "../ButtonComponent";

const ContributionSection = () => {
  return (
    <div className="contribution-container">
      <div className="contribution-content">
        <h2>
          You can contribute to provide a place for cancer patient with special
          needs!
        </h2>
        <div className="button-section">
          <ButtonComponent
            buttonType="primary"
            buttonText="Join as a volunteer"
            onClick={() => {}}
          />
          <ButtonComponent
            buttonType="secondary"
            buttonText="Donate"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default ContributionSection;

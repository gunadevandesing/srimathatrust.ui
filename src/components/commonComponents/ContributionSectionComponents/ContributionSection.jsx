import "./contributionSection.scss";
import { Link } from "react-router-dom";

const ContributionSection = () => {
  return (
    <div className="contribution-container">
      <div className="contribution-content">
        <h2>
          You can contribute to provide a place for cancer patient with special
          needs!
        </h2>
        <div className="button-section">
          <Link className="volunteer-button" to="/volunteerregistration">
            Join as a volunteer
          </Link>
          <Link className="volunteer-button donate" to="/donation">
            Donate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContributionSection;

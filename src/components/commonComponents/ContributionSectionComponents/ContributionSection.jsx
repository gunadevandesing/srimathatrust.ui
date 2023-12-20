import "./contributionSection.scss";
const ContributionSection = () => {
  return (
    <div className="contribution-container">
      <div className="contribution-content">
        <h2>
          You can contribute to provide a place for cancer patient with special
          needs!
        </h2>
        <div className="button-section">
          <button className="yellow-button" onClick={() => {}}>
            Join as a volunteer
          </button>
          <button className="white-button" onClick={() => {}}>
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContributionSection;

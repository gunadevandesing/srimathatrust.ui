import "./projectsCardComponent.scss";

import PropTypes from "prop-types";

const ProjectsCard = (props) => {
  const { cardItem } = props;

  return (
    <div className={`projects-card project${cardItem.id}`}>
      <div className="card-text-content">
        <h3 className="card-header">{cardItem.header}</h3>
        <p className="card-paragraph">{cardItem.paragraph}</p>
        <div className="button-section">
          <button onClick={() => {}}>Learn more</button>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

ProjectsCard.propTypes = {
  cardItem: PropTypes.object.isRequired,
};

export default ProjectsCard;

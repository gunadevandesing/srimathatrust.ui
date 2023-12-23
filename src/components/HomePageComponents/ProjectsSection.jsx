import "./projectsSection.scss";

const projectCards = [
  {
    id: 1,
    header: "News Headline comes here",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    id: 2,
    header: "News Headline comes here",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    id: 3,
    header: "News Headline comes here",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
];

const ProjectsSection = () => {
  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="projects-title">
          <span className="horizontal-line"></span>
          PROJECTS WE HAVE DONE
        </div>
        <div className="projects-header">
          We are creating a place where cancer patients can thrive
        </div>
        <div className="projects-cardlist">
          {projectCards.map((cardItem) => (
            <div
              className={`projects-card project${cardItem.id}`}
              key={cardItem.id}
            >
              <div className="card-text-content">
                <h3 className="card-header">{cardItem.header}</h3>
                <p className="card-paragraph">{cardItem.paragraph}</p>
                <div className="button-section">
                  <button onClick={() => {}}>Learn more</button>
                </div>
              </div>
              <div className="overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;

import ProjectsCard from "../commonComponents/ProjectsCardComponent";
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

const ProjectsSection = (props) => {
  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="projects-title">
          <span className="horizontal-line"></span>
          {props.title}
        </div>
        <div className="projects-header">
          {props.header}
        </div>
        <div className="projects-cardlist">
          {projectCards.map((cardItem) => (
            <ProjectsCard cardItem={cardItem} key={cardItem.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;

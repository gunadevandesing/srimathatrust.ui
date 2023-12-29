import ProjectsSection from "../../components/HomePageComponents/ProjectsSection";
import ProjectReadMore2_Message from "../../components/ProjectReadMoreComponents/ProjectReadMore2_Message";
import FooterComponent from "../../components/commonComponents/FooterComponents/FooterComponent";

const ProjectReadMore1 = () => {
  return (
    <>
      <ProjectReadMore2_Message />
      <ProjectsSection
        title="PROJECTS WE HAVE DONE"
        header="We are creating a place where cancer patients can thrive"
      />
      <FooterComponent />
    </>
  );
};

export default ProjectReadMore1;

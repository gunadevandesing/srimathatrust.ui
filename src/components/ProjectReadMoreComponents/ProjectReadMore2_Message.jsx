import "./projectReadMore2_Message.scss";
import seerMesage from "../../assets/images/seer-message.jpg";
import seerAppreciation from "../../assets/images/seer-appreciation.jpg";

const ProjectReadMore2_Message = () => {
  return (
    <>
      <div className="readMoreMessage-container">
        <div className="readMoreMessage-content">
          <div className="readMoreMessage-title">
            <span className="horizontal-line"></span>
            KANCHI SEER MESSAGE
          </div>
          <div className="readMoreMessage-textcontent">
            <div className="readMoreMessage-header">Kanchi Seer Message</div>
          </div>
          <div className="image-container mt-5">
            <img src={seerMesage} alt="message" />
          </div>
        </div>
      </div>

      <div className="image-container">
        <img src={seerAppreciation} alt="appreciation" />
      </div>
    </>
  );
};

export default ProjectReadMore2_Message;

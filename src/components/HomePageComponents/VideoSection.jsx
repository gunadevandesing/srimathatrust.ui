import "./videoSection.scss";
import PlayIcon from "../../assets/svg-icons/play-icon.svg";

const VideoSection = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <div className="video-header">
          Inclusive care for cancer patients with special needs
        </div>
        <div className="button-section">
          <button className="white-button" onClick={() => {}}>
            What we do
          </button>
          <div className="playvideo-button">
            <img src={PlayIcon} alt="Play" />
            Play Video
          </div>
        </div>
        <div className="bottom-textsection">
          <span className="text">230 people under our care</span>
          <span className="horizontal-line"></span>
          <span className="text">58 donations collected</span>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;

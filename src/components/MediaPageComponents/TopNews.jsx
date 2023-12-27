import ButtonComponent from "../commonComponents/ButtonComponent";
import "./TopNews.scss";
import Media1 from "../../assets/images/Media1.png";
import Media2 from "../../assets/images/Media2.png";
import Media3 from "../../assets/images/Media3.png";

const TopNews = () => {
  return (
    <div className="media-container">
      <div className="topnews-container">
        <div className="topnews-content">
          <div className="topnews-title">
            <span className="horizontal-line"></span>
            TOP NEWS
          </div>
          <div className="topnews-textcontent">
            <div className="topnews-header">
              Some Heading
              <br />
              Some Text
            </div>
            <img src={Media1} />
          </div>
        </div>
      </div>
      <img src={Media2} className="media-2" />
      <img src={Media3} className="media-3" />
    </div>
  );
};

export default TopNews;

import "./AwardsRecognitionsSection.scss";
import Award1 from "../../assets/images/AwardBadge1.png";
import Award2 from "../../assets/images/AwardBadge2.png";
import Award3 from "../../assets/images/AwardBadge3.png";
import Award4 from "../../assets/images/AwardBadge4.png";

const AwardsRecognitionsSection = () => {
  const awardsList = [
    {
      id: 1,
      year: "2021",
      awardName: "Lifetime Achievement Award",
      awardDesc: "From Lions Club International",
      img: Award1,
    },
    {
      id: 2,
      year: "2018",
      awardName: "Madura Maamanithar Award",
      awardDesc: "From Madhura Travels",
      img: Award2,
    },
    {
      id: 3,
      year: "2014",
      awardName: "Sevaa Dharmik Award",
      awardDesc: "From Latha Raja Foundation Hyderabad",
      img: Award3,
    },
    {
      id: 4,
      year: "2010",
      awardName: "Best Humanitarian Award",
      awardDesc: "From Kavi Ooviya Tamil Journal",
      img: Award4,
    },
  ];
  return (
    <div className="awards-container">
      <div className="awards-row">
        <h3 className="awards-header">Awards & Recognitions</h3>
        <br />
        <div className="awards-logo-row">
          {awardsList.map((item) => {
            return (
              <div className="award-item" key={item.id}>
                <img src={item.img} />
                <h3 className="award-year">{item.year}</h3>
                <h5 className="award-name">{item.awardName}</h5>
                <p className="award-description">{item.awardDesc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AwardsRecognitionsSection;

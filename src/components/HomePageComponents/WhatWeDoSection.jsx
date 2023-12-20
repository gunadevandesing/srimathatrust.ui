import "./whatWeDoSection.scss";
import TreatmentIcon from "../../assets/svg-icons/treatment-icon.svg";
import ShelterIcon from "../../assets/svg-icons/shelter-icon.svg";
import FoodIcon from "../../assets/svg-icons/food-icon.svg";

const whatWeDoCards = [
  {
    id: 1,
    header: "Free Treatment",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    icon: TreatmentIcon,
  },
  {
    id: 2,
    header: "Free Shelter",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    icon: ShelterIcon,
  },
  {
    id: 3,
    header: "Free Food",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    icon: FoodIcon,
  },
  {
    id: 4,
    header: "Therapy",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    icon: FoodIcon,
  },
];

const WhatWeDoSection = () => {
  return (
    <div className="whatwedo-container">
      <div className="whatwedo-title">
        <span className="horizontal-line"></span>
        WHAT WE DO
      </div>
      <div className="whatwedo-content">
        <div className="whatwedo-leftsection">
          <div className="whatwedo-header">
            Services we provide for our cancer patient
          </div>
          <div className="whatwedo-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </div>
          <div className="whatwedo-card-container">
            {whatWeDoCards.map((cardItem) => (
              <div className="whatwedo-card" key={cardItem.id}>
                <img
                  className="me-2"
                  src={cardItem.icon}
                  alt={cardItem.header}
                />
                <div className="card-content">
                  <div className="card-header">{cardItem.header}</div>
                  <div className="card-paragraph my-2">
                    {cardItem.paragraph}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="whatwedo-video"></div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;

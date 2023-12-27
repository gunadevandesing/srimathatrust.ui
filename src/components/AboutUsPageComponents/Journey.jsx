import "./Journey.scss";
import JourneyImg from "../../assets/images/JourneyImg.png";

const Journey = () => {
  const journeyDetails = [
    {
      id: 1,
      name: "4M+",
      desc: "Donation Received",
    },
    {
      id: 2,
      name: "400+",
      desc: "Volunters",
    },
    {
      id: 3,
      name: "20+",
      desc: "Care homes",
    },
  ];
  
  return (
    <div className="journey-container">
      <div className="journey-row">
        <div className="journey-content">
          <h3 className="journey-header">OUR JOURNEY</h3>
          <br />
          <h2 className="journey-subtitle">How we raised 4M</h2>
          <p className="journey-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh.
          </p>
          <div className="journey-details">
            {journeyDetails.map((each) => {
              return (
                <div className="eachDetail" key={each.id}>
                  <h3>{each.name}</h3>
                  <p>{each.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="journey-image"></div>
      </div>
    </div>
  );
};

export default Journey;

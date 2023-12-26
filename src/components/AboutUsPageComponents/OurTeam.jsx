import "./OurTeam.scss";
import TeamMember1 from "../../assets/images/TeamMember1.png";
import TeamMember2 from "../../assets/images/TeamMember2.png";
import SocialRow from "../../assets/images/SocialRow.png";
const OurTeam = () => {
  const journeyDetails = [
    {
      id: 1,
      name: "V. Krishnamoorty",
      desc: "Managing Trustee",
      img: TeamMember1,
    },
    {
      id: 2,
      name: "P.Akasharam",
      desc: "Executive Trustee",
      img: TeamMember2,
    },
  ];
  return (
    <div className="ourteam-container">
      <div className="ourteam-content">
        <h3 className="ourteam-header">Meet our team</h3>
        <br />
        <h2 className="ourteam-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </h2>

        <div className="ourteam-details">
          {journeyDetails.map((each) => {
            return (
              <div className="ourteam-eachDetail" key={each.id}>
                <img src={each.img} />
                <br />
                <h3>{each.name}</h3>
                <p>{each.desc}</p>
                <img src={SocialRow} />
              </div>
            );
          })}
        </div>
        <div className="journey-image"></div>
      </div>
    </div>
  );
};

export default OurTeam;

import "./ContactUsDetails.scss";
import SocialRow from "../../assets/images/SocialRow.png";

const ContactUsDetails = () => {
  const contactDetails = [
    {
      id: 1,
      name: "Let's talk! ",
      desc: "+234 09012346514 vkrishnamoorthy.smt@gmail.com",
    },
    {
      id: 2,
      name: "Admin Office",
      desc: "95/6, Rams Apartment, 2nd Main Road, Gandhi Nagar, Adyar, (Opp. to Thirukkural Unavagam), Chennai - 600 020.",
    },
    {
      id: 3,
      name: "Head Office",
      desc: "NATHA KAMALAM', 1-A, Periyazhwar Street Sundaram Colony, East Tambaram, Chennai - 600 059",
    },
    {
      id: 4,
      name: "Namma Dharmasala",
      desc: "9, Yogi Gardern, Sriram Nagar, Adjacent to IIT Compound, Chennai - 113. Off: PalliipattuMainRoad.",
    },
  ];
  return (
    <div className="contactus-container">
      <div className="contactus-content">
        <div className="contactus-leftsection">
          <div className="contactus-title">
            <span className="horizontal-line"></span>
            CONTACT US
          </div>
          <div className="contactus-textcontent">
            <div className="contactus-header">We'd love to hear from you</div>
            <div className="contactus-paragraph">
              Have any question in mind or want to enquire? Please feel free to
              contact us through the form or the following details.
            </div>
            <img src={SocialRow} />
          </div>
        </div>
        <div className="contactus-details">
          {contactDetails.map((eachdetail) => {
            return (
              <div className="contactus-item" key={eachdetail.id}>
                <h3>{eachdetail.name}</h3>
                <p>{eachdetail.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactUsDetails;

import ButtonComponent from "../commonComponents/ButtonComponent";
import "./ContactUsForm.scss";
import SocialRow from "../../assets/images/SocialRow.png";
import Map from "../../assets/images/Map.png";

const ContactUsForm = () => {
  return (
    <>
      <div className="contactusForm-container">
        <div className="row">
          <label className="contactusForm-labels" htmlFor="name">
            Full Name
          </label>
          <br />
          <input
            className="contactusForm-inputbox box1"
            type="text"
            id="username"
            name="name"
            placeholder="Ram Lakhhan Chaturvedi"
          />
        </div>
        <div className="row">
          {/* <div className="col-md-6">
          <div className="form-group"> */}
          <div className="multi-fields">
            <div className="left-section">
              <label className="contactusForm-labels" htmlFor="name">
                Email
              </label>
              <br />
              <input
                className="contactusForm-inputbox box2"
                name="email"
                id="useremail"
                type="email"
                placeholder="ramlakhhan@gmail.com"
              />
            </div>
            <div className="right-section">
              {/* </div>
        </div>
        <div className="col-md-6">
          <div className="form-group"> */}
              <label className="contactusForm-labels" htmlFor="name">
                Phone number
              </label>
              <br />
              <input
                className="contactusForm-inputbox box3"
                name="pno"
                id="userpno"
                type="pno"
                placeholder="+1(991) 613-7628"
              />
            </div>
            {/* </div>
        </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label className="contactusForm-labels" htmlFor="name">
                Subject/ Message
              </label>
              <br />
              <textarea
                name="message"
                id="usermessage"
                className="form-control textarea"
                cols="45"
                rows="8"
                placeholder="Type your Message"
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-md-12 my-3">
                              <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                              </div>
                            </div> */}

          <div className="col-md-12 text-center button-outer">
            <button
              type="submit"
              className="btn btn-a send-message-button"
              // onClick={(e)=>sendanemail(e)}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>

      <img width={"100%"} src={Map} />
    </>
  );
};

export default ContactUsForm;

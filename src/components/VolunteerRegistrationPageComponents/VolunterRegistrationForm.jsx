import ButtonComponent from "../commonComponents/ButtonComponent";
import "./volunteerRegistrationForm.scss";

const VolunteerRegistrationForm = () => {
  const handleSubmit = () => {};

  return (
    <div className="form-container">
      <h1 className="form-title">Srimathatrust - Volunteer sign up form</h1>
      <form>
        <label htmlFor="volunteerName" className="label-text">
          Volunteer Full Name
        </label>
        <input
          type="text"
          id="volunteerName"
          name="volunteerName"
          placeholder="Volunteer Full Name"
        />
        <label htmlFor="emailId" className="label-text my-2">
          Email id used for communication
        </label>
        <input
          type="email"
          id="emailId"
          name="emailId"
          placeholder="Email Id"
        />
        <div className="input-labelsection">
          <div className="input-label">
            <label htmlFor="mobileNumber" className="label-text">
              Mobile number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              placeholder="Mobile number"
              name="mobileNumber"
            />
          </div>
          <div className="input-label">
            <label htmlFor="whatsappNumber" className="label-text">
              Whatsapp number
            </label>
            <input
              type="tel"
              id="whatsappNumber"
              placeholder="Whatsapp number"
              name="whatsappNumber"
            />
          </div>
        </div>

        <div className="input-labelsection">
          <div className="input-label">
            <label htmlFor="city" className="label-text">
              City
            </label>
            <input type="text" id="city" name="city" placeholder="City" />
          </div>
        </div>

        <ButtonComponent
          buttonType="primary"
          buttonText="Submit"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default VolunteerRegistrationForm;

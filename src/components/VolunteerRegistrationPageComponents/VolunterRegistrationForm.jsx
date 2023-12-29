import ButtonComponent from "../commonComponents/ButtonComponent";
import RadioButtonGroupComponent from "../commonComponents/RadioButtonGroupComponent";
import "./volunteerRegistrationForm.scss";

const volunteerDaysItem = {
  radioTitle: "I can volunteer",
  optionsList: [
    { id: 1, label: "Only on weekends", value: "Only on weekends" },
    { id: 2, label: "Only on weekdays", value: "Only on weekdays" },
    { id: 3, label: "Flexibly", value: "Flexibly" },
    { id: 4, label: "Others", value: "Others" },
  ],
  groupName: "volunteerDays",
};

const volunteerReasonItem = {
  radioTitle: "I want to volunteer because (pick the top 3)",
  optionsList: [
    {
      id: 1,
      label: "I want to learn something about NGOs",
      value: "I want to learn something about NGOs",
    },
    {
      id: 2,
      label: "I have skills that I can share",
      value: "I have skills that I can share",
    },
    {
      id: 3,
      label: "I want to experience the impact I can have",
      value: "I want to experience the impact I can have",
    },
    {
      id: 4,
      label: "I have time and I can spend this usefully",
      value: "I have time and I can spend this usefully",
    },
    { id: 5, label: "Others", value: "Others" },
  ],
  groupName: "volunteerReason",
};

const volunteerActivity = {
  radioTitle: "I would like an activity that",
  optionsList: [
    {
      id: 1,
      label: "Allows me to interact with many people",
      value: "Allows me to interact with many people",
    },
    { id: 2, label: "I can do by myself", value: "I can do by myself" },
    { id: 3, label: "I am not sure", value: "I am not sure" },
    { id: 4, label: "Others", value: "Others" },
  ],
  groupName: "volunteerDays",
};

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
          className="input-textbox"
          type="text"
          id="volunteerName"
          name="volunteerName"
          placeholder="Volunteer Full Name"
        />
        <label htmlFor="emailId" className="label-text my-2">
          Email id used for communication
        </label>
        <input
          className="input-textbox"
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
              className="input-textbox"
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
              className="input-textbox"
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
            <input
              className="input-textbox"
              type="text"
              id="city"
              name="city"
              placeholder="City"
            />
          </div>
        </div>

        <RadioButtonGroupComponent
          radioTitle={volunteerDaysItem.radioTitle}
          optionsList={volunteerDaysItem.optionsList}
          groupName={volunteerDaysItem.groupName}
        />

        <RadioButtonGroupComponent
          radioTitle={volunteerReasonItem.radioTitle}
          optionsList={volunteerReasonItem.optionsList}
          groupName={volunteerReasonItem.groupName}
        />

        <RadioButtonGroupComponent
          radioTitle={volunteerActivity.radioTitle}
          optionsList={volunteerActivity.optionsList}
          groupName={volunteerActivity.groupName}
        />

        <label htmlFor="comments" className="label-text">
          Any Other Comment
        </label>
        <textarea
          className="input-textarea"
          type="textarea"
          id="comments"
          name="comments"
          placeholder="Comments..."
          rows={5}
        />

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

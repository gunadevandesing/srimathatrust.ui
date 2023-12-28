import "./donationPaymentDetailsSection.scss";

import { useState } from "react";
import PropTypes from "prop-types";

import ButtonComponent from "../commonComponents/ButtonComponent";
import CardIcon from "../../assets/svg-icons/card-icon.svg";
import UPIIcon from "../../assets/svg-icons/upi-icon.svg";

const DonationPaymentDetails = (props) => {
  const { setShowThanks } = props;
  const [selectedPayment, setSelectedPayment] = useState("card");

  const changePaymentMethod = (method) => {
    setSelectedPayment(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowThanks(true);
  };

  return (
    <div className="payment-container">
      <div className="payment-content">
        <h2 className="payment-header">Donation Payment Details</h2>
        <form>
          <label htmlFor="donorName" className="label-text">
            Donor&apos;s Full Name
          </label>
          <input type="text" id="donorName" name="donorName" />
          <div className="input-labelsection">
            <div className="input-label">
              <label htmlFor="emailAddress" className="label-text">
                Email
              </label>
              <input type="email" id="emailAddress" name="emailAddress" />
            </div>
            <div className="input-label">
              <label htmlFor="phoneNo" className="label-text">
                Phone number
              </label>
              <input
                type="tel"
                id="phoneNo"
                pattern="([0-9]{3}) [0-9]{3}-[0-9]{4}"
                placeholder="+1 (123) 456-7890"
                title=""
                name="phoneNo"
              />
            </div>
          </div>
          <label htmlFor="payment-method" className="label-text">
            Payment method
          </label>
          <div className="payment-section">
            <div
              className={`payment-card ${
                selectedPayment === "card" ? "active" : ""
              }`}
              onClick={() => changePaymentMethod("card")}
            >
              <img src={CardIcon} alt="card" />
              <div>Debit / Credit Card</div>
            </div>
            <div
              className={`payment-card ${
                selectedPayment === "upi" ? "active" : ""
              }`}
              onClick={() => changePaymentMethod("upi")}
            >
              <img src={UPIIcon} alt="upi" />
              <div>UPI</div>
            </div>
          </div>
          <label htmlFor="cardHolderName" className="label-text">
            Card holder name
          </label>
          <input type="text" id="cardHolderName" name="cardHolderName" />
          <label htmlFor="billingAddress" className="label-text">
            Billing address
          </label>
          <input type="text" id="billingAddress" name="billingAddress" />
          <div className="input-labelsection">
            <div className="input-label">
              <label htmlFor="pinCode" className="label-text">
                Pin code
              </label>
              <input type="number" id="pinCode" name="pinCode" />
            </div>

            <div className="input-label">
              <label htmlFor="city" className="label-text">
                City
              </label>
              <input type="text" id="city" name="city" />
            </div>
          </div>
          <ButtonComponent
            buttonType="primary"
            buttonText="Submit"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

DonationPaymentDetails.propTypes = {
  setShowThanks: PropTypes.function,
};

export default DonationPaymentDetails;

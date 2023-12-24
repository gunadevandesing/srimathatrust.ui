import PropTypes from "prop-types";
import "./buttonComponent.scss";

const buttonTypeClassNames = {
  primary: "btn-yellow",
  secondary: "btn-white",
  "navbar-btn": "btn-black",
};

const ButtonComponent = ({
  buttonText,
  buttonType,
  onClick,
  customClassName,
}) => {
  return (
    <button
      className={`${buttonTypeClassNames[buttonType]} ${customClassName}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

ButtonComponent.defaultProps = {
  buttonText: "Submit",
  buttonType: "primary",
  onClick: () => {},
  customClassName: "",
};

ButtonComponent.PropTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  customClassName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ButtonComponent;

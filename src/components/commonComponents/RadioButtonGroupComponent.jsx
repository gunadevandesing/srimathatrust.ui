import "./radioButtonGroupComponent.scss";

const RadioButtonGroupComponent = (props) => {
  const { radioTitle, optionsList, groupName } = props;
  return (
    <div className="radio-wrapper">
      <div className="radio-title">{radioTitle}</div>
      <div className="radio-button-group">
        {optionsList.map((optionItem) => (
          <div className="radio-button-item" key={optionItem.id}>
            <input
              className="radio-input"
              id={`${groupName}-${optionItem.id}`}
              type="radio"
              name={groupName}
              value={optionItem.value}
            />
            <label
              className="radio-label"
              htmlFor={`${groupName}-${optionItem.id}`}
            >
              {optionItem.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

RadioButtonGroupComponent.defaultProps = {
  radioTitle: "Choose",
  optionsList: [
    { id: 1, label: "Yes", value: "Yes" },
    { id: 2, label: "No", value: "No" },
  ],
  groupName: "chooseItem",
};

export default RadioButtonGroupComponent;

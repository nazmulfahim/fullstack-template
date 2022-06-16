import React from "react";

const Switch = ({ label, isToggled = false, onToggle }) => {
  return (
    <label className="checkbox" for={label}>
      <input
        type="checkbox"
        checked={isToggled}
        onChange={onToggle}
        id={label}
        className="checkbox__input"
      />
      <span className="checkbox__box" />
      {label}
    </label>
  );
};

export default Switch;

import React, { useState } from "react";
import ErrorExplanation from "../../assets/svgs/error_explanation";

const Field = ({ label, showError, errMessage, inputProps }) => {
  const [allowError, setAllowError] = useState(false);
  return (
    <div className={`field ${showError && allowError ? "error" : ""}`}>
      <label>{label}</label>
      <input {...inputProps} onBlur={() => setAllowError(true)}></input>
      {allowError && showError && (
        <h6>
          <ErrorExplanation />
          {errMessage}
        </h6>
      )}
    </div>
  );
};

export default Field;

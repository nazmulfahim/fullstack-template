import React from "react";
import ScheduleIcon from "../../assets/svgs/ScheduleIcon";

const DatePicker = ({ value, onChange }) => {
  return (
    <span class="datepicker-toggle">
      <span class="datepicker-toggle-button">
        <ScheduleIcon />
      </span>
      <input
        type="date"
        class="datepicker-input"
        value={value}
        onChange={onChange}
      />
    </span>
  );
};

export default DatePicker;

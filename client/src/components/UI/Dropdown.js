import React, { useRef, useState } from "react";

import ArrowSvg from "../../assets/svgs/AnchorSvg";
import useOutsideClick from "../../utils/useOutsideClick";

const Dropdown = ({ value, options, keyName, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => isOpen && setIsOpen(false));

  const onSelect = (item) => {
    setIsOpen(false);
    onChange(item);
  };

  return (
    <div
      className={`dropdown ${isOpen ? "active" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="dropdown__root" onClick={() => setIsOpen((v) => !v)}>
        <p>{value}</p>
        <ArrowSvg />
      </div>
      <div className="dropdown__options" ref={ref}>
        <ul>
          {options.map((option, index) => (
            <li key={option.id || index} onClick={() => onSelect(option)}>
              {option[keyName] || option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Dropdown.defaultProps = {
  value: "",
  keyName: "name",
};

export default Dropdown;

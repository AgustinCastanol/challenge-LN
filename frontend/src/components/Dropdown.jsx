import { useState } from 'react';
import PropTypes from 'prop-types';

export function Dropdown({ options, onSelect, labelOption,title, initialValue }) {
  const [value, setValue] = useState(initialValue);
  // const handleClose = () => setValue(null);
  const handleOptionSelect = (event) => {
    onSelect(event.target.value);
    setValue(event.target.value);
    // handleClose();
  };
  return (
    <>
      <select
        name={title}
        value={value? value : ""}
        onChange={handleOptionSelect}
      >
        <option value="">{labelOption}</option>
        {options.map((options) =>(
          <option key={options.label} value={options.label}>
            {options.label}
          </option>
        ))}

      </select>
    </>
  )

}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  labelOption: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
}
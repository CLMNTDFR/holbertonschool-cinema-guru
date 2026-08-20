import './general.css';

function SelectInput({ label, options, className, value, setValue }) {
  function handleSelect(event) {
    setValue(event.target.value);
  }

  return (
    <div className="select">
      {label && <label>{label}</label>}
      <select className={className} value={value} onChange={handleSelect}>
        {options.map((option) => {
          const optionValue =
            typeof option === 'string' ? option : option.value;
          const optionLabel =
            typeof option === 'string' ? option : option.label;

          return (
            <option key={optionValue} value={optionValue}>
              {optionLabel}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectInput;

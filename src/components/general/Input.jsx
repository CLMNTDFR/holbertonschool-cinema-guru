import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';

function Input({
  label,
  type,
  className,
  value,
  setValue,
  icon,
  inputAttributes,
}) {
  function handleInput(event) {
    setValue(event.target.value);
  }

  return (
    <div className="input">
      <div className="input-label-wrap">
        {icon && <FontAwesomeIcon icon={icon} className="input-icon" />}
        <label>{label}</label>
      </div>
      <input
        type={type}
        className={className}
        value={value}
        onChange={handleInput}
        {...inputAttributes}
      />
    </div>
  );
}

export default Input;

const InputField = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  ...rest
}) => {
  return (
    <div className="input-field">
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-control ${error ? 'input-error' : ''}`}
        {...rest}
      />
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
};

export default InputField;

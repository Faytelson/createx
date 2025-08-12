import styles from "@ui/Input/Input.module.scss";
import Icon from "@ui/Icon/Icon";
import { classNames } from "@utils/utils";

function Input({
  value,
  placeholder,
  name,
  id,
  label,
  size = "md",
  disabled,
  error,
  theme = "light",
  onChange,
}) {
  const labelClasses = classNames([
    styles.label,
    styles[`label_theme_${theme}`],
    { [styles.label_disabled]: disabled },
  ]);
  const inputClasses = classNames([
    styles.input,
    styles[`input_size_${size}`],
    styles[`input_theme_${theme}`],
    { [styles.input_error]: error },
  ]);

  return (
    <label className={labelClasses}>
      {label}
      <div className={styles["input-field"]}>
        <input
          className={inputClasses}
          type="text"
          value={value}
          placeholder={placeholder}
          name={name}
          id={id}
          disabled={disabled}
          aria-invalid={!!error}
          onChange={onChange}
        />
        {error && (
          <div className={styles.icon}>
            <Icon
              name="danger"
              size={16}
              color="var(--color-danger)"
              ariaLabel="Ошибка"
            ></Icon>
          </div>
        )}
      </div>
      {error && (
        <span
          className={styles.error}
          role="alert"
        >
          {error}
        </span>
      )}
    </label>
  );
}

export default Input;

import styles from "@ui/RadioButton/RadioButton.module.scss";
import { classNames } from "@utils/utils";

function RadioButton({ value, label, name, checked, disabled = false, id, onChange }) {
  const labelClasses = classNames([styles.label, { [styles.label_disabled]: disabled }]);

  return (
    <label className={labelClasses}>
      <input
        className={styles.input}
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {label}
    </label>
  );
}

export default RadioButton;

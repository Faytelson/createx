import styles from "@ui/Checkbox/Checkbox.module.scss";
import { classNames } from "@utils/utils";

function Checkbox({ value, name, checked, label, disabled = false, id, onChange }) {
  const labelClasses = classNames([styles.label, { [styles.label_disabled]: disabled }]);
  return (
    <label className={labelClasses}>
      <input
        className={styles.input}
        type="checkbox"
        value={value}
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      {label}
    </label>
  );
}

export default Checkbox;

import styles from "@ui/RadioButton/RadioButton.module.scss";
import clsx from "clsx";

type RadioButtonProps = {
  className?: string;
  value: string;
  checked?: boolean;
  label: React.ReactNode;
  disabled?: boolean;
  id: string;
  onChange: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange">;

const RadioButton: React.FC<RadioButtonProps> = ({
  className,
  value,
  checked = false,
  label,
  disabled,
  id,
  onChange,
}) => {
  const labelClasses = clsx(styles.label, { [styles.label_disabled]: disabled });

  return (
    <label className={labelClasses}>
      <input
        type="radio"
        value={value}
        checked={checked}
        disabled={disabled}
        id={id}
        className={clsx(className, styles.input)}
        onChange={(e) => onChange(e.target.value)}
      />
      {label}
    </label>
  );
};

export default RadioButton;

import React from "react";
import styles from "@ui/Checkbox/Checkbox.module.scss";
import clsx from "clsx";

export type CheckboxProps = {
  checked: boolean;
  label?: React.ReactNode;
  styleType?: "checkmark" | "switch";
  disabled?: boolean;
  onChange: (checked: boolean) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "checked" | "onChange">;

const Checkbox = ({
  checked,
  label,
  styleType = "checkmark",
  disabled = false,
  onChange,
  ...rest
}: CheckboxProps) => {
  const inputClasses = clsx(
    styles.input,
    { [styles.input_checkmark]: styleType === "checkmark" },
    { [styles.input_switch]: styleType === "switch" },
  );

  const labelClasses = clsx(styles.label, { [styles.label_disabled]: disabled });
  return (
    <label className={labelClasses}>
      <input
        checked={checked}
        type="checkbox"
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className={inputClasses}
        {...rest}
      />
      {label}
    </label>
  );
};

export default Checkbox;

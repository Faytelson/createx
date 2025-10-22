import React from "react";
import styles from "@ui/Input/Input.module.scss";
import Icon from "@ui/Icon/Icon";
import clsx from "clsx";

export type InputProps = {
  value: string;
  placeholder: string;
  name: string;
  id: string;
  label?: string;
  inputSize?: "sm" | "md" | "lg";
  disabled?: boolean;
  error?: string;
  theme?: "light" | "dark";
  onChange: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;

const Input = ({
  value,
  placeholder,
  name,
  id,
  label,
  inputSize = "md",
  disabled,
  error,
  theme = "light",
  onChange,
  ...rest
}: InputProps) => {
  const labelClasses = clsx(styles.label, styles[`label_theme_${theme}`], {
    [styles.label_disabled]: disabled,
  });

  const inputClasses = clsx(
    styles.input,
    styles[`input_size_${inputSize}`],
    styles[`input_theme_${theme}`],
    { [styles.input_error]: error },
  );

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
          onChange={(e) => onChange(e.target.value)}
          {...rest}
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
};

export default Input;

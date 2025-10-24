import React from "react";
import styles from "@ui/Input/Input.module.scss";
import Icon from "@ui/Icon/Icon";
import clsx from "clsx";

export type InputProps = {
  type: "text" | "email" | "tel";
  value: string;
  placeholder: string;
  name: string;
  id: string;
  label?: string;
  inputSize?: "sm" | "md" | "lg";
  disabled?: boolean;
  error?: string;
  theme?: "light" | "dark";
  className?: string;
  onChange: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "type">;

const Input = ({
  type,
  value,
  placeholder,
  name,
  id,
  label,
  inputSize = "md",
  disabled,
  error,
  theme = "light",
  className,
  onChange,
  ...rest
}: InputProps) => {
  return (
    <div className={styles.input}>
      {label && (
        <label
          className={styles["input__label"]}
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <div className={styles.input__wrapper}>
        <input
          className={clsx(
            styles["input__input-field"],
            styles[`input__input-field_size_${inputSize}`],
            styles[`input__input-field_theme_${theme}`],
            { [styles["input__input-field_error"]]: error },
          )}
          type={type}
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
          <Icon
            name="danger"
            color="var(--color-danger)"
            ariaLabel="Ошибка"
            className={styles.input__icon}
          ></Icon>
        )}
      </div>

      {error && (
        <span
          className={styles.input__error}
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;

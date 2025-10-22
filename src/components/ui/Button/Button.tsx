import React from "react";
import styles from "@ui/Button/Button.module.scss";
import Icon from "@ui/Icon/Icon";
import clsx from "clsx";

export type ButtonProps = {
  size?: "sm" | "md" | "lg";
  styleType?: "primary" | "primary-white" | "secondary" | "secondary-dark" | "secondary-white";
  withIcon?: boolean;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  size = "md",
  styleType = "primary",
  withIcon = false,
  children,
  ...rest
}: ButtonProps) => {
  const classNames = clsx(
    styles.button,
    styles[`button_size_${size}`],
    styles[`button_style-type_${styleType}`],
  );
  const iconSize = size === "lg" ? 24 : 16;

  return (
    <button
      className={classNames}
      {...rest}
    >
      {children}
      {withIcon && (
        <span className={styles.button__icon}>
          {
            <Icon
              name="right"
              ariaLabel="Перейти далее"
              size={iconSize}
            ></Icon>
          }
        </span>
      )}
    </button>
  );
};

export default Button;

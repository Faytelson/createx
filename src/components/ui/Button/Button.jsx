import styles from "@ui/Button/Button.module.scss";
import Icon from "@ui/Icon/Icon";

export default function Button({
  size = "md", // sm | md | lg
  type = "primary", // primary | primary-white | secondary | secondary-dark | secondary-white
  withIcon = false,
  disabled = false,
  children,
}) {
  const classNames = [styles.button, styles[`button_size_${size}`], styles[`button_type_${type}`]]
    .filter(Boolean)
    .join(" ");

  const iconSize = size === "lg" ? 24 : 16;

  return (
    <button
      className={classNames}
      disabled={disabled}
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
}

import styles from "./Icon.module.scss";

function Icon({ name, prefix = "icon", color = "var(--color-gray-900)", size = "sm" }) {
  const symbolId = `#${prefix}-${name}`;
  const className = size === "lg" ? `${styles.icon} ${styles.icon_lg}` : styles.icon;

  return (
    <svg
      className={className}
      aria-hidden="true"
    >
      <use
        href={symbolId}
        fill={color}
      />
    </svg>
  );
}

export default Icon;

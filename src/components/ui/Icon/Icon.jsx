import styles from "./Icon.module.scss";

function Icon({ name, prefix = "icon", color = "var(--color-gray-900)" }) {
  const symbolId = `#${prefix}-${name}`;

  return (
    <svg
      className={styles.icon}
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

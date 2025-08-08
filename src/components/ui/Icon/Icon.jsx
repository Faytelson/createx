import styles from "./Icon.module.scss";

function Icon({ name, prefix = "icon", color = "var(--color-gray-900)", size, ariaLabel = "" }) {
  const symbolId = `#${prefix}-${name}`;
  const className = size ? styles.icon + " " + styles[`icon_${size}`] : styles.icon;

  return (
    <svg
      className={className}
      role="img"
      aria-label={ariaLabel}
    >
      <title>{ariaLabel}</title>
      <use
        href={symbolId}
        fill={color}
      />
    </svg>
  );
}

export default Icon;

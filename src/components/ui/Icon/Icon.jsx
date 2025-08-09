function Icon({ name, prefix = "icon", color = "var(--color-gray-900)", size, ariaLabel = "" }) {
  const symbolId = `#${prefix}-${name}`;

  return (
    <svg
      className="icon"
      aria-label={ariaLabel}
      width={size}
      height={size}
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

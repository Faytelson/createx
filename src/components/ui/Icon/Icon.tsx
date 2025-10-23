import { type FC } from "react";
import ids from "virtual:svg-icons-names";
import clsx from "clsx";
export type IconName = (typeof ids)[number];
export type IconProps = {
  name: IconName;
  prefix?: string;
  color?: string;
  size?: number;
  ariaLabel?: string;
  className?: string;
};

const Icon: FC<IconProps> = ({
  name,
  prefix = "icon",
  color = "currentColor",
  size = 24,
  ariaLabel,
  className,
}) => {
  const symbolId = `#${prefix}-${name}`;

  return (
    <svg
      className={clsx("icon", className)}
      aria-label={ariaLabel}
      width={size}
      height={size}
    >
      {ariaLabel && <title>{ariaLabel}</title>}
      <use
        href={symbolId}
        fill={color}
      />
    </svg>
  );
};

export default Icon;

import type { FC, ReactNode } from "react";
import styles from "./Text.module.scss";
import { clsx } from "clsx";

export type TextProps = {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "p" | "span";
  view?: "title-main" | "title-secondary" | "p-20" | "p-18" | "p-16" | "p-14";
  weight?: "regular" | "medium" | "bold";
  color?: "primary" | "secondary" | "dark" | "white";
  className?: string;
  children: ReactNode;
}; 

const Text: FC<TextProps> = ({
  tag = "p",
  view = "p-16",
  weight = "regular",
  color,
  className,
  children,
}) => {
  const Tag = tag;

  const classes = clsx(
    styles.text,
    view && styles[`text_view_${view}`],
    weight && styles[`text_weight_${weight}`],
    color && styles[`text_color_${color}`],
    className,
  );

  return <Tag className={classes}>{children}</Tag>;
};

export default Text;

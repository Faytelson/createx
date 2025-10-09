import styles from "./Text.module.scss";
import { clsx } from "clsx";

const Text = ({
  tag = "p",
  view, // title-main, title-secondary, p-20, p-18, p-16, p-14
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

import Icon from "@ui/Icon/Icon";
import styles from "@ui/ContactLink/ContactLink.module.scss";
import { classNames } from "@utils/utils";

function ContactLink({ href, ariaLabel, icon, label, text, theme = "light" }) {
  const labelStyles = classNames([
    styles["contact-link__label"],
    styles[`contact-link__label_theme_${theme}`],
  ]);

  const textStyles = classNames([
    styles["contact-link__text"],
    styles[`contact-link__text_theme_${theme}`],
  ]);
  return (
    <a
      href={href}
      className={styles["contact-link"]}
      aria-label={ariaLabel}
    >
      <Icon
        name={icon}
        size={40}
        color="var(--color-primary)"
      />
      <div>
        <span className={labelStyles}>{label}</span>
        <span className={textStyles}>{text}</span>
      </div>
    </a>
  );
}

export default ContactLink;

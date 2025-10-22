import type { FC } from "react";
import Icon, { type IconName } from "@ui/Icon/Icon";
import styles from "@ui/ContactLink/ContactLink.module.scss";
import clsx from "clsx";

export type ContactLinkProps = {
  href: string;
  icon?: IconName;
  label?: string;
  text?: string;
  theme?: string;
};

const ContactLink: FC<ContactLinkProps> = ({ href, icon, label, text, theme = "light" }) => {
  const labelStyles = clsx(
    styles["contact-link__label"],
    styles[`contact-link__label_theme_${theme}`],
  );

  const textStyles = clsx(
    styles["contact-link__text"],
    styles[`contact-link__text_theme_${theme}`],
  );
  return (
    <a
      href={href}
      className={styles["contact-link"]}
    >
      {icon && (
        <Icon
          name={icon}
          size={40}
          color="var(--color-primary)"
          aria-hidden="true"
        />
      )}
      <div>
        <p className={labelStyles}>{label}</p>
        <p className={textStyles}>{text}</p>
      </div>
    </a>
  );
};

export default ContactLink;

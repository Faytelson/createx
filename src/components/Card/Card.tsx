import React from "react";
import Image, { type ImageProps } from "@ui/Image";
import styles from "@components/Card/Card.module.scss";
import clsx from "clsx";

export type CardProps = {
  img: ImageProps;
  title: string;
  subtitle?: string;
  className?: string;
};

const Card: React.FC<CardProps> = ({ img, title, subtitle, className }) => {
  return (
    <article className={clsx(className, styles.card)}>
      <Image
        {...img}
        className={styles.card__img}
      />
      <h3 className={styles.card__title}>{title}</h3>
      {subtitle && <h4 className={styles.card__subtitle}>{subtitle}</h4>}
    </article>
  );
};

export default Card;

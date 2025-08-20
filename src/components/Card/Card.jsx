import styles from "@components/Card/Card.module.scss";

function Card({ img, title, subtitle }) {
  return (
    <article className={styles.card}>
      <img
        src={img.src}
        alt={img.title}
        className={styles.card__img}
      />
      <h3 className={styles.card__title}>{title}</h3>
      <h4 className={styles.card__subtitle}>{subtitle}</h4>
    </article>
  );
}

export default Card;

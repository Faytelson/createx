import styles from "@components/Carousels/TestimonialCarousel/TestimonialSlide.module.scss";

function TestimonialSlide({ thumbImgSrc, thumbImgTitle, text, name, position, imgSrc, imgTitle }) {
  return (
    <article className={styles["testimonial-slide"]}>
      {/* img с изображением рабочих */}
      <div className={styles["testimonial-slide__image-container"]}>
        <img
          src={imgSrc}
          alt={imgTitle}
          className={styles["testimonial-slide__image"]}
        ></img>
      </div>

      {/* текстовый блок */}
      <div className={styles["testimonial-slide__info"]}>
        {/* thumb img */}
        <img
          src={thumbImgSrc}
          alt={thumbImgTitle}
          className={styles["testimonial-slide__thumb"]}
        />
        <figure>
          <blockquote cite="#">
            <p className={styles["testimonial-slide__text"]}>{text}</p>
          </blockquote>
          <figcaption>
            <cite className={styles["testimonial-slide__name"]}>{name}</cite>
            <span className={styles["testimonial-slide__position"]}>{position}</span>
          </figcaption>
        </figure>
      </div>
    </article>
  );
}

export default TestimonialSlide;

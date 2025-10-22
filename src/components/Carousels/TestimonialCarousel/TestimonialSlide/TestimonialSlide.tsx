import React from "react";
import type { ImageProps } from "@/components/ui/Image";
import styles from "@components/Carousels/TestimonialCarousel/TestimonialSlide/TestimonialSlide.module.scss";

export type TestimonialSlideProps = {
  img: ImageProps;
  thumb: ImageProps;
  review: { text: string; name: string; position: string; }
}

const TestimonialSlide: React.FC<TestimonialSlideProps> = ({ img, thumb, review }) => {
  return (
    <article className={styles["testimonial-slide"]}>
      <div className={styles["testimonial-slide__image-container"]}>
        <img
          src={img.src}
          alt={img.alt}
          className={styles["testimonial-slide__image"]}
        ></img>
      </div>

      <div className={styles["testimonial-slide__info"]}>
        {/* thumb img */}
        <img
          src={thumb.src}
          alt={thumb.alt}
          className={styles["testimonial-slide__thumb"]}
        />
        <figure>
          <blockquote cite="#">
            <p className={styles["testimonial-slide__text"]}>{review.text}</p>
          </blockquote>
          <figcaption>
            <cite className={styles["testimonial-slide__name"]}>{review.name}</cite>
            <span className={styles["testimonial-slide__position"]}>{review.position}</span>
          </figcaption>
        </figure>
      </div>
    </article>
  );
}

export default TestimonialSlide;

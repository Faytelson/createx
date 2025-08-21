function TestimonialSlide({ thumbImg, testimonial, img }) {
  return (
    <article className="testimonial-slide">
      {/* img с изображением рабочих */}
      <img
        src={img.src}
        alt={img.title}
        className="testimonial-slide__image"
      ></img>

      {/* текстовый блок */}
      <div className="testimonial-slide__info">
        {/* thumb img */}
        <img
          src={thumbImg.src}
          alt={thumbImg.title}
          className="testimonial-slide__thumb"
        />
        <figure>
          <blockquote cite="#">
            <p className="testimonial-slide__text">{testimonial.text}</p>
          </blockquote>
          <figcaption>
            <cite class="testimonial-slide__name">{testimonial.name}</cite>,
            <span class="testimonial-slide__position">{testimonial.position}</span>
          </figcaption>
        </figure>
      </div>
    </article>
  );
}

export default TestimonialSlide;

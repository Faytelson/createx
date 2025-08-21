import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import { publicPath } from "@utils/utils";
import "swiper/css";
import "@components/Carousels/TestimonialCarousel/SwiperStyles.scss";
import TestimonialSlide from "@components/Carousels/TestimonialCarousel/TestimonialSlide";

function BrandCarousel({ testimonials, title }) {
  const resolveImg = publicPath("images/logos/");

  return (
    <section className="testimonial-carousel">
      <h2 className="testimonial-carousel__title">{title}</h2>
      <Swiper
        modules={[A11y]}
        wrapperTag="ul"
        slidesPerView={1}
        speed={4000}
        loop={true}
        a11y={{
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          containerMessage: "Testimonials carousel",
        }}
      >
        {testimonials.map((testimonial) => {
          return (
            <SwiperSlide
              tag="li"
              key={testimonial.id}
            >
              <TestimonialSlide
                thumbImg={testimonial.thumbImg}
                testimonial={testimonial.testimonial}
                img={resolveImg(testimonial.img)}
              ></TestimonialSlide>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default BrandCarousel;

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, A11y } from "swiper/modules";
import { publicPath } from "@utils/utils";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "@components/Carousels/TestimonialCarousel/TestimonialCarousel.scss";
import TestimonialSlide from "@components/Carousels/TestimonialCarousel/TestimonialSlide";

function BrandCarousel({ testimonials, title }) {
  const resolveImg = publicPath("images/testimonials/");

  return (
    <section className="testimonial-carousel">
      <div className="testimonial-carousel__inner">
        <h2 className="testimonial-carousel__title">{title}</h2>
        <Swiper
          modules={[EffectFade, Navigation, A11y]}
          wrapperTag="ul"
          slidesPerView={1}
          speed={500}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          navigation={true}
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
                  imgSrc={resolveImg(testimonial.img.src)}
                  imgTitle={testimonial.img.title}
                  thumbImgSrc={resolveImg(testimonial.thumbImg.src)}
                  thumbImgTitle={testimonial.thumbImg.title}
                  text={testimonial.review.text}
                  name={testimonial.review.name}
                  position={testimonial.review.position}
                ></TestimonialSlide>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default BrandCarousel;

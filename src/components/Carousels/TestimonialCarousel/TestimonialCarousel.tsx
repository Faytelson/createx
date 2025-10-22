import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, A11y } from "swiper/modules";
import { publicPath } from "@/utils";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "@components/Carousels/TestimonialCarousel/TestimonialCarousel.scss";
import TestimonialSlide from "@/components/Carousels/TestimonialCarousel/TestimonialSlide";
import { type ImageProps } from "@/components/ui/Image";

export type Testimonial = {
  id: number;
  img: ImageProps;
  thumbImg: ImageProps;
  review: {
    text: string;
    name: string;
    position: string;
  };
};
export type TestimonialCarouselProps = {
  title: string;
  testimonials: Testimonial[];
};
const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ title, testimonials }) => {
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
                  img={{
                    src: resolveImg(testimonial.img.src),
                    alt: testimonial.img.title || "Testimonial image",
                  }}
                  thumb={{
                    src: resolveImg(testimonial.thumbImg.src),
                    alt: testimonial.thumbImg.title || "Our client",
                  }}
                  review={{
                    text: testimonial.review.text,
                    name: testimonial.review.name,
                    position: testimonial.review.position,
                  }}
                ></TestimonialSlide>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

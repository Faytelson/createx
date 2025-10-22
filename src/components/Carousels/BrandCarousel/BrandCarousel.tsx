import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import { publicPath } from "@/utils";
import { type ImageProps } from "@/components/ui/Image";
import "swiper/css";
import "@components/Carousels/BrandCarousel/BrandCarousel.scss";

export type SliderItem = {
  id: number;
  img: ImageProps;
};
export type BrandCarouselProps = {
  sliders: SliderItem[];
};

const BrandCarousel: React.FC<BrandCarouselProps> = ({ sliders }) => {
  const resolveImg = publicPath("images/logos/");

  return (
    <section className="brand-carousel">
      <Swiper
        modules={[Autoplay, A11y]}
        wrapperTag="ul"
        spaceBetween={60}
        slidesPerView={"auto"}
        autoplay={{ delay: 0, pauseOnMouseEnter: true }}
        speed={4000}
        loop={true}
        a11y={{
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          containerMessage: "Image carousel",
        }}
        breakpoints={{ 1024: { spaceBetween: 102 } }}
      >
        {sliders.map((slide) => {
          return (
            <SwiperSlide
              tag="li"
              key={slide.id}
            >
              <img
                src={resolveImg(slide.img.src)}
                alt={slide.img.alt}
              ></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default BrandCarousel;

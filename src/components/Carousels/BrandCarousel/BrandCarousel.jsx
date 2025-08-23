import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import { publicPath } from "@utils/utils";
import "swiper/css";
import "@components/Carousels/BrandCarousel/BrandCarousel.scss";

function BrandCarousel({ sliders }) {
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
              <img src={resolveImg(slide.img.src)}></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default BrandCarousel;

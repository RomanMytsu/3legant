"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image, { type StaticImageData } from "next/image";
import clsx from "clsx";
import { Icon } from "@/shared/ui/Icon";
import s from "./hero.module.scss";

export interface SlideItem {
  id: string;
  src: StaticImageData;
  alt: string;
}

interface HeroSliderProps {
  slides: SlideItem[];
}

export const HeroSlider = ({ slides }: HeroSliderProps) => {
  return (
    <div className={s.hero__slider}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        pagination={{
          clickable: true,
          bulletActiveClass: s["hero__bullet--active"],
          bulletClass: s.hero__bullet,
        }}
        navigation={{
          nextEl: `.${s["hero__nav-btn--next"]}`,
          prevEl: `.${s["hero__nav-btn--prev"]}`,
        }}
        className={s.hero__swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className={s.hero__slide}>
            <div className={s.hero__imageWrapper}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                placeholder="blur"
                sizes="(max-width: 1440px) 100vw, 1120px"
                className={s.hero__image}
              />
            </div>
          </SwiperSlide>
        ))}
        <button
          type="button"
          className={clsx(s["hero__nav-btn"], s["hero__nav-btn--prev"])}
          aria-label="Previous slide"
        >
          <Icon name="arrow-left" size={32} />
        </button>
        <button
          type="button"
          className={clsx(s["hero__nav-btn"], s["hero__nav-btn--next"])}
          aria-label="Next slide"
        >
          <Icon name="arrow-right" size={32} />
        </button>
      </Swiper>
    </div>
  );
};

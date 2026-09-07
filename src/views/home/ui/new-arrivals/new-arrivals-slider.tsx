"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { ProductCard } from "@/entities/product/ui/product-card/product-card";
import "swiper/css";
import "swiper/css/scrollbar";
import type { ProductItem } from "../../api/get-new-arrivals";
import s from "./new-arrivals.module.scss";

interface NewArrivalsSliderProps {
  products: ProductItem[];
}

export const NewArrivalsSlider = ({ products }: NewArrivalsSliderProps) => {
  return (
    <div className={s.newArrivals__sliderWrapper}>
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={16}
        slidesPerView={1.2}
        scrollbar={{ draggable: true, el: `.${s.newArrivals__scrollbar}` }}
        breakpoints={{
          480: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 24 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
        }}
        className={s.newArrivals__slider}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={s.newArrivals__scrollbar} />
    </div>
  );
};

"use client";

import clsx from "clsx";
import Link from "next/link";
import { Icon } from "@/shared/ui/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import {
  ProductCard,
  ProductCardProps,
} from "@/entities/product/ui/product-card/product-card";
import slide1 from "@/shared/assets/images/new-arrivals/sofa.png";
import slide2 from "@/shared/assets/images/new-arrivals/lamp-1.png";
import slide3 from "@/shared/assets/images/new-arrivals/lamp-2.png";
import slide4 from "@/shared/assets/images/new-arrivals/basket.png";
import slide5 from "@/shared/assets/images/new-arrivals/toaster.png";
import "swiper/css";
import "swiper/css/scrollbar";
import s from "./new-arrivals.module.scss";

interface ProductItem extends ProductCardProps {
  id: string;
}

const MOCK_PRODUCTS: ProductItem[] = [
  {
    id: "1",
    title: "Loveseat Sofa",
    price: 199.0,
    oldPrice: 400.0,
    rating: 5,
    image: slide1,
    isNew: true,
    discount: 50,
  },
  {
    id: "2",
    title: "Table Lamp",
    price: 24.99,
    rating: 5,
    image: slide2,
    isNew: true,
    discount: 50,
  },
  {
    id: "3",
    title: "Beige Table Lamp",
    price: 24.99,
    rating: 5,
    image: slide3,
    isNew: true,
    discount: 50,
  },
  {
    id: "4",
    title: "Bamboo basket",
    price: 24.99,
    rating: 5,
    image: slide4,
    isNew: true,
    discount: 50,
  },
  {
    id: "5",
    title: "Toasted",
    price: 224.99,
    rating: 5,
    image: slide5,
    isNew: true,
    discount: 50,
  },
  {
    id: "6",
    title: "Loveseat Sofa",
    price: 199.0,
    oldPrice: 400.0,
    rating: 5,
    image: slide1,
    isNew: true,
    discount: 50,
  },
];

export const NewArrivals = () => {
  return (
    <section className={s.newArrivals}>
      <div className={clsx("container", s.newArrivals__container)}>
        <div className={s.newArrivals__header}>
          <h2 className={s.newArrivals__title}>
            New <br /> Arrivals
          </h2>
          <Link
            href="/shop"
            className={clsx(s.newArrivals__link, s.newArrivals__linkDesktop)}
          >
            More Products <Icon name="arrow-right" size={20} />
          </Link>
        </div>
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
            {MOCK_PRODUCTS.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard {...product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={s.newArrivals__scrollbar} />
        </div>
        <Link
          href="/shop"
          className={clsx(s.newArrivals__link, s.newArrivals__linkMobile)}
        >
          More Products <Icon name="arrow-right" size={20} />
        </Link>
      </div>
    </section>
  );
};

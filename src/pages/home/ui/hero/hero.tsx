import clsx from "clsx";
import slide1 from "@/shared/assets/images/hero/hero-slide-1.png";
import { HeroSlider, SlideItem } from "./hero-slider";
import s from "./hero.module.scss";

const SLIDES_DATA: SlideItem[] = [
  {
    id: "1",
    src: slide1,
    alt: "Modern living room with brown leather sofa",
  },
  {
    id: "2",
    src: slide1,
    alt: "Interior decoration example 2",
  },
  {
    id: "3",
    src: slide1,
    alt: "Interior decoration example 3",
  },
];

export const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={clsx("container", s["hero__container"])}>
        <HeroSlider slides={SLIDES_DATA} />

        <div className={s.hero__content}>
          <h1 className={s.hero__title}>
            Simply Unique<span className={s.hero__slash}>/</span>
            <br />
            Simply Better<span className={s.hero__slash}>.</span>
          </h1>
          <p className={s.hero__description}>
            <span className={s.hero__brand}>3legant</span> is a gift &
            decorations store based in HCMC, Vietnam. Est since 2019.
          </p>
        </div>
      </div>
    </section>
  );
};

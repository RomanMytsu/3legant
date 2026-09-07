// import { SLIDES_DATA } from "../../model/HeroItem";
import { getHeroSlides } from "../../api/get-hero-slides";
import { HeroSlider } from "./hero-slider";
import s from "./hero.module.scss";

export const Hero = async () => {
  const slides = await getHeroSlides();

  return (
    <section className={s.hero}>
      <div className="container">
        <HeroSlider slides={slides} />
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

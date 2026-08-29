import { Banner } from "./banner/banner";
import { Hero } from "./hero/hero";
import { NewArrivals } from "./new-arrivals/new-arrivals";
import { PromoBanner } from "./promo-banner/promo-banner";
import { Values } from "./values/values";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Banner />
      <NewArrivals />
      <Values />
      <PromoBanner />
    </>
  );
};

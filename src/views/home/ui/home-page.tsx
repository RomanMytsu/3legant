import { Banner } from "./banner/banner";
import { Articles } from "./blog/blog";
import { Hero } from "./hero/hero";
import { NewArrivals } from "./new-arrivals/new-arrivals";
import { Newsletter } from "./newsletter/newsletter";
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
      <Articles />
      <Newsletter />
    </>
  );
};

import { Banner } from "./banner/banner";
import { Hero } from "./hero/hero";
import { NewArrivals } from "./new-arrivals/new-arrivals";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Banner />
      <NewArrivals/>
    </>
  );
};

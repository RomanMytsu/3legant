import clsx from "clsx";
import Link from "next/link";
import { Icon } from "@/shared/ui/Icon";
import { NewArrivalsSlider } from "./new-arrivals-slider";
import { getNewArrivals } from "../../api/get-new-arrivals";
import s from "./new-arrivals.module.scss";

export const NewArrivals = async () => {
  const products = await getNewArrivals();

  return (
    <section className={s.newArrivals}>
      <div className={clsx("container", s.newArrivals__container)}>
        <div className={s.newArrivals__header}>
          <h2 className={s.newArrivals__title}>
            New <br /> Arrivals
          </h2>
          <Link
            href="#"
            className={clsx(s.newArrivals__link, s.newArrivals__linkDesktop)}
          >
            More Products <Icon name="arrow-right" size={20} />
          </Link>
        </div>
        <NewArrivalsSlider products={products} />
        <Link
          href="#"
          className={clsx(s.newArrivals__link, s.newArrivals__linkMobile)}
        >
          More Products <Icon name="arrow-right" size={20} />
        </Link>
      </div>
    </section>
  );
};

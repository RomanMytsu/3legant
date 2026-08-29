import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/shared/ui/Icon";
import banner from "@/shared/assets/images/promo-banner/sale-banner.png";
import s from "./promo-banner.module.scss";

export const PromoBanner = () => {
  return (
    <section className={s.promoBanner}>
      <div className={s.promoBanner__wrapper}>
        <div className={s.promoBanner__imageWrapper}>
          <Image
            src={banner}
            alt="Living room with brown leather sofa and decor"
            fill
            priority={false}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={s.promoBanner__image}
          />
        </div>
        <div className={s.promoBanner__content}>
          <p className={s.promoBanner__badge}>Sale up to 35% off</p>
          <h2 className={s.promoBanner__title}>
            HUNDREDS of <br />
            New lower prices!
          </h2>
          <p className={s.promoBanner__description}>
            It’s more affordable than ever to give every room in your home a
            stylish makeover
          </p>
          <Link href="#" className={s.promoBanner__link}>
            Shop Now
            <Icon name="arrow-right" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

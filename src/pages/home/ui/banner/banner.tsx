import clsx from "clsx";
import livingRoomImg from "@/shared/assets/images/banner/living-room.png";
import bedroomImg from "@/shared/assets/images/banner/bedroom.png";
import kitchenImg from "@/shared/assets/images/banner/kitchen.png";
import s from "./banner.module.scss";
import Link from "next/link";
import { Icon } from "@/shared/ui/Icon";
import Image from "next/image";

export const Banner = () => {
  return (
    <section className={s.banner}>
      <div className={clsx("container", s.banner__container)}>
        <article className={clsx(s.banner__card, s.banner__cardLarge)}>
          <div className={s.banner__content}>
            <h3 className={s.banner__title}>Living Room</h3>
            <Link href="#" className={s.banner__link}>
              Shop Now
              <Icon name="arrow-right" size={20} />
            </Link>
          </div>
          <div className={s.banner__imageWrapper}>
            <Image
              src={livingRoomImg}
              alt="Living Room Armchair"
              fill
              sizes="(max-width: 768px) 50vw, 260px"
              className={s.banner__image}
            />
          </div>
        </article>
        <article className={clsx(s.banner__card, s.banner__cardSmall)}>
          <div className={s.banner__content}>
            <h3 className={s.banner__title}>Bedroom</h3>
            <Link href="#" className={s.banner__link}>
              Shop Now
              <Icon name="arrow-right" size={20} />
            </Link>
          </div>
          <div className={s.banner__imageWrapper}>
            <Image
              src={bedroomImg}
              alt="Bedroom Drawer"
              fill
              sizes="(max-width: 768px) 45vw, 260px"
              className={s.banner__image}
            />
          </div>
        </article>
        <article className={clsx(s.banner__card, s.banner__cardSmall)}>
          <div className={s.banner__content}>
            <h3 className={s.banner__title}>Kitchen</h3>
            <Link href="#" className={s.banner__link}>
              Shop Now
              <Icon name="arrow-right" size={20} />
            </Link>
          </div>
          <div className={s.banner__imageWrapper}>
            <Image
              src={kitchenImg}
              alt="Kitchen Toaster"
              fill
              sizes="(max-width: 768px) 45vw, 260px"
              className={s.banner__image}
            />
          </div>
        </article>
      </div>
    </section>
  );
};

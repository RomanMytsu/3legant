import clsx from "clsx";
import Link from "next/link";
import { Icon } from "@/shared/ui/Icon";
import Image from "next/image";
import { getBanners } from "../../api/get-banners";
import s from "./banner.module.scss";

export const Banner = async () => {
  const banners = await getBanners();
  return (
    <section className={s.banner}>
      <div className={clsx("container", s.banner__container)}>
        {banners.map((card) => (
          <article
            key={card.id}
            className={clsx(
              s.banner__card,
              card.variant === "large"
                ? s.banner__cardLarge
                : s.banner__cardSmall,
            )}
          >
            <div className={s.banner__content}>
              <h3 className={s.banner__title}>{card.title}</h3>
              <Link href={card.linkHref} className={s.banner__link}>
                Shop Now
                <Icon name="arrow-right" size={20} />
              </Link>
            </div>
            <div className={s.banner__imageWrapper}>
              <Image
                src={card.imageUrl}
                alt={card.alt}
                fill
                sizes={
                  card.variant === "large"
                    ? "(max-width: 768px) 50vw, 260px"
                    : "(max-width: 768px) 45vw, 260px"
                }
                className={s.banner__image}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

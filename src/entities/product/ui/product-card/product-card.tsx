import { Icon } from "@/shared/ui/Icon";
import s from "./product-card.module.scss";
import Image, { type StaticImageData } from "next/image";

export interface ProductCardProps {
  title: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: StaticImageData;
  isNew?: boolean;
  discount?: number;
}

export const ProductCard = ({
  title,
  price,
  oldPrice,
  rating,
  image,
  isNew,
  discount,
}: ProductCardProps) => {
  return (
    <article className={s.card}>
      <div className={s.card__imageWrapper}>
        <div className={s.card__badges}>
          {isNew && <span className={s.card__badgeNew}>NEW</span>}
          {discount && (
            <span className={s.card__badgeDiscount}>-{discount}%</span>
          )}
        </div>
        <button
          type="button"
          className={s.card__wishlist}
          aria-label="Add to wishlist"
        >
          <Icon name="heart" size={20} className={s.card__wishlistIcon} />
        </button>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 70vw, (max-width: 1024px) 33vw, 262px"
          className={s.card__image}
        />
        <button type="button" className={s.card__addToCart}>
          Add to cart
        </button>
      </div>
      <div className={s.card__content}>
        <div className={s.card__rating}>
          {Array.from({ length: 5 }).map((_, idx) => (
            <Icon
              key={idx}
              name="star"
              size={16}
              className={idx < rating ? s.card__starActive : s.card__star}
            />
          ))}
        </div>
        <h4 className={s.card__title}>{title}</h4>
        <div className={s.card__priceWrapper}>
          <span className={s.card__price}>${price.toFixed(2)}</span>
          {oldPrice && (
            <span className={s.card__oldPrice}>${oldPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </article>
  );
};

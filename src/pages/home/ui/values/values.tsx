import { Icon } from "@/shared/ui/Icon";
import s from "./values.module.scss";

interface ValueItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const VALUES: ValueItem[] = [
  {
    id: "shipping",
    icon: "fast-delivery",
    title: "Free Shipping",
    description: "Order above $200",
  },
  {
    id: "money-back",
    icon: "money-back",
    title: "Money-back",
    description: "30 days guarantee",
  },
  {
    id: "secure",
    icon: "lock",
    title: "Secure Payments",
    description: "Secured by Stripe",
  },
  {
    id: "support",
    icon: "call",
    title: "24/7 Support",
    description: "Phone and Email support",
  },
];

export const Values = () => {
  return (
    <section className={s.values}>
      <div className="container">
        <div className={s.values__grid}>
          {VALUES.map((item) => (
            <article key={item.id} className={s.values__card}>
              <Icon name={item.icon} size={48} className={s.values__icon} />
              <h3 className={s.values__title}>{item.title}</h3>
              <p className={s.values__description}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

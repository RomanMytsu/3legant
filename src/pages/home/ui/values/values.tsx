import { Icon } from "@/shared/ui/Icon";
import { VALUES } from "../../model/ValuesItem";
import s from "./values.module.scss";

export interface ValueItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

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

import Link from "next/link";
import { Icon } from "@/shared/ui/Icon";
import Image from "next/image";
import { getArticles } from "../../api/get-articles";
import s from "./blog.module.scss";

export const Articles = async () => {
  const articles = await getArticles();
  return (
    <section className={s.articles}>
      <div className={"container"}>
        <div className={s.articles__header}>
          <h2 className={s.articles__title}>Articles</h2>
          <Link href="#" className={s.articles__link}>
            More Articles
            <Icon name="arrow-right" size={20} />
          </Link>
        </div>
        <div className={s.articles__grid}>
          {articles.map((article) => (
            <article className={s.articles__card} key={article.id}>
              <div className={s.articles__cardImageWrapper}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={s.articles__cardImage}
                />
              </div>
              <h3 className={s.articles__cardTitle}>{article.title}</h3>
              <Link href={article.href} className={s.articles__cardLink}>
                Read More
                <Icon name="arrow-right" size={20} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

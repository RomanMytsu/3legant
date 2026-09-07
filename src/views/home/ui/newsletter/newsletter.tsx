"use client";
import Image from "next/image";
import { type SyntheticEvent, useState } from "react";
import { Icon } from "@/shared/ui/Icon";
import bg from "@/shared/assets/images/newsletter/newsletter-bg.png";
import s from "./newsletter.module.scss";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setEmail("");
  };

  return (
    <section className={s.newsletter}>
      <Image src={bg} alt="" fill sizes="100vw" className={s.newsletter__bg} />
      <div className="container">
        <div className={s.newsletter__content}>
          <h2 className={s.newsletter__title}>Join Our Newsletter</h2>
          <p className={s.newsletter__description}>
            Sign up for deals, new products and promotions
          </p>
          <form className={s.newsletter__form} onSubmit={handleSubmit}>
            <div className={s.newsletter__field}>
              <Icon name="mail" size={24} className={s.newsletter__icon} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className={s.newsletter__input}
                aria-label="Email address"
              />
              <button type="submit" className={s.newsletter__button}>
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

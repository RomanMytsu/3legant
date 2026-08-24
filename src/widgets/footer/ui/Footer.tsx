"use client";

import Link from "next/link";
import { LEGAL_LINKS, SOCIAL_LINKS } from "../model/data";
import { NAV_LINKS } from "@/widgets/header/model/navigation";
import { Icon } from "@/shared/ui/Icon";
import s from "./Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer__top}>
          <div className={s.footer__brandGroup}>
            <Link href="/" className={s.footer__logo}>
              3legant<span className={s.footer__logoDot}>.</span>
            </Link>
            <span className={s.footer__brandDivider} aria-hidden="true" />
            <p className={s.footer__tagline}>Gift & Decoration Store</p>
          </div>
          <nav className={s.footer__nav} aria-label="Footer navigation">
            <ul className={s.footer__navList}>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={s.footer__navLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={s.footer__separator} aria-hidden="true" />
        <div className={s.footer__bottom}>
          <div className={s.footer__infoGroup}>
            <p className={s.footer__copyright}>
              Copyright © {currentYear} 3legant. All rights reserved.
            </p>
            <ul className={s.footer__legalList}>
              {LEGAL_LINKS.map(({ label, href, id }) => (
                <li key={id}>
                  <Link href={href} className={s.footer__legalLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.footer__socials}>
            {SOCIAL_LINKS.map(({ name, href, label, id }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={s.footer__socialLink}
              >
                <Icon name={name} size={24} className={s.footer__socialIcon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

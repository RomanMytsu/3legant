"use client";

import { Icon } from "@/shared/ui/Icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NAV_LINKS } from "../model/navigation";
import s from "./Header.module.scss";
import { useCallback, useState } from "react";
import { MobileMenu } from "./MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleOpenMenu = () => setIsMobileMenuOpen(true);
  const handleCloseMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <>
      <header className={s.header}>
        <div className="container">
          <div className={s.header__wrapper}>
            <div className={s.header__leftGroup}>
              <button
                type="button"
                className={s.header__burgerBtn}
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                onClick={handleOpenMenu}
              >
                <Icon
                  name="burger"
                  size={24}
                  className={s.header__burgetIcon}
                />
              </button>
              <Link href="/" className={s.header__logoLink}>
                3legant<span className={s.header__logoLinkDot}>.</span>
              </Link>
            </div>
            <nav className={s.header__nav} aria-label="Main navigation">
              <ul className={s.header__navList}>
                {NAV_LINKS.map(({ label, href }) => {
                  const isActive =
                    href === "/"
                      ? pathname === "/"
                      : pathname?.startsWith(href);

                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={clsx(s.header__navLink, {
                          [s.header__navLink_active]: isActive,
                        })}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className={s.header__rightGroup}>
              <button
                type="button"
                className={clsx(s.header__actionBtn, s.header__searchBtn)}
                aria-label="Search"
              >
                <Icon name="search" size={24} />
              </button>
              <Link
                href="#"
                className={clsx(s.header__actionBtn, s.header__userBtn)}
                aria-label="User profile"
              >
                <Icon name="profile" size={24} />
              </Link>
              <Link
                href="#"
                className={clsx(s.header__actionBtn, s.header__cartBtn)}
                aria-label="Shopping cart"
              >
                <Icon name="cart" size={24} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleCloseMenu} />
    </>
  );
};

export { Header };

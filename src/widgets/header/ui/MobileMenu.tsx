"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";
import clsx from "clsx";
import { NAV_LINKS } from "../model/navigation";
import { Icon } from "@/shared/ui/Icon";
import Link from "next/link";
import { createPortal } from "react-dom";
import s from "./MobileMenu.module.scss";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const DESKTOP_MEDIA_QUERY = "(min-width: 1024px)";

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }

    return () => {
      enablePageScroll();
    };
  }, [isOpen]);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        onClose();
      }
    };
    if (mediaQuery.matches) {
      onClose();
    }
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    onClose();
  };

  if (!mounted) return null;

  return createPortal(
    <div
      className={clsx(s.mobileMenu, { [s.mobileMenu_open]: isOpen })}
      aria-hidden={!isOpen}
    >
      <div className={s.mobileMenu__backdrop} onClick={handleClose} />
      <div className={s.mobileMenu__content}>
        <div className={s.mobileMenu__top}>
          <Link href="/" className={s.mobileMenu__logo}>
            3legant<span className={s.mobileMenu__logoDot}>.</span>
          </Link>
          <button
            type="button"
            className={s.mobileMenu__closeBtn}
            onClick={handleClose}
            aria-label="Close menu"
          >
            <Icon
              name="close"
              size={24}
              className={s.mobileMenu__closeBtnIcon}
            />
          </button>
        </div>
        <div className={s.mobileMenu__search}>
          <Icon name="search" size={24} className={s.mobileMenu__searchIcon} />
          <input
            type="search"
            placeholder="Search"
            className={s.mobileMenu__searchInput}
            aria-label="Search products"
          />
        </div>
        <nav className={s.mobileMenu__nav} aria-label="Mobile navigation">
          <ul className={s.mobileMenu__navList}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href} className={s.mobileMenu__navItem}>
                <Link href={href} className={s.mobileMenu__navLink}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={s.mobileMenu__footer}>
          <div className={s.mobileMenu__userActions}>
            <Link href="#" className={s.mobileMenu__actionRow}>
              Cart
              <Icon name="cart" size={24} className={s.mobileMenu__icon} />
            </Link>
            <Link href="#" className={s.mobileMenu__actionRow}>
              Wishlist
              <Icon name="heart" size={24} className={s.mobileMenu__icon} />
            </Link>
          </div>
          <Link href="#" className={s.mobileMenu__signInBtn}>
            Sign In
          </Link>
          <div className={s.mobileMenu__socials}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className={s.mobileMenu__socialLink}
            >
              <Icon
                name="instagram"
                size={24}
                className={s.mobileMenu__socialIcon}
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className={s.mobileMenu__socialLink}
            >
              <Icon
                name="facebook"
                size={24}
                className={s.mobileMenu__socialIcon}
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className={s.mobileMenu__socialLink}
            >
              <Icon
                name="youtube"
                size={24}
                className={s.mobileMenu__socialIcon}
              />
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

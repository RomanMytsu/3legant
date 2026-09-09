"use client";

import { Suspense, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";
import clsx from "clsx";
import { Icon } from "@/shared/ui/Icon";
import { SignInForm } from "../sign-in-form/sign-in-form";
import { SignUpForm } from "../sign-up-form/sign-up-form";
import { useAuthModal } from "../../model/use-auth-modal";
import s from "./auth-modal.module.scss";

const AuthModalContent = () => {
  const { isOpen, activeTab, closeAuthModal, setAuthTab } = useAuthModal();
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
    return () => enablePageScroll();
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeAuthModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeAuthModal]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className={s.modal} role="dialog" aria-modal="true">
      <div className={s.modal__backdrop} onClick={closeAuthModal} />
      <div className={s.modal__content}>
        <button
          type="button"
          className={s.modal__closeBtn}
          onClick={closeAuthModal}
          aria-label="Close modal"
        >
          <Icon name="close" size={24} />
        </button>
        <div className={s.modal__tabs}>
          <button
            type="button"
            className={clsx(
              s.modal__tab,
              activeTab === "sign-in" && s["modal__tab--active"],
            )}
            onClick={() => setAuthTab("sign-in")}
          >
            Sign In
          </button>
          <button
            type="button"
            className={clsx(
              s.modal__tab,
              activeTab === "sign-up" && s["modal__tab--active"],
            )}
            onClick={() => setAuthTab("sign-up")}
          >
            Sign Up
          </button>
        </div>
        <div className={s.modal__body}>
          {activeTab === "sign-in" ? (
            <SignInForm onSuccess={closeAuthModal} />
          ) : (
            <SignUpForm onSuccess={closeAuthModal} />
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export const AuthModal = () => {
  return (
    <Suspense fallback={null}>
      <AuthModalContent />
    </Suspense>
  );
};

"use client";

import { useCallback, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import {
  closeModal,
  openModal,
  setActiveTab,
  type AuthTab,
} from "./auth-modal-slice";

export const useAuthModal = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { isOpen, activeTab } = useAppSelector((state) => state.authModal);

  const authParam = searchParams.get("auth");

  useEffect(() => {
    if (authParam === "sign-in" || authParam === "sign-up") {
      dispatch(openModal(authParam));
    } else if (!authParam && isOpen) {
      dispatch(closeModal());
    }
  }, [authParam, dispatch, isOpen]);

  const openAuthModal = useCallback(
    (tab: AuthTab = "sign-in") => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("auth", tab);
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const closeAuthModal = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("auth");
    const newQuery = params.toString();
    const targetUrl = newQuery ? `${pathname}?${newQuery}` : pathname;

    router.push(targetUrl, { scroll: false });
  }, [pathname, router, searchParams]);

  const setAuthTab = useCallback(
    (tab: AuthTab) => {
      dispatch(setActiveTab(tab));
      const params = new URLSearchParams(searchParams.toString());
      params.set("auth", tab);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [dispatch, pathname, router, searchParams],
  );

  return {
    isOpen,
    activeTab,
    openAuthModal,
    closeAuthModal,
    setAuthTab,
  };
};

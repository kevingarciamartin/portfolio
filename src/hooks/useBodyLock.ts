import { useEffect } from "react";

export const useBodyLock = (isLocked: boolean) => {
  useEffect(() => {
    const body = document.body;

    if (isLocked) {
      body.style.overflow = "hidden";
      body.setAttribute("data-lenis-prevent", "true");
    } else {
      body.style.overflow = "visible";
      body.removeAttribute("data-lenis-prevent");
    }

    return () => {
      body.style.overflow = "visible";
      body.removeAttribute("data-lenis-prevent");
    };
  }, [isLocked]);
};

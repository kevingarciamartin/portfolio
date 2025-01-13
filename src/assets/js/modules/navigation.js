import { pages } from "./pages";
import { home } from "../pages/home/home";
import { work } from "../pages/work/work";
import { scrollToTop, hideMainWorkContent } from "../utils/helpers";

export const handleNavigation = (() => {
  const header = document.querySelector("header");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileLogo = document.querySelector("#mobile-logo");
  const fastTravel = document.querySelector("#fast-travel");

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      removeNavLinkActiveState();
      navLink.classList.add("active");

      if (header.dataset.mobileMenuOpen === "true")
        header.dataset.mobileMenuOpen = "false";

      switch (navLink.id) {
        case "nav-home":
          pages.renderPage(home, "nav-home");
          break;
        case "nav-work":
          pages.renderPage(work, "nav-work");
          break;
        case "nav-contact":
          const workItem = document.querySelector("#work-item");
          if (workItem) {
            workItem.remove();
            hideMainWorkContent(false);
          }
          break;
        default:
          break;
      }
    });
  });

  mobileLogo.addEventListener("click", () => {
    pages.renderPage(home, "nav-home");
    scrollToTop();
    switchNavLinkActiveState();
  });

  fastTravel.addEventListener("click", () => {
    scrollToTop("smooth");
    switchNavLinkActiveState();
  });

  function removeNavLinkActiveState() {
    const activeNavLink = document.getElementsByClassName("nav-link active");
    activeNavLink[0].classList.remove("active");
  }

  function switchNavLinkActiveState() {
    const currentNavIndex = pages.getIndexOfCurrentPage();

    removeNavLinkActiveState();
    navLinks[currentNavIndex].classList.add("active");
  }
})();

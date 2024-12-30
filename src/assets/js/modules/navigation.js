import { home } from "../pages/home/home";
import { work } from "../pages/work/work";
import { scrollToTop } from "../utils/helpers";

export const handleNavigation = (() => {
  const header = document.querySelector("header");
  const navLinks = document.querySelectorAll(".nav-link");
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
        default:
          break;
      }
    });
  });

  fastTravel.addEventListener("click", () => {
    removeNavLinkActiveState();
    navLinks[0].classList.add("active");
  });

  function removeNavLinkActiveState() {
    const activeNavLink = document.getElementsByClassName("nav-link active");
    activeNavLink[0].classList.remove("active");
  }
})();

export function renderPage(page) {
  const main = document.querySelector("main");
  main.innerHTML = "";
  page();
  contact();
}

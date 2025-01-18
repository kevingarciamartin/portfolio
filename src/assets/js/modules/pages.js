import { contact } from "../components/contact/contact";
import { header } from "../components/header/header";
import { footer } from "../components/footer/footer";

export const pages = (() => {
  let pages = [];
  let currentPage = "nav-home";

  const setPages = () => {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((navLink) => pages.push(navLink.id));
  };

  const getCurrentPage = () => currentPage;
  const setCurrentPage = (page) => (currentPage = page);

  const getIndexOfCurrentPage = () => pages.indexOf(getCurrentPage());

  const renderPage = (page, newCurrentPage) => {
    const main = document.querySelector("main");
    main.innerHTML = "";

    header();
    page();
    contact();
    footer();

    setCurrentPage(newCurrentPage);
  };

  return {
    setPages,
    getIndexOfCurrentPage,
    renderPage,
  };
})();

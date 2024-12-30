import { contact } from "../components/contact/contact";

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

    page();
    contact();
    setCurrentPage(newCurrentPage);
  };

  return {
    setPages,
    getIndexOfCurrentPage,
    renderPage,
  };
})();

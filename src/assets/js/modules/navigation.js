export const handleNavigationState = (() => {
  const header = document.querySelector("header");
  const navLinks = document.querySelectorAll(".nav-link");
  const fastTravel = document.querySelector("#fast-travel");

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      removeNavLinkActiveState();
      navLink.classList.add("active");
  
      if (header.dataset.mobileMenuOpen === "true")
        header.dataset.mobileMenuOpen = "false";
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

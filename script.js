const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelectorAll(".nav-link");
const fastTravel = document.querySelector("#fast-travel");

menuBtn.addEventListener("click", () => {
  header.dataset.mobileMenuActive =
    header.dataset.mobileMenuActive === "false" ? "true" : "false";
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    removeNavLinkActiveState();
    navLink.classList.add("active");

    if (header.dataset.mobileMenuActive === "true") {
      header.dataset.mobileMenuActive = "false";
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

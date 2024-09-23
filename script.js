const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
  const header = document.querySelector("header");
  header.dataset.mobileMenuActive =
    header.dataset.mobileMenuActive === "false" ? "true" : "false";
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    const activeNavLink = document.getElementsByClassName("nav-link active");
    activeNavLink[0].classList.remove("active");
    navLink.classList.add("active");
  });
});

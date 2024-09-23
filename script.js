const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    const activeNavLink = document.getElementsByClassName("nav-link active");
    activeNavLink[0].classList.remove("active");
    navLink.classList.add("active");
  });
});

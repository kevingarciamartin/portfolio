const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const clockHours = document.querySelector(".hours");
const clockColon = document.querySelector(".colon");
const clockMinutes = document.querySelector(".minutes");
const navLinks = document.querySelectorAll(".nav-link");
const fastTravel = document.querySelector("#fast-travel");

menuBtn.addEventListener("click", () => {
  header.dataset.mobileMenuOpen =
    header.dataset.mobileMenuOpen === "false" ? "true" : "false";
  menuBtn.disabled = true;
  setTimeout(() => {
    menuBtn.disabled = false;
  }, 50);
});

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

updateClock();
animateClock();

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  clockHours.textContent = `(${hours.toString().padStart(2, "0")}`;
  clockColon.textContent = ":";
  clockMinutes.textContent = `${minutes.toString().padStart(2, "0")})`;

  setTimeout(updateClock, 1 * 1000);
}

function animateClock() {
  setInterval(() => {
    clockColon.style.opacity = clockColon.style.opacity === "1" ? "0" : "1";
  }, 1000);
}

function removeNavLinkActiveState() {
  const activeNavLink = document.getElementsByClassName("nav-link active");
  activeNavLink[0].classList.remove("active");
}

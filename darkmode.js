let darkMode = localStorage.getItem("darkMode");
const lightModeToggle = document.querySelector("#light-mode-toggle");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableLightMode = () => {
  document.body.classList.add("light-theme");
  document.body.classList.remove("dark-theme");

  lightModeToggle.classList.add("active");
  darkModeToggle.classList.remove("active");

  localStorage.setItem("darkMode", null);
};

const enableDarkMode = () => {
  document.body.classList.add("dark-theme");
  document.body.classList.remove("light-theme");

  darkModeToggle.classList.add("active");
  lightModeToggle.classList.remove("active");

  localStorage.setItem("darkMode", "enabled");
};

darkMode === "enabled" ? enableDarkMode() : enableLightMode();

lightModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== null) {
    enableLightMode();
  }
});

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  }
});

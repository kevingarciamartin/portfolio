export const darkmode = (() => {
  let darkmode = localStorage.getItem("darkmode");
  const lightModeToggle = document.querySelector("#light-mode-toggle");
  const darkmodeToggle = document.querySelector("#dark-mode-toggle");

  const enableLightMode = () => {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");

    lightModeToggle.classList.add("active");
    darkmodeToggle.classList.remove("active");

    localStorage.setItem("darkmode", null);
  };

  const enabledarkmode = () => {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");

    darkmodeToggle.classList.add("active");
    lightModeToggle.classList.remove("active");

    localStorage.setItem("darkmode", "enabled");
  };

  darkmode === "enabled" ? enabledarkmode() : enableLightMode();

  lightModeToggle.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    if (darkmode !== null) {
      enableLightMode();
    }
  });

  darkmodeToggle.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    if (darkmode !== "enabled") {
      enabledarkmode();
    }
  });
})();

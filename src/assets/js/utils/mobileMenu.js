export const toggleMobileMenu = (() => {
  const header = document.querySelector("header");
  const menuBtn = document.querySelector("#menu-btn");

  menuBtn.addEventListener("click", () => {
    header.dataset.mobileMenuOpen =
      header.dataset.mobileMenuOpen === "false" ? "true" : "false";
    menuBtn.disabled = true;
    setTimeout(() => {
      menuBtn.disabled = false;
    }, 50);
  });
})();

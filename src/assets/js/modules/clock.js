export const clock = (() => {
  const clockHours = document.querySelector(".hours");
  const clockColon = document.querySelector(".colon");
  const clockMinutes = document.querySelector(".minutes");

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

  updateClock();
  animateClock();
})();

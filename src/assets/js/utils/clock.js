import { toZonedTime } from "date-fns-tz";

export const clock = (() => {
  const clockHours = document.querySelector(".hours");
  const clockColon = document.querySelector(".colon");
  const clockMinutes = document.querySelector(".minutes");

  function updateClock() {
    const userLocalTime = new Date();
    const kevinTimeZone = "Europe/Stockholm";
    const kevinTime = toZonedTime(userLocalTime, kevinTimeZone);
    const hours = kevinTime.getHours();
    const minutes = kevinTime.getMinutes();

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

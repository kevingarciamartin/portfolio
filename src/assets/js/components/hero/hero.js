import "./hero.css";
import portrait from "../../../img/portrait.jpg";

export function hero() {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  const image = document.createElement("img");
  const title = document.createElement("h1");

  section.id = "hero";
  title.classList.add("hero__title");

  image.setAttribute("alt", "Portrait of Kevin Garcia Martin");

  image.src = portrait;
  title.textContent = "Kevin Garcia Martin";

  main.appendChild(section);
  section.appendChild(image);
  section.appendChild(title);
}

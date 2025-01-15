import "./hero.css";
import portrait from "../../../img/portrait.jpeg";

export function hero() {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  const image = document.createElement("div");
  const title = document.createElement("h1");

  section.id = "hero";
  title.classList.add("hero__title");

  image.innerHTML = `
    <img src="${portrait}" alt="${"Portrait of Kevin Garcia Martin"}">
  `;
  title.textContent = "Kevin Garcia Martin";

  main.appendChild(section);
  section.appendChild(image);
  section.appendChild(title);
}

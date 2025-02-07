import "./featuredWork.css";
import { workData } from "../../../data/workData";

export function featuredWork() {
  const main = document.querySelector("main");
  const section = document.createElement("section");

  section.id = "featured-work";

  main.appendChild(section);
}

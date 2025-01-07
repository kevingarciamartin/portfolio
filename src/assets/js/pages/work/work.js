import "./work.css";
import doremir from "../../../img/doremir_logo.png";
import chess50 from "../../../img/chess50.png";

export function work() {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  const list = document.createElement("ul");

  section.id = "work";
  list.classList.add("work__list");

  workArray.forEach((element, index) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    const image = document.createElement("img");
    const lineAfter = document.createElement("div");

    if (index === 0) {
      const lineBefore = document.createElement("div");
      lineBefore.classList.add("horizontal-line", "before");
      item.appendChild(lineBefore);
    }

    lineAfter.classList.add("horizontal-line", "after");

    link.setAttribute("href", element.url);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");

    link.innerHTML = `
      <div class="work__info">
        <span></span>
        <span>${element.name}</span>
        <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    `;

    image.src = element.image;

    list.appendChild(item);
    item.appendChild(link);
    item.appendChild(lineAfter);
    link.appendChild(image);
  });

  main.appendChild(section);
  section.appendChild(list);
}

const workArray = [
  {
    name: "Doremir Music Research",
    stack: ["React"],
    image: doremir,
    url: "https://doremir.com/",
  },
  {
    name: "Chess50",
    stack: ["Flask", "Python", "JavaScript", "SQLite"],
    image: chess50,
    url: "https://chess50-dde8edd06871.herokuapp.com/",
  },
];

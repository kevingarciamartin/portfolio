import "./work.css";
import { animatedLink } from "../../components/animatedLink/animatedLink";
import { scrollToTop, trimStartOfString, hideMainWorkContent } from "../../utils/helpers";
import doremir from "../../../img/work/doremir_logo.png";
import chess50 from "../../../img/work/chess50.png";
import fjordsmaken from "../../../img/work/fjordsmaken_5.7.png";

const workArray = [
  {
    name: "Doremir Music Research",
    role: "Internship",
    stack: ["React"],
    description: [
      "Developed the company React dashboard for internal statistics by continously fetching new relevant data from their API and implementing new pages, charts and tables.",
      "Analyzed the UI of one of the company's products for Windows and implemented the corresponding design in React for an upcoming hybrid application. In conjuction, I did a refactoring of the project where I removed Bootstrap, to more easily be able to implement the specific design from the computer version.",
    ],
    image: doremir,
    link: {
      text: "doremir.com",
      href: "https://doremir.com/",
    },
  },
  {
    name: "Chess50",
    stack: ["Flask", "Python", "JavaScript", "SQLite"],
    description: [
      "A mini-clone application of the popular website chess.com, using their public API for various features. Authentication is implemented with an SQL database to store users.",
      "Features inlude:",
      "- playing chess against an engine (Stockfish 17) with take-back moves, engine moves on demand and flipping the board,",
      "- solving chess.com's Daily Puzzle,",
      "- keeping track of the leaderboards for the most popular time controls,",
      "- and searching for valid chess.com usernames to get their profile information and game statistics.",
    ],
    image: chess50,
    link: {
      text: "chess50-dde8edd06871.herokuapp.com",
      href: "https://chess50-dde8edd06871.herokuapp.com/",
    },
  },
  {
    name: "Fjordsmaken",
    stack: ["Webpack", "JavaScript"],
    description: [
      "A concept of what a single page restaurant website could look like.",
    ],
    image: fjordsmaken,
    link: {
      text: "kevingarciamartin.github.io/restaurant-page",
      href: "https://kevingarciamartin.github.io/restaurant-page/",
    },
  },
];

export function work() {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  const list = document.createElement("ul");

  section.id = "work";
  list.classList.add("work__list");

  workArray.forEach((element, index) => {
    const item = document.createElement("li");
    const content = document.createElement("div");
    const image = document.createElement("img");
    const lineAfter = document.createElement("div");

    if (index === 0) {
      const lineBefore = document.createElement("div");
      lineBefore.classList.add("horizontal-line", "before");
      item.appendChild(lineBefore);
    }

    content.classList.add("work__content");
    lineAfter.classList.add("horizontal-line", "after");

    content.innerHTML = `
      <div class="work__info">
        <span></span>
        <span>${element.name}</span>
        <svg width="80px" height="80px" viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-arrow-right">
            <title>1178</title>  
            <defs>
        </defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path d="M6.077,1.162 C6.077,1.387 6.139,1.612 6.273,1.812 L10.429,8.041 L6.232,14.078 C5.873,14.619 6.019,15.348 6.56,15.707 C7.099,16.068 7.831,15.922 8.19,15.382 L12.82,8.694 C13.084,8.3 13.086,7.786 12.822,7.39 L8.233,0.51 C7.873,-0.032 7.141,-0.178 6.601,0.181 C6.26,0.409 6.077,0.782 6.077,1.162 L6.077,1.162 Z" fill="#434343" class="si-glyph-fill">
        </path>
            </g>
        </svg>
        <span></span>
        <span class="work__stack">${
          element.role ? element.role : element.stack.join(", ")
        }</span>
      </div>
    `;

    image.src = element.image;

    list.appendChild(item);
    item.appendChild(content);
    item.appendChild(lineAfter);
    content.appendChild(image);

    item.addEventListener("click", () => {
      renderWorkItem(element, window.scrollY);
    });
  });

  main.appendChild(section);
  section.appendChild(list);
}

function renderWorkItem(item, scrollPosition) {
  hideMainWorkContent();
  scrollToTop();

  const main = document.querySelector("main");
  const workItem = document.createElement("section");

  workItem.id = "work-item";

  workItem.innerHTML = `
  <div class="work-item__content">
    <a href="${item.link.href}" target="_blank" rel="noopener noreferrer">
      <img src="${item.image}">
    </a>
    <div class="work-item__title">
      <p>${item.name}</p>
      <span class="work-item__role"></span>
    </div>
    <div class="work-item__stack">
      <span>Tech stack</span>
      <p>${item.stack.join(", ")}</p>
    </div>
    <div class="work-item__description">
      <span>Description</span>
    </div>
    <div class="work-item__url">
      <span>URL</span>

    </div>
    <button class="close-btn navigation">Go back</button>
  </div>
  `;

  main.appendChild(workItem);

  const workItemRole = document.querySelector(".work-item__role");
  if (item.role === undefined) workItemRole.style.display = "none";
  else workItemRole.textContent = item.role;

  const workItemDescription = document.querySelector(".work-item__description");
  let isStartedList = false;
  item.description.forEach((paragraph) => {
    let p;
    if (paragraph.startsWith("- ")) {
      if (!isStartedList) {
        const ul = document.createElement("ul");
        ul.classList.add("work-item__ul");
        workItemDescription.appendChild(ul);

        isStartedList = true;
      }

      const workItemUL = document.querySelector(".work-item__ul");
      p = document.createElement("li");
      workItemUL.appendChild(p);
      paragraph = trimStartOfString(paragraph, "- ");
    } else {
      p = document.createElement("p");

      isStartedList = false;
    }

    p.textContent = paragraph;
    !isStartedList ? workItemDescription.appendChild(p) : "";
  });

  const workItemURL = document.querySelector(".work-item__url");
  workItemURL.appendChild(animatedLink(item.link.text, item.link.href));

  const closeBtn = workItem.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    workItem.remove();
    hideMainWorkContent(false);
    window.scrollTo(0, scrollPosition);
  });
}

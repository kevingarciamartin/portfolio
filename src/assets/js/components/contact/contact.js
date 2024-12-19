import "./contact.css";
import backdrop from "../../../img/snooki-i-london.jpeg";

export function contact() {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  const image = document.createElement("img");
  const container = document.createElement("article");

  section.classList.add("contact");
  image.classList.add("parallax-bg");
  container.id = "contact";

  image.src = backdrop;
  container.innerHTML = `
    <div>
        <p>I'm always excited to discuss new projects and collaboration opportunities. Feel free to reach out and let's build something beautiful together.</p>
        <svg id="sun" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>sun</title>
            <path d="M23.395 14.106c2.958-1.383 2.828-6.068 5.758-5.884-4.125-2.74-4.019 3.106-9.089 1.235 1.107-3.068-2.292-6.286-0.091-8.227-4.855 0.979-0.645 5.039-5.555 7.301-1.384-2.958-6.068-2.828-5.884-5.758-2.74 4.125 3.106 4.019 1.235 9.089-3.068-1.107-6.286 2.292-8.227 0.091 0.979 4.855 5.039 0.645 7.301 5.555-2.958 1.384-2.828 6.068-5.758 5.884 4.125 2.74 4.019-3.106 9.089-1.235-1.107 3.068 2.292 6.286 0.091 8.227 4.855-0.979 0.645-5.039 5.555-7.301 1.384 2.958 6.068 2.828 5.884 5.758 2.74-4.125-3.106-4.019-1.235-9.089 3.068 1.107 6.286-2.292 8.226-0.091-0.979-4.855-5.039-0.645-7.301-5.555z"></path>
        </svg>
        <address>
            <a
                href="https://github.com/kevingarciamartin"
                target="_blank"
                rel="noopener noreferrer"
                >
                <span>Github</span>
                <span>Github</span>
            </a>
            <a href="mailto:kevingm@live.se">
                <span>kevingm@live.se</span>
                <span>kevingm@live.se</span>
            </a>
        </address>
    </div>
  `;

  main.appendChild(section);
  section.appendChild(image);
  section.appendChild(container);

  const svg = document.querySelector("#sun");
  const maxRotation = 360;

  window.addEventListener("scroll", function () {
    // const scrolled = window.scrollY;
    // const parallaxBg = document.querySelector(".parallax-bg");
    // parallaxBg.style.transform = `translateY(${scrolled * 0.3}px)`;

    const scrollPercentage =
      window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight);
    const rotation = scrollPercentage * maxRotation * 0.5;
    svg.style.transform = `rotate(${rotation}deg)`;
  });
}

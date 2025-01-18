import "./header.css";

export function header() {
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const scrollPercentage = Math.min(scrollPosition / viewportHeight, 1);

    header.style.background = `
        linear-gradient(to bottom, hsl(from var(--clr-background) h s l / ${
          scrollPercentage * 0.2
        }) 95%, hsl(from var(--clr-background) h s l / 0))
    `;
    header.style.backdropFilter = `blur(${scrollPercentage * 10}px)`;
  });
}

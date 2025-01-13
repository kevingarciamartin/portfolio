import "./animatedLink.css";

export function animatedLink(text, href, type = 'url') {
  const link = document.createElement("a");

  link.classList.add("animated-link");

  if (type === "url") {
    link.setAttribute("href", href);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  } else if (type === "mail") {
    link.setAttribute("href", "mailto:" + href);
  }

  link.innerHTML = `
    <span>${text !== null ? text : href}</span>
    <span>${text !== null ? text : href}</span>
  `;

  return link;
}

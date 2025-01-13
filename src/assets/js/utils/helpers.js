export function rotateSvgOnScroll(svg, maxRotation = 360) {
  const scrollPercentage =
    window.scrollY /
    (document.documentElement.scrollHeight - window.innerHeight);
  const rotation = scrollPercentage * maxRotation;
  svg.style.transform = `rotate(${rotation}deg)`;
}

export function parallaxEffectOnBackground(background) {
  const scrolled = window.scrollY;
  background.style.transform = `translateY(${scrolled * 0.1}px)`;
}

export function scrollToTop(scrollBehavior = 'auto') {
  window.scrollTo({ top: 0, behavior: scrollBehavior });
}

export function trimStartOfString(str, substring) {
  if (str.startsWith(substring)) {
    return str.slice(substring.length);
  }
  return str;
}

export function hideMainWorkContent(isTrue = true) {
  const work = document.querySelector("#work");
  const contact = document.querySelector("section.contact");
  const footer = document.querySelector("footer");

  work.style.display = isTrue ? "none" : "flex";
  contact.style.display = isTrue ? "none" : "flex";
  footer.style.display = isTrue ? "none" : "grid";
}

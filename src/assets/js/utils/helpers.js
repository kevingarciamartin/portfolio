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

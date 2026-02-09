const text = "GWODOG Anthoni Wilson";
let index = 0;
const speed = 120;
const target = document.getElementById("typing");

function type() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(type, speed);
  }
}

type();

// Animation au scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      section.classList.add("show");
    }
  });
});
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 }},
    color: { value: "#87cefa" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#1e90ff",
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 3 }
  }
});
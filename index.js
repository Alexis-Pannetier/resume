const cards = document.querySelectorAll(".timeline-item .card");

scrollAnim = () => {
  let windowHt = window.innerHeight;
  cards.forEach((elements) => {
    let elementPos = elements.getBoundingClientRect().top;
    if (elementPos <= windowHt / 1.3) {
      elements.classList.add("revealed");
    } else {
      elements.classList.remove("revealed");
    }
  });
};

document.addEventListener("DOMContentLoaded", scrollAnim);

window.addEventListener("scroll", scrollAnim);

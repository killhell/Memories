const buttons = document.querySelectorAll("[data-btn]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.btn === "next" ? 1 : -1;
    const slide = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slide.querySelector("[data-active]");
    let newIndex = [...slide.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) {
      newIndex = slide.children.length - 1;
    } else if (newIndex >= slide.children.length) {
      newIndex = 0;
    }

    slide.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

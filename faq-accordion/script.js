document.querySelectorAll(".accordion-item").forEach((item) => {
  item.addEventListener("click", () => {
    const content = item.querySelector(".accordion-item-content");
    const icon = item.querySelector(".toggle-icon");

    // Close all other active accordions
    document.querySelectorAll(".accordion-item").forEach((el) => {
      const elContent = el.querySelector(".accordion-item-content");
      const elIcon = el.querySelector(".toggle-icon");
      if (el !== item) {
        elContent.classList.remove("active");
        elIcon.src = "assets/images/icon-plus.svg";
      }
    });

    // Toggle current content and icon
    const isActive = content.classList.toggle("active");
    icon.src = isActive
      ? "assets/images/icon-minus.svg"
      : "assets/images/icon-plus.svg";
  });
});

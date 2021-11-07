const mobile = document.querySelector("i");
const nav = document.querySelector("nav ul");
mobile.addEventListener("click", () => {
  if (nav.classList.contains("fas-open")) {
    nav.classList.remove("fas-open");
    set_overflow("visible");
    mobile.classList.remove("fa-times");
    mobile.classList.add("fa-bars");
  } else {
    nav.classList.add("fas-open");
    set_overflow("hidden");
    mobile.classList.remove("fa-bars");
    mobile.classList.add("fa-times");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1100) {
    if (nav.classList.contains("fas-open")) {
      nav.classList.remove("fas-open");
      set_overflow("visible");
      mobile.classList.remove("fa-times");
      mobile.classList.add("fa-bars");
    }
  }
});

const set_overflow = (state) => {
  document.documentElement.style.overflow = state;
};

//<i class="fas fa-times"></i>

const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".list");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  list.classList.toggle("active");

  if (hamburger.classList.contains("active")) {
    document.querySelector("body").style.position = "fixed";
  } else {
    document.querySelector("body").style.position = "static";
  }
});

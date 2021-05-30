const menuToggle = document.querySelector(".menubtn input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener *
  ("click",
  function () {
    nav.classList.toggle("slide");
  });

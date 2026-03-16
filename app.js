const humburger = document.querySelector("#humburger");
const menu = document.querySelector("#menu");

humburger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    humburger.classList.toggle("bg-white");
})
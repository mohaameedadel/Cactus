let imagePreview = document.querySelector(".image-preview");

let image = document.querySelectorAll(".image");

image.forEach((e) => {
  e.addEventListener("click", function () {
    imagePreview.src = e.src;
  });
});

let search = document.getElementById("search");

search.addEventListener("click", () => {
  window.open(
    "https://www.google.com/search?q=cactus&oq=cactus&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyBwgBEC4YgAQyCQgCEAAYChiABDINCAMQLhjHARjRAxiABDIHCAQQABiABDIHCAUQLhiABDIHCAYQLhiABDIGCAcQRRg80gEINzkwM2owajGoAgCwAgA&sourceid=chrome&ie=UTF-8"
  );
});

let arrowUp = document.querySelector(".arrow");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 80) {
    arrowUp.style.display = "flex";
  } else {
    arrowUp.style.display = "none";
  }
});

arrowUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

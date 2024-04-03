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

let shop = document.getElementById("shop");
let sidebar = document.querySelector(".sidebar");

let home = document.getElementById("home");
let overLay = document.getElementById("overlay");

shop.addEventListener("click", () => {
  sidebar.classList.toggle("toogle");
  overLay.classList.toggle("none");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    sidebar.classList.remove("toogle");
    overLay.classList.toggle("none");
  }
});

let exit = document.querySelector(".arrowss");

exit.addEventListener("click", () => {
  sidebar.classList.remove("toogle");
  overLay.classList.toggle("none");
});

let remove = document.querySelector(".remove");

let item = document.querySelectorAll(".text");
let shopItem = document.querySelectorAll("#shoop");
let num = document.querySelector(".num");
let result = 0;
num.textContent = result;
for (let i = 0; i <= shopItem.length; i++) {
  shopItem[i].addEventListener("click", () => {
    let f = document.createElement("div");
    f.innerHTML = item[i].innerHTML;
    f.className = "cart-item";
    sidebar.append(f);
    result++;
    console.log(result);
    num.textContent = result;
    remove.addEventListener("click", () => {
      f.remove();
      result = 0;
      num.textContent = result;
    });
  });
}

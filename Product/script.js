//counter for carts
let carts = document.querySelectorAll("#add");
let n = 1;
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    //   storagecart();
    document.querySelector(".span").textContent = n++;
  });
}

//closing for banner
document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".banner").style.display = "none";
});

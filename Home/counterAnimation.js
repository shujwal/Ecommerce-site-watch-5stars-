// ------------ creating variable------------- 
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;
// ---------------- for increase of the number from 000 to decided number ----------
valueDisplays.forEach((e) => {
    let startValue = 0;
    let endValue = parseInt(e.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        e.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    });
});
// ------------------ for the cross button (disappears when clicked)---------
document.querySelector("#cross-counter").addEventListener("click", () => {
    document.querySelector(".counter").style.display = "none";
});
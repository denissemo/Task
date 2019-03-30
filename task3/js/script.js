let main = document.querySelector(".block.main");
let lg = document.querySelectorAll(".block.lg");
let sm = document.querySelectorAll(".block.sm");


document.addEventListener("click", function () {
    let elem = document.elementFromPoint(event.pageX, event.pageY);
    if (elem.classList[1] === "main") {
        for (let i of lg) {
            i.style.background = "white";
        }
    } else if (elem.classList[1] === "lg") {
        for (let i of sm) {
            i.style.background = "white";
        }
    }
    if (elem.style.background === "red") {
        elem.style.background = "white";
    } else {
        elem.style.background = "red";
    }
});

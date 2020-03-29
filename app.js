const okBtn = document.querySelector("input[name=ok-btn]")
const baseBtn = document.querySelector("input[name=base-btn]")
const bechamelBtn = document.querySelector("input[name=bechamel-btn]")
const tomatoBtn = document.querySelector("input[name=tomato-btn]")
const peppersBtn = document.querySelector("input[name=peppers-btn]")
const cheeseBtn = document.querySelector("input[name=cheese-btn]")
const olivesBtn = document.querySelector("input[name=olives-btn]")
const everythingBtn = document.querySelector("input[name=everything-btn]")
const basePizzaImg = document.getElementById("base-pizza")
const bechamelImg = document.getElementById("bechamel-pizza")
const cheeseImg = document.getElementById("cheese-pizza")
const olivesImg = document.getElementById("olives-pizza")
const peppersImg = document.getElementById("peppers-pizza")
const tomatoImg = document.getElementById("tomato-pizza")






okBtn.addEventListener("change", function() {
    if(okBtn.checked) {
        basePizzaImg.classList.remove("hide")
    } else {
        basePizzaImg.classList.add("hide")
    }
});


bechamelBtn.addEventListener("change", function() {
    if(bechamelBtn.checked) {
        bechamelImg.classList.remove("hide")
    } else {
        bechamelImg.classList.add("hide")
    }
});

tomatoBtn.addEventListener("change", function() {
    if(tomatoBtn.checked) {
        tomatoImg.classList.remove("hide")
    } else {
        tomatoImg.classList.add("hide")
    }
});

peppersBtn.addEventListener("change", function() {
    if(peppersBtn.checked) {
        peppersImg.classList.remove("hide")
    } else {
        peppersImg.classList.add("hide")
    }
});

olivesBtn.addEventListener("change", function() {
    if(olivesBtn.checked) {
        olivesImg.classList.remove("hide")
    } else {
        olivesImg.classList.add("hide")
    }
});

cheeseBtn.addEventListener("change", function() {
    if(cheeseBtn.checked) {
        cheeseImg.classList.remove("hide")
    } else {
        cheeseImg.classList.add("hide")
    }
});

everythingBtn.addEventListener("change", function() {
    if(everythingBtn.checked) {
        cheeseImg.classList.remove("hide")
        olivesImg.classList.remove("hide")
        peppersImg.classList.remove("hide")

    } else {
        cheeseImg.classList.add("hide")
        olivesImg.classList.add("hide")
        peppersImg.classList.add("hide")
    }
});
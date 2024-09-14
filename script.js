const sounds = document.querySelectorAll("audio"); /*Массив со звуками*/
const pads = document.querySelectorAll(".sound-pads>div"); /*Массив с клавишами*/        /*Индекс каждого массива соответствует друг другу*/
const animationZone = document.querySelector(".animation-zone")

/*Массив цвета*/
const color = [
    "rgb(209, 38, 38)",
    "rgb(206, 213, 67)",
    "rgb(68, 221, 93)",
    "rgb(100, 59, 213)",
    "rgb(212, 76, 178)"
]


function bubbleAnimation(item) { /*Функция анимации шарика*/
    const bubble = document.createElement("div"); /*Создает круг и задает ему параметры*/
    animationZone.appendChild(bubble); /*Кладет один div в другой*/
    bubble.style.backgroundColor = "black";
    bubble.style.backgroundColor = color[item];
    bubble.style.animation = "bubbleFly 10s" /*Продолжительность анимации*/
    bubble.addEventListener("animationend", function () { animationZone.removeChild(bubble) })
}

function playSound(item) {
    return function () {
        if (sounds[item].loop) {
            sounds[item].pause()
            sounds[item].loop = false;
        } else {
            sounds[item].currentTime = 0;
            sounds[item].play();
            sounds[item].loop = true;
            bubbleAnimation(item);
        }
        }
}


for (let i = 0; i < pads.length; i += 1) { /**/
    pads[i].addEventListener("click", playSound(i))
}

function removeBubble() {  /*Функция, которая убирает круг с экрана*/
    animationZone.removeChild(bubble)
}



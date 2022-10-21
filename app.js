// var minute = document.querySelector(".minutes")
var seconds = document.querySelector(".seconds")

var pause = document.querySelector("#pause")
var start = document.querySelector("#start")
let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");



/* Set Time Here */
const timeValue = 60 /* ****************************************************************************** */
/* Set Time Here */



var time = timeValue
const progressEndValue = 0

var isPaused = true
var isStart = true

var timer = setInterval(() => {
    if (!isPaused) {
        // minute.innerHTML = parseInt(time / 60, 10)
        seconds.innerHTML = parseInt(time % 60, 10)
        time--;
        valueContainer.textContent = `${time}`;
        progressBar.style.background = `conic-gradient(
      #1fcecb ${time * 6.2}deg,
      #cadcff ${time * 3.6}deg
  )`;
        if (time == progressEndValue) {
            isPaused = true
            isStart = true
            start.innerHTML = "Start"
        }
    }

}, 1000)

pause.addEventListener('click', (e) => {
    e.preventDefault()
    isPaused = !isPaused
    if (!isPaused) {
        pause.innerHTML = "Pause"
    }
    else {
        pause.innerHTML = "Resume"
    }
})

start.addEventListener('click', (e) => {
    e.preventDefault()
    isStart = !isStart
    time = timeValue
    isPaused = !isPaused
    if (!isStart) {
        start.innerHTML = "Stop"
    }
    else {
        start.innerHTML = "Start"
    }
})

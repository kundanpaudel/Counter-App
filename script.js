let inc = document.getElementById("num")
let sav = document.getElementById("saved")
let count = 0

function increase() {
  count += 1
  inc.textContent = count
}

function saving() {
  sav.textContent = sav.textContent + count + " - "
  count = 0
}
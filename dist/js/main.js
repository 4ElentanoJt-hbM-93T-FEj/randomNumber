"use strict";
const startRange = 1;
const endRange = 10;
let historyNumber = [];
let randomNumber = (Math.random() * 100).toFixed();
let attempts = Math.log2(endRange - startRange + 1).toFixed();
const startRangeElement = document.querySelector(".start__range");
startRangeElement.innerHTML = startRange;
const endRangeElement = document.querySelector(".end__range");
endRangeElement.innerHTML = endRange;
const getNumberInput = document.querySelector(".enter__number");
const getCheckNumberBtn = document.querySelector(".check__btn");
const getHistoryBlock = document.querySelector(".history__list");
const getNewNumberBtn = document.querySelector(".new__number__btn");
const getAttemts = document.querySelector(".attempts__list");
// const getListButtons = document.querySelector(".list__buttons");

// getNumberInput.addEventListener("input", () => {
//   console.log(getNumberInput.value);
// });

getCheckNumberBtn.addEventListener("click", () => {
  if (
    getNumberInput.value &&
    +getNumberInput.value >= startRange &&
    +getNumberInput.value <= endRange &&
    attempts >= 1
  ) {
    historyNumber.push(getNumberInput.value);
    getHistoryBlock.innerHTML = historyNumber.toString();
    // getHistoryBlock.innerHTML += `${getNumberInput.value}, `;
    console.log(parseInt(getNumberInput.value));
    getNumberInput.value = "";
    attempts -= 1;
    console.log(attempts);
    getAttemptsHearts();
    // if (attempts == 0) {
    //   getListButtons.innerHTML = "";
    // }
  }
});

getNewNumberBtn.addEventListener("click", () => {
  historyNumber = [];
  getNumberInput.value = "";
  getHistoryBlock.innerHTML = "";
  randomNumber = (Math.random() * 100).toFixed();
  attempts = Math.log2(endRange - startRange + 1).toFixed();
  getAttemptsHearts();
  console.log("История очищена и создано новое число");
  console.log(randomNumber);
});

getAttemptsHearts();
function getAttemptsHearts() {
  let str = "";
  for (let i = 0; i < attempts; i++) {
    str += "<img class='attempts' src='/dist/assets/attempts.png' alt='' />";
  }
  getAttemts.innerHTML =
    str ||
    `<video class="failed__video" playsinline autoplay muted loop preload="auto">
        <source src="/dist/assets/sticker.webm" type="video/webm" />
      </video>`;
}

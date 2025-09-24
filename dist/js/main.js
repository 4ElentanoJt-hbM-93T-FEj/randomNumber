"use strict";
const startRange = 1;
const endRange = 100;
let historyNumber = [];
let randomNumber = (Math.random() * 100).toFixed();
let attempts = 5;
console.log(randomNumber);

const startRangeElement = document.querySelector(".start__range");
startRangeElement.innerHTML = startRange;

const endRangeElement = document.querySelector(".end__range");
endRangeElement.innerHTML = endRange;

const getNumberInput = document.querySelector(".enter__number");

// getNumberInput.addEventListener("input", () => {
//   console.log(getNumberInput.value);
// });

const getCheckNumberBtn = document.querySelector(".check__btn");
const getHistoryBlock = document.querySelector(".history__list");

getCheckNumberBtn.addEventListener("click", () => {
  if (
    getNumberInput.value &&
    +getNumberInput.value >= startRange &&
    +getNumberInput.value <= endRange
  ) {
    historyNumber.push(getNumberInput.value);
    getHistoryBlock.innerHTML = historyNumber.toString();
    // getHistoryBlock.innerHTML += `${getNumberInput.value}, `;
    console.log(parseInt(getNumberInput.value));
    getNumberInput.value = "";
    attempts -= 1;
  }
});

const getNewNumberBtn = document.querySelector(".new__number__btn");

getNewNumberBtn.addEventListener("click", () => {
  historyNumber = [];
  getNumberInput.value = "";
  getHistoryBlock.innerHTML = "";
  randomNumber = (Math.random() * 100).toFixed();
  console.log("История очищена и создано новое число");
  console.log(randomNumber);
});

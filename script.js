"use strict";

const lowNum = document.getElementById("lowest");
const highNum = document.getElementById("highest");
const genButton = document.getElementById("generate-button");
const output = document.getElementById("output");
const outputDescription = document.getElementById("output-description");


const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const dottedNum = (num) => {
  return String(num)
    .split("").reverse().join("")
    .replace(/\d{3}/g, match => match + ".")
    .split("").reverse().join("")
    .replace(/^\./, "")
}


genButton.addEventListener("click", () => {
  const minNum = parseInt(lowNum.value);
  const maxNum = parseInt(highNum.value);
  
  if(minNum > maxNum) {
    outputDescription.textContent = "The minimum number can't be higher than the maximum number.";
    output.textContent = ""
    return
  }
  
  if(minNum === maxNum) {
    outputDescription.textContent = "I wonder, which number that could be...";
    output.textContent = ""
    return
  }
  
  let randomNum = randomNumber(minNum, maxNum);
  
  if(randomNum >= 1000) {
    randomNum = dottedNum(randomNum)
  }
  
  outputDescription.textContent = "Your number:";
  output.textContent = `${randomNum}`;
})

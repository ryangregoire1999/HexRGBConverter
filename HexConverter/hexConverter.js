const { question } = require("readline-sync");

function getConvertedNumber(a) {
  return a.toString(16);
}

let isCompleted = false;
const hexColorCodeInput = parseInt(question("Enter a Number: "));

while (!isCompleted) {
  // const rValue = Math.floor(Math.random() * 255);

  const rPos = getConvertedNumber(hexColorCodeInput);

  if (!isCompleted) {
    console.log("--------------------------------");
    console.log(`Hex: #${rPos}${rPos}${rPos}`);
    console.log("--------------------------------");

    console.log(`R: ${hexColorCodeInput}`);
    console.log(`G: ${hexColorCodeInput}`);
    console.log(`B: ${hexColorCodeInput}`);

    isCompleted = true;
  }
}

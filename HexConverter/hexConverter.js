function getConvertedNumber(a) {
  return a.toString(16);
}

const rValue = Math.floor(Math.random() * 255);

const rPos = getConvertedNumber(parseInt(rValue));

console.log("--------------------------------");
console.log(`Hex: #${rPos}${rPos}${rPos}`);
console.log("--------------------------------");

console.log(`R: ${rValue}`);
console.log(`G: ${rValue}`);
console.log(`B: ${rValue}`);

function rot13(str) { 
  let decodeResult = "";
  let alphaStart = "abcdefghijklm".toUpperCase();
  let alphaEnd = "nopqrstuvwxyz".toUpperCase();
  for (let i = 0; i < str.length; i++) {
    let letterToBeDecoded = str[i];
    if (alphaStart.indexOf(letterToBeDecoded) >= 0) {
      decodeResult += alphaEnd[alphaStart.indexOf(letterToBeDecoded)];
    }else if (alphaEnd.indexOf(letterToBeDecoded) >= 0) {
      decodeResult += alphaStart[alphaEnd.indexOf(letterToBeDecoded)];
    } else {
      decodeResult += letterToBeDecoded;
    }
  }
  return decodeResult;
}
let result = rot13("SERR PBQR PNZC")
console.log(result);

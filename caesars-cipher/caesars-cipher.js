function rot13(str) {
  // setup alphabet array
  let alphabet = 
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // make regex for alphabet
  let alpha = /[A-Za-z]/g;
  // extract string based on regex
  let extr = str.match(alpha);
  // get index of item in extr and equivalent 
  // then place in array
  let eqArr = [];
  for (let elem of extr) {
    let index = alphabet.indexOf(elem);
    if(index-13>0) 
      eqArr.push(alphabet[index-13]);
    else if (index-13 < 0){
      eqArr.push(alphabet[alphabet.length-Math.abs(index-13)])
    } else {
      eqArr.push(alphabet[index-13])
    }
  }
  // make str array
  let strArr = [...str]
  // change every letter in str to equivalent
  for(let i=0; i<strArr.length; i++) {
    let reg = /[A-Z]/ig;
    if (reg.test(strArr[i]) === false) 
      eqArr.splice(i, 0, strArr[i]);
  }
  // join equivalent array
  let joined = eqArr.join("");
  console.log(joined, str)
  return joined;
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");

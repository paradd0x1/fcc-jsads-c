function convertToRoman(num) {
  // setup str array
  let str = "";

  // setup arabic numeral array and roman numeral array
  let arabic = 
    [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let roman =
    ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

  // get num and find in arabic numerals (less than or equal to the greatest possible, e.g. if given is 29, then 10. if 5, then 5)
  let gp = Math.max(...arabic.filter(a => a <= num));
  
  let arabicIndex;
  let romanNum;
  // produce a string with corresponding roman numeral if equal
  if (gp == num) {
    // get index in arabic
    arabicIndex = arabic.indexOf(gp);
    // get corresponding roman numeral;
    str = roman[arabicIndex];
  } else {
    // 3) else divide num to greatest possible and get floor round
    let floor = Math.floor(num/gp);
    console.log(floor, gp);
    // if no remainder, produce string 
    // get index in arabic
    arabicIndex = arabic.indexOf(gp);
    // get corresponding roman numeral;
    romanNum = roman[arabicIndex];
    // loop to add 
    for (let i=1; i<=floor; i++) {
      str += romanNum;
    }
    if (num % gp !== 0) {
      let rem = num % gp;
      str += convertToRoman(rem);
    }
    // else, repeat #3
  }
  console.log(str)
  return str;
}

convertToRoman(5231);

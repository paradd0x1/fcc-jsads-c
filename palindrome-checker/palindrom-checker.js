function palindrome(str) {
  
  // make regex to remove all non-alphanumeric characters
  let alpha = /[^A-Za-z0-9]/ig;
  // remove spaces, convert to lowercase
  let edit = str
    .replace(alpha, "")
    .toLowerCase()
    .split(" ");
  let joined = edit.join();
  // split to each item
  let split = joined.split("");
  // make reverse array to store each item for reference
  let reference = [];
  for (let j=split.length-1; j>=0; j--) {
    reference.push(split[j])
  }

  console.log(split, reference);

  // check for backward spelling
  for (let i=split.length-1; i>=0; i--) {
    if (split[i] != reference[i])
      return false;
  } 

  return true;
}

palindrome("_eye");

function telephoneCheck(str) {
  // make regex
  let rgx = /^1[(]\d{3}[)]\d{3}.\d{4}$|^1\d{3}-\d{3}-\d{4}|^(1|5)\d{9,10}$|^\d{3}-\d{3}-\d{4}$|^[(]\d{3}[)]\d{3}-\d{4}$/g;

  // delete spaces
  let noSpace = str.split(" ").join("");

  // match
  let match = noSpace.match(rgx);

  if(match)
    return true;
  else
    return false;
}

telephoneCheck("1 456 789 4444");

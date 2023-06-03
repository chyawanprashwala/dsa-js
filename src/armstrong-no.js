function isArmstrong(num) {
  //convert num to string
  const strNum = String(num);
  //calculate length of string
  const numDigits = strNum.length;
  let sum = 0;
  //loop through the string
  for (let i = 0; i < numDigits; i++) {
    /* parseInt function converts its first
    argument to a string, parses that string,
    then returns an integer or NaN.
    If not NaN , the return value will
    be the integer that is the first argument
   taken as a number in the specified radix */
    const digit = parseInt(strNum[i]);
    /* multiply each digit to the power equals to the
    no.s of digit in the number and add */
    sum += Math.pow(digit, numDigits);
  }
  //validate sum === input
  return sum === num;
}

isArmstrong(123);
isArmstrong(153);

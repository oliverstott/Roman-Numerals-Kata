export function numberToRomanNumeral(number) {
  const NUMERAL_ONE = "I";
  const NUMERAL_FIVE = "V";
  const NUMERAL_TEN = "X";

  // WHat are these names?!😢 
  const THRESHOLD_ONE = 1;   
  const THRESHOLD_FIVE = 5;
  const THRESHOLD_TEN = 10;

  let numeral = "";

  if (number >= THRESHOLD_TEN - 1) {
    if (number === THRESHOLD_TEN - 1) {
      numeral += NUMERAL_ONE;
    }

    numeral += NUMERAL_TEN;
  } else if (number >= THRESHOLD_FIVE - THRESHOLD_ONE) {
    if (number === THRESHOLD_FIVE - THRESHOLD_ONE) {
      numeral += NUMERAL_ONE;
    }

    numeral += NUMERAL_FIVE;

    if (number >= 5) {
      numeral += numberToRomanNumeral(number - 5);
    }
  } else {
    for (let i = 0; i < number; i++) {
      numeral += "I";
    }
  }

  return numeral;
}

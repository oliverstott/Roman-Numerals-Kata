export function numberToRomanNumeral(number) {
  const NUMERAL_ONE = "I";
  const NUMERAL_FIVE = "V";
  const NUMERAL_TEN = "X";

  const THRESHOLD_ONE = 1;
  const THRESHOLD_FIVE = 5;
  const THRESHOLD_TEN = 10;

  let numeral = "";

  const tenThresholdCase = () => {
    if (number === THRESHOLD_TEN - 1) {
      numeral += NUMERAL_ONE;
    }

    numeral += NUMERAL_TEN;

    if (number > THRESHOLD_TEN) {
      numeral += numberToRomanNumeral(number - THRESHOLD_TEN);
    }

    return numeral;
  };

  const fiveThresholdCase = () => {
    if (number === THRESHOLD_FIVE - 1) {
      numeral += NUMERAL_ONE;
    }

    numeral += NUMERAL_FIVE;

    if (number >= THRESHOLD_FIVE) {
      numeral += numberToRomanNumeral(number - 5);
    }

    return numeral;
  };

  if (number >= THRESHOLD_TEN - 1) {
    numeral += tenThresholdCase();
  } else if (number >= THRESHOLD_FIVE - 1) {
    numeral += fiveThresholdCase();
  } else {
    for (let i = 0; i < number; i++) {
      numeral += "I";
    }
  }

  return numeral;
}

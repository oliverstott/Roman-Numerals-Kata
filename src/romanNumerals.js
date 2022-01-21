export function numberToRomanNumeral(number) {
  let numeral = "";

  if (number >= 9) {
    if (number === 9) {
      numeral += "I";
    }
    numeral += "X";
  } else if (number >= 4) {
    if (number === 4) {
      numeral += "I";
    }

    numeral += "V";

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

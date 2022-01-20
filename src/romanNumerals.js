export function numberToRomanNumeral(number) {
  let numeral = "";

  if (number >= 4) {
    if (number === 4) {
      numeral += "I";
    }
    numeral += "V";
  } else {
    for (let i = 0; i < number; i += 1) {
      numeral += "I";
    }
  }

  return numeral;
}

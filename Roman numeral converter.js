function convertToRoman(num) {
  // Matriz que contiene los valores de las diferentes denominaciones de números romanos.
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let romanNumeral = "";

  // Recorre la matriz `romanNumerals` de mayor a menor denominación.
  for (let i = 0; i < romanNumerals.length; i++) {
    // Resta el valor de cada denominación del número entero restante hasta que se construye el número romano completo.
    while (num >= romanNumerals[i].value) {
      romanNumeral += romanNumerals[i].numeral;
      num -= romanNumerals[i].value;
    }
  }

  return romanNumeral;
}

// Ejemplo de uso:
console.log(convertToRoman(2)); // "II"
console.log(convertToRoman(3)); // "III"
console.log(convertToRoman(4)); // "IV"
console.log(convertToRoman(5)); // "V"
console.log(convertToRoman(9)); // "IX"
console.log(convertToRoman(12)); // "XII"
console.log(convertToRoman(16)); // "XVI"

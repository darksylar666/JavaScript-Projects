function telephoneCheck(str) {
  // Expresión regular para validar si la cadena de texto es un número de teléfono válido en los Estados Unidos.
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}

// Ejemplo de uso:
console.log(telephoneCheck("555-555-5555")); // true

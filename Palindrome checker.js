function palindrome(str) {
  // Eliminar caracteres no alfanuméricos y convertir a minúsculas
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  // Comparar la cadena original con la cadena invertida
  return str === str.split("").reverse().join("");
}

palindrome("eye");

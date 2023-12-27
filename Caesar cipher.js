function rot13(str) {
  return str
    .replace(/[A-Z]/g, (letter) =>
      String.fromCharCode(((letter.charCodeAt(0) - 65 + 13) % 26) + 65)
    )
    .replace(/[a-z]/g, (letter) =>
      String.fromCharCode(((letter.charCodeAt(0) - 97 + 13) % 26) + 97)
    );
}

/* 
Este código define una función llamada rot13 que toma una cadena como entrada. La función devuelve una nueva cadena que es el 
resultado de aplicar el cifrado ROT13 a la cadena de entrada.
El cifrado ROT13 es un cifrado de sustitución de letras simple que reemplaza una letra por la letra 13 letras después de ella 
en el alfabeto. Por ejemplo, la letra ‘A’ se reemplazaría por la letra ‘N’, la letra ‘B’ se convertiría en ‘O’, y así 
sucesivamente.
Ahora veamos el código en sí. El método replace se usa dos veces en esta función. La primera llamada a replace reemplaza todas 
las letras mayúsculas en la cadena de entrada con sus equivalentes ROT13. La segunda llamada a replace hace lo mismo para 
las letras minúsculas.
Las expresiones regulares /[A-Z]/g y /[a-z]/g coinciden con todas las letras mayúsculas y minúsculas en la cadena de entrada,
respectivamente. El método String.fromCharCode se utiliza para convertir el código ASCII de cada letra en su equivalente ROT13.
La expresión ((letter.charCodeAt(0) - 65 + 13) % 26) + 65 se utiliza para calcular el código ASCII del equivalente ROT13 de una 
letra mayúscula. La expresión ((letter.charCodeAt(0) - 97 + 13) % 26) + 97 se utiliza para calcular el código ASCII del 
equivalente ROT13 de una letra minúscula.
*/

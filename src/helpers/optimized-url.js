export function OptimizedUrl(name){
    const nameUrl = name
                    .normalize("NFD") // utilizamos la función normalize() con el parámetro "NFD" para descomponer los caracteres a su forma de combinación de caracteres diacríticos. Esto nos permite separar los caracteres con tilde en dos partes: el carácter base y el diacrítico.
                    .replace(/[\u0300-\u036f]/g, "") // Luego, utilizamos la expresión regular /[\u0300-\u036f]/g para coincidir con todos los caracteres diacríticos (que incluyen las tildes) y el método replace() para eliminarlos.
                    .split(/\W+/) // la expresión regular \W+ se utiliza como argumento para el método split(). Esta expresión regular coincide con cualquier carácter que no sea una letra minúscula, mayúscula o número. Al dividir la cadena name utilizando \W+, se eliminan todos los caracteres no deseados y se obtiene un array con las partes relevantes.
                    .join("-") // utilizamos el método join() para unir las partes del array con un guion (-) como delimitador,
                    .toLowerCase()
                    .replace(/^[^a-zA-Z0-9]+/, ''); // elimina cualquier secuencia de caracteres que no sean letras o números al comienzo de la cadena.
    return nameUrl
}
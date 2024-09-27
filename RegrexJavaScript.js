// Validación de datos
const patronEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
const emails = ["usuario@dominio.com", "jose", "a355898@alumnosuaslp.com.mx", "JuanGabriel123"];

emails.forEach(obj => {
    if (patronEmail.test(obj)) {
        console.log(`${obj}: es válido`);
    } else {
        console.log(`${obj}: no es válido`);
    }
});

//Búsqueda y extracción de patrones
const texto = "Juan tiene 7 peras y alberto odia el número 4578";
const patronNumeros = /\d+/g;
const numeros = texto.match(patronNumeros);
console.log(numeros);

//Sustitución de texto
const texto1 = "Hola@2024! Soy usuario#1.";
const texto2 = "J- :=)    ??u??   .-.  a  ^.^ ni  @.@t    //--//o";
const patronCaracteres = /\W+/g;
const nuevoTexto1 = texto1.replace(patronCaracteres, ' ');
const nuevoTexto2 = texto2.replace(patronCaracteres, '');
console.log(nuevoTexto1);
console.log(nuevoTexto2);

//División de cadenas de texto
const texto3 = "JavaScript    es    un  lenguaje ";
const palabras = texto3.split(/\s+/);
console.log(palabras);

//Limpiar y normalizar datos
const texto4 = "¡Nooo! ¿Así es como le hablas? deberias, comportarte!!!!";
const texto5 = "Sabi2as qu483e l243a5s 76za768nh767a10or87987ia712s son235 656mal7686v12adas?";
const patronPuntuacion = /[^\w\s]/g;
const textoLimpio1 = texto4.replace(patronPuntuacion, '');
const textoLimpio2 = texto5.replace(patronNumeros, '');
console.log(textoLimpio1);
console.log(textoLimpio2);

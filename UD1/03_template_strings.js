function hola(nombre, apellidos, años) {
    return `Hola ${nombre} ${apellidos}, tienes ${años} años de edad`;
}

let result = hola('Alejandro', 'Alagon', 21);
if (result !== "Hola Alejandro Alagon, tienes 21 años de edad") { 
    console.log('test fail');
    return;
}

console.log('Hola Alejandro Alagon, tienes 21 años de edad');

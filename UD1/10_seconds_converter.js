function conversionSegundos(Segundos) {
    const horas = Math.floor(Segundos / 3600);
    const minutos = Math.floor((Segundos % 3600) / 60);
    const segundos = Segundos % 60;

    return `${horas} horas, ${minutos} minutos, y ${segundos} segundos`;
}

console.log(conversionSegundos(450)); 


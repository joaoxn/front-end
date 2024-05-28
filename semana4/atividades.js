{ // map
    let numeros = [5, 8, 3, 6];

    let numerosTriplo = numeros.map((numero) => {
        return numero * 3;
    })

    console.log(numerosTriplo);
}

{ // filter
    let numeros = [18, 12, 35, 46, 15, 10, 8, 75, 81, 2];

    let numerosFiltro = numeros.filter((numero) => {
        return numero <  18;
    })

    console.log(numerosFiltro);
}
{ console.log("AULA 1");
    { console.log("  map ")
        let numeros = [5, 8, 3, 6];

        let numerosTriplo = numeros.map((numero) => {
            return numero * 3;
        })

        console.log(numerosTriplo);
    }

    { console.log("  filter ");
        let numeros = [18, 12, 35, 46, 15, 10, 8, 75, 81, 2];

        let numerosFiltro = numeros.filter((numero) => {
            return numero < 18;
        })

        console.log(numerosFiltro);
    }

    { console.log("  reduce (verificação) ");
        let numeros = [1, 22, 31, 40, 3, 5];

        let numerosMaior = numeros.reduce((total, numero) => {
            if (numero > total) {
                return numero;
            }
            return total;
        })

        console.log(numerosMaior);
    }
    { console.log("  reduce (teste) ");
        let numeros = [-1, -22, -31, -40, -3, -5];

        let numerosMaior = numeros.reduce((total, numero) => {
            return numero > total ? numero : total;
        }, 0)

        console.log(numerosMaior);   
    }
}
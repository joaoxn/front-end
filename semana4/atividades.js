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

{ console.log("AULA 3");
    class Carro {
        constructor(modelo, cor, marca) {
            this.modelo = modelo
            this.cor = cor
            this.marca = marca
            Object.preventExtensions(this)
        }

        metodo() {
            this.aaah = "shit"
        }
    }
    let carro = new Carro("corolla", "prata")
    console.log(carro)
    carro.modelo = "modelo"
    console.log(carro)
    carro.doideira = "mama"
    console.log(carro)
    {
        {
            const {modelo} = carro
            modelo1_temp = modelo
        }
    }
    const modelo1 = modelo1_temp
    console.log(modelo1_temp)
    delete modelo1_temp
    const {modelo} = new Carro("modelo2")
    console.log(modelo1)
    console.log(modelo1_temp)
}
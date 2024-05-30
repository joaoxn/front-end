let nome = window.prompt("Digite seu nome");
let defaultCard = [`<p style="background-color: var(--background-secondary); border-radius: 1rem; padding: 1rem;">`, `</p>`];
exibirDesempenho(calcularMedia(capturarNotas().notas));
escreverNomes(["João", "Jéssica", "Júlia"], "Nomes de pessoas aleatórias: ");

escreverNaTela("<p class='text-center'" + defaultCard[0].slice(2) + tabuada([30, 40], [34, 46]) + defaultCard[1]);

capturarDadosAluno();

/// Início - MINHA BIBLIOTECA DE FUNÇÕES ///

function escreverNaTela(textoFormatado, condicao, motivo) {
    // textoFormatado exibe apenas se condicao == true || condicao === undefined
    // Se motivo existe, exibe quando condição == false

    if (condicao || condicao === undefined) {
        document.write(textoFormatado);
    } else if (motivo) {
        document.write(`<div class='alert alert-warning' role='alert'>Atualize a página e faça o que se pede para ver essa mensagem! Motivo: ${motivo}<br/></div>`);
    } else {
        document.write(`<div class='alert alert-warning' role='alert'>Atualize a página e faça o que se pede para ver essa mensagem!<br/></div>`);
    }
}

/// Fim - MINHA BIBLIOTECA DE FUNÇÕES ///

// Ex. 01
function calcularMedia(array) {
    return array.reduce((total, numero) => total + numero, 0) / array.length;
}

// Ex. 02
function exibirDesempenho(notaFinal) {
    if (notaFinal >= 10) {
        escreverNaTela(`${defaultCard[0]}Parabéns, ${nome}! Você arrasou, aprovado com excelência! :D Média: ${notaFinal}${defaultCard[1]}`,
            nome, "Seu nome é necessário para exibir essa mensagem!");
    } else if (notaFinal >= 7) {
        escreverNaTela(`${defaultCard[0]}Parabéns, ${nome}! Você superou a média mínima, não esqueça de continuar estudando! :) Média: ${notaFinal}${defaultCard[1]}`,
            nome, "Seu nome é necessário para exibir essa mensagem!");
    } else {
        escreverNaTela(`${defaultCard[0]}Infelizmente, você não alcançou a média mínima. Média: ${notaFinal}${defaultCard[1]}`,
            notaFinal || notaFinal == 0, "As notas são necessárias para calcular seu desempenho!");
    }
}

// Ex. 03
function arrayToString(array) {
    let text = "";
    array.forEach(elem => {
        text += elem + ", ";
    });

    return text.slice(0, -2);
}

function escreverNomes(nomes, prefixo) {
    escreverNaTela(defaultCard[0] + prefixo + arrayToString(nomes) + defaultCard[1])
}

// Ex. 04
function tabuada(xAlcance, yAlcance) {
    let texto = "";
    for (let i = xAlcance[0]; i <= xAlcance[1]; i++) {
        for (let j = yAlcance[0]; j <= yAlcance[1]; j++) {
            texto += `${i} x ${j} = ${i * j}<br/>`;
        }
        texto += "<br/>";
    }
    return texto;
}

// Ex. 05
function capturarDadosAluno() {
    const aluno = {}
    aluno.nome = window.prompt("Qual o nome do aluno?");
    aluno.idade = window.prompt("Qual a idade do aluno?");
    aluno.serie = window.prompt("Qual a série do aluno?");
    aluno.escola = window.prompt("Qual o nome da escola?");
    aluno.materia = window.prompt("Qual a matéria favorita do aluno?");

    let confirma = window.confirm(`
    Nome: ${aluno.nome}
    Idade: ${aluno.idade}
    Série: ${aluno.serie}
    Escola: ${aluno.escola}
    Matéria: ${aluno.materia}

    Você confirma os dados acima?
    `)

    escreverNaTela(defaultCard[0] +
        `Nome: ${aluno.nome}<br/>
        Idade: ${aluno.idade}<br/>
        Série: ${aluno.serie}<br/>
        Escola: ${aluno.escola}<br/>
        Matéria: ${aluno.materia}`
        + defaultCard[1], confirma, "Os dados não foram informados corretamente ou foram cancelados.");
}

// Ex. 06
function capturarNotas() {
    let i = 1;
    let notas = []
    let materia;
    if (window.confirm(
        `A média de suas notas será calculada a seguir.\n
Por favor, digite as notas desejadas para calcular a média entre elas.\n
Cancele a ação quando desejar parar.\n
Cancele essa ação para pular esse processo!`
    )) {
        materia = window.prompt("Digite a matéria das suas notas");
        while (true) {
            let notaInput = window.prompt(`Digite sua ${i}ª nota. Cancele quando desejar parar!`);

            if (notaInput == null) {
                i--;
                break;
            } else if (isNaN(parseFloat(notaInput))) {
                alert("Entrada inválida! Digite um número inteiro ou decimal!");
                continue;
            } else {
                notas.push(parseFloat(notaInput));
            }
            i++;
        }
    }
    return {
        nomeMateria: materia,
        notas: notas
    }
}

// Ex. 07
function maiorElemento(array) { // Compara baseado em elemento1 > elemento2
    return array.reduce((resultado, elem) => elem > resultado);
}

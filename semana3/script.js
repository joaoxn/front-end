/// Esse é o código JavaScript responsável por preencher a tag <main> ///

let nome;

aula2();
aula3();

/// MINHA BIBLIOTECA DE FUNÇÕES ///

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

/// AULA 2 ///
function aula2() {
    escreverNaTela("<h1 class='text-topic' style='margin-top: 0;'>Aula 2</h1>");
    { // Exercício: Convite de Casamento
        escreverNaTela("<h2>Exercício: Convite de Casamento</h2>");
        nome = window.prompt("Digite seu nome");

        escreverNaTela(prepararConvite(nome), nome, "Seu nome é necessário para inserir no convite!");
    }
}

function prepararConvite(nome) {
    return `<p style="background-color: var(--background-secondary); border-radius: 1rem; padding: 1rem;">${nome}, é com muito orgulho que convido-lhe para meu casamento.</p>`;
}

/// AULA 3 ///
function aula3() {
    escreverNaTela("<h1 class='text-topic'>Aula 3</h1>", true);
    { // Exercício: Cálculo de Média
        escreverNaTela("<h2>Exercício: Cálculo de Média</h2>");
        let soma = 0;
        let i = 1;
        if (window.confirm(
            `A média de suas notas será calculada a seguir.\n
Por favor, digite as notas desejadas para calcular a média entre elas.\n
Cancele a ação quando desejar parar.`
        )) {
            while (true) {
                let notaInput = window.prompt(`Digite sua ${i}ª nota`);

                if (notaInput == null) {
                    i--;
                    break;
                } else if (isNaN(parseFloat(notaInput))) {
                    alert("Entrada inválida! Digite um número inteiro ou decimal!");
                    continue;
                } else {
                    soma += parseFloat(notaInput);
                }
                i++;
            }
        }
        let media = soma / i;

        if (media >= 7) {
            escreverNaTela(`<p style="background-color: var(--background-secondary); border-radius: 1rem; padding: 1rem;">Parabéns, ${nome}! Você superou a média mínima, não esqueça de continuar estudando! :) Média: ${media}</h3>`, nome, "Seu nome é necessário para exibir essa mensagem!");
        } else {
            escreverNaTela(`<p style="background-color: var(--background-secondary); border-radius: 1rem; padding: 1rem;">Infelizmente, você não alcançou a média mínima. Média: ${media}</h3>`, media, "As notas são necessárias para calcular seu desempenho!");
        }
    }
}
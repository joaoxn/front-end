aula2();
aula3();

/// MINHA BIBLIOTECA DE FUNÇÕES /// {

    function escreverNaTelaSeCondicao(textoFormatado, condicao, motivo) {
        if (condicao) {
            document.write(textoFormatado);
        } else if (motivo) {
            document.write(`<div class='alert alert-warning' role='alert'>Atualize a página e faça o que se pede para ver essa mensagem! Motivo: ${motivo}<br/></div>`);
        } else {
            document.write(`<div class='alert alert-warning' role='alert'>Atualize a página e faça o que se pede para ver essa mensagem!<br/></div>`);
        }
    }

/// MINHA BIBLIOTECA DE FUNÇÕES /// }

/// AULA 2 /// {
    function aula2() {
        let nome = window.prompt("Digite seu nome");

        escreverNaTelaSeCondicao(prepararConvite(nome), nome, "Seu nome é necessário para inserir no convite!");
    }

    function prepararConvite(nome) {
        return `<h3 class="text-topic">${nome}, é com muito orgulho que convido-lhe para meu casamento.</h3>`
    }
/// AULA 2 /// }

/// AULA 3 /// {
    function aula3() {
        let media = window.prompt("Digite a média alcançada");

     if (media >= 7) {
            escreverNaTelaSeCondicao(`<h3 class="text-topic">Parabéns, ${nome}! Você superou a média mínima, não esqueça de continuar estudando! :)</h3>`, nome, "Seu nome é necessário para exibir essa mensagem!");
        } else {
            escreverNaTelaSeCondicao(`<h3 class="text-topic">Infelizmente, você não alcançou a média mínima.</h3>`, media, "A média é necessária para calcular seu desempenho!");
        }
    }
/// AULA 3 /// }
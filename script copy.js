let documentos = {
    botaoAdicao : document.querySelector('input#adicao'),
    botaoSubtracao : document.querySelector('input#subtracao'),
    botaoMultiplicacao : document.querySelector('input#multiplicacao'),
    botaoDivisao : document.querySelector('input#divisao'),
    botaoLimpar : document.querySelector('input#limpar'),
    botao9 : document.querySelector('input#number9'),
    botao8 : document.querySelector('input#number8'),
    botao7 : document.querySelector('input#number7'),
    botao6 : document.querySelector('input#number6'),
    botao5 : document.querySelector('input#number5'),
    botao4 : document.querySelector('input#number4'),
    botao3 : document.querySelector('input#number3'),
    botao2 : document.querySelector('input#number2'),
    botao1 : document.querySelector('input#number1'),
    botao0 : document.querySelector('input#number0')
}


let dados = {
    valor1: "0",
    valor2: "0",
    metodo: undefined,
    historico: [ ]
}

botaoAdicao.addEventListener("click", function() { metodo("adicao") })
botaoSubtracao.addEventListener("click", function() { metodo("subtracao")} )
botaoMultiplicacao.addEventListener("click", function() { metodo("multiplicacao")} )
botaoDivisao.addEventListener("click", function() { metodo("divisao")} )
botaoLimpar.addEventListener("click", limparVariaveis)

botao9.addEventListener("click", function() { adicionarNumero(9) })
botao8.addEventListener("click", function() { adicionarNumero(8) })
botao7.addEventListener("click", function() { adicionarNumero(7) })
botao6.addEventListener("click", function() { adicionarNumero(6) })
botao5.addEventListener("click", function() { adicionarNumero(5) })
botao4.addEventListener("click", function() { adicionarNumero(4) })
botao3.addEventListener("click", function() { adicionarNumero(3) })
botao2.addEventListener("click", function() { adicionarNumero(2) })
botao1.addEventListener("click", function() { adicionarNumero(1) })
botao0.addEventListener("click", function() { adicionarNumero(0) })

function metodo(operadorLogico) {
    dados.metodo = operadorLogico
    return console.log(`O metodo agora é ${operadorLogico}`)
}

function limparVariaveis() {
    dados.metodo = undefined
    dados.valor1 = 0
    dados.valor2 = 0
}

function adicionarNumero(numero) {
    if (dados.metodo != undefined) {
        dados.valor2 += numero
    } else {
        dados.valor1 += numero
    }
}
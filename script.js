let documentos = {
    botaoAdicao : document.querySelector('input#adicao'),
    botaoSubtracao : document.querySelector('input#subtracao'),
    botaoMultiplicacao : document.querySelector('input#multiplicacao'),
    botaoDivisao : document.querySelector('input#divisao'),
    botaoLimpar : document.querySelector('input#limpar'),
    botaoResultado : document.querySelector('input#resultado'),
    botao9 : document.querySelector('input#number9'),
    botao8 : document.querySelector('input#number8'),
    botao7 : document.querySelector('input#number7'),
    botao6 : document.querySelector('input#number6'),
    botao5 : document.querySelector('input#number5'),
    botao4 : document.querySelector('input#number4'),
    botao3 : document.querySelector('input#number3'),
    botao2 : document.querySelector('input#number2'),
    botao1 : document.querySelector('input#number1'),
    botao0 : document.querySelector('input#number0'),
    display : document.querySelector('section#display') 
}


let dados = {
    valor1: "0",
    valor2: "0",
    metodo: undefined,
    historico: [ ],
    resultado: undefined
}

//EventListers dos botões
documentos.botaoAdicao.addEventListener("click", function() { metodo("+") })
documentos.botaoSubtracao.addEventListener("click", function() { metodo("-")} )
documentos.botaoMultiplicacao.addEventListener("click", function() { metodo("x")} )
documentos.botaoDivisao.addEventListener("click", function() { metodo("/")} )
documentos.botaoLimpar.addEventListener("click", limparVariaveis)
documentos.botaoResultado.addEventListener("click", resultado)

documentos.botao9.addEventListener("click", function() { adicionarNumero(9) })
documentos.botao8.addEventListener("click", function() { adicionarNumero(8) })
documentos.botao7.addEventListener("click", function() { adicionarNumero(7) })
documentos.botao6.addEventListener("click", function() { adicionarNumero(6) })
documentos.botao5.addEventListener("click", function() { adicionarNumero(5) })
documentos.botao4.addEventListener("click", function() { adicionarNumero(4) })
documentos.botao3.addEventListener("click", function() { adicionarNumero(3) })
documentos.botao2.addEventListener("click", function() { adicionarNumero(2) })
documentos.botao1.addEventListener("click", function() { adicionarNumero(1) })
documentos.botao0.addEventListener("click", function() { adicionarNumero(0) })

function metodo(operadorAritimetico) {
    const manter = manterValor()
    manter
    dados.metodo = operadorAritimetico
    return documentos.display.innerHTML += `${operadorAritimetico}`
}


function limparVariaveis() {
    dados.metodo = undefined
    dados.valor1 = "0"
    dados.valor2 = "0"
    documentos.display.innerHTML = ""
    dados.resultado = undefined
}

function adicionarNumero(numero) {
    const somarValue = somarValor(numero)
    somarValue
    if (dados.metodo != undefined) {
        dados.valor2 += numero
        return documentos.display.innerHTML += `${numero}`
    } else {
        dados.valor1 += numero
        return documentos.display.innerHTML += `${numero}`
    }
}

// Decide quando vai manter o valor ao aperta nos operadores logicos.
function manterValor() {
    if (dados.valor1 !== "0" && dados.valor2 !== "0") {
        dados.valor1 = String(dados.resultado)
        dados.valor2 = "0"
    }
}

// Decide quando vai somar os numeros do resultado com os numeros digitados posteriormente
function somarValor(numero) {
    if ( resultado !== undefined ) {
        dados.resultado += String(numero)
    }
}

function metodoOperacional() {
    if (dados.metodo == "+") {
        return adicao(Number(dados.valor1), Number(dados.valor2))
    }
    
    if (dados.metodo == "-") {
        return subtracao(Number(dados.valor1), Number(dados.valor2))
    } 
    
    if (dados.metodo == "x") {
        return multiplicacao(Number(dados.valor1), Number(dados.valor2))
    }

    if (dados.metodo == "/") {
        return divisao(Number(dados.valor1), Number(dados.valor2))
    }
}

function adicao(valor1, valor2) {
    return dados.resultado = valor1 + valor2   
}

function subtracao(valor1, valor2) {
    return dados.resultado =  valor1 - valor2
}

function multiplicacao(valor1, valor2) {
    return dados.resultado = valor1 * valor2
}

function divisao(valor1, valor2) {
    return dados.resultado = valor1 / valor2
}

function resultado() {
    const calcular = metodoOperacional()
    calcular
    documentos.display.innerHTML = `${dados.resultado}`
}


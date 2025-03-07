var number = document.getElementById('num')
var select = document.getElementById('calculo')
var resultados = document.getElementById('res')
var valores = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumber(number.value) && !inLista(number.value, valores)) {
        var option = document.createElement('option')
        option.setAttribute("id", "opt")
        option.innerHTML = `O número ${number.value} foi adicionado.`
        select.appendChild(option)

        valores.push(Number(number.value))
    } else {
        window.alert('Número Inválido ou repetido!')
    }

    number.value = ''
    number.focus()
}

function finalizar() {
    res.innerHTML = `Ao todo, temos ${valores.length} números cadastrados.<br> O maior valor informado foi.<br> O menor valor informado foi.<br> Somando todos os valores, temos ${}`
}


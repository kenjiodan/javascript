function calcular(){
    var number = document.getElementById('number')
    var tabu = document.getElementById('tabuada')
    var Tnumber = Number(number.value)
    Tcont = 1

    if (Tnumber == 0){
        window.alert('Insira um número na caixa!')
    } else {
        while(Tcont <= 10){
            var newOption = document.createElement('option')
            newOption.setAttribute("id", "opt")
            newOption.innerHTML = `${Tnumber} x ${Tcont} = ${Tnumber*Tcont}`
            tabu.appendChild(newOption)
    
            Tcont++
        }
    }
    
    

    /*var newOption = document.createElement('option')
    newOption.setAttribute("id", "opt")
    newOption.innerHTML = 'Legal!'
    
    tabu.appendChild(newOption)*/

}
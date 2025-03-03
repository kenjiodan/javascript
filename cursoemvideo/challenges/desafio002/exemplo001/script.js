function Contar() {
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    var Tinicio = Number(inicio.value)
    var Tfim = Number(fim.value)
    var Tpasso = Number(passo.value)

    if (Tinicio == 0 || Tfim == 0) {
        //window.alert('Passo inválido! Considerando passo 1.')
        res.innerHTML = 'Impossível contar!'

    }else {
        res.innerHTML = 'Contando.. '

        if(Tpasso == 0) {
            window.alert('Número Inválido, considerando "Passo" como 1.')
            Tpasso = 1
        }

        if(Tinicio < Tfim) {
            //Contagem Crescente
            for(var c = Tinicio; c <= Tfim; c += Tpasso){ 
            res.innerHTML += `${c} 👉`
            }
        }else {
            //Contagem Decrescente
            for(var c = Tinicio; c >= Tfim; c -= Tpasso) {
            res.innerHTML += `${c} 👉`
            }

        }

        res.innerHTML += "🏁";
    }
}
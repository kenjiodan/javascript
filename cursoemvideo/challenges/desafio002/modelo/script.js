function Contar() {
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    var Tinicio = Number(inicio.value)
    var Tfim = Number(fim.value)
    var Tpasso = Number(passo.value)

    if (Tpasso == 0) {
        window.alert('Passo inválido! Considerando passo 1.')
        Tpasso = 1
    }

    res.innerHTML = 'Contando: <br>';

    if (Tinicio < Tfim) {
        for(Tinicio = 1; Tinicio < Tfim; Tinicio += Tpasso){
            res.innerHTML = `${Tinicio} 👉`
        }
    }

    res.innerHTML += "🏁";
}
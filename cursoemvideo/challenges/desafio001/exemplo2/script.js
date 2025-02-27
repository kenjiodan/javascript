function verificar() {
    var data = new Date();
    var ano = data.getFullYear();

    var fano = document.getElementById('idade')
    var res = document.querySelector('div.res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique suas informações abaixo.')
    } else {
        var gen = document.getElementsByName('genero');
        var idade = ano - Number(fano.value);
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (gen[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/Criança-M-circle.png')
                img.style.width = '200px'
                img.style.height = '200px'
                //CRIANÇA
            } else if (idade <= 21) {
                img.setAttribute('src', 'img/Jovem-M-circle.png')
                img.style.width = '200px'
                img.style.height = '200px'
                //JOVEM
            } else if (idade <= 59) {
                img.setAttribute('src', 'img/Adulto-M-circle.png')
                img.style.width = '200px'
                img.style.height = '200px'
                //ADULTO
            } else {
                img.setAttribute('src', 'img/Idoso-M-circle.png')
                img.style.width = '200px'
                img.style.height = '200px'
                //IDOSO
            }     

        } else if (gen[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/Criança-F-circle.png')
                img.style.width = '200px'
                img.style.height = '200px'
                //CRIANÇA
            } else if (idade <= 21) {
                img.setAttribute('src', 'img/Jovem-F-circle.png')
                img.style.width = '200px'
                img.style.height = '200px'
                //JOVEM
            } else if (idade <= 59) {
                img.setAttribute('src', 'img/Adulto-F-circle.png')
                img.style.width = '200px'
                img.style.height = '200px'
                //ADULTO
            } else {
                img.setAttribute('src', 'img/Idoo-F-circle.png')
                img.style.width = '200px'
                img.style.height = '200px'
                //IDOSO
            }     

        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos uma pessoa do sexo ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
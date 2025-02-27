function carregar() {
    var hora = document.querySelector('div.hora');
    var imagem = document.querySelector('div.imagem');
    data = new Date()
    var tempo = data.getHours()

    hora.innerHTML = `Agora são ${tempo} horas`
    var img = document.querySelector('div.imagem')
    var corpo = document.body;

    if (tempo < 12 && tempo > 5) {
        img.style.backgroundImage = "url('img/manhã.jpg')";
    } else if (tempo >= 12 && tempo < 19) {
        corpo.style.background = "rgb(158, 121, 57)"
        img.style.backgroundImage = "url('img/tarde.jpg')";
    } else {
        corpo.style.background = "linear-gradient(180deg, rgba(15,17,29,1) 0%, rgba(33,39,75,1) 37%, rgb(19, 27, 68) 69%, rgb(3, 17, 94) 100%)";
        img.style.backgroundImage = "url('img/noite.jpg')";
    }
}
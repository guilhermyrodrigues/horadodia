function gerarData() {
  return new Date()
}

function gerarHora(data) {
  return data.getHours()
}
function mostraHora() {
  const titulo = document.querySelector('h1')
  const msg = document.querySelector("#msg");
  const imagem = document.querySelector("#imagem");
  const data = gerarData()
  const hora = gerarHora(data)

  msg.innerHTML = `Agora são ${hora} horas`;
  if (hora >= 0 && hora <= 12) {
    imagem.src = "/assets/fotomanha.jpg";
    titulo.innerHTML = '<strong>Bom dia!</strong>'
    document.body.style.backgroundColor = '#eef115'
  } else if (hora > 12 && hora < 18){
    imagem.src = '/assets/fototarde.jpg'
    titulo.innerHTML = '<strong>Boa tarde!</strong>'
    document.body.style.backgroundColor = '#eeba10'
  } else {
    imagem.src = '/assets/fotonoite.jpg'
    titulo.innerHTML = '<strong>Boa noite!</strong>'
    document.body.style.backgroundColor = '#1b1620'
  }
}

mostraHora()
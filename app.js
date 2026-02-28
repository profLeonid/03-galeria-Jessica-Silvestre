'use strict'

   const imagens = [
    { url: './img/princesas.jpg', legenda: 'Princesas' },
    { url: './img/OIP.jpg', legenda: 'Edna' },
    { url: './img/looneytunnes.jpg', legenda: 'Looney Tunes' },
    { url: './img/ursinho pool.jpg', legenda: 'Ursinho Pooh' },
    { url: './img/Stitch-Desenho-PNG.png', legenda: 'Stitch' },
    { url: './img/mickey.jpg', legenda: 'Mickey' }
]  

function criarImagem (imagem){
    const galeria = document.getElementById('galeria')

    const figure = document.createElement('figure')
    const img = document.createElement('img')
    const figcaption = document.createElement('figcaption')

    img.src = imagem.url
    img.classList.add('imagem-galeria')

    figcaption.textContent = imagem.legenda

    figure.appendChild(img)
    figure.appendChild(figcaption)

    galeria.appendChild(figure)
}

function carregarImagens () {
    imagens.forEach(criarImagem)
}

carregarImagens()
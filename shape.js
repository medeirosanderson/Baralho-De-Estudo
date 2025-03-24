const shapesMusicais = [];

document.addEventListener('DOMContentLoaded', function() {
    const imagens = document.querySelectorAll('.shapes img');

    imagens.forEach(imagem => {
        shapesMusicais.push(imagem);
    });

    // Moveu a linha para dentro do evento DOMContentLoaded
    const mostrarShape = document.getElementById('mostrarShape');
    mostrarShape.addEventListener('click', mostrarShapeAleatorio);
    
    const botaoVoltar = document.getElementById('voltar'); // Adiciona esta linha
    botaoVoltar.addEventListener('click', esconderImagemExibida); // Adiciona esta linha

    function esconderNotas() {
        shapesMusicais.forEach(imagem => {
            imagem.classList.add('oculto');
        });
    }

    function mostrarShapeAleatorio() {
        // Esconde todas as imagens primeiro
        esconderNotas();

        // Seleciona uma imagem aleatória
        const shapeAleatorio = shapesMusicais[Math.floor(Math.random() * shapesMusicais.length)];

        // Mostra apenas a imagem aleatória
        shapeAleatorio.classList.remove('oculto');
    }
    
    function esconderImagemExibida() { // Adiciona esta função
        const imagemExibida = document.querySelector('.shapes img:not(.oculto)');
        if (imagemExibida) {
            imagemExibida.classList.add('oculto');
        }
    }
});


const notasMusicais = [];

document.addEventListener('DOMContentLoaded', function() {
    const imagens = document.querySelectorAll('.card img');

    imagens.forEach(imagem => {
        notasMusicais.push(imagem);
    });

    console.log(notasMusicais);

    const mostrarNotasBtn = document.getElementById('mostrarNotasBtn');
    mostrarNotasBtn.addEventListener('click', mostrarNotaAleatoria);
});

function esconderNotas() {
    notasMusicais.forEach(imagem => {
        imagem.classList.add('oculto');
    });
}

function mostrarNotaAleatoria() {
    // Esconde todas as imagens primeiro
    esconderNotas();

    // Seleciona uma imagem aleatória
    const notaAleatoria = notasMusicais[Math.floor(Math.random() * notasMusicais.length)];

    // Mostra apenas a imagem aleatória
    notaAleatoria.classList.remove('oculto');
}

function esconderCard(button) {
    const card = button.closest('.card');
    card.querySelector('img').classList.add('oculto');
}
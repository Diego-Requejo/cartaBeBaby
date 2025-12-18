document.addEventListener('DOMContentLoaded', () => {
    const players = document.querySelectorAll('.player');
    const modal = document.getElementById('playerModal');
    const modalMeme = document.getElementById('modalMeme');
    const modalText = document.getElementById('modalText');
    const closeButton = document.querySelector('.close-button');

    players.forEach(player => {
        player.addEventListener('click', () => {
            const memeSrc = player.getAttribute('data-meme-src');
            const textContent = player.getAttribute('data-text-content');

            modalMeme.src = memeSrc;
            modalText.textContent = textContent;
            modal.style.display = 'flex'; // Usar flex para centrar el contenido
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cierra el modal si se hace clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
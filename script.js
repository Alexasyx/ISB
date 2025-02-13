const heart = document.getElementById('heart');

heart.addEventListener('click', () => {
    heart.style.animation = 'rotateFast 2s linear forwards';
    setTimeout(() => {
        heart.style.display = 'none';
    }, 2000);
});

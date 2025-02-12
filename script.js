const heart = document.getElementById('heart');
const explosion = document.getElementById('explosion');
heart.addEventListener('click', () => {
    heart.style.animation = 'rotateFast 2s linear forwards';
    setTimeout(() => {
        heart.style.display = 'none';
        explosion.style.opacity = '1';
        explosion.style.animation = 'explode 1s ease-out forwards';
    }, 2000);
});

const heart = document.getElementById('heart');
const explosion = document.getElementById('explosion');

heart.addEventListener('click', () => {
    heart.style.animation = 'rotateFast 2s linear forwards';
    setTimeout(() => {
        heart.style.display = 'none';
        createExplosion();
    }, 2000);
});

function createExplosion() {
    explosion.style.opacity = '1';
    for (let i = 0; i < 16; i++) {
        let fragment = document.createElement('div');
        fragment.classList.add('fragment');
        let angle = (i / 16) * (2 * Math.PI);
        let distance = Math.random() * 100 + 50;
        fragment.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
        fragment.style.setProperty('--y', `${Math.sin(angle) * distance}px`);
        fragment.style.animation = 'fragmentExplode 1.5s ease-out forwards';
        explosion.appendChild(fragment);
    }
    setTimeout(() => {
        explosion.innerHTML = '';
    }, 1500);
}

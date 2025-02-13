const heart = document.getElementById('heart');
const body = document.body;

heart.addEventListener('click', () => {
    heart.style.animation = 'rotateExpand 4s ease-in-out forwards';
    setTimeout(() => {
        body.style.backgroundColor = '#ff6699'; // Pink color similar to the heart
        heart.style.display = 'none';
    }, 4000);
});

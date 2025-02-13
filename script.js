const heart = document.getElementById('heart');
const expandingHeart = document.getElementById('expandingHeart');
const body = document.body;

heart.addEventListener('click', () => {
    const rect = heart.getBoundingClientRect();
    expandingHeart.style.left = `${rect.left + rect.width / 2}px`;
    expandingHeart.style.top = `${rect.top + rect.height / 2}px`;
    expandingHeart.style.width = '100vw';
    expandingHeart.style.height = '100vh';
    expandingHeart.style.opacity = '1';
    expandingHeart.style.transform = 'scale(10)';
    
    heart.style.animation = 'none';
    heart.style.opacity = '0';
    
    setTimeout(() => {
        body.style.backgroundColor = '#ff6699'; // Pink color similar to the heart
        expandingHeart.style.opacity = '0';
    }, 4000);
});

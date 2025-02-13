const heart = document.getElementById('heart');
const burst = document.getElementById('burst');
const body = document.body;

heart.addEventListener('click', () => {
    const rect = heart.getBoundingClientRect();
    burst.style.left = `${rect.left + rect.width / 2 - 50}px`;
    burst.style.top = `${rect.top + rect.height / 2 - 50}px`;
    burst.style.width = '100px';
    burst.style.height = '100px';
    burst.style.opacity = '1';
    burst.style.transform = 'scale(1)';
    burst.style.animation = 'burstEffect 3s ease-in-out forwards';
    
    heart.style.animation = 'none';
    heart.style.opacity = '0';
    
    setTimeout(() => {
        body.style.backgroundColor = '#ff6699'; // Pink color similar to the heart
    }, 1500);
});

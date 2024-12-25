document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.cardP');

    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / card.offsetWidth) * 100;
        const y = ((e.clientY - rect.top) / card.offsetHeight) * 100;
        
        card.querySelector('.glow').style.setProperty('--mouse-x', `${x}%`);
        card.querySelector('.glow').style.setProperty('--mouse-y', `${y}%`);
      });
    });
  });

 
  document.addEventListener('DOMContentLoaded', () => {
    // Select all cards with class 'cardP'
    const cards = document.querySelectorAll('.cardP');
    
    // Add event listeners to each card
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / card.clientWidth) * 100;
            const y = ((e.clientY - rect.top) / card.clientHeight) * 100;
            
            // Update glow position for this specific card
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
            
            // 3D tilt effect for this specific card
            const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
            const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
});
// Select all card containers
const containers = document.querySelectorAll('.card-container');

// Add event listeners to each container
containers.forEach((container) => {
    const card = container.querySelector('.card');
    
    container.addEventListener('mousemove', (e) => handleMouseMove(e, container, card));
    container.addEventListener('mouseleave', () => handleMouseLeave(card));
    container.addEventListener('mouseenter', (e) => handleMouseEnter(e, container, card));
});

function handleMouseMove(e, container, card) {
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Convert mouse position to percentage
    const xPercentage = (mouseX / rect.width - 0.5) * 2;
    const yPercentage = (mouseY / rect.height - 0.5) * 2;
    
    // Calculate rotation angles
    const rotateX = -yPercentage * 25;
    const rotateY = xPercentage * 25;
    
    // Apply transform
    card.style.transform = `
        rotateY(${rotateY}deg)
        rotateX(${rotateX}deg)
        scale3d(1.05, 1.05, 1.05)
    `;
}

function handleMouseLeave(card) {
    card.style.transform = 'rotateX(0) rotateY(0) scale3d(1, 1, 1)';
}

function handleMouseEnter(e, container, card) {
    handleMouseMove(e, container, card);
}

document.addEventListener('DOMContentLoaded', function() {
    const technicalGrid = document.querySelector('.hexagon-grid:first-child');
    const nonTechnicalGrid = document.querySelector('.hexagon-grid:last-child');
    
    function setupHexagonInteractions(grid) {
        const hexagons = grid.querySelectorAll('.hexagon');
        const expertisePanel = grid.querySelector('.expertise-panel');
        
        hexagons.forEach(hexagon => {
            hexagon.addEventListener('mouseenter', function() {
                // Hide all panels first
                document.querySelectorAll('.expertise-panel').forEach(panel => {
                    panel.classList.remove('active');
                    panel.removeAttribute('data-active-expertise');
                });
                
                const expertise = this.dataset.expertise;
                const experience = this.dataset.experience;
                
                // Update panel content
                expertisePanel.querySelector('.expertise-name').textContent = expertise;
                expertisePanel.querySelector('.experience').textContent = experience;
                
                // Set the active expertise for background image
                expertisePanel.setAttribute('data-active-expertise', expertise);
                
                // Show panel
                expertisePanel.classList.add('active');
            });
            
            hexagon.addEventListener('mouseleave', function(e) {
                // Check if we're not hovering over the panel
                if (!isHoveringPanel(e, expertisePanel)) {
                    expertisePanel.classList.remove('active');
                    expertisePanel.removeAttribute('data-active-expertise');
                }
            });
        });
        
        // Add panel hover handling
        expertisePanel.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        
        expertisePanel.addEventListener('mouseleave', function() {
            this.classList.remove('active');
            this.removeAttribute('data-active-expertise');
        });
    }
    
    function isHoveringPanel(e, panel) {
        const rect = panel.getBoundingClientRect();
        return (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
        );
    }
    
    // Setup both grids
    setupHexagonInteractions(technicalGrid);
    setupHexagonInteractions(nonTechnicalGrid);
});
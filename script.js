// Functie om een specifieke vis te openen
function openFish(fishId) {
    // 1. Verberg het menu
    document.getElementById('fish-menu').style.display = 'none';

    // 2. Verberg alle vis-details (voor de zekerheid)
    const allFish = document.querySelectorAll('.fish-card');
    allFish.forEach(card => {
        card.style.display = 'none';
        card.classList.add('hidden'); // Zorg dat de class ook klopt
    });

    // 3. Toon de gekozen vis
    const selectedFish = document.getElementById(fishId);
    if (selectedFish) {
        selectedFish.style.display = 'block';
        selectedFish.classList.remove('hidden');
        
        // Scroll naar boven zodat de gebruiker direct de info ziet
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
}

// Functie om terug te keren naar het menu
function showMenu() {
    // 1. Verberg alle vis-details
    const allFish = document.querySelectorAll('.fish-card');
    allFish.forEach(card => {
        card.style.display = 'none';
        card.classList.add('hidden');
    });

    // 2. Toon het menu weer
    document.getElementById('fish-menu').style.display = 'block';
    
    // Scroll terug naar boven
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
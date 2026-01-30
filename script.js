/* --- script.js --- */

function showDetail(fishId) {
    // Scroll naar boven
    window.scrollTo(0, 0);

    // Verberg de lijst
    document.getElementById('fish-list-view').style.display = 'none';
    
    // Toon de detail container
    document.getElementById('fish-detail-view').style.display = 'block';

    // Verberg alle specifieke vissen
    var fishCards = document.getElementsByClassName('fish-detail-content');
    for (var i = 0; i < fishCards.length; i++) {
        fishCards[i].style.display = 'none';
    }

    // Toon de gekozen vis
    var selectedFish = document.getElementById(fishId);
    if (selectedFish) {
        selectedFish.style.display = 'block';
    }
}

function showList() {
    // Verberg detail view
    document.getElementById('fish-detail-view').style.display = 'none';
    
    // Toon de lijst weer
    document.getElementById('fish-list-view').style.display = 'flex';
}
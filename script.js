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

/* --- ONEINDIGE SCROLL NAVIGATIE --- */
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav");
    
    // Selecteer alle originele links
    const originalLinks = Array.from(nav.querySelectorAll("a"));
    
    // Als er geen navigatie of links zijn, stop dan
    if (!nav || originalLinks.length === 0) return;

    // We maken 3 sets van de links: [Clone] [Original] [Clone]
    // Dit zorgt ervoor dat je beide kanten op oneindig kunt scrollen.
    
    // 1. Maak de nav leeg
    nav.innerHTML = '';

    // 2. Functie om items toe te voegen
    function appendItems(items) {
        items.forEach(link => {
            let clone = link.cloneNode(true);
            nav.appendChild(clone);
        });
    }

    // 3. Voeg de sets toe (Set 1, Set 2, Set 3)
    appendItems(originalLinks); // Set 1 (Buffer links)
    appendItems(originalLinks); // Set 2 (De hoofd set)
    appendItems(originalLinks); // Set 3 (Buffer rechts)

    // Hulpvariabelen berekenen
    // We moeten wachten tot de browser de breedtes heeft berekend
    setTimeout(() => {
        // De breedte van 1 enkele set items
        const singleSetWidth = nav.scrollWidth / 3;

        // Zoek de actieve knop in de MIDDELSTE set (Set 2)
        // De index in de totale lijst is: lengte + originele_index
        const activeOriginalIndex = originalLinks.findIndex(link => link.classList.contains("active"));
        const allLinks = nav.querySelectorAll("a");
        
        // Als er een actieve knop is, pak die uit de 2e set. Anders pak de 1e uit de 2e set.
        const targetIndex = originalLinks.length + (activeOriginalIndex !== -1 ? activeOriginalIndex : 0);
        const activeLinkInMiddle = allLinks[targetIndex];

        // --- STAP A: CENTREER DE ACTIEVE KNOP BIJ HET LADEN ---
        if (activeLinkInMiddle) {
            const scrollPosition = activeLinkInMiddle.offsetLeft - (nav.clientWidth / 2) + (activeLinkInMiddle.clientWidth / 2);
            nav.scrollLeft = scrollPosition;
        } else {
            // Fallback: zet scroll in het midden van de hele balk
            nav.scrollLeft = singleSetWidth;
        }

        // --- STAP B: HET ONEINDIGE LOOP EVENT ---
        nav.addEventListener('scroll', function() {
            const currentScroll = nav.scrollLeft;

            // Als we in Set 3 terechtkomen (te ver naar rechts), spring terug naar Set 2
            if (currentScroll >= singleSetWidth * 2) {
                nav.scrollLeft = currentScroll - singleSetWidth;
            }
            // Als we in Set 1 terechtkomen (te ver naar links), spring vooruit naar Set 2
            else if (currentScroll <= 0) {
                nav.scrollLeft = currentScroll + singleSetWidth;
            }
        });

    }, 50); // Kleine vertraging om zeker te zijn dat rendering klaar is
});
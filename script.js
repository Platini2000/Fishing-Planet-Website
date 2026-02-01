/* --- START OF FILE script.js --- */

/* 1. PAGINA BOUWER (Niet aanpassen) */
function initLakePage(lakeConfig) {
    
    // De elementen in je HTML zoeken
    const navContainer = document.getElementById('fish-nav');
    const cardsContainer = document.getElementById('fish-container');
    const folder = lakeConfig.folderName ? lakeConfig.folderName + '/' : '';

    // Maak de containers leeg
    navContainer.innerHTML = '';
    cardsContainer.innerHTML = '';

    // Loop door alle vissen in de lijst
    lakeConfig.fish.forEach((vis, index) => {
        
        // A. MAAK DE NAVIGATIE KNOP
        const navLink = document.createElement('a');
        navLink.href = "#";
        navLink.className = 'fish-link';
        if (index === 0) navLink.classList.add('active'); // Eerste is actief
        navLink.dataset.target = vis.id;
        navLink.innerText = vis.navName;
        
        // Klik functie
        navLink.onclick = (e) => {
            e.preventDefault();
            openFish(vis.id);
        };
        navContainer.appendChild(navLink);

        // B. MAAK DE VIS KAART (Jouw exacte HTML layout)
        const card = document.createElement('div');
        card.id = vis.id;
        card.className = `fish-card ${index === 0 ? '' : 'hidden'}`; // Verberg alles behalve de eerste
        
        // Hier bouwen we de HTML van de kaart
        card.innerHTML = `
            <div class="card-left">
                <div class="visual-wrapper">
                    <img src="${folder}${vis.image}" alt="${vis.fullName}" class="main-fish-img">
                    <div class="header-text">
                        <h3 class="fish-title">${vis.fullName}</h3>
                        <div class="stars">${vis.stars}</div>
                    </div>
                </div>
                <div class="bio-box">
                    ${vis.bio}
                </div>
            </div>

            <div class="card-right">
                <div class="info-grid">
                    <!-- BLOK 1: LOCATIE -->
                    <div class="detail-block">
                        <h4><i class="fa-solid fa-map-pin"></i> Locatie</h4>
                        ${vis.locationData}
                    </div>
                    <!-- BLOK 2: SETUP -->
                    <div class="detail-block">
                        <h4><i class="fa-solid fa-toolbox"></i> Setup</h4>
                        ${vis.setupData}
                    </div>
                    <!-- BLOK 3: VIS INFO -->
                    <div class="detail-block">
                        <h4><i class="fa-solid fa-scale-balanced"></i> Vis Info</h4>
                        ${vis.infoData}
                    </div>
                    <!-- BLOK 4: TECHNIEK -->
                    <div class="detail-block technique">
                        <h4><i class="fa-solid fa-rotate"></i> Techniek</h4>
                        ${vis.techData}
                    </div>
                </div>
            </div>
        `;
        cardsContainer.appendChild(card);
    });

    // Start de scrollbar functie
    setupInfiniteScroll();
}

/* 2. VIS WISSELEN FUNCTIE */
function openFish(fishId) {
    // Verberg alle kaarten
    document.querySelectorAll('.fish-card').forEach(card => card.classList.add('hidden'));
    
    // Toon de juiste
    const target = document.getElementById(fishId);
    if(target) target.classList.remove('hidden');

    // Update de knoppen (ook de gekloonde)
    document.querySelectorAll('.fish-link').forEach(link => {
        if(link.dataset.target === fishId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/* 3. SCROLL FUNCTIE */
function setupInfiniteScroll() {
    const navs = document.querySelectorAll(".scroll-nav");
    navs.forEach(nav => {
        const originalLinks = Array.from(nav.querySelectorAll("a"));
        if (originalLinks.length === 0) return;
        if(nav.dataset.cloned === "true") return; 

        // Klonen
        originalLinks.forEach(link => {
            let clone = link.cloneNode(true);
            clone.onclick = link.onclick; 
            nav.appendChild(clone);
        });
        originalLinks.forEach(link => {
            let clone = link.cloneNode(true);
            clone.onclick = link.onclick;
            nav.appendChild(clone);
        });

        nav.dataset.cloned = "true";

        // Positie zetten
        setTimeout(() => {
            const singleSetWidth = nav.scrollWidth / 3;
            nav.scrollLeft = singleSetWidth;
            nav.addEventListener('scroll', function() {
                if (nav.scrollLeft >= singleSetWidth * 2) nav.scrollLeft -= singleSetWidth;
                else if (nav.scrollLeft <= 0) nav.scrollLeft += singleSetWidth;
            });
        }, 100);
    });
}
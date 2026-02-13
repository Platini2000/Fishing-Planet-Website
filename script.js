// --- CONFIGURATIE DATABASE ---
const fishData = {
    "Lone Star": [
        { id: 'bass', name: 'Spotted Bass' },
        { id: 'buffalo', name: 'Smallmouth Buffalo' },
        { id: 'pickerel', name: 'Grass Pickerel' },
        { id: 'crappie', name: 'White Crappie' },
        { id: 'catfish', name: 'Channel Catfish' },
        { id: 'sunfish', name: 'Bluegill & Sunfish' },
        { id: 'shiner', name: 'Shiners' }
    ],
    "Emerald": [
        { id: 'walleye', name: 'Walleye' },
        { id: 'pike', name: 'Northern Pike' },
        { id: 'chainpickerel', name: 'Chain Pickerel' },
        { id: 'redfin', name: 'Redfin Pickerel' },
        { id: 'sauger', name: 'Sauger' },
        { id: 'perch', name: 'Yellow Perch' },
        { id: 'crappie', name: 'Crappie' },
        { id: 'pumpkinseed', name: 'Pumpkinseed' }
    ],
    "Mudwater": [
         { id: 'largemouth', name: 'Largemouth Bass' },
         { id: 'catfish', name: 'Channel Catfish' },
         { id: 'bullhead', name: 'Brown Bullhead' },
         { id: 'pickerel', name: 'Chain Pickerel' },
         { id: 'gar', name: 'Florida Gar' },
         { id: 'bowfin', name: 'Bowfin' },
         { id: 'drum', name: 'Freshwater Drum' },
         { id: 'crappie', name: 'White Crappie' },
         { id: 'sunfish', name: 'Bluegill & Sunfish' },
         { id: 'shiner', name: 'Common Shiner' }
    ],
    "Rocky": [
        { id: 'rainbow', name: 'Rainbow Trout' },
        { id: 'cutthroat', name: 'Cutthroat Trout' },
        { id: 'golden', name: 'Golden Trout' },
        { id: 'sucker', name: 'White Sucker' },
        { id: 'whitebass', name: 'White Bass' },
        { id: 'crappie', name: 'Black Crappie' },
        { id: 'bluegill', name: 'Bluegill' },
        { id: 'shiner', name: 'Golden Shiner' }
    ],
    "Falcon": [
        { id: 'redband', name: 'Oregon Redband Trout' },
        { id: 'rainbow', name: 'Rainbow Trout' },
        { id: 'brown', name: 'Brown Trout' },
        { id: 'cutthroat', name: 'Cutthroat Trout' },
        { id: 'smallmouth', name: 'Smallmouth Bass' },
        { id: 'pumpkinseed', name: 'Pumpkinseed' },
        { id: 'redbreast', name: 'Redbreast Sunfish' },
        { id: 'rockbass', name: 'Rock Bass' }
    ],
    "Neherrin": [
        { id: 'smallmouth', name: 'Smallmouth Bass' },
        { id: 'largemouth', name: 'Largemouth Bass' },
        { id: 'spotted', name: 'Spotted Bass' },
        { id: 'flathead', name: 'Flathead Catfish' },
        { id: 'bluecat', name: 'Blue Catfish' },
        { id: 'channelcat', name: 'Channel Catfish' },
        { id: 'gar', name: 'Longnose Gar' },
        { id: 'pickerel', name: 'Chain Pickerel' },
        { id: 'blackcrappie', name: 'Black Crappie' },
        { id: 'whitecrappie', name: 'White Crappie' },
        { id: 'redear', name: 'Redear Sunfish' },
        { id: 'bluegill', name: 'Bluegill' },
        { id: 'pumpkinseed', name: 'Pumpkinseed' },
        { id: 'perch', name: 'Yellow Perch' },
        { id: 'shad', name: 'American Shad' },
        { id: 'shiner', name: 'Golden Shiner' }
    ],
    "Everglades": [
        { id: 'peacock', name: 'Butterfly Peacock Bass' },
        { id: 'largemouth', name: 'Largemouth Bass' },
        { id: 'snook', name: 'Common Snook' },
        { id: 'tarpon', name: 'Tarpon' },
        { id: 'gar', name: 'Florida Gar' },
        { id: 'reddrum', name: 'Red Drum' },
        { id: 'gafftopsail', name: 'Gafftopsail Catfish' },
        { id: 'oscar', name: 'Oscar' },
        { id: 'bowfin', name: 'Bowfin' },
        { id: 'bullhead', name: 'Brown Bullhead' },
        { id: 'channelcat', name: 'Channel Catfish' },
        { id: 'warmouth', name: 'Warmouth' },
        { id: 'redear', name: 'Redear Sunfish' },
        { id: 'bluegill', name: 'Bluegill' },
        { id: 'shiner', name: 'Golden Shiner' }
    ],
    "Sander": [
        { id: 'bighead', name: 'Bighead Carp' },
        { id: 'silvercarp', name: 'Silver Carp' },
        { id: 'commoncarp', name: 'Common Carp' },
        { id: 'mirrorcarp', name: 'Mirror Carp' },
        { id: 'leathercarp', name: 'Leather Carp' },
        { id: 'grasscarp', name: 'Grass Carp' },
        { id: 'wels', name: 'Wels Catfish' },
        { id: 'zander', name: 'Zander' },
        { id: 'pike', name: 'Northern Pike' },
        { id: 'eel', name: 'European Eel' },
        { id: 'perch', name: 'European Perch' },
        { id: 'tench', name: 'Tench' },
        { id: 'bream', name: 'Common Bream' },
        { id: 'roach', name: 'Common Roach' },
        { id: 'prussian', name: 'Prussian Carp' },
        { id: 'ruffe', name: 'Eurasian Ruffe' },
        { id: 'goby', name: 'Round Goby' }
    ], 
    "White Moose": [
        { id: 'atlanticsalmon', name: 'Atlantic Salmon' },
        { id: 'laketrout', name: 'Lake Trout' },
        { id: 'splake', name: 'Splake' },
        { id: 'brooktrout', name: 'Brook Trout' },
        { id: 'burbot', name: 'Burbot' },
        { id: 'pike', name: 'Northern Pike' },
        { id: 'lakewhitefish', name: 'Lake Whitefish' },
        { id: 'whitesucker', name: 'White Sucker' },
        { id: 'perch', name: 'Yellow Perch' },
        { id: 'pumpkinseed', name: 'Pumpkinseed' },
        { id: 'lakechub', name: 'Lake Chub' }
    ],
    "Quanchkin": [
        { id: 'alligatorgar', name: 'Alligator Gar' },
        { id: 'bluecat', name: 'Blue Catfish' },
        { id: 'flathead', name: 'Flathead Catfish' },
        { id: 'channelcat', name: 'Channel Catfish' },
        { id: 'largemouth', name: 'Largemouth Bass' },
        { id: 'spotted', name: 'Spotted Bass' },
        { id: 'bowfin', name: 'Bowfin' },
        { id: 'drum', name: 'Freshwater Drum' },
        { id: 'buffalo', name: 'Smallmouth Buffalo' },
        { id: 'chainpickerel', name: 'Chain Pickerel' },
        { id: 'blackcrappie', name: 'Black Crappie' },
        { id: 'whitecrappie', name: 'White Crappie' },
        { id: 'whitebass', name: 'White Bass' },
        { id: 'warmouth', name: 'Warmouth' },
        { id: 'redear', name: 'Redear Sunfish' },
        { id: 'bluegill', name: 'Bluegill' },
        { id: 'shiner', name: 'Golden Shiner' }
    ],
    "Saint-Croix": [
        { id: 'muskie', name: 'Muskellunge' },
        { id: 'tigermuskie', name: 'Tiger Muskie' },
        { id: 'pike', name: 'Northern Pike' },
        { id: 'sturgeon', name: 'Lake Sturgeon' },
        { id: 'bluecat', name: 'Blue Catfish' },
        { id: 'salmon', name: 'Atlantic Salmon' },
        { id: 'trout', name: 'Brown & Brook Trout' },
        { id: 'walleye', name: 'Walleye' },
        { id: 'smallmouth', name: 'Smallmouth Bass' },
        { id: 'whitebass', name: 'White Bass' },
        { id: 'perch', name: 'Yellow Perch' },
        { id: 'drum', name: 'Drum & Shad' },
        { id: 'bullhead', name: 'Brown Bullhead' },
        { id: 'panfish', name: 'Panfish Family' },
        { id: 'baitfish', name: 'Baitfish' }
    ],
    "Blue Crab": [
        { id: 'tarpon', name: 'Tarpon' },
        { id: 'permit', name: 'Permit & Bonefish' },
        { id: 'drum', name: 'Red & Black Drum' },
        { id: 'snook', name: 'Common Snook' },
        { id: 'peacock', name: 'Peacock Bass' },
        { id: 'bass', name: 'Largemouth & Shoal Bass' },
        { id: 'catfish', name: 'Gafftopsail & Channel' },
        { id: 'flounder', name: 'Southern Flounder' },
        { id: 'gar', name: 'Gar & Bowfin' },
        { id: 'buffalo', name: 'Bigmouth Buffalo' },
        { id: 'panfish', name: 'Oscar & Panfish' },
        { id: 'baitfish', name: 'Shad & Shiner' }
    ],
    "Kaniq": [
        { id: 'chinook', name: 'Chinook Salmon' },
        { id: 'coho', name: 'Coho Salmon' },
        { id: 'sockeye', name: 'Sockeye Salmon' },
        { id: 'chum', name: 'Chum Salmon' },
        { id: 'pink', name: 'Pink Salmon' },
        { id: 'bull', name: 'Bull Trout & Dolly Varden' },
        { id: 'pike', name: 'Northern Pike' },
        { id: 'sucker', name: 'Longnose Sucker' },
        { id: 'blackfish', name: 'Alaska Blackfish' }
    ],
    "Tiber": [
        { id: 'wels', name: 'Wels Catfish' },
        { id: 'marble', name: 'Marble Trout' },
        { id: 'barbel', name: 'Common Barbel' },
        { id: 'asp', name: 'Asp' },
        { id: 'browntrout', name: 'Brown Trout' },
        { id: 'grayling', name: 'European Grayling' },
        { id: 'chub', name: 'Chub' },
        { id: 'carp', name: 'Common Carp' },
        { id: 'eel', name: 'European Eel' },
        { id: 'perch', name: 'European Perch' },
        { id: 'coarse', name: 'Roach, Crucian & Bitterling' }
    ],
    "San Joaquin": [
        { id: 'sturgeon', name: 'White Sturgeon' },
        { id: 'chinook', name: 'Chinook Salmon' },
        { id: 'striped', name: 'Striped Bass' },
        { id: 'steelhead', name: 'Steelhead' },
        { id: 'carp', name: 'Common Carp' },
        { id: 'largemouth', name: 'Largemouth Bass' },
        { id: 'smallmouth', name: 'Smallmouth & Spotted' },
        { id: 'channel', name: 'Channel Catfish' },
        { id: 'whitecat', name: 'White Catfish' },
        { id: 'bluegill', name: 'Bluegill' },
        { id: 'redear', name: 'Redear Sunfish' },
        { id: 'crappie', name: 'Crappie' },
        { id: 'splake', name: 'Splake' },
        { id: 'sucker', name: 'Sacramento Sucker' }
    ],
    "Creuse": [
        { id: 'wels', name: 'Wels Catfish' },
        { id: 'pike', name: 'Northern Pike' },
        { id: 'zander', name: 'Zander' },
        { id: 'carp', name: 'Common Carp' },
        { id: 'barbel', name: 'Common Barbel' },
        { id: 'bream', name: 'Common Bream' },
        { id: 'tench', name: 'Tench' },
        { id: 'perch', name: 'European Perch' },
        { id: 'nase', name: 'Common Nase' },
        { id: 'roach', name: 'Roach & Rudd' },
        { id: 'crucian', name: 'Crucian Carp' }
    ],
    "Dnipro": [
        { id: 'beluga', name: 'Beluga (Sturgeon)' },
        { id: 'wels', name: 'Wels Catfish' },
        { id: 'silvercarp', name: 'Bighead & Silver Carp' },
        { id: 'carp', name: 'Common Carp' },
        { id: 'mirrorcarp', name: 'Mirror Carp' },
        { id: 'grasscarp', name: 'Grass Carp' },
        { id: 'pike', name: 'Northern Pike' },
        { id: 'zander', name: 'Zander' },
        { id: 'asp', name: 'Asp' },
        { id: 'bream', name: 'Common Bream' },
        { id: 'perch', name: 'European Perch' },
        { id: 'prussian', name: 'Prussian Carp' },
        { id: 'roach', name: 'Roach, Rudd & Nase' },
        { id: 'smallbottom', name: 'Small Bottom Feeders' },
        { id: 'crayfish', name: 'European Crayfish' }
    ],
    "Selenge": [
        { id: 'taimen', name: 'Siberian Taimen' },
        { id: 'lenok', name: 'Lenok' },
        { id: 'grayling', name: 'Arctic Grayling' },
        { id: 'pike', name: 'Northern Pike' },
        { id: 'burbot', name: 'Burbot' },
        { id: 'whitefish', name: 'Omul & Whitefish' },
        { id: 'perch', name: 'European Perch' },
        { id: 'ide', name: 'Ide' },
        { id: 'roach', name: 'Roach & Dace' },
        { id: 'bait', name: 'Bitterling & Minnow' }
    ],
    "Willow": [
        { id: 'common', name: 'Common Carp' },
        { id: 'mirror', name: 'Mirror Carp' },
        { id: 'leather', name: 'Leather Carp' },
        { id: 'grass', name: 'Grass Carp' },
        { id: 'ghost', name: 'Ghost Carp' },
        { id: 'hybrid', name: 'Hybrid F1 Carp' },
        { id: 'wels', name: 'Wels Catfish' },
        { id: 'pike', name: 'Northern Pike' },
        { id: 'tench', name: 'Tench & Golden' },
        { id: 'bream', name: 'Common Bream' },
        { id: 'perch', name: 'European Perch' },
        { id: 'chub', name: 'Chub' },
        { id: 'crucian', name: 'Crucian & Prussian' }
    ],
    "Lesni": [
        { id: 'common', name: 'Common Carp' },
        { id: 'mirror', name: 'Mirror Carp' },
        { id: 'tench', name: 'Tench' },
        { id: 'pike', name: 'Northern Pike' },
        { id: 'perch', name: 'European Perch' },
        { id: 'prussian', name: 'Prussian Carp' },
        { id: 'roach', name: 'Common Roach' },
        { id: 'bream', name: 'Silver Bream' },
        { id: 'weather', name: 'European Weatherfish' }
    ],
    "Gent": [
        { id: 'roach', name: 'Common Roach' },
        { id: 'bream', name: 'Common Bream' },
        { id: 'silverbream', name: 'Silver Bream' },
        { id: 'prussian', name: 'Prussian Carp' },
        { id: 'ide', name: 'Ide' },
        { id: 'asp', name: 'Asp' },
        { id: 'perch', name: 'European Perch' },
        { id: 'zander', name: 'Zander' },
        { id: 'pike', name: 'Northern Pike' },
        { id: 'eel', name: 'European Eel' },
        { id: 'commoncarp', name: 'Common Carp' },
        { id: 'mirrorcarp', name: 'Mirror Carp' },
        { id: 'tench', name: 'Tench' },
        { id: 'wels', name: 'Wels Catfish' },
        { id: 'flounder', name: 'European Flounder' },
        { id: 'mullet', name: 'Grey Mullet' },
        { id: 'goby', name: 'Round Goby' }
    ]
};

// --- VARIABELEN VOOR ATTRACT MODE ---
let attractTimer;
const IDLE_TIME = 45000; // 45 seconden wachten bij inactiviteit
const SLIDE_TIME = 15000; // 15 seconden tonen voordat we wisselen
let isMapOpen = false; // Houdt bij of de kaart open staat

// --- BEPAAL WELKE LIJST WE MOETEN GEBRUIKEN ---
let currentFishList = [];
const pageTitle = document.title; 

const titleMap = {
    "Lone Star": "Lone Star", "Emerald": "Emerald", "Mudwater": "Mudwater",
    "Rocky": "Rocky", "Falcon": "Falcon", "Neherrin": "Neherrin",
    "Everglades": "Everglades", "Sander Baggersee": "Sander",
    "White Moose Lake": "White Moose", "Quanchkin Lake": "Quanchkin",
    "Saint-Croix": "Saint-Croix", "Blue Crab": "Blue Crab",
    "Kaniq": "Kaniq", "Tiber": "Tiber", "San Joaquin": "San Joaquin",
    "Creuse": "Creuse", "Dnipro": "Dnipro", "Selenge": "Selenge",
    "Weeping Willow": "Willow", "Lesni": "Lesni", "Gent": "Gent"
};

for (const [key, value] of Object.entries(titleMap)) {
    if (pageTitle.includes(key)) {
        currentFishList = fishData[value];
        break;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setupFishNav();
    setupInfiniteScroll("#location-nav");
    setupInfiniteScroll("#fish-nav");
    startAttractModeLogic();
    setupCursorHider();

    if (sessionStorage.getItem('attractMode') !== 'on') {
        setTimeout(() => {
            if (currentFishList.length > 0) selectFish(currentFishList[0].id);
        }, 100);
    }
});

/* --- FUNCTIES: VISNAVIGATIE & SELECTIE --- */
function setupFishNav() {
    const nav = document.getElementById('fish-nav');
    if(!nav) return;
    nav.innerHTML = '';
    currentFishList.forEach(fish => {
        const link = document.createElement('a');
        link.href = "#"; 
        link.dataset.id = fish.id; 
        link.textContent = fish.name;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            resetInactivityTimer();
            selectFish(fish.id);
        });
        nav.appendChild(link);
    });
}

function selectFish(fishId) {
    document.querySelectorAll('.fish-card').forEach(card => card.style.display = 'none');
    const targetCard = document.getElementById(fishId);
    if(targetCard) targetCard.style.display = 'block';

    const nav = document.getElementById('fish-nav');
    const allLinks = Array.from(nav.querySelectorAll('a'));
    allLinks.forEach(link => link.classList.remove('active'));

    const originalIndex = currentFishList.findIndex(f => f.id === fishId);
    if (originalIndex === -1) return;

    const totalItems = currentFishList.length; 
    let targetLinkIndex = (allLinks.length > totalItems) ? totalItems + originalIndex : originalIndex;
    const targetLink = allLinks[targetLinkIndex];

    if (targetLink) {
        targetLink.classList.add('active');
        const scrollPos = targetLink.offsetLeft - (nav.clientWidth / 2) + (targetLink.clientWidth / 2);
        nav.scrollTo({ left: scrollPos, behavior: 'smooth' });
    }
}

/* --- FUNCTIES: KAART OVERLAY LOGICA --- */
function toggleMap(btn, url) {
    const fishCard = btn.closest('.fish-card');
    const wrapper = fishCard.querySelector('.map-wrapper');
    const iframe = wrapper.querySelector('.map-iframe');

    if (wrapper.style.display === 'flex') {
        closeMap(wrapper.querySelector('.close-map-btn'));
        return;
    }

    // Pauzeer Attract Mode
    isMapOpen = true; 
    clearTimeout(attractTimer);

    iframe.src = url;
    wrapper.style.display = 'flex';
}

function closeMap(btn) {
    const wrapper = btn.closest('.map-wrapper');
    const iframe = wrapper.querySelector('.map-iframe');
    
    wrapper.style.display = 'none';
    iframe.src = ''; 

    // Hervat Attract Mode
    isMapOpen = false;
    resetInactivityTimer();
}

/* --- FUNCTIES: ONEINDIGE SCROLL --- */
function setupInfiniteScroll(selector) {
    const nav = document.querySelector(selector);
    if (!nav) return;
    const originalLinks = Array.from(nav.children);
    if (originalLinks.length === 0) return;
    nav.innerHTML = '';

    const appendItems = (items) => {
        items.forEach(link => {
            let clone = link.cloneNode(true);
            if (selector === '#fish-nav') {
                clone.addEventListener('click', (e) => {
                    e.preventDefault();
                    resetInactivityTimer();
                    selectFish(clone.dataset.id);
                });
            } else {
                clone.addEventListener('click', () => sessionStorage.setItem('attractMode', 'off'));
            }
            nav.appendChild(clone);
        });
    };

    appendItems(originalLinks); appendItems(originalLinks); appendItems(originalLinks);

    setTimeout(() => {
        const singleSetWidth = nav.scrollWidth / 3;
        nav.scrollLeft = singleSetWidth;
        nav.addEventListener('scroll', () => {
            if (nav.scrollLeft >= singleSetWidth * 2) nav.scrollLeft -= singleSetWidth; 
            else if (nav.scrollLeft <= 5) nav.scrollLeft += singleSetWidth; 
        });
    }, 50);
}

/* --- FUNCTIES: AUTOMATISCHE ATTRACT MODE --- */
function startAttractModeLogic() {
    const events = ['mousemove', 'mousedown', 'touchstart', 'scroll', 'keydown'];
    events.forEach(evt => document.addEventListener(evt, resetInactivityTimer));

    if (sessionStorage.getItem('attractMode') === 'on') {
        pickRandomFish();
        attractTimer = setTimeout(triggerNextSlide, SLIDE_TIME);
    } else {
        attractTimer = setTimeout(triggerNextSlide, IDLE_TIME);
    }
}

function resetInactivityTimer() {
    if (isMapOpen) {
        clearTimeout(attractTimer);
        return; 
    }
    sessionStorage.setItem('attractMode', 'off');
    clearTimeout(attractTimer);
    attractTimer = setTimeout(triggerNextSlide, IDLE_TIME);
}

function pickRandomFish() {
    if (currentFishList.length > 0) {
        const randomIndex = Math.floor(Math.random() * currentFishList.length);
        setTimeout(() => selectFish(currentFishList[randomIndex].id), 200);
    }
}

function triggerNextSlide() {
    if (isMapOpen) return;

    sessionStorage.setItem('attractMode', 'on');
    const locationNav = document.getElementById('location-nav');
    if (locationNav) {
        const links = locationNav.querySelectorAll('a');
        if (links.length > 0) {
            const randomLink = links[Math.floor(Math.random() * links.length)];
            window.location.href = randomLink.href;
        }
    }
}

/* --- FUNCTIE: MUIS VERBERGEN --- */
function setupCursorHider() {
    let cursorTimer;
    const resetCursor = () => {
        document.body.classList.remove('hide-cursor');
        clearTimeout(cursorTimer);
        cursorTimer = setTimeout(() => document.body.classList.add('hide-cursor'), 3000);
    };
    resetCursor();
    ['mousemove', 'scroll', 'click'].forEach(evt => document.addEventListener(evt, resetCursor));
}
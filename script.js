// --- CONFIGURATIE DATABASE ---
// Hier definieer je per meer welke vissen er zijn.
// De 'key' (bv 'lonestar') moet matchen met een woord in de <title> van je HTML pagina.
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
    "Peru": [
        { id: 'arapaima', name: 'Arapaima' },
        { id: 'catfish', name: 'Amazon Catfish' },
        { id: 'payara', name: 'Payara & Biara' },
        { id: 'arowana', name: 'Silver Arowana' },
        { id: 'peacock', name: 'Peacock Bass' },
        { id: 'piranha', name: 'Piranhas' },
        { id: 'barracuda', name: 'Red Tail Barracuda' },
        { id: 'panfish', name: 'Oscar, Jacunda & Croaker' },
        { id: 'school', name: 'Brycon, Aracu & Prochilodus' }
    ],
    "Bolivia": [
        { id: 'redtail', name: 'Redtail & Gilded' },
        { id: 'sorubim', name: 'Sorubim & Ripsaw' },
        { id: 'payara', name: 'Payara & Biara' },
        { id: 'peacock', name: 'Peacock Bass' },
        { id: 'tambaqui', name: 'Tambaqui' },
        { id: 'apapa', name: 'Apapa & Brycon' },
        { id: 'barracuda', name: 'Red Tail Barracuda' },
        { id: 'piranha', name: 'Piranhas' },
        { id: 'panfish', name: 'Oscar & Panfish' },
        { id: 'aracu', name: 'Spotted Aracu' }
    ],
    "Amazonian": [
        { id: 'monsters', name: 'Arapaima & Piraiba' },
        { id: 'shark', name: 'Bull Shark' },
        { id: 'eel', name: 'Electric Eel' },
        { id: 'peacock', name: 'Peacock Bass' },
        { id: 'catfish', name: 'Amazon Catfish' },
        { id: 'vampire', name: 'Vampire Fish' },
        { id: 'trahira', name: 'Trahira & Barracuda' },
        { id: 'piranha', name: 'Piranhas' },
        { id: 'surface', name: 'Apapa & Arowana' },
        { id: 'panfish', name: 'Amazon Panfish' },
        { id: 'school', name: 'Aracu & Prochilodus' }
    ],
    "Congo": [
        { id: 'goliath', name: 'Goliath Tigerfish' },
        { id: 'nileperch', name: 'Nile Perch' },
        { id: 'tigerfish', name: 'African Tigerfish' },
        { id: 'vundu', name: 'Vundu & Kamba' },
        { id: 'sharptooth', name: 'Medium Catfish' },
        { id: 'cornish', name: 'Cornish Jack & Pike' },
        { id: 'labeo', name: 'Labeo & Elephant' },
        { id: 'tilapia', name: 'Tilapia & Bulldog' }
    ],
    "Kaiji": [
        { id: 'tuna', name: 'Bluefin, Yellowfin & Bigeye' },
        { id: 'marlin', name: 'Striped Marlin' },
        { id: 'grouper', name: 'Giant Grouper' },
        { id: 'mahi', name: 'Mahi-Mahi' },
        { id: 'trevally', name: 'Giant Trevally' },
        { id: 'squid', name: 'Bigfin Reef Squid' },
        { id: 'snapper', name: 'Ruby Snapper & Jobfish' },
        { id: 'amberjack', name: 'Amberjacks' },
        { id: 'mackerel', name: 'Mackerel & Bonito' },
        { id: 'bait', name: 'Anchovy & Jack Mackerel' }
    ],
    "Maldives": [
        { id: 'billfish', name: 'Marlins & Sailfish' },
        { id: 'swordfish', name: 'Swordfish' },
        { id: 'tuna', name: 'Big Tunas' },
        { id: 'tuna_small', name: 'Small Tunas' },
        { id: 'wahoo', name: 'Wahoo & Mackerel' },
        { id: 'gt', name: 'GT & Amberjack' },
        { id: 'grouper', name: 'Grouper & Sweetlips' },
        { id: 'snapper', name: 'Snappers & Jobfish' },
        { id: 'shark', name: 'Shark & Barracuda' },
        { id: 'mahi', name: 'Mahi-Mahi' },
        { id: 'reef', name: 'Reef Beauties' },
        { id: 'bait', name: 'Scad & Flyingfish' }
    ],
    "Skarland": [
        { id: 'greenland', name: 'Greenland Shark' },
        { id: 'halibut', name: 'Atlantic Halibut' },
        { id: 'cod', name: 'Atlantic Cod' },
        { id: 'coalfish', name: 'Coalfish (Saithe)' },
        { id: 'salmon', name: 'Salmon & Trout' },
        { id: 'sturgeon', name: 'European Sea Sturgeon' },
        { id: 'wolffish', name: 'Atlantic Wolffish' },
        { id: 'angler', name: 'European Angler' },
        { id: 'ling', name: 'Ling & Cusk' },
        { id: 'porbeagle', name: 'Porbeagle & Dogfish' },
        { id: 'redfish', name: 'Redfish & Meagre' },
        { id: 'haddock', name: 'Haddock & Whiting' },
        { id: 'mackerel', name: 'Mackerel Family' },
        { id: 'brill', name: 'Flatfish' }
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

// --- BEPAAL WELKE LIJST WE MOETEN GEBRUIKEN ---
let currentFishList = [];

// We kijken naar de paginatitel (document.title) om te weten waar we zijn
const pageTitle = document.title; 

if (pageTitle.includes("Lone Star")) {
    currentFishList = fishData["Lone Star"];
} else if (pageTitle.includes("Emerald")) {
    currentFishList = fishData["Emerald"];
} else if (pageTitle.includes("Mudwater")) {
    currentFishList = fishData["Mudwater"];
} else if (pageTitle.includes("Rocky")) {   
    currentFishList = fishData["Rocky"];
} else if (pageTitle.includes("Falcon")) {   
    currentFishList = fishData["Falcon"];
} else if (pageTitle.includes("Neherrin")) {
    currentFishList = fishData["Neherrin"];
} else if (pageTitle.includes("Everglades")) {
    currentFishList = fishData["Everglades"]; 
} else if (pageTitle.includes("Sander Baggersee")) {
    currentFishList = fishData["Sander"];
} else if (pageTitle.includes("White Moose Lake")) {
    currentFishList = fishData["White Moose"];
} else if (pageTitle.includes("Quanchkin Lake")) {
    currentFishList = fishData["Quanchkin"];
} else if (pageTitle.includes("Saint-Croix")) {   
    currentFishList = fishData["Saint-Croix"];
} else if (pageTitle.includes("Blue Crab")) {   
    currentFishList = fishData["Blue Crab"];
} else if (pageTitle.includes("Kaniq")) {   
    currentFishList = fishData["Kaniq"];
} else if (pageTitle.includes("Peru")) {   
    currentFishList = fishData["Peru"];
} else if (pageTitle.includes("Bolivia")) {   
    currentFishList = fishData["Bolivia"];
} else if (pageTitle.includes("Amazonian")) {   
    currentFishList = fishData["Amazonian"];
} else if (pageTitle.includes("Congo")) {   
    currentFishList = fishData["Congo"];
} else if (pageTitle.includes("Kaiji")) {   
    currentFishList = fishData["Kaiji"];
} else if (pageTitle.includes("Maldives")) {   
    currentFishList = fishData["Maldives"];
} else if (pageTitle.includes("Skarland")) {   
    currentFishList = fishData["Skarland"];
} else if (pageTitle.includes("Tiber")) {   
    currentFishList = fishData["Tiber"];
} else if (pageTitle.includes("San Joaquin")) {   
    currentFishList = fishData["San Joaquin"];
} else if (pageTitle.includes("Creuse")) {   
    currentFishList = fishData["Creuse"];
} else if (pageTitle.includes("Dnipro")) {   
    currentFishList = fishData["Dnipro"];
} else if (pageTitle.includes("Selenge")) {   
    currentFishList = fishData["Selenge"];
} else if (pageTitle.includes("Weeping Willow")) {   
    currentFishList = fishData["Willow"];
} else if (pageTitle.includes("Lesni")) {   
    currentFishList = fishData["Lesni"];
} else if (pageTitle.includes("Gent")) {
    currentFishList = fishData["Gent"];
} else {
    // Fallback
    console.warn("Geen meer herkend in de titel! Zorg dat de <title> tag klopt.");
    currentFishList = [];
}

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Initialiseer de Vis Balk met de JUISTE lijst
    setupFishNav();

    // 2. Maak BEIDE balken oneindig scrollbaar
    setupInfiniteScroll("#location-nav");
    setupInfiniteScroll("#fish-nav");

    // 3. START ATTRACT MODE LOGICA
    startAttractModeLogic();

    // 4. START MOUSE HIDER (3 SEC)
    setupCursorHider();

    // 5. Als we NIET in attract mode zijn, selecteer de eerste vis
    // (Als we WEL in attract mode zijn, kiest de logica al een random vis)
    if (sessionStorage.getItem('attractMode') !== 'on') {
        setTimeout(() => {
            if (currentFishList.length > 0) {
                selectFish(currentFishList[0].id);
            }
        }, 100);
    }
});


/* --- FUNCTIE: VIS BALK VULLEN --- */
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
            // Als de gebruiker klikt, stoppen we de attract mode
            resetInactivityTimer();
            selectFish(fish.id);
        });

        nav.appendChild(link);
    });
}

/* --- FUNCTIE: VIS SELECTEREN & CENTREREN --- */
function selectFish(fishId) {
    document.querySelectorAll('.fish-card').forEach(card => {
        card.style.display = 'none';
    });
    
    const targetCard = document.getElementById(fishId);
    if(targetCard) {
        targetCard.style.display = 'block';
    } else {
        console.warn("Kan vis-kaart niet vinden met ID:", fishId);
    }

    const nav = document.getElementById('fish-nav');
    const allLinks = Array.from(nav.querySelectorAll('a'));

    allLinks.forEach(link => link.classList.remove('active'));

    const originalIndex = currentFishList.findIndex(f => f.id === fishId);
    if (originalIndex === -1) return;

    const totalItems = currentFishList.length; 
    let targetLinkIndex = originalIndex;
    
    if (allLinks.length > totalItems) {
        targetLinkIndex = totalItems + originalIndex; 
    }

    const targetLink = allLinks[targetLinkIndex];

    if (targetLink) {
        targetLink.classList.add('active');
        
        const navWidth = nav.clientWidth;
        const itemLeft = targetLink.offsetLeft;
        const itemWidth = targetLink.clientWidth;

        const scrollPos = itemLeft - (navWidth / 2) + (itemWidth / 2);

        nav.scrollTo({
            left: scrollPos,
            behavior: 'smooth'
        });
    }
}


/* --- FUNCTIE: ONEINDIGE SCROLL SETUP --- */
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
                // Locatie balk links ook klikbaar laten resetten
                clone.addEventListener('click', () => {
                   sessionStorage.setItem('attractMode', 'off');
                });
            }
            
            nav.appendChild(clone);
        });
    };

    appendItems(originalLinks); 
    appendItems(originalLinks); 
    appendItems(originalLinks); 

    setTimeout(() => {
        const singleSetWidth = nav.scrollWidth / 3;
        
        if (selector === '#location-nav') {
            const activeLink = originalLinks.find(l => l.classList.contains('active'));
            if (activeLink) {
                const index = originalLinks.indexOf(activeLink);
                const currentLinks = nav.querySelectorAll('a');
                const target = currentLinks[originalLinks.length + index]; 
                
                if(target) {
                    const scrollPos = target.offsetLeft - (nav.clientWidth / 2) + (target.clientWidth / 2);
                    nav.scrollLeft = scrollPos;
                }
            } else {
                nav.scrollLeft = singleSetWidth;
            }
        } else {
             nav.scrollLeft = singleSetWidth;
        }

        nav.addEventListener('scroll', function() {
            if (nav.scrollLeft >= singleSetWidth * 2) {
                nav.scrollLeft -= singleSetWidth; 
            } else if (nav.scrollLeft <= 5) { 
                nav.scrollLeft += singleSetWidth; 
            }
        });
    }, 50);
}


/* --------------------------------------------------------------------------
   NIEUW: AUTOMATISCHE ATTRACT MODE LOGICA
-------------------------------------------------------------------------- */

function startAttractModeLogic() {
    // 1. Luisteraars toevoegen om activiteit te detecteren (reset timer)
    const events = ['mousemove', 'mousedown', 'touchstart', 'scroll', 'keydown'];
    events.forEach(evt => document.addEventListener(evt, resetInactivityTimer));

    // 2. Check bij laden: Was de automatische show al bezig?
    const status = sessionStorage.getItem('attractMode');

    if (status === 'on') {
        // JA: We zitten midden in de show op een nieuwe pagina.
        
        // Kies direct een willekeurige vis om te tonen
        pickRandomFish();
        
        // Wacht 10 seconden en ga dan naar de volgende locatie
        attractTimer = setTimeout(triggerNextSlide, SLIDE_TIME);
        
    } else {
        // NEE: Normale gebruiker. Wacht 30 seconden inactiviteit.
        attractTimer = setTimeout(triggerNextSlide, IDLE_TIME);
    }
}

// Reset timer bij gebruikersactie
function resetInactivityTimer() {
    // Zet vlag uit
    sessionStorage.setItem('attractMode', 'off');
    
    // Stop lopende timers
    clearTimeout(attractTimer);
    
    // Start nieuwe timer van 30 seconden
    attractTimer = setTimeout(triggerNextSlide, IDLE_TIME);
}

// Kies een willekeurige vis uit de huidige lijst
function pickRandomFish() {
    if (currentFishList.length > 0) {
        const randomIndex = Math.floor(Math.random() * currentFishList.length);
        const randomFish = currentFishList[randomIndex];
        // Selecteer vis (selectFish functie regelt de UI)
        setTimeout(() => selectFish(randomFish.id), 200);
    }
}

// Trigger de volgende stap (Nieuwe Locatie)
function triggerNextSlide() {
    // Zet vlag aan voor de volgende pagina
    sessionStorage.setItem('attractMode', 'on');
    
    // Kies willekeurige vis op huidige pagina (voor het geval de pagina niet herlaadt)
    pickRandomFish();

    // Kies willekeurige locatie uit de bovenbalk
    const locationNav = document.getElementById('location-nav');
    if (locationNav) {
        // We pakken alle links (ook de clones)
        const links = locationNav.querySelectorAll('a');
        if (links.length > 0) {
            const randomLinkIndex = Math.floor(Math.random() * links.length);
            const targetLink = links[randomLinkIndex];
            
            // Simuleer een klik of navigeer
            window.location.href = targetLink.href;
        }
    }
    
    // Timer opnieuw zetten voor de zekerheid (als pagina niet herlaadt)
    attractTimer = setTimeout(triggerNextSlide, SLIDE_TIME);
}

/* --------------------------------------------------------------------------
   NIEUW: MUIS VERBERGEN NA 3 SECONDEN
-------------------------------------------------------------------------- */
function setupCursorHider() {
    let cursorTimer;
    const body = document.body;

    // Functie om cursor te resetten en nieuwe timer te starten
    function resetCursor() {
        // Maak zichtbaar
        body.classList.remove('hide-cursor');
        
        // Reset timer
        clearTimeout(cursorTimer);
        
        // Start timer van 3 seconden
        cursorTimer = setTimeout(() => {
            body.classList.add('hide-cursor');
        }, 3000);
    }

    // Direct starten
    resetCursor();

    // Luister naar beweging
    document.addEventListener('mousemove', resetCursor);
    document.addEventListener('scroll', resetCursor);
    document.addEventListener('click', resetCursor);
}
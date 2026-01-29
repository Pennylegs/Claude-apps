// Country Unscramble Quiz - Country Database
const COUNTRIES = [
    {
        name: "Brazil",
        capital: "Brasilia",
        continent: "South America",
        population: "214 million",
        hint: "Largest country in South America, famous for Carnival and the Amazon rainforest.",
        funFact: "Has won the FIFA World Cup a record 5 times."
    },
    {
        name: "Japan",
        capital: "Tokyo",
        continent: "Asia",
        population: "125 million",
        hint: "Island nation known for cherry blossoms, sushi, and bullet trains.",
        funFact: "Has over 6,800 islands and the world's oldest company (founded in 578 AD)."
    },
    {
        name: "Egypt",
        capital: "Cairo",
        continent: "Africa",
        population: "104 million",
        hint: "Home to one of the Seven Wonders of the Ancient World.",
        funFact: "The Great Pyramid of Giza was the tallest man-made structure for over 3,800 years."
    },
    {
        name: "Canada",
        capital: "Ottawa",
        continent: "North America",
        population: "38 million",
        hint: "Second largest country by area, known for maple syrup and hockey.",
        funFact: "Has more lakes than the rest of the world combined."
    },
    {
        name: "Australia",
        capital: "Canberra",
        continent: "Oceania",
        population: "26 million",
        hint: "Both a country and a continent, known for unique wildlife like kangaroos.",
        funFact: "The Great Barrier Reef is the largest living structure on Earth."
    },
    {
        name: "Germany",
        capital: "Berlin",
        continent: "Europe",
        population: "83 million",
        hint: "Known for Oktoberfest, engineering excellence, and autobahns.",
        funFact: "Has over 1,500 different types of beer and 300 varieties of bread."
    },
    {
        name: "India",
        capital: "New Delhi",
        continent: "Asia",
        population: "1.4 billion",
        hint: "World's most populous country, birthplace of yoga and chess.",
        funFact: "The game of Snakes and Ladders originated here in the 13th century."
    },
    {
        name: "Mexico",
        capital: "Mexico City",
        continent: "North America",
        population: "128 million",
        hint: "Known for ancient Mayan and Aztec civilizations, tacos, and tequila.",
        funFact: "Mexico City is sinking at a rate of about 20 inches per year."
    },
    {
        name: "France",
        capital: "Paris",
        continent: "Europe",
        population: "67 million",
        hint: "Home to the Eiffel Tower and known as the culinary capital of the world.",
        funFact: "Is the most visited country in the world with over 90 million tourists annually."
    },
    {
        name: "Thailand",
        capital: "Bangkok",
        continent: "Asia",
        population: "70 million",
        hint: "Known as the 'Land of Smiles', famous for its temples and street food.",
        funFact: "Bangkok's full ceremonial name is 168 letters long, making it the world's longest city name."
    },
    {
        name: "Argentina",
        capital: "Buenos Aires",
        continent: "South America",
        population: "46 million",
        hint: "Home of tango, gauchos, and Lionel Messi.",
        funFact: "Has the widest avenue in the world (Avenida 9 de Julio) at 140 meters wide."
    },
    {
        name: "Norway",
        capital: "Oslo",
        continent: "Europe",
        population: "5.4 million",
        hint: "Land of the Vikings, fjords, and the Northern Lights.",
        funFact: "Invented the cheese slicer and has the world's longest road tunnel (24.5 km)."
    },
    {
        name: "Kenya",
        capital: "Nairobi",
        continent: "Africa",
        population: "54 million",
        hint: "Famous for safaris, long-distance runners, and the Great Rift Valley.",
        funFact: "Is named after Mount Kenya, the second highest peak in Africa."
    },
    {
        name: "Iceland",
        capital: "Reykjavik",
        continent: "Europe",
        population: "370,000",
        hint: "Land of fire and ice, with geysers, glaciers, and volcanoes.",
        funFact: "Has no standing army and its parliament (Althing) is one of the oldest in the world, founded in 930 AD."
    },
    {
        name: "Peru",
        capital: "Lima",
        continent: "South America",
        population: "33 million",
        hint: "Home to Machu Picchu and the ancient Inca Empire.",
        funFact: "Has the deepest canyon in the world (Cotahuasi Canyon), twice as deep as the Grand Canyon."
    },
    {
        name: "Turkey",
        capital: "Ankara",
        continent: "Europe/Asia",
        population: "85 million",
        hint: "Straddles two continents and was home to the Ottoman Empire.",
        funFact: "Istanbul is the only city in the world that spans two continents."
    },
    {
        name: "Portugal",
        capital: "Lisbon",
        continent: "Europe",
        population: "10 million",
        hint: "Westernmost country in mainland Europe, known for port wine and pasteis de nata.",
        funFact: "Is one of the oldest nations in Europe with the same defined borders since 1139."
    },
    {
        name: "Colombia",
        capital: "Bogota",
        continent: "South America",
        population: "51 million",
        hint: "Named after Christopher Columbus, known for coffee and emeralds.",
        funFact: "Produces more emeralds than any other country in the world."
    },
    {
        name: "Morocco",
        capital: "Rabat",
        continent: "Africa",
        population: "37 million",
        hint: "North African country known for its medinas, tagine, and the Sahara Desert.",
        funFact: "The University of al-Qarawiyyin, founded in 859 AD, is the oldest existing university in the world."
    },
    {
        name: "Sweden",
        capital: "Stockholm",
        continent: "Europe",
        population: "10 million",
        hint: "Home of IKEA, ABBA, and the Nobel Prize.",
        funFact: "Has a hotel made entirely of ice that is rebuilt every winter."
    },
    {
        name: "Vietnam",
        capital: "Hanoi",
        continent: "Asia",
        population: "98 million",
        hint: "Known for pho, Ha Long Bay, and a long coastline shaped like the letter S.",
        funFact: "Is the world's second-largest coffee exporter after Brazil."
    },
    {
        name: "Greece",
        capital: "Athens",
        continent: "Europe",
        population: "10.7 million",
        hint: "Birthplace of democracy, the Olympics, and Western philosophy.",
        funFact: "Has more archaeological museums than any other country in the world."
    },
    {
        name: "Nepal",
        capital: "Kathmandu",
        continent: "Asia",
        population: "30 million",
        hint: "Home to Mount Everest, the highest point on Earth.",
        funFact: "Its flag is the only national flag that is not rectangular or square."
    },
    {
        name: "Nigeria",
        capital: "Abuja",
        continent: "Africa",
        population: "218 million",
        hint: "Most populous country in Africa, known as the 'Giant of Africa'.",
        funFact: "Nollywood produces more films annually than Hollywood."
    },
    {
        name: "Cuba",
        capital: "Havana",
        continent: "North America",
        population: "11 million",
        hint: "Caribbean island known for classic cars, cigars, and salsa music.",
        funFact: "Has one of the highest literacy rates in the world at 99.8%."
    },
    {
        name: "Switzerland",
        capital: "Bern",
        continent: "Europe",
        population: "8.7 million",
        hint: "Famous for chocolate, watches, cheese, and the Alps.",
        funFact: "Has enough nuclear bunker space to shelter its entire population."
    },
    {
        name: "Mongolia",
        capital: "Ulaanbaatar",
        continent: "Asia",
        population: "3.3 million",
        hint: "Home of Genghis Khan and vast steppes, the most sparsely populated sovereign nation.",
        funFact: "Has more horses than people and invented the mounted postal system."
    },
    {
        name: "Jamaica",
        capital: "Kingston",
        continent: "North America",
        population: "3 million",
        hint: "Birthplace of reggae music and Bob Marley.",
        funFact: "Was the first Caribbean country to qualify for the Winter Olympics (bobsled team, 1988)."
    },
    {
        name: "Finland",
        capital: "Helsinki",
        continent: "Europe",
        population: "5.5 million",
        hint: "Known as the 'Land of a Thousand Lakes' and home of Santa Claus.",
        funFact: "Actually has about 188,000 lakes and has been ranked the happiest country in the world."
    },
    {
        name: "Chile",
        capital: "Santiago",
        continent: "South America",
        population: "19 million",
        hint: "Long, narrow country stretching along the western coast of South America.",
        funFact: "Is the longest north-south country in the world, stretching over 4,300 km."
    },
    {
        name: "Ethiopia",
        capital: "Addis Ababa",
        continent: "Africa",
        population: "120 million",
        hint: "Birthplace of coffee and one of the oldest nations in the world.",
        funFact: "Uses a calendar that is 7-8 years behind the Gregorian calendar and has 13 months."
    },
    {
        name: "Poland",
        capital: "Warsaw",
        continent: "Europe",
        population: "38 million",
        hint: "Central European country known for pierogis and the birthplace of Copernicus.",
        funFact: "Marie Curie, the first person to win Nobel Prizes in two different sciences, was born here."
    },
    {
        name: "Madagascar",
        capital: "Antananarivo",
        continent: "Africa",
        population: "28 million",
        hint: "Large island nation off the southeast coast of Africa, known for unique wildlife.",
        funFact: "About 90% of its wildlife is found nowhere else on Earth, including lemurs."
    },
    {
        name: "Croatia",
        capital: "Zagreb",
        continent: "Europe",
        population: "4 million",
        hint: "Adriatic coast country where parts of Game of Thrones were filmed.",
        funFact: "The necktie (cravat) was invented here and named after Croatian soldiers."
    },
    {
        name: "Singapore",
        capital: "Singapore",
        continent: "Asia",
        population: "5.9 million",
        hint: "Tiny city-state known for its skyline, cleanliness, and strict laws.",
        funFact: "Chewing gum has been banned since 1992, except for therapeutic purposes."
    },
    {
        name: "Ireland",
        capital: "Dublin",
        continent: "Europe",
        population: "5 million",
        hint: "The Emerald Isle, known for its green countryside, pubs, and literary tradition.",
        funFact: "Halloween originated from the ancient Celtic festival of Samhain celebrated here."
    },
    {
        name: "Tanzania",
        capital: "Dodoma",
        continent: "Africa",
        population: "62 million",
        hint: "Home to Mount Kilimanjaro, the Serengeti, and Zanzibar.",
        funFact: "The Serengeti hosts the largest animal migration on Earth with over 1.5 million wildebeest."
    },
    {
        name: "Ecuador",
        capital: "Quito",
        continent: "South America",
        population: "18 million",
        hint: "Named after the equator which runs through it. Home to the Galapagos Islands.",
        funFact: "The Galapagos Islands inspired Charles Darwin's theory of evolution."
    },
    {
        name: "Philippines",
        capital: "Manila",
        continent: "Asia",
        population: "113 million",
        hint: "Archipelago of over 7,600 islands in Southeast Asia, known for its beaches.",
        funFact: "Is the texting capital of the world and was named after King Philip II of Spain."
    },
    {
        name: "New Zealand",
        capital: "Wellington",
        continent: "Oceania",
        population: "5.1 million",
        hint: "Where The Lord of the Rings was filmed. Known for kiwis (both the bird and the fruit).",
        funFact: "Was the first country to give women the right to vote in 1893."
    },
    {
        name: "Denmark",
        capital: "Copenhagen",
        continent: "Europe",
        population: "5.9 million",
        hint: "Home of LEGO, Hans Christian Andersen, and hygge.",
        funFact: "The Danish flag (Dannebrog) is the oldest state flag still in use, dating back to 1219."
    },
    {
        name: "Bolivia",
        capital: "Sucre",
        continent: "South America",
        population: "12 million",
        hint: "Landlocked South American country home to the world's largest salt flat.",
        funFact: "Salar de Uyuni, the largest salt flat, becomes a giant mirror during the rainy season."
    },
    {
        name: "Romania",
        capital: "Bucharest",
        continent: "Europe",
        population: "19 million",
        hint: "Home of Transylvania and the legend of Count Dracula.",
        funFact: "The Palace of the Parliament in Bucharest is the heaviest building in the world."
    },
    {
        name: "South Korea",
        capital: "Seoul",
        continent: "Asia",
        population: "52 million",
        hint: "Known for K-pop, kimchi, Samsung, and rapid technological advancement.",
        funFact: "Has the fastest average internet speed in the world."
    },
    {
        name: "Costa Rica",
        capital: "San Jose",
        continent: "North America",
        population: "5.2 million",
        hint: "Central American country with no military, known for biodiversity and 'Pura Vida'.",
        funFact: "Contains about 6% of the world's biodiversity despite covering only 0.03% of the planet's surface."
    },
    {
        name: "Bhutan",
        capital: "Thimphu",
        continent: "Asia",
        population: "780,000",
        hint: "Himalayan kingdom that measures Gross National Happiness instead of GDP.",
        funFact: "Is the only carbon-negative country in the world, absorbing more CO2 than it produces."
    },
    {
        name: "Panama",
        capital: "Panama City",
        continent: "North America",
        population: "4.4 million",
        hint: "Known for a famous canal connecting the Atlantic and Pacific Oceans.",
        funFact: "The Panama Canal saves ships a 7,800-mile journey around South America."
    },
    {
        name: "Ukraine",
        capital: "Kyiv",
        continent: "Europe",
        population: "44 million",
        hint: "Largest country entirely within Europe, known as the 'breadbasket of Europe'.",
        funFact: "Has the deepest metro station in the world (Arsenalna in Kyiv, 105.5m deep)."
    },
    {
        name: "Fiji",
        capital: "Suva",
        continent: "Oceania",
        population: "900,000",
        hint: "Pacific island paradise made up of more than 330 islands.",
        funFact: "One of the first places in the world to see the sunrise each day."
    },
    {
        name: "Namibia",
        capital: "Windhoek",
        continent: "Africa",
        population: "2.5 million",
        hint: "Home to the oldest desert in the world (Namib) and vast sand dunes.",
        funFact: "Was the first country in the world to include environmental protection in its constitution."
    }
];

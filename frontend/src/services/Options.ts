import { getIndexedImage, getAdventureImage } from "./Images";// Option.tsx
import { Plane, Phone, ShieldCheck, MapPin, Calendar, Globe, House, Car } from "lucide-react";



export const PLACES = [
  {
    id: "jammu-kashmir",
    name: "Jammu & Kashmir",
    image: "/images/jammu.jpg",
    places: [
      {
        id: "srinagar",
        name: "Srinagar",
        image: "/images/srinagar.jpg",
        shortDesc: "Famous for Dal Lake, Mughal Gardens & Houseboats.",
         description: `Srinagar, known as the “Heart of Kashmir,” is a beautiful city 
      filled with lakes, mountains, and Mughal gardens. A shikara ride on Dal Lake 
      and a walk through Nishat and Shalimar gardens gives every visitor a peaceful 
      experience. It is a perfect mix of scenic beauty and Kashmiri culture.`,

      bestTime: "March–June (summer), October–December (snow season)",

      topPlaces: [
        "Dal Lake – Shikara ride experience",
        "Shalimar Bagh – Mughal garden",
        "Nishat Bagh – Beautiful lake view",
        "Hazratbal Shrine – Peaceful holy place",
        "Shankaracharya Temple – Hilltop viewpoint"
      ],

      foodsToTry: [
        "Kashmiri Kahwa",
        "Rogan Josh",
        "Wazwan",
        "Yakhni",
        "Nadru Chips"
      ],

      travelTips: [
        "Carry warm clothes",
        "Book shikara rides early morning or sunset",
        "Keep cash, network may fluctuate",
        "Respect local customs"
      ]
      },
      {
  id: "gulmarg",
  name: "Gulmarg",
  image: "/images/gulmarg.jpg",
  shortDesc: "Perfect for skiing, snow & cable car rides.",

  description: `Gulmarg is one of India's most famous winter destinations, known 
  for its snowy landscapes, skiing slopes, and the world-famous Gulmarg Gondola. 
  Surrounded by tall pine forests and breathtaking mountains, Gulmarg offers a 
  peaceful experience along with fun winter activities. Whether it's riding the 
  gondola, walking in the snow, or enjoying the fresh mountain air, Gulmarg is a 
  perfect escape for nature and adventure lovers.`,

  bestTime: "December–March (snow), April–June (green and pleasant)",

  topPlaces: [
    "Gulmarg Gondola – One of the highest cable cars in the world",
    "Apharwat Peak – Snow paradise and skiing point",
    "Kongdori Meadow – Perfect for photos and snow fun",
    "St. Mary’s Church – Historic and peaceful spot",
    "Maharani Temple – Scenic temple in the valley"
  ],

  foodsToTry: [
    "Kashmiri Dum Aloo",
    "Kahwa Tea",
    "Gushtaba",
    "Rista",
    "Harissa (winter special)"
  ],

  travelTips: [
    "Wear proper snow boots to avoid slipping",
    "Book Gondola tickets online during peak season",
    "Carry warm jackets, gloves, and caps",
    "Stay hydrated—cold weather can cause fatigue",
    "If skiing, hire a certified local guide"
  ]
},

     {
  id: "pahalgam",
  name: "Pahalgam",
  image: "/images/pahalgam.jpg",
  shortDesc: "Known for rivers, valleys and trekking routes.",

  description: `Pahalgam is a peaceful hill station famous for its lush valleys, 
  flowing rivers, pine forests, and beautiful mountain views. It is the starting 
  point of many popular treks and the Amarnath Yatra. Whether you want to enjoy 
  a calm riverside walk, ride a pony to the famous meadows, or visit stunning 
  valleys like Betaab and Aru, Pahalgam offers a refreshing and relaxing 
  experience for every traveler.`,

  bestTime: "April–June (pleasant weather), September–November (autumn beauty)",

  topPlaces: [
    "Betaab Valley – Scenic valley with rivers & greenery",
    "Aru Valley – Perfect for photography and camping",
    "Chandanwari – Starting point of Amarnath Yatra",
    "Lidder River – Riverside walks and trout fishing",
    "Pahalgam Golf Course – Beautiful panoramic views"
  ],

  foodsToTry: [
    "Kashmiri Rajma Chawal",
    "Kahwa Tea",
    "Tabakh Maaz",
    "Modur Pulao (sweet saffron rice)",
    "Dum Aloo"
  ],

  travelTips: [
    "Hire local ponies for Aru Valley/Chandanwari rides",
    "Wear good shoes for long walks",
    "Weather becomes cold in evenings—carry warm clothing",
    "Avoid trekking alone; hire a guide for safety",
    "Keep cash handy—signal may fluctuate in some areas"
  ]
}
,
     {
  id: "sonamarg",
  name: "Sonamarg",
  image: "/images/sonamarg.jpg",
  shortDesc: "The meadow of gold with glaciers & mountains.",

  description: `Sonamarg, meaning “Meadow of Gold,” is a breathtaking valley
  surrounded by snowy mountains, lush meadows, and crystal-clear rivers. It is 
  known for the Thajiwas Glacier, where travelers can experience snow even in 
  summer. With its peaceful landscapes, flowing streams, and exciting adventure 
  activities, Sonamarg is perfect for nature lovers and thrill seekers alike.`,

  bestTime: "May–October (best weather), December–February (snow lovers)",

  topPlaces: [
    "Thajiwas Glacier – Pony rides and snow activities",
    "Zero Point (Zojila Pass) – Extreme snow adventure",
    "Baltal Valley – Scenic valley near Amarnath base",
    "Vishansar & Krishansar Lakes – Famous trekking lakes",
    "Sindh River – Beautiful riverside views"
  ],

  foodsToTry: [
    "Kashmiri Noon Chai (pink tea)",
    "Rogan Josh",
    "Mutton Yakhni",
    "Lavasa (Kashmiri bread)",
    "Kashmiri Pulao"
  ],

  travelTips: [
    "Pony rides are common—negotiate prices before riding",
    "Carry warm clothes even in summer",
    "Zero Point has very low temperatures—prepare well",
    "ATMs and networks may be limited—carry cash",
    "Road may close in winter depending on snowfall"
  ]
}
,

      // ⭐ NEW ADDED ITEMS (as you requested)
     {
  id: "leh-ladakh-adventure",
  name: "Leh–Ladakh Adventure",
  image: "/images/leh.jpg",
  shortDesc: "High-altitude deserts, blue lakes & adventure roads.",

  description: `Leh–Ladakh is one of India’s most exciting travel destinations,
  known for its stunning mountain landscapes, crystal-clear lakes, ancient
  monasteries, and thrilling high-altitude roads. Whether you're riding through
  Khardung La, camping beside Pangong Lake, or exploring Leh’s old markets,
  Ladakh offers a unique mix of adventure, spirituality, and natural beauty.`,

  bestTime: "May–September (roads open, perfect weather)",

  topPlaces: [
    "Pangong Lake – Famous blue lake from 3 Idiots",
    "Khardung La Pass – One of the world’s highest motorable roads",
    "Nubra Valley – Sand dunes & double-humped camels",
    "Magnetic Hill – The optical illusion road",
    "Thiksey Monastery – Stunning hilltop monastery with views"
  ],

  foodsToTry: [
    "Thukpa (Tibetan noodle soup)",
    "Momos",
    "Butter Tea",
    "Skyu (traditional Ladakhi pasta)",
    "Apricot Jam (local specialty)"
  ],

  travelTips: [
    "Acclimatize for 24 hours to avoid altitude sickness",
    "Stay hydrated; carry ORS",
    "Nights get cold—carry warm jackets",
    "Mobile network may be limited (BSNL/Airtel works best)",
    "Carry cash—ATMs are few in remote areas",
    "Avoid heavy activity on the first day"
  ]
}
,

      {
  id: "shimla-manali-classic",
  name: "Shimla – Manali Classic",
  image: "/images/shimla-manali.jpg",
  shortDesc: "Hill stations, snow points, mall roads & mountain views.",

  description: `Shimla and Manali together make one of India’s most popular 
  hill-station tours. Shimla is known for its colonial charm, Mall Road, and 
  scenic viewpoints, while Manali offers snow adventures, Solang Valley, and 
  beautiful riverside landscapes. The route between the two is filled with 
  mountains, pine forests, waterfalls, and peaceful valleys—making it the 
  perfect trip for families, couples, and adventure lovers.`,

  bestTime: "March–June (pleasant), December–February (snow)",

  topPlaces: [
    "Mall Road, Shimla – Shopping & cafes",
    "Kufri – Snow fun and adventure park",
    "Jakhoo Temple – Hilltop views & monkeys",
    "Solang Valley, Manali – Paragliding, skiing & ATV rides",
    "Rohtang Pass – Snow paradise (permit required)",
    "Old Manali – Cafes, music & riverside vibes",
    "Hidimba Temple – Peaceful forest temple"
  ],

  foodsToTry: [
    "Siddu (Himachali speciality)",
    "Momos",
    "Thukpa",
    "Tudkiya Bhat (traditional rice dish)",
    "Hot Maggi at snow points"
  ],

  travelTips: [
    "Rohtang Pass requires online permits—book early",
    "Temperature drops at night—carry warm clothes",
    "Traffic can be heavy on weekends—start early",
    "Try staying 1 night each in Shimla & Manali for best experience",
    "Book adventure activities only from certified operators"
  ]
}
,

      {
        id: "spiti-lahaul-explorer",
        name: "Spiti & Lahaul Explorer",
        image: "/images/spiti.jpg",
      },
    ],
  },
  {
  id: "punjab",
  name: "Punjab",
  image: "/images/punjab.jpg",
  places: [
   {
  id: "amritsar-heritage-food",
  name: "Amritsar Heritage & Food Short Break",
  image: "/images/amritsar.jpg",
  shortDesc: "Famous for Golden Temple, Wagah Border & Punjabi cuisine.",
  description: `Amritsar, the spiritual and cultural hub of Punjab, is renowned for its rich heritage and mouth-watering food. 
  Visiting the Golden Temple, exploring the old city markets, and witnessing the Wagah Border ceremony 
  provide an immersive experience of Punjabi culture and tradition. The city is a paradise for food lovers, 
  offering authentic Punjabi delicacies at every corner.`,
  
  bestTime: "November–March (pleasant weather for sightseeing and food tours)",

  topPlaces: [
    "Golden Temple – Spiritual and architectural marvel",
    "Jallianwala Bagh – Historical significance",
    "Wagah Border – Flag lowering ceremony",
    "Partition Museum – Insight into India-Pakistan history",
    "Old City Markets – Local shopping and street food"
  ],

  foodsToTry: [
    "Amritsari Kulcha",
    "Lassi",
    "Chole Bhature",
    "Makki di Roti & Sarson da Saag",
    "Jalebi & Rabri"
  ],

  travelTips: [
    "Dress modestly when visiting religious places",
    "Try street food from popular local joints",
    "Plan Wagah Border visit in the evening",
    "Carry cash for local markets",
    "Stay hydrated and wear comfortable shoes for walking"
  ]
}
,
    {
  id: "rural-punjab-cultural",
  name: "Rural Punjab & Cultural Immersion",
  image: "/images/punjab-rural.jpg",
  shortDesc: "Experience traditional Punjabi village life, folk music & local cuisine.",
  description: `Explore the vibrant rural life of Punjab, where traditions, agriculture, and folk culture thrive. 
  Visit villages to see mustard fields, traditional mud houses, and experience Punjabi hospitality. 
  Enjoy folk dances like Bhangra and Giddha, and learn about rural crafts and culinary traditions. 
  This trip offers an authentic glimpse into the heart of Punjab’s heritage.`,
  
  bestTime: "October–March (pleasant weather for village tours and outdoor activities)",

  topPlaces: [
    "Traditional Punjabi Villages – Explore rural life and culture",
    "Local Farms – Witness mustard fields and crop cultivation",
    "Folk Dance Performances – Bhangra and Giddha shows",
    "Village Markets – Handicrafts and local products",
    "Community Kitchens – Try homemade Punjabi meals"
  ],

  foodsToTry: [
    "Makki di Roti & Sarson da Saag",
    "Lassi",
    "Paneer Tikka",
    "Chole Kulche",
    "Sweet desserts like Gur & Jalebi"
  ],

  travelTips: [
    "Carry comfortable clothes and shoes for walking in fields",
    "Respect local customs and traditions",
    "Interact with locals to learn about village life",
    "Plan visits to farms in the morning for best experience",
    "Carry water and sun protection for outdoor tours"
  ]
}

  ],
},

{
    id: "haryana",
    name: "Haryana",
    image: "/images/haryana.jpg",
    places: [
      {
  id: "kurukshetra-heritage",
  name: "Kurukshetra & Heritage Short Break",
  image: "/images/kurukshetra.jpg",
  shortDesc: "Famous for historical sites, temples & spiritual heritage.",
  description: `Kurukshetra, known as the “Land of the Bhagavad Gita,” is a city steeped in history 
  and spirituality. Explore ancient temples, sacred tanks, and historical monuments that narrate 
  tales of the Mahabharata. It’s a perfect blend of pilgrimage, history, and cultural exploration.`,
  
  bestTime: "October–March (pleasant weather for sightseeing and temple visits)",

  topPlaces: [
    "Brahma Sarovar – Sacred water tank",
    "Kurukshetra Panorama & Science Centre – History and exhibits",
    "Jyotisar – Birthplace of Bhagavad Gita teaching",
    "Sheikh Chilli’s Tomb – Architectural marvel",
    "Sannihit Sarovar – Spiritual and historical significance"
  ],

  foodsToTry: [
    "North Indian Thali",
    "Chole Bhature",
    "Lassi",
    "Local sweets like Jalebi and Peda",
    "Punjabi-style snacks"
  ],

  travelTips: [
    "Dress modestly when visiting temples",
    "Carry water and light snacks for sightseeing",
    "Plan visits early morning or evening for comfortable weather",
    "Respect local customs and rituals",
    "Use local guides for historical insights"
  ]
}
,
     {
  id: "morni-hills-weekend",
  name: "Morni Hills Weekend Adventure",
  image: "/images/morni-hills.jpg",
  shortDesc: "Scenic hill getaway with trekking, lakes & nature trails.",
  description: `Morni Hills, located in Haryana, is a perfect weekend escape for nature lovers and adventure enthusiasts. 
  Explore lush green hills, serene lakes, and winding nature trails. Enjoy trekking, bird-watching, 
  and peaceful evenings amidst the tranquil beauty of the hills. Ideal for a rejuvenating break from city life.`,
  
  bestTime: "September–March (pleasant weather for trekking and outdoor activities)",

  topPlaces: [
    "Tikkar Taal – Picturesque twin lakes",
    "Morni Fort – Historical site with panoramic views",
    "Nature Trails – Trekking and hiking routes",
    "Bird Watching Spots – Observe local and migratory birds",
    "Village Visits – Experience rural lifestyle and culture"
  ],

  foodsToTry: [
    "Local North Indian cuisine",
    "Traditional Punjabi snacks",
    "Freshly made parathas",
    "Seasonal fruits from local orchards",
    "Street food from Morni market"
  ],

  travelTips: [
    "Carry comfortable trekking shoes and clothes",
    "Start early morning for trekking and lake visits",
    "Carry water and light snacks",
    "Respect local customs in villages",
    "Check weather before planning outdoor activities"
  ]
}

    ],
  },
 {
    id: "delhi",
    name: "Delhi (NCT)",
    image: "/images/delhi.jpg",
    places: [
      {
  id: "old-delhi-heritage-food",
  name: "Old Delhi Heritage & Street Food Walk",
  image: "/images/old-delhi.jpg",
  shortDesc: "Famous for historical landmarks, bustling bazaars & iconic street food.",
  description: `Old Delhi, the historic heart of India’s capital, offers a vibrant mix of heritage and culinary delights. 
  Wander through narrow lanes, visit iconic landmarks, and experience the bustling bazaars. 
  From spicy street food to majestic Mughal architecture, every step gives you a taste of Delhi’s rich culture and history.`,
  
  bestTime: "October–March (cool weather ideal for walking tours and sightseeing)",

  topPlaces: [
    "Red Fort – Iconic Mughal fortress",
    "Jama Masjid – Grand mosque of Old Delhi",
    "Chandni Chowk – Bustling market for shopping",
    "Raj Ghat – Memorial of Mahatma Gandhi",
    "Paranthe Wali Gali – Famous street for parathas"
  ],

  foodsToTry: [
    "Chole Bhature",
    "Parathas",
    "Jalebi & Rabri",
    "Kebabs and Tandoori delights",
    "Street chaat varieties"
  ],

  travelTips: [
    "Wear comfortable shoes for walking tours",
    "Keep small change handy for street food",
    "Avoid visiting crowded areas during peak hours",
    "Stay hydrated and carry water bottles",
    "Respect local customs at religious sites"
  ]
},
      {
  id: "delhi-luxury-shopping",
  name: "Delhi Luxury & Shopping Weekend",
  image: "/images/delhi-luxury.jpg",
  shortDesc: "Explore high-end malls, designer stores & premium dining experiences.",
  description: `Delhi, the capital city, offers a perfect blend of luxury shopping and gourmet experiences. 
  From upscale malls and designer boutiques to trendy cafes and fine dining, this weekend getaway 
  is ideal for fashion enthusiasts and food lovers looking for a stylish city escape.`,
  
  bestTime: "October–March (pleasant weather for shopping and city exploration)",

  topPlaces: [
    "DLF Emporio – Luxury brands and designer stores",
    "Select Citywalk – Trendy shopping mall with dining options",
    "Khan Market – Boutique stores and cafes",
    "Connaught Place – Premium stores and vibrant nightlife",
    "Ambience Mall – Shopping, entertainment, and dining under one roof"
  ],

  foodsToTry: [
    "Gourmet international cuisine",
    "Trendy cafes’ desserts and beverages",
    "North Indian delicacies in fine dining restaurants",
    "Street food at upscale food courts",
    "Fusion and modern Indian dishes"
  ],

  travelTips: [
    "Carry a credit/debit card for easy payments",
    "Plan your route to cover multiple malls efficiently",
    "Check for ongoing sales and discounts",
    "Wear comfortable shoes for walking in malls",
    "Reserve tables in advance for popular dining spots"
  ]
}

    ],
  },
  {
  id: "odisha",
  name: "Odisha",
  image: "/images/odisha.jpg",
  places: [
    {
  id: "odisha-golden-triangle",
  name: "Odisha Golden Triangle (Bhubaneswar – Puri – Konark – Chilika)",
  image: "/images/odisha-golden-triangle.jpg",
  shortDesc: "Famous for temples, beaches, UNESCO sites & Chilika Lake.",
  description: `The Odisha Golden Triangle covers the cultural and natural highlights of Bhubaneswar, Puri, Konark, and Chilika. 
  Explore ancient temples, admire the Sun Temple at Konark, relax on Puri beach, and spot migratory birds at Chilika Lake. 
  This itinerary combines heritage, spirituality, and scenic beauty in one memorable journey.`,
  
  bestTime: "October–March (pleasant weather for sightseeing and outdoor activities)",

  topPlaces: [
    "Lingaraj Temple – Iconic Bhubaneswar temple",
    "Konark Sun Temple – UNESCO World Heritage site",
    "Jagannath Temple, Puri – Spiritual landmark",
    "Chilika Lake – Bird watching and boat rides",
    "Puri Beach – Relaxing seaside experience"
  ],

  foodsToTry: [
    "Odisha Pakhala (fermented rice)",
    "Chhena Poda (baked cheese dessert)",
    "Dalma (lentil and vegetable dish)",
    "Seafood specialties at Puri",
    "Local sweets like Rasgulla"
  ],

  travelTips: [
    "Dress modestly when visiting temples",
    "Carry water and sun protection for outdoor visits",
    "Plan Chilika Lake trip early morning for best bird sightings",
    "Use local guides to explore temple architecture",
    "Try local eateries for authentic Odia cuisine"
  ]
},
    {
  id: "tribal-odisha-simlipal",
  name: "Tribal Odisha & Simlipal Safari",
  image: "/images/tribal-odisha.jpg",
  shortDesc: "Explore tribal culture, wildlife sanctuaries & scenic forests.",
  description: `Discover the rich tribal heritage and natural beauty of Odisha with a safari in Simlipal National Park. 
  Interact with local tribal communities, explore dense forests, and spot wildlife like elephants and tigers. 
  This journey offers a blend of cultural immersion and thrilling wildlife adventure.`,
  
  bestTime: "October–March (pleasant weather for safaris and outdoor exploration)",

  topPlaces: [
    "Simlipal National Park – Wildlife safari and nature trails",
    "Local tribal villages – Cultural immersion and handicrafts",
    "Barehipani & Joranda Waterfalls – Scenic viewpoints",
    "Khiching – Ancient temples and heritage sites",
    "Kanika Palace – Historical architecture and museum"
  ],

  foodsToTry: [
    "Local tribal cuisine",
    "Rice-based dishes and forest produce",
    "Traditional Odisha snacks",
    "Seasonal fruits from villages",
    "Freshwater fish specialties"
  ],

  travelTips: [
    "Carry comfortable trekking shoes and clothes",
    "Use mosquito repellent during forest visits",
    "Respect tribal customs and traditions",
    "Hire local guides for safaris and village visits",
    "Carry water and light snacks for outdoor excursions"
  ]
}

  ],
},

{
  id: "west-bengal",
  name: "West Bengal",
  image: "/images/west-bengal.jpg",
  places: [
    {
  id: "kolkata-sundarbans-heritage",
  name: "Kolkata & Sundarbans Heritage Tour",
  image: "/images/kolkata-sundarbans.jpg",
  shortDesc: "Explore colonial Kolkata, cultural landmarks & Sundarbans wildlife.",
  description: `This tour combines the cultural richness of Kolkata with the natural wonders of the Sundarbans. 
  Stroll through historic colonial buildings, visit temples and museums, and experience the vibrant local culture. 
  Then head to the Sundarbans to explore the unique mangrove ecosystem, spot wildlife, and enjoy serene boat rides.`,
  
  bestTime: "October–March (pleasant weather for city sightseeing and wildlife exploration)",

  topPlaces: [
    "Victoria Memorial – Iconic colonial landmark",
    "Howrah Bridge – Engineering marvel",
    "Dakshineswar Kali Temple – Spiritual site",
    "Sundarbans National Park – Wildlife safari",
    "Mangrove Creeks – Boat rides and bird watching"
  ],

  foodsToTry: [
    "Kolkata street food – Puchka, Kathi Rolls",
    "Rosogolla and Sandesh",
    "Traditional Bengali thali",
    "Fish curry and rice",
    "Macher Jhol (Bengali fish curry)"
  ],

  travelTips: [
    "Carry comfortable walking shoes for city tours",
    "Hire local guides for Sundarbans safari",
    "Carry water and sun protection for outdoor activities",
    "Respect local customs and temple etiquette",
    "Plan Sundarbans trips in early morning or late afternoon for wildlife sightings"
  ]
},
    {
  id: "darjeeling-kalimpong-hill-escape",
  name: "Darjeeling & Kalimpong Hill Escape",
  image: "/images/darjeeling-kalimpong.jpg",
  shortDesc: "Famous for tea gardens, Himalayan views & peaceful hill towns.",
  description: `Explore the scenic beauty of Darjeeling and Kalimpong, two charming hill towns in West Bengal. 
  Enjoy panoramic views of the Himalayas, stroll through lush tea gardens, and experience serene monasteries. 
  This trip is perfect for nature lovers and those seeking a tranquil hill getaway.`,
  
  bestTime: "March–June (spring/summer) and September–November (autumn)",

  topPlaces: [
    "Tiger Hill – Sunrise view over Kanchenjunga",
    "Darjeeling Tea Gardens – Tea plantation tours",
    "Batasia Loop – Iconic railway landmark",
    "Kalimpong Monasteries – Peaceful spiritual sites",
    "Himalayan Zoological Park – Explore Himalayan wildlife"
  ],

  foodsToTry: [
    "Local Tibetan momos and thukpa",
    "Darjeeling tea",
    "Bengali sweets and pastries",
    "Local street food in Kalimpong",
    "Traditional North-East Indian cuisine"
  ],

  travelTips: [
    "Carry warm clothes, especially early mornings",
    "Start early for sunrise views at Tiger Hill",
    "Wear comfortable shoes for hill walks and treks",
    "Carry water and snacks for long sightseeing days",
    "Respect local customs at monasteries"
  ]
}

  ],
},
// ___________________________
{
  id: "bihar",
  name: "Bihar",
  image: "/images/bihar.jpg",
  places: [
    {
  id: "buddhist-circuit",
  name: "Buddhist Circuit (Bodhgaya – Nalanda – Rajgir – Vaishali – Patna)",
  image: "/images/buddhist-circuit.jpg",
  shortDesc: "Explore ancient Buddhist heritage, monasteries & historical sites.",
  description: `The Buddhist Circuit takes you through key locations associated with the life of Buddha. 
  Visit ancient monasteries, meditation sites, and historical landmarks while learning about 
  the rich spiritual and cultural heritage of Bihar. This journey offers both enlightenment and history.`,
  
  bestTime: "October–March (pleasant weather for sightseeing and temple visits)",

  topPlaces: [
    "Mahabodhi Temple, Bodhgaya – UNESCO World Heritage site",
    "Nalanda University – Ancient center of learning",
    "Rajgir – Vulture’s Peak & hot springs",
    "Vaishali – Historical and spiritual site",
    "Patna – Patna Sahib Gurudwara & local heritage"
  ],

  foodsToTry: [
    "Bihari Litti Chokha",
    "Sattu-based snacks",
    "Local sweets like Khaja",
    "Traditional North Indian thali",
    "Street food specialties in Patna"
  ],

  travelTips: [
    "Dress modestly when visiting religious sites",
    "Carry water and light snacks during long sightseeing trips",
    "Hire local guides for historical insights",
    "Plan visits early morning or late afternoon to avoid crowds",
    "Respect local customs and temple etiquette"
  ]
},
    {
  id: "patna-heritage-short-trip",
  name: "Patna Heritage Short Trip",
  image: "/images/patna-heritage.jpg",
  shortDesc: "Discover historical landmarks, temples & local culture in Patna.",
  description: `Patna, the capital of Bihar, is a city rich in history and culture. 
  Explore ancient temples, colonial-era monuments, and vibrant local markets. 
  This short trip offers a blend of heritage sightseeing and cultural experiences in the heart of Bihar.`,
  
  bestTime: "October–March (pleasant weather for sightseeing and walking tours)",

  topPlaces: [
    "Golghar – Iconic granary with panoramic views",
    "Patna Sahib Gurudwara – Spiritual landmark",
    "Agam Kuan – Ancient historical site",
    "Patna Museum – Artifacts and heritage exhibits",
    "Sanwaliya Ji Mandir – Popular temple in the city"
  ],

  foodsToTry: [
    "Bihari Litti Chokha",
    "Sattu-based snacks",
    "Local sweets like Khaja and Balushahi",
    "Traditional North Indian thali",
    "Street food specialties in Patna"
  ],

  travelTips: [
    "Carry water and wear comfortable walking shoes",
    "Respect local customs when visiting religious sites",
    "Hire a local guide for historical insights",
    "Plan visits early morning or late afternoon to avoid crowds",
    "Try local eateries for authentic Bihari cuisine"
  ]
}
  ],
},

{
  id: "jharkhand",
  name: "Jharkhand",
  image: "/images/jharkhand.jpg",
  places: [
    {
  id: "ranchi-netarhat-betla",
  name: "Ranchi – Netarhat – Betla National Park",
  image: "/images/ranchi-netarhat-betla.jpg",
  shortDesc: "Scenic hills, sunrise points & wildlife adventures in Jharkhand.",
  description: `Explore the natural beauty of Jharkhand with a trip covering Ranchi, Netarhat, and Betla National Park. 
  Witness stunning sunrise points, rolling hills, and lush forests. Enjoy wildlife safaris, trekking, and peaceful 
  nature walks for a refreshing experience away from city life.`,
  
  bestTime: "October–March (pleasant weather for sightseeing and outdoor activities)",

  topPlaces: [
    "Jonha Falls – Picturesque waterfall near Ranchi",
    "Netarhat Sunrise Point – Stunning hilltop views",
    "Betla National Park – Wildlife safari with elephants and tigers",
    "Hundru Falls – Scenic waterfall amidst forests",
    "Ranchi Local Markets – Explore local handicrafts and cuisine"
  ],

  foodsToTry: [
    "Traditional Jharkhandi thali",
    "Chilka and bamboo shoot dishes",
    "Street food in Ranchi",
    "Local sweets like Malpua and Thekua",
    "Fresh produce from local markets"
  ],

  travelTips: [
    "Carry comfortable trekking shoes and clothes",
    "Use mosquito repellent during forest visits",
    "Hire local guides for safaris and hill treks",
    "Carry water and snacks for long sightseeing trips",
    "Respect local customs and nature rules in national parks"
  ]
},
    {
  id: "deoghar-pilgrimage",
  name: "Deoghar Pilgrimage Tour",
  image: "/images/deoghar.jpg",
  shortDesc: "Spiritual journey to the famous Baidyanath Jyotirlinga temple.",
  description: `Deoghar, a renowned pilgrimage city in Jharkhand, is famous for the Baidyanath Jyotirlinga Temple. 
  Devotees from across India visit to seek blessings and experience the spiritual ambiance. 
  Explore nearby temples, ghats, and local markets to complete the pilgrimage experience.`,
  
  bestTime: "October–March (pleasant weather for temple visits and sightseeing)",

  topPlaces: [
    "Baidyanath Jyotirlinga Temple – Main pilgrimage site",
    "Satsang Ashram – Spiritual and cultural center",
    "Naulakha Mandir – Architecturally significant temple",
    "Trikuta Parvat – Hill offering panoramic views",
    "Local Markets – Souvenirs, religious items, and local sweets"
  ],

  foodsToTry: [
    "Prasad from Baidyanath Temple",
    "Local sweets like Khaja and Peda",
    "Traditional North Indian thali",
    "Street food near temple areas",
    "Fresh fruit and snacks from local vendors"
  ],

  travelTips: [
    "Dress modestly and comfortably for temple visits",
    "Plan early morning or evening visits to avoid crowds",
    "Carry water and light snacks during long walks",
    "Respect temple customs and rituals",
    "Hire local guides for historical and cultural insights"
  ]
}

  ],
},

{
  id: "kerala",
  name: "Kerala",
  image: "/images/kerala.jpg",
  places: [
    {
  id: "kerala-backwaters-hills",
  name: "Kerala Backwaters & Hills (Kochi – Munnar – Thekkady – Alleppey – Kovalam)",
  image: "/images/kerala-backwaters-hills.jpg",
  shortDesc: "Scenic hills, lush tea gardens, wildlife & tranquil backwaters.",
  description: `Explore the natural and cultural beauty of Kerala with this itinerary covering Kochi, Munnar, 
  Thekkady, Alleppey, and Kovalam. Experience lush tea plantations, wildlife safaris, serene backwaters, 
  and beautiful beaches. Ideal for nature lovers and those seeking a relaxing yet adventurous vacation.`,
  
  bestTime: "September–March (pleasant weather for sightseeing, backwaters, and hill visits)",

  topPlaces: [
    "Munnar Tea Gardens – Scenic plantations and hills",
    "Periyar Wildlife Sanctuary, Thekkady – Safari and nature exploration",
    "Alleppey Backwaters – Houseboat cruise",
    "Kochi Fort Kochi – Colonial architecture and culture",
    "Kovalam Beach – Relaxing seaside experience"
  ],

  foodsToTry: [
    "Kerala Sadya (traditional feast)",
    "Appam with stew",
    "Seafood delicacies",
    "Puttu and Kadala Curry",
    "Local snacks and sweets"
  ],

  travelTips: [
    "Carry comfortable walking shoes and light clothes",
    "Book houseboats and safaris in advance",
    "Carry sunscreen and mosquito repellent",
    "Respect local customs and traditions",
    "Start early for sightseeing to avoid crowds"
  ]
},

   {
  id: "kerala-short-escape",
  name: "Kerala Short Escape (Kochi – Munnar – Alleppey)",
  image: "/images/kerala-short-escape.jpg",
  shortDesc: "Quick getaway to Kerala’s hills, backwaters & cultural highlights.",
  description: `This short escape covers the highlights of Kerala including Kochi, Munnar, and Alleppey. 
  Explore colonial Fort Kochi, wander through lush tea gardens in Munnar, and enjoy a relaxing backwater cruise in Alleppey. 
  Perfect for travelers seeking a brief yet immersive Kerala experience.`,
  
  bestTime: "September–March (pleasant weather for sightseeing and outdoor activities)",

  topPlaces: [
    "Fort Kochi – Colonial architecture and cultural experiences",
    "Munnar Tea Gardens – Scenic hills and plantations",
    "Mattupetty Dam – Picturesque spot for photography",
    "Alleppey Backwaters – Houseboat cruise",
    "Spice Plantations – Learn about Kerala spices and local farming"
  ],

  foodsToTry: [
    "Kerala Sadya (traditional feast)",
    "Appam with stew",
    "Seafood specialties",
    "Local snacks like banana chips",
    "Traditional sweets like Ada Pradhaman"
  ],

  travelTips: [
    "Carry comfortable walking shoes and light clothing",
    "Book houseboats in advance for backwater experience",
    "Carry sunscreen and mosquito repellent",
    "Start early for sightseeing to avoid crowds",
    "Respect local customs and traditions"
  ]
}

  ],
},

{
  id: "tamil-nadu",
  name: "Tamil Nadu",
  image: "/images/tamil-nadu.jpg",
  places: [
    {
  id: "temple-heritage-trail",
  name: "Temple & Heritage Trail (Chennai – Mahabalipuram – Pondicherry – Thanjavur – Madurai)",
  image: "/images/tamil-nadu-heritage.jpg",
  shortDesc: "Explore ancient temples, colonial towns & cultural landmarks of Tamil Nadu.",
  description: `This trail takes you through Tamil Nadu’s rich heritage, from the bustling city of Chennai to 
  the UNESCO World Heritage site of Mahabalipuram, the French charm of Pondicherry, the temple city Thanjavur, 
  and the iconic Meenakshi Temple in Madurai. Perfect for history, architecture, and culture enthusiasts.`,
  
  bestTime: "October–March (pleasant weather for sightseeing and temple visits)",

  topPlaces: [
    "Marina Beach, Chennai – Iconic city beach",
    "Shore Temple, Mahabalipuram – UNESCO World Heritage site",
    "Pondicherry French Quarters – Colonial architecture",
    "Brihadeeswarar Temple, Thanjavur – Magnificent Chola architecture",
    "Meenakshi Temple, Madurai – Famous historic temple complex"
  ],

  foodsToTry: [
    "South Indian breakfast – Idli, Dosa, Vada",
    "Filter coffee",
    "Pondicherry French-inspired pastries",
    "Thanjavur local sweets – Mysore Pak",
    "Madurai Jigarthanda (cooling dessert drink)"
  ],

  travelTips: [
    "Dress modestly for temple visits",
    "Carry water and sunscreen for outdoor sightseeing",
    "Hire local guides for historical insights",
    "Start early for temple visits to avoid crowds",
    "Respect local customs and rituals"
  ]
},
    {
  id: "ooty-kodaikanal-hills",
  name: "Ooty & Kodaikanal Hills (Chennai – Ooty – Kodaikanal)",
  image: "/images/ooty-kodaikanal.jpg",
  shortDesc: "Scenic hill stations, lush gardens & tranquil lakes in Tamil Nadu.",
  description: `Experience the serene beauty of Ooty and Kodaikanal, two popular hill stations in Tamil Nadu. 
  Enjoy leisurely strolls through botanical gardens, boating on peaceful lakes, and panoramic views of misty hills. 
  Ideal for a relaxing getaway amidst nature and cooler climates.`,
  
  bestTime: "March–June (summer) and September–November (autumn)",

  topPlaces: [
    "Ooty Botanical Gardens – Beautiful landscaped gardens",
    "Ooty Lake – Boating and leisure activities",
    "Doddabetta Peak – Highest viewpoint in Nilgiris",
    "Kodaikanal Lake – Boating and lakeside walks",
    "Coaker’s Walk – Scenic hilltop promenade"
  ],

  foodsToTry: [
    "South Indian breakfast – Dosa, Idli, Vada",
    "Homemade chocolates from Ooty",
    "Local hill station snacks",
    "Fresh fruits from Kodaikanal markets",
    "Traditional South Indian meals in local eateries"
  ],

  travelTips: [
    "Carry warm clothes for early mornings and evenings",
    "Wear comfortable walking shoes for hill treks and strolls",
    "Carry water and light snacks during sightseeing",
    "Start early for hilltop views and photography",
    "Respect local customs and environment in hill stations"
  ]
}

  ],
},

{
  id: "karnataka",
  name: "Karnataka",
  image: "/images/karnataka.jpg",
  places: [
    {
  id: "mysore-coorg-kabini",
  name: "Mysore – Coorg – Kabini Nature & Heritage",
  image: "/images/mysore-coorg-kabini.jpg",
  shortDesc: "Heritage palaces, coffee plantations & wildlife adventures in Karnataka.",
  description: `Explore the royal heritage of Mysore, the lush coffee plantations of Coorg, and the wildlife-rich Kabini region. 
  Visit grand palaces, stroll through scenic plantations, and enjoy safaris to spot elephants and other wildlife. 
  This trip offers a perfect mix of culture, nature, and adventure in Karnataka.`,
  
  bestTime: "October–March (pleasant weather for sightseeing, plantations, and wildlife safaris)",

  topPlaces: [
    "Mysore Palace – Iconic royal landmark",
    "Chamundi Hill – Scenic viewpoint and temple",
    "Coorg Coffee Plantations – Explore lush estates",
    "Abbey Falls – Picturesque waterfall",
    "Kabini Wildlife Sanctuary – Safari and wildlife spotting"
  ],

  foodsToTry: [
    "Mysore Pak – Famous sweet",
    "Coorgi Pandhi Curry – Traditional pork dish",
    "Local coffee from Coorg plantations",
    "South Indian meals – Dosa, Idli, Vada",
    "Kabini local snacks and forest produce"
  ],

  travelTips: [
    "Carry comfortable walking shoes and clothes",
    "Book wildlife safaris in advance",
    "Carry water and snacks for long sightseeing days",
    "Respect local customs and plantation rules",
    "Start early for photography and wildlife spotting"
  ]
},
    {
  id: "hampi-heritage-tour",
  name: "Hampi Heritage Tour (Bangalore – Hospet – Hampi)",
  image: "/images/hampi.jpg",
  shortDesc: "UNESCO World Heritage site with ancient ruins & Vijayanagara architecture.",
  description: `Explore the fascinating ruins of Hampi, a UNESCO World Heritage site known for its 
  Vijayanagara architecture, ancient temples, and boulder-strewn landscapes. 
  Discover historical monuments, enjoy scenic river views, and experience the grandeur of a bygone era.`,
  
  bestTime: "October–March (pleasant weather for sightseeing and exploration)",

  topPlaces: [
    "Virupaksha Temple – Iconic temple complex",
    "Vittala Temple & Stone Chariot – Architectural marvel",
    "Hampi Bazaar – Historic market street",
    "Matanga Hill – Panoramic sunrise and sunset views",
    "Lotus Mahal & Elephant Stables – Vijayanagara architecture highlights"
  ],

  foodsToTry: [
    "Local Karnataka thali",
    "Maddur Vada – Savory snack",
    "Ragi-based dishes",
    "Traditional South Indian breakfast – Dosa, Idli, Vada",
    "Street food near Hampi Bazaar"
  ],

  travelTips: [
    "Wear comfortable walking shoes for exploring ruins",
    "Carry water, sun protection, and snacks",
    "Start early to avoid afternoon heat",
    "Hire a local guide for historical insights",
    "Respect heritage sites and avoid littering"
  ]
},
  ]
},

{
  id: "andhra-pradesh",
  name: "Andhra Pradesh",
  image: "/images/andhra-pradesh.jpg",
  places: [
    {
  id: "tirupati-balaji-yatra",
  name: "Tirupati Balaji Yatra",
  image: "/images/tirupati.jpg",
  shortDesc: "Spiritual journey to the famous Tirupati Balaji Temple in Andhra Pradesh.",
  description: `Tirupati is one of the most visited pilgrimage destinations in India, famous for the 
  Lord Venkateswara (Balaji) Temple. Devotees from across the country come to seek blessings, 
  experience the spiritual ambiance, and explore nearby temples and local culture.`,
  
  bestTime: "September–February (pleasant weather for pilgrimage visits)",

  topPlaces: [
    "Tirumala Venkateswara Temple – Main pilgrimage site",
    "Sri Kapileswara Swamy Temple – Nearby historic temple",
    "Sri Padmavathi Ammavari Temple – Devotional landmark",
    "Talakona Waterfalls – Scenic nature spot near Tirupati",
    "Chandragiri Fort – Historical site nearby"
  ],

  foodsToTry: [
    "Prasadam from Tirumala Temple",
    "South Indian breakfast – Dosa, Idli, Vada",
    "Local Andhra meals – Spicy curries and rice",
    "Traditional sweets like Laddu",
    "Street snacks near temple areas"
  ],

  travelTips: [
    "Dress modestly and comfortably for temple visits",
    "Plan early morning or evening darshan to avoid long queues",
    "Carry water and light snacks for waiting periods",
    "Follow temple rules and maintain decorum",
    "Hire local guides for historical and cultural insights"
  ]
},
    {
  id: "vizag-araku-valley",
  name: "Vizag – Araku Valley Nature & Culture",
  image: "/images/vizag-araku.jpg",
  shortDesc: "Coastal beauty, lush valleys & tribal culture in Andhra Pradesh.",
  description: `Experience the natural and cultural charm of Vizag and Araku Valley. 
  Explore pristine beaches, scenic valleys, waterfalls, and coffee plantations. 
  Interact with local tribal communities and enjoy a mix of nature, adventure, and cultural experiences.`,
  
  bestTime: "October–March (pleasant weather for sightseeing and outdoor activities)",

  topPlaces: [
    "Araku Valley – Coffee plantations and scenic landscapes",
    "Borra Caves – Limestone caves with stalactites and stalagmites",
    "Dolphin’s Nose – Panoramic viewpoint over Vizag coast",
    "Rushikonda Beach – Relaxing seaside experience",
    "Tribal Museum, Araku – Learn about local tribal culture"
  ],

  foodsToTry: [
    "Local Andhra cuisine – Spicy and flavorful dishes",
    "Fresh seafood along Vizag coast",
    "Traditional tribal snacks and sweets",
    "Coffee from Araku plantations",
    "Street food specialties in Vizag city"
  ],

  travelTips: [
    "Carry comfortable walking shoes and light clothing",
    "Start early for sightseeing and photography",
    "Carry water, sun protection, and mosquito repellent",
    "Respect local customs and tribal traditions",
    "Book guided tours for Borra Caves and tribal villages"
  ]
}

  ],
},

{
  id: "telangana",
  name: "Telangana",
  image: "/images/telangana.jpg",
  places: [
    {
  id: "hyderabad-heritage-culture",
  name: "Hyderabad Heritage & Culture",
  image: "/images/hyderabad.jpg",
  shortDesc: "Explore the royal heritage, historic monuments & rich culture of Hyderabad.",
  description: `Hyderabad, the city of Nizams, offers a unique blend of history, architecture, and culture. 
  Explore grand palaces, historic forts, bustling markets, and taste the world-famous Hyderabadi cuisine. 
  This trip provides a perfect mix of heritage sightseeing and cultural experiences.`,
  
  bestTime: "October–March (pleasant weather for sightseeing and city tours)",

  topPlaces: [
    "Charminar – Iconic monument and city landmark",
    "Golconda Fort – Historical fortress with panoramic views",
    "Salar Jung Museum – Artifacts and cultural exhibits",
    "Hussain Sagar Lake – Scenic lake with Buddha statue",
    "Laad Bazaar – Famous shopping street for bangles and handicrafts"
  ],

  foodsToTry: [
    "Hyderabadi Biryani",
    "Haleem (seasonal specialty)",
    "Double ka Meetha – Sweet delicacy",
    "Irani Chai and Osmania Biscuits",
    "Local street food specialties"
  ],

  travelTips: [
    "Carry comfortable walking shoes for city tours",
    "Start early to avoid crowds at popular monuments",
    "Use local guides for historical and cultural insights",
    "Carry water and sun protection during outdoor visits",
    "Respect local customs and heritage sites"
  ]
},

    {
  id: "warangal-heritage-tour",
  name: "Warangal Heritage Tour",
  image: "/images/warangal.jpg",
  shortDesc: "Ancient forts, temples & Kakatiya architecture in Telangana.",
  description: `Explore the historic city of Warangal, known for its Kakatiya-era forts, temples, and architectural marvels. 
  Discover grand gateways, sculpted temples, and serene lakes while learning about the rich heritage and culture of Telangana.`,
  
  bestTime: "October–March (pleasant weather for sightseeing and heritage walks)",

  topPlaces: [
    "Warangal Fort – Iconic Kakatiya-era fort",
    "Thousand Pillar Temple – Architectural masterpiece",
    "Ramappa Temple – UNESCO World Heritage site",
    "Bhadrakali Temple – Historical and spiritual site",
    "Pakhal Lake – Scenic spot for relaxation and photography"
  ],

  foodsToTry: [
    "Telangana traditional thali",
    "Local snacks and sweets",
    "Hyderabadi-style biryani",
    "Street food in Warangal markets",
    "Regional vegetarian and non-vegetarian dishes"
  ],

  travelTips: [
    "Carry comfortable walking shoes for heritage walks",
    "Start early for visiting forts and temples to avoid crowds",
    "Carry water and sun protection for outdoor sightseeing",
    "Hire a local guide for historical insights",
    "Respect temple customs and heritage sites"
  ]
}

  ],
},

{
  id: "rajasthan",
  name: "Rajasthan",
  image: "/images/rajasthan.jpg",
  places: [
    {
  id: "royal-rajasthan-heritage",
  name: "Royal Rajasthan Heritage Tour (Jaipur – Jodhpur – Udaipur – Jaisalmer)",
  image: "/images/royal-rajasthan.jpg",
  shortDesc: "Explore majestic forts, palaces & rich Rajasthani culture.",
  description: `Experience the grandeur of Rajasthan with visits to Jaipur, Jodhpur, Udaipur, and Jaisalmer. 
  Discover magnificent forts, royal palaces, colorful bazaars, and traditional arts. 
  This tour is perfect for heritage lovers and those seeking the royal charm of Rajasthan.`,
  
  bestTime: "October–March (pleasant weather for sightseeing and desert visits)",

  topPlaces: [
    "Amer Fort, Jaipur – Majestic hilltop fort",
    "City Palace, Udaipur – Royal residence with museums",
    "Mehrangarh Fort, Jodhpur – Iconic historical fort",
    "Jaisalmer Fort – Desert fort with unique architecture",
    "Local bazaars – Handicrafts, textiles, and souvenirs"
  ],

  foodsToTry: [
    "Dal Baati Churma",
    "Gatte ki Sabzi",
    "Rajasthani sweets – Ghevar, Mawa Kachori",
    "Laal Maas (spicy mutton curry)",
    "Street snacks – Pyaz Kachori, Mirchi Bada"
  ],

  travelTips: [
    "Carry comfortable walking shoes for forts and markets",
    "Wear light, breathable clothes for desert regions",
    "Start early for photography and sightseeing",
    "Carry water and sun protection during desert visits",
    "Respect local customs and cultural heritage"
  ]
},
{
  id: "rajasthan-desert-wildlife",
  name: "Desert & Wildlife Rajasthan (Bikaner – Jaisalmer – Ranthambore)",
  image: "/images/rajasthan-desert-wildlife.jpg",
  shortDesc: "Desert landscapes, camel safaris & wildlife adventures in Rajasthan.",
  description: `Explore Rajasthan’s deserts and wildlife with a trip covering Bikaner, Jaisalmer, and Ranthambore. 
  Experience camel safaris in golden dunes, visit historical forts, and go on wildlife safaris to spot tigers and other animals. 
  Perfect for adventure and nature enthusiasts.`,
  
  bestTime: "October–March (pleasant weather for desert and wildlife safaris)",

  topPlaces: [
    "Rann of Bikaner – Desert landscapes and camel rides",
    "Junagarh Fort, Bikaner – Historical fort and museum",
    "Jaisalmer Sand Dunes – Sunset camel safari",
    "Ranthambore National Park – Tiger and wildlife safari",
    "Fatehpur Forts – Scenic heritage sites along the route"
  ],

  foodsToTry: [
    "Rajasthani Thali – Dal Baati Churma and Gatte ki Sabzi",
    "Laal Maas – Spicy mutton specialty",
    "Bikaneri snacks – Bhujia, Kachori",
    "Local sweets – Ghevar, Rasgulla",
    "Street food in Jaisalmer markets"
  ],

  travelTips: [
    "Carry comfortable shoes for forts, safaris, and desert walks",
    "Wear sun protection and light clothing in deserts",
    "Start early for wildlife safaris and photography",
    "Carry water and snacks during long desert drives",
    "Respect local culture and wildlife rules"
  ]
}

  ],
},

{
  id: "gujarat",
  name: "Gujarat",
  image: "/images/gujarat.jpg",
  places: [
   {
  id: "gujarat-heritage-culture",
  name: "Gujarat Heritage & Culture (Ahmedabad – Gir – Somnath – Dwarka)",
  image: "/images/gujarat-heritage.jpg",
  shortDesc: "Historic landmarks, temples & rich cultural heritage of Gujarat.",
  description: `Explore Gujarat’s heritage with visits to Ahmedabad, Gir, Somnath, and Dwarka. 
  Discover historic forts, ancient temples, and vibrant local culture. 
  Ideal for travelers interested in history, spirituality, and traditional arts.`,
  
  bestTime: "October–March (pleasant weather for sightseeing and outdoor visits)",

  topPlaces: [
    "Sabarmati Ashram, Ahmedabad – Historical site of Mahatma Gandhi",
    "Gir National Park – Home to Asiatic lions",
    "Somnath Temple – Famous pilgrimage site",
    "Dwarka – Ancient Krishna temple and seashore",
    "Rani ki Vav, Patan – UNESCO World Heritage stepwell"
  ],

  foodsToTry: [
    "Dhokla and Khandvi – Traditional snacks",
    "Gujarati Thali – Variety of vegetarian dishes",
    "Undhiyu – Seasonal mixed vegetable delicacy",
    "Fafda-Jalebi – Popular breakfast combination",
    "Street food – Sev Puri, Kachori"
  ],

  travelTips: [
    "Carry comfortable walking shoes for sightseeing",
    "Dress modestly at religious sites",
    "Carry water and sun protection during outdoor visits",
    "Hire local guides for heritage insights",
    "Start early for wildlife safaris and temple visits"
  ]
},
{
  id: "gujarat-coastal-wildlife",
  name: "Gujarat Coastal & Wildlife Escape (Dwarka – Somnath – Gir – Diu)",
  image: "/images/gujarat-coastal.jpg",
  shortDesc: "Coastal beauty, wildlife safaris & spiritual experiences in Gujarat.",
  description: `Experience the coastal and wildlife highlights of Gujarat with a trip covering Dwarka, Somnath, Gir, and Diu. 
  Enjoy serene beaches, visit historic temples, and embark on thrilling wildlife safaris in Gir National Park. 
  Perfect for nature lovers and adventure seekers.`,
  
  bestTime: "October–March (pleasant weather for coastal and wildlife exploration)",

  topPlaces: [
    "Dwarka – Ancient Krishna temple and coastline",
    "Somnath Temple – Spiritual landmark on the Arabian Sea",
    "Gir National Park – Wildlife safari with Asiatic lions",
    "Diu Island – Beaches, fort, and colonial architecture",
    "Local coastal villages – Cultural and traditional experiences"
  ],

  foodsToTry: [
    "Fresh seafood specialties",
    "Gujarati coastal snacks and sweets",
    "Local vegetarian thali",
    "Street food along the coast – Farsan, Chaat",
    "Traditional desserts – Shrikhand, Malpua"
  ],

  travelTips: [
    "Carry sunscreen, hat, and light clothing for coastal areas",
    "Book wildlife safaris in advance",
    "Carry water and snacks for long drives",
    "Respect local customs, wildlife, and coastal environment",
    "Start early for sightseeing and photography"
  ]
}

  ],
},

{
  id: "maharashtra",
  name: "Maharashtra",
  image: "/images/maharashtra.jpg",
  places: [
    {
  id: "mumbai-pune-lonavala",
  name: "Mumbai – Pune – Lonavala Heritage & Hills",
  image: "/images/mumbai-pune-lonavala.jpg",
  shortDesc: "Historic landmarks, hill stations & scenic escapes near Mumbai.",
  description: `Explore the cultural and scenic highlights of Maharashtra with this trip covering Mumbai, Pune, and Lonavala. 
  Discover historic forts, colonial architecture, and enjoy the lush hills and viewpoints of Lonavala. 
  Ideal for heritage lovers and nature enthusiasts.`,
  
  bestTime: "October–March (pleasant weather for sightseeing and hill visits)",

  topPlaces: [
    "Gateway of India, Mumbai – Iconic city landmark",
    "Shaniwar Wada, Pune – Historical fort and palace",
    "Lonavala Viewpoints – Scenic hills and sunset spots",
    "Bhaja and Karla Caves – Ancient rock-cut Buddhist caves",
    "Local markets – Handicrafts, chikki, and street food"
  ],

  foodsToTry: [
    "Vada Pav and Pav Bhaji – Mumbai street food",
    "Misal Pav – Popular Maharashtrian dish",
    "Chikki – Traditional Lonavala sweet",
    "Maharashtrian Thali – Variety of local dishes",
    "Street snacks – Pani Puri, Bhel Puri"
  ],

  travelTips: [
    "Carry comfortable walking shoes for forts and hill walks",
    "Start early for scenic viewpoints and sightseeing",
    "Carry water, snacks, and sun protection",
    "Respect local customs and heritage sites",
    "Book accommodations in advance during peak season"
  ]
},
{
  id: "mumbai-goa-coastal",
  name: "Mumbai – Goa Coastal & Beaches Escape",
  image: "/images/mumbai-goa.jpg",
  shortDesc: "Coastal beauty, beaches & vibrant culture from Mumbai to Goa.",
  description: `Experience the coastal charm of Maharashtra and Goa with this itinerary from Mumbai to Goa. 
  Enjoy pristine beaches, vibrant nightlife, cultural landmarks, and water sports. 
  Perfect for a relaxing beach holiday with a mix of adventure and leisure.`,
  
  bestTime: "October–March (pleasant weather for beaches and coastal activities)",

  topPlaces: [
    "Marine Drive, Mumbai – Iconic city coastline",
    "Baga and Calangute Beaches, Goa – Popular beach destinations",
    "Fort Aguada, Goa – Historic coastal fort",
    "Chapora Fort, Goa – Sunset viewpoint",
    "Old Goa Churches – UNESCO World Heritage sites"
  ],

  foodsToTry: [
    "Goan seafood – Fish curry, Prawn Balchao",
    "Goan Bebinca – Traditional dessert",
    "Portugese-inspired Goan cuisine",
    "Local street food – Sannas, Chorizo Pao",
    "Coconut-based dishes and drinks"
  ],

  travelTips: [
    "Carry sunscreen, hat, and swimwear for beach activities",
    "Start early for sightseeing and beach visits",
    "Carry water and light snacks for outdoor excursions",
    "Respect local customs and coastal environment",
    "Book accommodations and water sports in advance"
  ]
}

  ],
},

{
  id: "madhya-pradesh",
  name: "madhya-pradesh",
  image: "/images/madhya-pradesh.jpg",
  places: [
   {
  id: "khajuraho-orchha-gwalior",
  name: "Khajuraho – Orchha – Gwalior Heritage Tour",
  image: "/images/mp-heritage.jpg",
  shortDesc: "Ancient temples, royal palaces & architectural wonders in Madhya Pradesh.",
  description: `Explore the rich heritage of Madhya Pradesh with visits to Khajuraho, Orchha, and Gwalior. 
  Admire UNESCO World Heritage temples, historic palaces, and majestic forts. 
  Ideal for travelers interested in history, architecture, and Indian culture.`,
  
  bestTime: "October–March (pleasant weather for sightseeing and heritage tours)",

  topPlaces: [
    "Khajuraho Temples – UNESCO World Heritage site with intricate carvings",
    "Orchha Fort & Palaces – Historic architectural complex",
    "Chaturbhuj Temple, Orchha – Ancient temple with tall spire",
    "Gwalior Fort – Majestic hilltop fort with museums",
    "Sas Bahu Temples, Gwalior – Historic temples with intricate carvings"
  ],

  foodsToTry: [
    "Madhya Pradesh Thali – Local vegetarian dishes",
    "Poha – Popular breakfast snack",
    "Bhutte Ka Kees – Corn-based dish",
    "Street snacks – Samosa, Kachori",
    "Local sweets – Malpua, Jalebi"
  ],

  travelTips: [
    "Carry comfortable shoes for temple and fort walks",
    "Start early to avoid crowds at popular sites",
    "Carry water, sunscreen, and light snacks",
    "Hire local guides for historical insights",
    "Respect heritage sites and temple customs"
  ]
},
{
  id: "bandhavgarh-kanha-wildlife",
  name: "Bandhavgarh & Kanha Wildlife Safari",
  image: "/images/mp-wildlife.jpg",
  shortDesc: "Tiger safaris, forest adventures & wildlife exploration in Madhya Pradesh.",
  description: `Discover the wildlife treasures of Madhya Pradesh with safaris in Bandhavgarh and Kanha National Parks. 
  Spot tigers, leopards, elephants, and diverse flora and fauna. 
  Perfect for nature enthusiasts and adventure seekers looking for an authentic safari experience.`,
  
  bestTime: "October–June (ideal for wildlife safaris and forest exploration)",

  topPlaces: [
    "Bandhavgarh National Park – Tiger and wildlife safari",
    "Kanha National Park – Rich biodiversity and scenic landscapes",
    "Bandhavgarh Fort – Historical fort within the park",
    "Local tribal villages – Cultural experiences near parks",
    "Waterholes and observation points – Wildlife photography spots"
  ],

  foodsToTry: [
    "Local Madhya Pradesh cuisine",
    "Snacks during safaris – Pack light and portable items",
    "Traditional meals at nearby resorts",
    "Regional vegetarian and non-vegetarian dishes",
    "Fresh fruits and beverages during park visits"
  ],

  travelTips: [
    "Book safari rides in advance",
    "Carry binoculars, camera, and sturdy shoes",
    "Wear neutral-colored clothing for safaris",
    "Carry water and light snacks for long safari trips",
    "Follow park rules and respect wildlife"
  ]
}

  ],
},
{
  id: "chandigarh",
  name: "Chandigarh",
  image: "/images/chandigarh.jpg",
  places: [
    {
  id: "chandigarh-city-gardens-tour",
  name: "Chandigarh City & Gardens Tour – 2 Nights / 3 Days",
  image: "/images/chandigarh-city-gardens.jpg",
  shortDesc: "Explore Chandigarh’s modern architecture, gardens & city attractions.",
  description: `Discover the modern city of Chandigarh, designed by architect Le Corbusier. 
  Visit beautiful gardens, urban landmarks, and cultural sites. 
  Perfect for a short city break exploring architecture, parks, and local culture.`,
  
  bestTime: "October–March (pleasant weather for city sightseeing)",

  topPlaces: [
    "Rock Garden – Unique sculptures made from industrial waste",
    "Sukhna Lake – Leisure boating and scenic walks",
    "Rose Garden – Asia’s largest rose garden",
    "Le Corbusier Centre – Learn about city’s modern architecture",
    "Sector 17 Plaza – Shopping and local culture hub"
  ],

  foodsToTry: [
    "North Indian cuisine – Chole Bhature, Paneer dishes",
    "Street food – Golgappa, Chaat",
    "Local sweets – Jalebi, Gulab Jamun",
    "Punjabi Thali – Variety of traditional dishes",
    "Bakery items from local cafes"
  ],

  travelTips: [
    "Carry comfortable walking shoes for city tours",
    "Start early to visit major attractions",
    "Carry water and sunscreen for daytime sightseeing",
    "Respect local norms in public places",
    "Use local guides for architectural insights"
  ]
},
{
  id: "chandigarh-hills-getaway",
  name: "Chandigarh + Hills Getaway – 3 Nights / 4 Days",
  image: "/images/chandigarh-hills.jpg",
  shortDesc: "City sightseeing combined with scenic hill station escapes nearby.",
  description: `Combine Chandigarh city exploration with a relaxing hill station getaway. 
  Visit Chandigarh’s gardens and landmarks, then head to nearby hills for nature walks, viewpoints, and cool mountain air. 
  Ideal for a mix of urban sightseeing and nature relaxation.`,
  
  bestTime: "March–June (summer) and September–November (autumn)",

  topPlaces: [
    "Chandigarh – Rock Garden, Sukhna Lake, Rose Garden",
    "Morni Hills – Hiking trails and viewpoints",
    "Pinjore Gardens – Historical Mughal-style garden",
    "Timber Trail, Parwanoo – Scenic cable car rides",
    "Local hill viewpoints – Sunrise and sunset photography"
  ],

  foodsToTry: [
    "North Indian cuisine – Dal Makhani, Paneer dishes",
    "Street food in Chandigarh – Chaat, Golgappa",
    "Bakery treats from local cafes",
    "Momos and snacks in hill stations",
    "Local fresh fruits from hill markets"
  ],

  travelTips: [
    "Carry warm clothes for evenings in hills",
    "Wear comfortable shoes for walking and trekking",
    "Start early for hill excursions and photography",
    "Carry water and light snacks for outdoor activities",
    "Respect local culture and environment in hill regions"
  ]
}

  ],
},

  // Add more places if needed
];




// export const PLACES = [
//   {
//     name: "Jammu & Kashmir",
//     image: "/images/places/jammu-kashmir.jpg",
//   },
//   {
//     name: "Goa",
//     image: "/images/places/goa.jpg",
//   },
//   {
//     name: "Kerala",
//     image: "/images/places/kerala.jpg",
//   },
//   {
//     name: "Rajasthan",
//     image: "/images/places/rajasthan.jpg",
//   },
//   {
//     name: "Himachal Pradesh",
//     image: "/images/places/himachal.jpg",
//   },
//   {
//     name: "Karnataka",
//     image: "/images/places/karnataka.jpg",
//   },
// ];

export const HOTELS = [
  {
    id: "hotel-1",
    name: "Royal Plaza Hotel",
    image: "/images/hotel8.png",
    rating: 4.5,
    reviews: 1247,
    location: "Connaught Place, New Delhi",
    distance: "0.5 km from India Gate",
    price: 3999,
    oldPrice: 4999,
    amenities: ["wifi", "pool", "gym", "restaurant", "spa"]
  },
  {
    id: "hotel-2",
    name: "The Grand Delhi",
    image: "/images/hotel9.png",
    rating: 4.2,
    reviews: 980,
    location: "Karol Bagh, New Delhi",
    distance: "1.2 km from City Center",
    price: 3599,
    oldPrice: 4299,
    amenities: ["wifi", "parking", "restaurant"]
  },
  {
    id: "hotel-3",
    name: "Blue Orchid Suites",
    image: "/images/hotel10.png",
    rating: 4.7,
    reviews: 1502,
    location: "Aerocity, New Delhi",
    distance: "0.8 km from Airport Road",
    price: 5499,
    oldPrice: 6299,
    amenities: ["wifi", "pool", "spa", "gym", "bar"]
  },
  {
    id: "hotel-4",
    name: "Sunrise Residency",
    image: "/images/hotel12.png",
    rating: 4.0,
    reviews: 743,
    location: "Paharganj, New Delhi",
    distance: "0.3 km from Metro Station",
    price: 2899,
    oldPrice: 3499,
    amenities: ["wifi", "restaurant"]
  },
  {
    id: "hotel-5",
    name: "Green Leaf Hotel",
    image: "/images/hotel13.png",
    rating: 4.3,
    reviews: 1120,
    location: "South Delhi",
    distance: "2.5 km from Lotus Temple",
    price: 4199,
    oldPrice: 4899,
    amenities: ["wifi", "gym", "restaurant"]
  }
];

// export const HOTELS = [
//   {
//     id: "hotel1",
//     name: "Royal Plaza Hotel",
//     location: "Connaught Place, New Delhi",
//     rating: 4.5,
//     reviews: 1247,
//     price: 3999,
//     oldPrice: 4999,
//     distance: "0.5 km from India Gate",
//     features: ["wifi", "pool", "gym", "restaurant", "spa"],
//     image: "/images/hotel8.png",
//   },
//   {
//     id: "hotel2",
//     name: "Grand Palace Hotel",
//     location: "Connaught Place, New Delhi",
//     rating: 4.4,
//     reviews: 1011,
//     price: 3599,
//     oldPrice: 4499,
//     distance: "1.1 km from India Gate",
//     features: ["wifi", "spa", "gym"],
//     image: "/images/hotel9.png",
//   },
//   {
//     id: "hotel3",
//     name: "Elegant Stay Resort",
//     location: "New Delhi",
//     rating: 4.6,
//     reviews: 890,
//     price: 4299,
//     oldPrice: 5299,
//     distance: "0.7 km from India Gate",
//     features: ["wifi", "pool", "restaurant"],
//     image: "/images/hotel10.png",
//   }
// ];


export const BOOKINGS = [
  {
    __id: "1",
    name: "Rajasthan Heritage Tour",
    Overview: ["Explore the rich cultural heritage of Rajasthan..."],
  },
  {
    __id: "2",
    name: "Kerala Backwater Tour",
    Overview: ["Relax in the scenic backwaters of Kerala..."],
  },
];


export const travelOptions = [
  {
    id: 1,
    icon: Plane,
    title: "Flight Bookings",
    description:
      "Domestic and international flight reservations with competitive prices and flexible options.",
    features: ["Best price guarantee","24/7 support","Easy cancellation"],
    popular: true,
  },
  {
    id: 2,
    icon: House,
    title: "Hotel Reservations",
    description:
      "Handpicked accommodations from budget-friendly to luxury resorts across India..",
    features: ["Verified properties",
"Instant confirmation","Special rates"],
    popular: true,
  },

  {
    id: 3,
    icon: Car,
    title: "Transportation",
    description:
      "Reliable cab services, car rentals, and airport transfers for seamless travel.",
      features: ["Licensed drivers",
"Clean vehicles",
"GPS tracking"],
    popular: true,
  },
  {
    id: 4,
    icon: Phone,
    title: "24/7 Travel Assistance",
    description:
      "Our support team is always available to ensure your journey stays smooth and stress-free.",
    features: ["Live chat & phone", "Quick response", "Multilingual support"],
    popular: true,
  },
  {
    id: 5,
    icon: Globe,
    title: "Visa & Documentation",
    description:
      "Complete assistance for travel documents, visa processing, and embassy coordination.",
    features: ["Fast processing", "Secure handling", "Transparent fees"],
    popular: true,
  },
  {
    id: 6,
    icon: ShieldCheck,
    title: "Travel Insurance",
    description:
      "Stay protected throughout your journey with our comprehensive travel insurance plans.",
    features: ["Medical coverage", "Trip protection", "Global support"],
    popular: true,
  },
];


export const PACKAGES = [
  {
    __id: "1",
    name: "Rajasthan Heritage Tour",
    image: getIndexedImage(0),
    days: 10,
    nights: 9,
    Overview: [
      `Explore the rich cultural heritage of Rajasthan with our exclusive Rajasthan Heritage Tour Package. Discover the majestic forts, royal palaces, and vibrant traditions of Jaipur, Jodhpur, Udaipur, and more. This tour is perfect for history enthusiasts and culture lovers looking to experience the true essence of Rajasthan.`,
      `Visit iconic landmarks like the Amber Fort, Mehrangarh Fort, and City Palace. Enjoy camel safaris in Jaisalmer, boat rides in Udaipur, and the colorful bazaars of Jaipur. Immerse yourself in the royal lifestyle and create unforgettable memories.`,
      `Rajasthan is a land of vibrant festivals, intricate handicrafts, and stunning architecture. This tour offers a perfect blend of history, culture, and adventure, making it an ideal choice for travelers seeking an authentic Indian experience.`,
    ],
    Highlight: [
      "Camel safari in Jaisalmer",
      "Cultural and folk dance performances",
      "Visit Mehrangarh Fort and Umaid Bhawan Palace",
      "Boat ride in Udaipur's Lake Pichola",
      "Elephant ride at Amber Fort in Jaipur",
      "Jeep safari in the Thar Desert",
      "Explore the holy city of Pushkar",
    ],
    Itinerary: [
      {
        name: "Arrive to Jaipur",
        description:
          "Begin your Rajasthan adventure in Jaipur, the Pink City. Visit the iconic Amber Fort, City Palace, and Hawa Mahal. Enjoy a traditional Rajasthani dinner and overnight stay in Jaipur.",
      },
      {
        name: " Mandawa",
        description: `Drive to Mandawa, known as the open-air art gallery of Rajasthan. Explore the beautifully painted havelis and frescoes that showcase the region's rich artistic heritage. Overnight stay in Mandawa.`,
      },
      {
        name: "Bikaner",
        description:
          "Travel to Bikaner, the Camel Country. Visit the Junagarh Fort, Lalgarh Palace, and the famous Karni Mata Temple, also known as the Rat Temple. Overnight stay in Bikaner.",
      },
      {
        name: "Jaisalmer",
        description: `Head to Jaisalmer, the Golden City. Explore the Jaisalmer Fort, Patwon Ki Haveli, and the vibrant local markets. Enjoy a camel safari and cultural performances in the Thar Desert. Overnight stay in a desert camp.`,
      },      
      {
        name: "Jodhpur",
        description: `Drive to Jodhpur, the Blue City. Visit the majestic Mehrangarh Fort, Jaswant Thada, and Umaid Bhawan Palace. Explore the bustling Sardar Market. Overnight stay in Jodhpur.`,
      },
      {
        name: "Ranakpur",
        description: `En route to Udaipur, visit the stunning Jain Temples of Ranakpur, known for their intricate marble carvings. Continue to Udaipur and check into your hotel. Overnight stay in Udaipur.`,
      },
      {
        name: "Udaipur",
        description:
          "Explore the City of Lakes, Udaipur. Visit the City Palace, Jagdish Temple, and Saheliyon-ki-Bari. Enjoy a boat ride on Lake Pichola and witness the sunset. Overnight stay in Udaipur.",
      },
      {
        name: "Pushkar",
        description:
          "Travel to Pushkar, a holy city known for its Brahma Temple and Pushkar Lake. Explore the local bazaars and enjoy the serene atmosphere. Overnight stay in Pushkar.",
      },
      {
        name: "Jaipur",
        description:
          "Return to Jaipur for a full-day sightseeing tour. Visit the Jantar Mantar observatory, Albert Hall Museum, and enjoy shopping in the local markets. Overnight stay in Jaipur.",
      },
      {
        name: "Jaipur to Delhi Departure",
        description:
          "Conclude your Rajasthan Heritage Tour with a transfer to Jaipur or Delhi for your onward journey.",
      },
    ],
    Inclusion: [
      "Luxury air-conditioned transportation",
      "Daily buffet breakfast",
      "Accommodation in heritage hotels",
      "Camel safari in Jaisalmer",
      "Boat ride in Udaipur",
      "English-speaking tour guide",
      "All applicable taxes and service charges",
    ],
    Exclusion: [
      "Meals not mentioned in the itinerary",
      "Personal expenses such as tips and laundry",
      "Entrance fees to monuments",
      "International and domestic airfare",
      "Travel insurance",
    ],
    FAQs: [
      {
        name: "What is the best time to visit Rajasthan?",
        description:
          "The best time to visit Rajasthan is from October to March when the weather is pleasant and ideal for sightseeing.",
      },
      {
        name: "Are camel safaris included in the package?",
        description:
          "Yes, a camel safari in Jaisalmer is included in the Rajasthan Heritage Tour Package.",
      },
      {
        name: "Can I customize the itinerary?",
        description:
          "Yes, the itinerary can be customized to suit your preferences. Please contact us for more details.",
      },
    ],
  },
  {
    __id: "2",
    name: "Colorful Rajasthan Tour",
    image: getIndexedImage(1),
    days: 16,
    nights: 15,
    Overview: [
      `Experience the vibrant culture and colorful traditions of Rajasthan with our Colorful Rajasthan Tour Package. This tour takes you through the most iconic destinations, including Jaipur, Udaipur, Jodhpur, and Pushkar, offering a perfect blend of history, culture, and adventure.`,
      `Witness the grandeur of Rajasthan's forts and palaces, enjoy camel safaris in the Thar Desert, and participate in local festivals and cultural performances. This tour is ideal for travelers looking to immerse themselves in the rich heritage of Rajasthan.`,
    ],
    Highlight: [
      "Explore the Pink City of Jaipur",
      "Visit the City of Lakes, Udaipur",
      "Camel safari in Jaisalmer",
      "Cultural performances in the Thar Desert",
      "Visit the holy city of Pushkar",
      "Shop for traditional handicrafts and textiles",
    ],
    Itinerary: [
      {
        name: "Arrival in Jaipur",
        description:
          "Begin your journey in Jaipur, the Pink City. Visit the Amber Fort, City Palace, and Hawa Mahal. Enjoy a traditional Rajasthani dinner and overnight stay in Jaipur.",
      },
      {
        name: "Jaipur Sightseeing",
        description:
          "Explore the Jantar Mantar observatory, Albert Hall Museum, and the local markets. Overnight stay in Jaipur.",
      },
      {
        name: "Mandawa",
        description:
          "Travel to Mandawa, known for its beautifully painted havelis and frescoes. Overnight stay in Mandawa.",
      },
      {
        name: "Bikaner",
        description:
          "Visit the Junagarh Fort, Lalgarh Palace, and the famous Karni Mata Temple. Overnight stay in Bikaner.",
      },
      {
        name: "Jaisalmer",
        description:
          "Explore the Jaisalmer Fort, Patwon Ki Haveli, and enjoy a camel safari in the Thar Desert. Overnight stay in a desert camp.",
      },
      {
        name: " Khuri",
        description: `Khuri is a tranquil desert village near Jaisalmer, known for sand dunes, camel safaris, and peaceful desert camp stays.`,
      },
      {
        name: "Jodhpur",
        description:
          "Visit the Mehrangarh Fort, Jaswant Thada, and Umaid Bhawan Palace. Overnight stay in Jodhpur.",
      },
      {
        name: "Ranakpur",
        description: `
        Ranakpur is famous for the stunning white marble Jain Temple dedicated to Tirthankara Adinatha, set amidst green hills.
        `,
      },
      {
        name: "Udaipur",
        description:
          "Explore the City Palace, Jagdish Temple, and enjoy a boat ride on Lake Pichola. Overnight stay in Udaipur.",
      },
      {
        name: "Kumbargarh",
        description: `Kumbhalgarh is known for Kumbhalgarh Fort, with the second-longest wall in the world, and it is surrounded by scenic wildlife and hills.`,
      },
      {
        name: " Bundi",
        description: `Bundi is a picturesque town featuring Taragarh Fort, Bundi Palace, and intricately carved stepwells like Raniji Ki Baori.`,
      },
      {
        name: "Pushkar and Ajmer",
        description:
          `Visit the Brahma Temple and Pushkar Lake. Overnight stay in Pushkar. <br/>
          Ajmer is a spiritual center housing the Ajmer Sharif Dargah of Khwaja Moinuddin Chishti and the nearby Ana Sagar Lake.
          `,
      },
      {
        name: " Ranthambore",
        description: `Ranthambore is a renowned national park famous for tiger safaris, Ranthambore Fort, and picturesque lakes and ruins.`,
      },
      {
        name: " Bharatpur",
        description: `Bharatpur is known for the Keoladeo National Park, a UNESCO World Heritage site and a haven for migratory birds and birdwatchers.`,
      },
      {
        name: "Departure",
        description:
          "Conclude your Colorful Rajasthan Tour with a transfer to Jaipur or Delhi for your onward journey.",
      },
    ],
    Inclusion: [
      "Luxury air-conditioned transportation",
      "Daily buffet breakfast",
      "Accommodation in heritage hotels",
      "Camel safari in Jaisalmer",
      "Boat ride in Udaipur",
      "English-speaking tour guide",
      "All applicable taxes and service charges",
    ],
    Exclusion: [
      "Meals not mentioned in the itinerary",
      "Personal expenses such as tips and laundry",
      "Entrance fees to monuments",
      "International and domestic airfare",
      "Travel insurance",
    ],
    FAQs: [
      {
        name: "What is included in the package?",
        description:
          "The package includes transportation, accommodation, daily breakfast, and guided tours.",
      },
      {
        name: "Can I customize the itinerary?",
        description:
          "Yes, the itinerary can be customized to suit your preferences. Please contact us for more details.",
      },
    ],
  },
  {
    __id: "3",
    name: "Rajasthan Culture Tour",
    image: getIndexedImage(2),
    days: 15,
    nights: 14,
    Overview: [
      `Discover Royal Culture, Traditions, Customs & History During Rajasthan Cultural Tour. Welcome to India, You will be received by Incredible Tour To India representative at the airport and assisted to your hotel.`,
      `In the Hotel you will have a brief description of your tour and the representative will hand over your documents regarding the tour, Rest of the time at leisure. Overnight in Hotel.`,
    ],
    Highlights: [
      "Architecture Reach Mandawa Mansion (havelies) Tour",
      "Royal experience of Rajput Region Shekhawati",
      "Amber fort and City Palace of Jaipur",
      "Mehrangarh fort and Jaswant Tharra.",
      "Boating in Lake Pichola in udaipur",
    ],
    Itinerary: [
      {
        name: "Arrive Delhi – Jaipur",
        description: `Arrive in Delhi and transfer to Jaipur via cab/train/bus.`,
      },
      {
        name: "Jaipur",
        description: `
        <h1><strong>City Place</strong><h1>
        The City Palace of Jaipur is located in the heart of the old city of Jaipur in Rajasthan, India. It is spread over a large area, split into a series of courtyards, gardens, and buildings. <br/>
        
        The outer wall was built by Maharaja Jai Singh II, but other additions are much more recent, some dating back to the beginning of the 20th century. The palace is a wonderful blend of Rajasthani and Mughal architectural style. The City Place of Jaipur is a major tourist attraction in Rajasthan. <br/><br/>

        <h1><strong>Astronomical Observatory (Jantar Mantar):</strong><h1>
        Between 1727 and 1734 Maharajah Jai Singh II of Jaipur constructed five astronomical observatories in west-central India. The observatories, or “Jantar Mantar” as they are commonly known, incorporate multiple buildings of unique form, each with a specialized function for astronomical measurement. <br/>
        
        These structures with their striking combinations of geometric forms at large scale, have captivated the attention of architects, artists, and art historians worldwide, yet remain largely unknown to the general public.
        
        Jantar Mantar presents the observatories through a variety of media and information sources, making it possible to explore and learn about these historic sites through interactive panoramic “VR” photographs, time-lapse sequences, and 3D models as well as articles, drawings, and historic texts. It is a comprehensive resource for exploring the observatories in depth.
        `,
      },
      {
        name: "Shekawati",
        description: `
        <h1><strong>Amer Fort</strong><h1>
        
        The Amer Fort is situated in Amer, which is 11 kilometres from Jaipur. Amer, originally, was the capital of the state before Jaipur. It is an old fort, built-in 1592 by Raja Man Singh. This fort is also very popularly known as the Amer Palace.<br/><br/>
        
        The Amer Fort was built in red sandstone and marble and the Maotha Lake adds a certain charm to the entire Fort. Though the fort is quite old and may even look so from the outside, it is beautiful on the inside and boasts of various buildings of prominence like the ‘Diwan-i-Aam’, the ‘Sheesh Mahal’ and even the ‘Sukh Mahal’. The Amer Fort has influences of both Hindu and Muslim architecture.<br/><br/>
        
        This fort also has the ‘Shila Devi’ Temple and the ‘Ganesh Pol’ which is a gate that leads to the private palaces of the kings. The Amer Fort has many pavilions and halls of great interest and other popular attractions.<br/><br/>
        
        
        <h1><strong>Jaigarh Fort</strong><h1>
        
        The Jaigarh fort is the most spectacular of the three-hilltop forts that overlook Jaipur. In Mughal times, the Jaipur region was a major weapon-producing centre for the Mughal and Rajput rulers, several of the weapons being on display in the fort’s museum.<br/><br/>
        
        It is one of the few military structures of medieval India preserved almost intact, containing palaces, a granary, a well-planned cannon foundry, several temples, a tall tower and giant mounted cannon-the Jai Ban (Jaivan) which is the largest cannon on wheels in the world. Jaigarh Fort is also known as the fort of victory. The display includes a collection of canons, many of which are exquisitely decorated and were used in the Mughal campaigns led by the Rajput King, Raja Man Singh.<br/><br/>
        
        Of Jaipur’s three forts, Jaigarh is perhaps the most imposing. It does not have those delicate structures or palaces like that of Amber but if you want a quick look at a hard-core fortress, this is it. Jaigarh means ‘Victory Fort’ and was built between the 15th and the 18th century AD, and stands 15 km from Jaipur, amidst rock-strewn, thorn-scrub covered hills, its forbidding stone ramparts being visible from the Jaipur town. A steep road goes up to the main gate, the Dungar Darwaza, from where the view is are inspiring. <br/><br/>
        
        
        <h1><strong>Nahargarh Fort</strong><h1>
        
        Nahargarh Fort is located on the rugged ridge of Aravali Hills and it forms an impressive northern backdrop of Jaipur. It looks most classy when floodlit at night. The fort overlooks the city and presents a glittering view of the city lights. It was built in 1734 and extended in 1868. Nahargarh meaning abode of the tigers was built by Jai Singh to bolster the defence of Amber.<br/><br/>
        
        The legend has it that it was named Nahargarh after Nahar Singh, a prince whose spirit would destroy the construction and stall its progress. So after a Tantrik invoked the spirit, it agreed to withdraw on condition that the fort would be named after him. The Madhavendra Bhawan, built by Sawai Madho Singh has a unique cluster of 12 identical suites for queens and at the head is a suite for the king himself.<br/><br/>
        
        The rooms are linked by corridors and retain some delicate frescoes as well as toilets and kitchen hearths. It was used by members of the royal family for an excursion in summers and is even now a favoured picnic spot. Durg Cafeteria just above the entrance sells meals and refreshments, while Padao Restaurant on the west sells drinks around sunset.`,
      },
      {
        name: "Kuchaman Fort",
        description: `Mandawa is located in the Shekhawati region of Rajasthan. The presence of a number of forts, mansions and Haveli’s also make it a great tourist destination.<br/><br/>
        
        Mandawa used to a busy market town for Rajput merchants. It was during that period, the Rajputs built a number of palatial mansions. It was their initiative to build the archways, murals etc. as well. This actually helped in imparting a royal ambiance and vintage charm to the place. The traders used to work in different parts of the country.<br/><br/>
        
        However, whenever there was a question of building a palatial mansion, they built it in Mandawa. These mansions marked their wealth and prosperity.`,
      },
      {
        name: "Bikaner Via Nagaur Fort",
        description: `The Kuchaman Fort, a Heritage Hotel near Jaipur, Rajasthan. Ideally situated with proximity to key tourist destinations in India Pushkar, Ajmer, Jaipur and Samode. The scenic beauty and picturesque setting of this fort make you travel back in time. <br/><br/>
        
        This Heritage Hotel and Resort offers more than just accommodation activities include Horse Safaris, Camel Safaris, Village Safaris, Bird watching and Temple excursions. Our special Kuchaman City excursion takes you through old heritage Haveli’s and other memorable lanes. <br/><br/>
        
        The resort itself offers Five-star comfort. An indoor Pool, Yoga Centre, Kerala Massages and a multi-cuisine restaurant. This Heritage Hotel and Fort with its high and massive ramparts, 32 bastions, 10 gates and various defences is a formidable fort unique in its architecture. One of the finest Heritage Hotels in Rajasthan, The Kuchaman Fort is rapidly becoming the favourite choice for the discerning traveller. <br/><br/>
        
        As you go winding up an undulating mountain road, towards the massive portals of this magnificent fort, you travel back to in time, only to be swallowed into the inside of this ancient world of strange mysteries, of secret chants and mantras, of classical music and ragas, and of fine arts and murals. The Kuchaman Fort. Beckoning, inviting, waiting to welcome you as it rises proudly int the clear skies at the top of a 1000 feet high rock cliff.
        <br/><br/>
        
        The Kuchaman Fort, a rare jewel set in a glittering sea of golden sands, as though a million-year-old rock itself changed its shape, to record the extraordinary era of Kuchaman glory. The Kuchaman Fort, where with echoing, reverberating step, you peel away successive layers of timeless history, perfectly preserved, frozen in rock and time.`,
      },
      {
        name: "Jaisalmer",
        description: `Just over five centuries old, Bikaner was founded by a scion of the house of Marwar (Jodhpur). The fort of Bikaner, Junagadh, however, was built in 1593 by Raja Rai Singh who also served as a general in the army of Emperor Akbar. Made from red sandstone and encircled by a moat around which the modern city of Bikaner has spread in a somewhat erratic fashion, Junagadh consists of several palaces and apartments in a remarkable state of preservation. The art of mason and sculptor is most obvious in the recreation of delicate stone screens, kiosks, pavilions and series of arched entrances to buildings reached from corridors that have windows overlooking the city beyond. <br/><br/>
        
        Some of the palaces are among the most richly decorated in Rajasthan and include Anup Mahal, Chandra Mahal and Phool Mahal. They give the impression of rich inlay of pietra dura, though in fact the apartments are merely richly painted. The paintings have been preserved as good as new because of the extremely dry heat conditions of the desert town. Another palace, Badal Mahal recreated the painting of clouds on its walls, a reminder of the monsoon that often failed the settlement. The Anup Mahal courtyard has a throne set in a pool of water. Bringing alive the sensitivity the rulers showed in their building environment.`,
      },
      {
        name: "Jaisalmer",
        description: `Morning sightseeing tour of Jaisalmer The golden rays of the setting sun, the colourfully adorned locals, the massive forts and mansions, the extremely fascinating craftsmanship, Rajput Havelis, all these make Jaisalmer a place of must visit in Rajasthan. Moreover, a visit to the Jaisalmer Fort (the second oldest fort in Rajasthan after Chittaur), Patwon ki Haweli, (the grandest haveli of Jaisalmer), Desert Culture centre and museums gives you some glimpse of this small town’s past. <br/><br/>
        
        meet your religious taste; Salim Singh ki Haweli and Nathmal ki Haweli give you some more idea of the haweli architecture of the town. Besides these, Gadsisar Lake is also an interesting spot that you must visit in this desert city.
        
        Afternoon visit Sam Sand Dunes, Ideal for viewing sunsets, these sites will also give you a chance to capture the picturesque sand dunes in your camera. Overnight in Hotel. / Night at Desert Camp.`,
      },
      {
        name: "Manvar",
        description: `Rajasthan is presently one of the most enchanting tourist destinations in the world. Among all the cities in Rajasthan, Jodhpur is also experiencing a huge number of tourist footfalls in the recent past Tours to Manvar is one such attraction that is located in the midst of the Thar Desert, Manvar lying exactly between the Jodhpur, Jaisalmer and Bikaner. It will surely give a great experience for the tourists by offering the beauty of the desert of at its best. It becomes a must visit during excursions from Jodhpur.<br/><br/>
        
        Manvar is an excellent destination to have a thoroughly enjoyable holiday. Manvar is one of the perfect options for those who wish to get the true feel of deserts. It is such a fascinating place that offers the raw beauty of nature. It will let you explore the various parts of the desert to enjoy its kaleidoscopic beauty. Sightseeing Manvar provides you with an opportunity to enjoy the enthusiasm of wilderness in the desert. Manvar has the sprawling resort that built on 5 acres of land reflecting the true ambience of the traditional village.<br/><br/>
        
        The best time to visit here is between the months of September to March. During this time, you will be able to get to see a large number of migratory demoiselle cranes. Ride-on Jeep safaris gives you an enjoyable experience for the tourists.<br/>`,
      },
      {
        name: "Jodhpur",
        description: `Rajasthan is one of the most prominent tourist destinations that offer a lot of tourist attractions. The variety of tourist attraction helps in making Rajasthan one of the most sought after tourist attraction. In fact, Rajasthan is currently one of the most popular tourist destinations in the world. The unique charm appeals similarly to the domestic tourists as well as foreign tourists. Among the various cities in Rajasthan that manages to attract a large number of tourists, Jodhpur is a prominent one.<br/><br/>
        
        Jodhpur is a tourist place in Rajasthan that has a variety of tourist places. These tourist places experience a huge number of tourist footfall. However, in the recent past, Jodhpur is also experiencing a huge number of tourist footfalls as the tourists are coming down to the place to go for excursions from Jodhpur. Presence of a number of tourist attractions in close proximity to the Jodhpur helps in making Jodhpur excursions a thoroughly enjoyable excursion for the tourists. These excursions take you for a number of tours.<br/><br/>
        
        Tours to Manvar is one such attraction that will surely be a great experience for the tourists. Offering the beauty of desert of at its best, it is a must-visit during excursions from Jodhpur.`,
      },
      {
        name: "Jodhpur (Maharangarh Fort with Jaswantarda) via Osian – Bundi",
        description: `Having arranged many mobile camel safaris in the usual mainstream and busy destinations we realized that a more exclusive destination was missing from this fun experience. A location was sourced and what better than on the first sand dune of the famous Thar Desert of Rajasthan.<br/><br/>
        
        With expansive views of the vast desert on one side and the intricate temples of Osian on the other, this camp, the first of its kind in India, offers easy access to the local desert villages. Venturing out on camel one can meet the proud local tribes, the Bishnois and Bhils, potters and weavers and shepherds in their natural surroundings, not to mention the various varieties of desert wildlife such as blue bulls, gazelles, foxes, peacocks and partridges to name but a few.<br/><br/>
        
        The nearby ancient village of Osian is legendary for its mesmerizing 6th /8th-century temples, sand-dunes and diversity of Rajasthani culture and tradition and Jodhpur, with its magnificent Meherangarh Fort, is just 60 km away.<br/><br/>
        
        Being a permanent structure we also have the additional bonus of a refreshing swimming pool, a feat of architectural engineering in a sand dune ! and the safari bar, a wonderful place to relax in the evenings over a drink and cigar to the gentle strains of jazz music.<br/><br/>
        
        Once at the camp -nestled in the dunes your host Reggie Singh, grandson of Maharaj Ratan Singh of Jodhpur will invite you for an evening of cocktails, folk entertainment and a semi-formal candle lit dinner.
        
        `,
      },
      {
        name: "Jodhpur – Udaipur",
        description: `This morning after breakfast drive to Udaipur. En-route Visit Ranakpur famous for Jain Temples. The Ranakpur Jain Temples were built during the reign of the liberal and gifted monarch Rana Kumbha in the 15th century. An enormous basement covers 48,000 sq. feet area. There are four subsidiary shrines, twenty-four pillared halls and eligibly domes supported by over four hundred columns.<br/><br/>
        
        Visit Muchhal Mahaveer Temple – The distinctive feature of this Jain temple is the statue of Lord Mahavira with a moustache. From here proceed to Udaipur. check into your hotel. Rest of the day is at your leisure you may rest in the hotel Or visit the Udaipur city in the evening. Overnight in Udaipur Overnight at the hotel.`,
      },
      {
        name: "Udaipur City Tour",
        description: `This morning after the breakfast City tour of Udaipur also known as the city of Lakes. It is the historic capital of the former kingdom of Mewar in Rajasthan Agency. Lake Pichola, Fateh Sagar Lake, Udai Sagar and Swaroop Sagar in the city are considered some of the most beautiful lakes in the state. Places you visit CITY PALACE. Udaipur is a palaces complex in Udaipur in the Indian state Rajasthan. It was built by the Maharana Udai Mirza Singh as the capital of the Sisodia Rajput clan in 1559 after he moved from Chittor. It is located on the east bank of the Lake Pichola and has several palaces built within its complex.<br/><br/>
        
        Udaipur was the historic capital of the former kingdom of Mewar in the Rajputana Agency and its last capital. JAGDISH TEMPLE is one of the famous temples of Udaipur. Located in the city palaces compel of Udaipur, this temple is made in the Indo Aryan style of architecture. In 1651, Jagdish temple was built by Maharana Jagat Singh, who ruled Udaipur during 1628-53. The temple is dedicated to Lord Vishnu (Laxmi Narayan), the preserver of the universe. JAG MANDIR is a palace built on an island in the Lake Pichola.<br/><br/>
        
        It is also called the “Lake Garden Palace”. Its construction is credited to three Maharana of the Sisodia Rajputs of Mewar kingdom. It is named as “Jagat Mandir” in honour of the last-named Maharana Jagat Singh. SAHELION KI BARI is one of the most beautiful gardens and a major tourist destination in Udaipur.<br/><br/>
        
        The garden is famous for its lush green lawns marble art and fountains. English translation of Sahelian ki Bari means Garden of Maids. By evening you may take a walking tour on your own through the narrow lanes and back streets of Udaipur up to the Washing Ghats at the lake Pichola. by late evening return to your hotel. Overnight in Udaipur.`,
      },
      {
        name: "Bundi",
        description: `Built in the 14th century, the Taragarh Fort is the star attraction in Bundi. With the entry being free and souvenir shops fortunately absent, the fort provides an option of a peaceful ramble round its premises. Inside the instant, eye-catchers include the Bhim Burj, a large battlement with a cannon placed on it and a large reservoir carved out of a single piece of rock.<br/><br/>
        
        The views from the fort are exceptional, especially during the sunset when the rays seem to lend a lovely grace to the entire area. In Chittorgarh, the Chittorgarh Fort is the imposing structure atop a hill of 300 m which has many palaces and monuments. This fort is situated 1 km from the new town and is spread over an area of around 692 acres.<br/><br/>
        
        Inside the large fort, is a road that connects the different gates, viz. the main gate or Ram Pol, Padan Pol, Bhairon Pol, Hanuman Pol, Ganesh Pol, Laxman Pol and Jodla Pol. These gates were built for security and fortification of the area. There are around 84 water bodies and many small palaces, important ones being Rana Kumbha Palace, Rani Padmini’s Palace, etc.<br/><br/>
        
        Besides these structures, the fort is known for the Kirti Stambha, in honour of the 1st Jain Tirthankara, the victory tower or Vijay Stambha, Meera Temple, Kalika Mata temple and the various sculptures and carvings on the monuments.`,
      },
      {
        name: "Jaipur",
        description: `After breakfast, explore the Pink City with an excursion to Amber Fort, situated just outside the city, enjoy the experience of ride on elephant back to and from the top of the hill on which the fort is situated. Afternoon sightseeing tour of City Palace in the heart of Jaipur is known for its blend of Rajasthani and Mughal architecture. Not far away is the Central Museum.<br/><br/>
        
        Jantar Mantar is the largest of the five observatories built by Sawai Jai Singh. The Hawa Mahal or the Palace of Winds was constructed for the royal ladies to watch the royal processions without being seen, all monuments are located in the vicinity of City Palace Complex of Jaipur.<br/><br/>
        
        Later late afternoon is kept free to visit the famous Markets of Textiles, Gems, Carpets, and handicrafts. One can also visit Nahargarh Fort to see it illuminated over the floodlights. Return to the hotel for overnight.`,
      },
      {
        name: "Agra",
        description: `After breakfast drive to Jaipur en-route visit Old deserted town of Mughal Dynasty – Fatehpur Sikri built in red sandstone in honour of Saint Salim Chisti who foretold the birth of 3 sons to Emperor Akbar, is an example of robust stability combined with originality.<br/><br/>
        
        Each important edifice here represents a type by itself. Notable among them is the Diwan-e-Khas, Punch Mahal, the Tomb of Salim Chisti, and the Bulund Darwaza. Later continue to proceed to Jaipur. Rest of the day at leisure, in the evening hours, enjoy walking in the colourful streets and bazaars of Jaipur City.<br/><br/>
        
        The beauty of Jaipur is that its unique architecture and town planning is visible at even the most common places such as its squares and lanes. Overnight at Hotel.
        
        `,
      },
    ],
    Inclusion: [
      "All arrival, departure, sightseeing as per the above Itinerary by air-conditioned Luxury car with English speaking driver",
      "Daily buffet breakfast",
      "Indian sim card with cell phone",
      "Elephant ride at amber fort",
      "Boat ride at Udaipur",
      "Flight ticket from Jodhpur to New Delhi",
      "Guide service at all destinations and monuments",
      "All applicable hotel & transport taxes",
      "Government services tax of 4.89%",
    ],
    Exclusion: [
      "Any meals other than those specified",
      "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
      "Entrance fees during sightseeing",
      "Any other item not specified",
      "Driver tip",
      "International airfare",
    ],
    FAQs: [
      {
        name: "How do we plan Rajasthan Cultural Tour?",
        description:
          "New Delhi – Jaipur – Shekhawati – Kuchaman Fort – Bikaner – Jaisalmer – Manvar – Jodhpur – Bundi – Udaipur – Agra - New Delhi.",
      },
      {
        name: "Best time for Rajasthan Cultural Tour",
        description:
          "Rajasthan is the western part of Inia and it's always hot so October t March is the best time for visit the Rajasthan Cultural tour.",
      },
      {
        name: "how to reach Rajasthan",
        description:
          "After landing in New Delhi we can reach Rajasthan( Jaipur ) by Air, Train, and Privet car.",
      },
    ],
  },
  {
    __id: "4",
    name: "Royal Heritage Tour of Rajasthan",
    image:getIndexedImage(19),
    days: 15,
    nights: 14,
    Overview: [
      `
    The Royal Heritage Tour of Rajasthan offers a majestic journey through the grand palaces, mighty forts, and regal traditions of India's most colorful state. Starting in Jaipur, the Pink City, travelers experience royal splendor at the City Palace, Amber Fort, and Hawa Mahal. Moving to Mandawa and Kuchaman, the tour showcases intricately painted havelis and ancient forts that reflect the merchant and feudal legacy of Shekhawati. In Bikaner, the majestic Junagarh Fort and the unique Karni Mata Temple impress with their architecture and mystique. The golden sands of Jaisalmer highlight desert charm with its towering fort, ornate havelis, and dune camps in Khuri. Jodhpur, the Blue City, offers the awe-inspiring Mehrangarh Fort and royal palaces. Udaipur, with its serene lakes and opulent City Palace, epitomizes romance and royal grace. The historic battlefields of Chittorgarh and the formidable walls of Kumbhalgarh Fort echo tales of valor and resistance. Ranakpur stuns with its intricately carved Jain temples, while Mount Abu offers a refreshing hill retreat. The spiritual charm of Ajmer and the wilderness of Ranthambore blend history and nature. Bundi, Alwar, Rohitgarh, and boutique retreats like Lakshman Sagar provide intimate glimpses into Rajasthan’s noble legacy. Ending in Delhi, the capital connects the journey with Mughal grandeur and modern vibrance. This tour immerses travelers in the legacy of Rajput kings, warrior tales, timeless art, and unmatched hospitality.
    `,
    ],
    Highlights: [],
    Itinerary: [
      {
        name: "Arrive from Delhi to Jaipur",
        description:
          "Begin your Rajasthan adventure in Jaipur, the Pink City. Visit the iconic Amber Fort, City Palace, and Hawa Mahal. Enjoy a traditional Rajasthani dinner and overnight stay in Jaipur.",
      },
      {
        name: " Jaipur",
        description: `
        We offer a private day tour in Jaipur City with a car, driver and guide. We suggest you try this tour of all the must-see places. This tour covers – Amber Fort with Elephant ride, Nahargarh Fort, City Palace, Hawa Mahal, Jantar Mantar, Albert Hall, Birla Temple, Local Market
        `,
      },
      {
        name: "Kuchaman and Nagaur fort",
        description: `Kuchaman Fort is located in the town of Kuchaman and is a majestic fort offering panoramic views and showcasing Rajput architecture, now partly a heritage hotel.`,
      },
      {
        name: "Mandawa",
        description: `Mandawa is a town in the Shekhawati region known for its beautifully painted havelis and frescoes, attracting art and architecture lovers.`,
      },
      {
        name: " Hanumangarh",
        description: `Hanumangarh is an ancient town with historical significance, featuring remnants from the Indus Valley Civilization and the Bhatner Fort.`,
      },
      {
        name: "Bikaner",
        description: `Bikaner is known for Junagarh Fort, Lalgarh Palace, and the unique Karni Mata Temple (Rat Temple), as well as delicious snacks like bhujia.`,
      },
      {
        name: "Jaiselmer",
        description: `Jaisalmer is called the Golden City, famed for Jaisalmer Fort, Patwon Ki Haveli, and the surrounding Thar Desert sand dunes.`,
      },
      {
        name: "Jodhpur",
        description: `Jodhpur is the Blue City, home to the massive Mehrangarh Fort, Umaid Bhawan Palace, and the vibrant old city area.`,
      },
      {
        name: " Udaipur",
        description: `Udaipur is the City of Lakes, known for Lake Pichola, City Palace, Jag Mandir, and romantic boat rides and hilltop views.`,
      },
      {
        name: "Chittorgarh",
        description: `Chittorgarh is symbolic of Rajput pride and sacrifice, with the enormous Chittorgarh Fort, Rana Kumbha Palace, and Vijay Stambh.`,
      },
      {
        name: "Kumbargarh",
        description: `Kumbhalgarh is known for Kumbhalgarh Fort, with the second-longest wall in the world, and it is surrounded by scenic wildlife and hills.`,
      },
      {
        name: "Bundi",
        description: `Bundi is a picturesque town featuring Taragarh Fort, Bundi Palace, and intricately carved stepwells like Raniji Ki Baori.`,
      },
      {
        name: "Ajmer",
        description: `Ajmer is a spiritual center housing the Ajmer Sharif Dargah of Khwaja Moinuddin Chishti and the nearby Ana Sagar Lake.`,
      },
      {
        name: " Ranthambore",
        description: `Ranthambore is a renowned national park famous for tiger safaris, Ranthambore Fort, and picturesque lakes and ruins.`,
      },
      {
        name: " Bharatpur",
        description: `Bharatpur is known for the Keoladeo National Park, a UNESCO World Heritage site and a haven for migratory birds and birdwatchers.`,
      },
      {
        name: "Jaipur to Delhi departure",
        description: `
        Departure from Jaipur to Delhi.
        `,
      },
    ],
    Inclusion: [
      "All arrival, departure, sightseeing’s as per above Itinerary by air conditioned Luxury car with English speaking driver",
      "Daily buffet breakfast",
      "Indian sim card with cell phone",
      "One double/ twin bedroom",
      "Elephant ride at amber fort",
      " Boat ride at Udaipur",
      "rain ticket New Delhi to Jaisalmer",
      "Guide service at all destinations and monuments",
      "All applicable hotel & transport taxes",
      "Government services tax of 4.89%",
    ],
    Exclusion: [
      "Any meals other than those specified",
      "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
      "Entrance fees during sightseeing",
      "Any other item not specified",
      "Driver tip",
      "International airfare",
    ],
    FAQs: [],
  },
  {
    __id: "10",
    name: "Cultural and Colorful Tour of Rajasthan, Delhi and Agra",
    image:getIndexedImage(3),
    days: 30,
    nights: 29,
    Overview: [
      `Rajasthan, the Land of Kings, offers a vibrant and deeply cultural experience shaped by centuries of royal heritage, desert landscapes, and diverse traditions. Its cities burst with color — from the pink hues of Jaipur and the blue lanes of Jodhpur to the golden sandstone of Jaisalmer. The state celebrates life with exuberant festivals like Pushkar Fair, Teej, and Gangaur, where locals don traditional attire, perform folk dances like Ghoomar and Kalbelia, and play lively music with instruments like the sarangi and dholak. Every corner showcases rich craftsmanship through intricate textiles, hand-painted pottery, and mirror-work embroidery. 
      Historic forts, majestic palaces, and havelis reflect the grandeur of Rajput architecture, while bustling bazaars overflow with spices, bangles, and Rajasthani cuisine like dal baati churma and ghevar. Rajasthan’s villages and desert camps offer authentic glimpses into rural life, where camel rides, puppet shows, and warm hospitality complete the colorful and cultural tapestry of the state.`,
    ],
    Highlights: [],
    Itinerary: [
      {
        name: "Delhi (Arrival)",
        description: `You will be arrived at Delhi airport and be shifted to the hotel. On the first day you will be exploring the historical walled city of Delhi. <br/>
        
        the sightseeing tour of Delhi will include the Qutub Minar, Humayun’s Tomb, India Gate, President House, Mahatma Gandhi memorial, Red Fort, Jama Masjid and Laxmi Narayan Temple. Overnight in your hotel. Jama Masjid and Laxmi Narayan Temple. Overnight in your hotel.
        `,
      },
      {
        name: "Jaipur",
        description: `
        We offer a private day tour in Jaipur City with a car, driver and guide. We suggest you try this tour of all the must-see places. This tour covers – Amber Fort with Elephant ride, Nahargarh Fort, City Palace, Hawa Mahal, Jantar Mantar, Albert Hall, Birla Temple, Local Market
        `,
      },
      {
        name: "Kuchaman fort ",
        description: `Kuchaman Fort is located in the town of Kuchaman and is a majestic fort offering panoramic views and showcasing Rajput architecture, now partly a heritage hotel.`,
      },
      {
        name: "Mandawa",
        description: `Mandawa is a town in the Shekhawati region known for its beautifully painted havelis and frescoes, attracting art and architecture lovers.`,
      },
      {
        name: " Bikaner",
        description: `Bikaner is known for Junagarh Fort, Lalgarh Palace, and the unique Karni Mata Temple (Rat Temple), as well as delicious snacks like bhujia.`,
      },
      {
        name: " Jaiselmer",
        description: `Jaisalmer is called the Golden City, famed for Jaisalmer Fort, Patwon Ki Haveli, and the surrounding Thar Desert sand dunes.`,
      },
      {
        name: " Khuri",
        description: `Khuri is a tranquil desert village near Jaisalmer, known for sand dunes, camel safaris, and peaceful desert camp stays.`,
      },
      {
        name: " Jodhpur",
        description: `Jodhpur is the Blue City, home to the massive Mehrangarh Fort, Umaid Bhawan Palace, and the vibrant old city area.`,
      },
      {
        name: "Ranakpur and Mount-Abu",
        description: `
        Ranakpur is famous for the stunning white marble Jain Temple dedicated to Tirthankara Adinatha, set amidst green hills.
        <br/>
        Mount Abu is Rajasthan’s only hill station, popular for the Dilwara Jain Temples, Nakki Lake, and the cool, green hill environment.
        `,
      },
      {
        name: "Udaipur",
        description: `Udaipur is the City of Lakes, known for Lake Pichola, City Palace, Jag Mandir, and romantic boat rides and hilltop views.`,
      },
      {
        name: " Chittorgarh",
        description: `Chittorgarh is symbolic of Rajput pride and sacrifice, with the enormous Chittorgarh Fort, Rana Kumbha Palace, and Vijay Stambh.`,
      },
      {
        name: " Kumbargarh",
        description: `Kumbhalgarh is known for Kumbhalgarh Fort, with the second-longest wall in the world, and it is surrounded by scenic wildlife and hills.`,
      },
      {
        name: " Bundi",
        description: `Bundi is a picturesque town featuring Taragarh Fort, Bundi Palace, and intricately carved stepwells like Raniji Ki Baori.`,
      },
      {
        name: " Ajmer",
        description: `Ajmer is a spiritual center housing the Ajmer Sharif Dargah of Khwaja Moinuddin Chishti and the nearby Ana Sagar Lake.`,
      },
      {
        name: "Ranthambore",
        description: `Ranthambore is a renowned national park famous for tiger safaris, Ranthambore Fort, and picturesque lakes and ruins.`,
      },
      {
        name: " Lakshman Sagar",
        description: `Lakshman Sagar is a luxury boutique resort near Raipur, offering a blend of rustic charm and comfort in a natural setting.`,
      },
      {
        name: " Rohitgarh",
        description: `Rohitgarh is a lesser-known heritage village area with rural Rajasthani charm, featuring a heritage fort now serving as a homestay.`,
      },
      {
        name: " Alwar",
        description: `Alwar features scenic spots like Siliserh Lake, Bala Quila Fort, and is close to the haunted Bhangarh Fort and Sariska Tiger Reserve.`,
      },
      {
        name: "Bharatpur",
        description: `Bharatpur is known for the Keoladeo National Park, a UNESCO World Heritage site and a haven for migratory birds and birdwatchers.`,
      },
      {
        name: "Agra",
        description: `Agra - the city of Taj Mahal was a special place to explore. There is something special in the air of Agra that speaks about its glorious past. I was overwhelmed with the first sight of Taj Mahal and tours to Itmad-Ud-Daula's tomb and Agra fort made my stay absolutely unforgettable. Today I am leaving this great city only with a firm desire to return back here very soon.`,
      },
      {
        name: "Agra to Delhi departure",
        description: `
        Departure from Agra to Delhi.
        `,
      },
    ],
    Inclusion: [
      "All arrival, departure, sightseeing’s as per above Itinerary by air conditioned Luxury car with English speaking driver",
      "Daily buffet breakfast",
      "Indian sim card with cell phone",
      "One double/ twin bedroom",
      "Elephant ride at amber fort",
      " Boat ride at Udaipur",
      "rain ticket New Delhi to Jaisalmer",
      "Guide service at all destinations and monuments",
      "All applicable hotel & transport taxes",
      "Government services tax of 4.89%",
    ],
    Exclusion: [
      "Any meals other than those specified",
      "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
      "Entrance fees during sightseeing",
      "Any other item not specified",
      "Driver tip",
      "International airfare",
    ],
    FAQs: [],
  },
  {
    __id: "11",
    name: "Marwar Tour",
    image: getIndexedImage(4),
    days: 6,
    nights: 7,
    Overview: [
      `The Marwar Tour of Rajasthan takes you through the heart of the desert kingdom, revealing the rugged beauty, valorous history, and vibrant culture of the Marwar region. Centered around Jodhpur, the Blue City, the tour begins with the awe-inspiring Mehrangarh Fort, Umaid Bhawan Palace, and the bustling Sardar Market. From there, travelers can explore Mandore, the ancient capital of Marwar, known for its cenotaphs and gardens. A visit to Osian, an ancient temple town in the Thar Desert, offers both spiritual significance and camel safari experiences. The tour often includes nearby desert villages like Khimsar and Rohetgarh, where heritage hotels and rustic charm showcase Marwar’s noble hospitality. Bikaner, another jewel of Marwar, enchants with Junagarh Fort, the royal palaces, and the unique Karni Mata Temple. In smaller towns like Nagaur and Phalodi, travelers witness authentic desert life, historic forts, and salt-lake landscapes. This tour paints a vivid picture of Marwar’s royal legacy, Rajput bravery, and desert traditions through its architecture, cuisine, music, and warm desert hospitality.`,
    ],
    Highlights: [],
    Itinerary: [
      {
        name: "Delhi to Mandawa (Arrival)",
        description: `You will be arrived at Delhi airport and be shifted to the hotel. On the first day you will be exploring the historical walled city of Delhi. <br/>
        
        the sightseeing tour of Delhi will include the Qutub Minar, Humayun’s Tomb, India Gate, President House, Mahatma Gandhi memorial, Red Fort, Jama Masjid and Laxmi Narayan Temple. Overnight in your hotel. Jama Masjid and Laxmi Narayan Temple. Overnight in your hotel.
        `,
      },
      {
        name: `Mandawa`,
        description: `Morning drive to Mandawa. Dep: Delhi/Mandawa By Car(with an English speaking Tourist Driver) Arrive Mandawa and direct transfer to hotel. Mandawa was settled in the 18th century, and was fortified by the dominant merchant families. Today it has some of the finest painted havelies in the region.
      
        Evening visit the town and some of its painted havelies. Mandawa houses a collection of armories, costumes of ancestors, canons from 1820, ancient coins, numismatic collection and many other interesting items preserved in a museum. The whole area of Shekhawati has beautiful frescoes, Haveli’s & mansions and is called the open-air gallery. Overnight in Mandawa.`,
      },
      {
        name: "Bikaner",
        description:
          "Morning drive to Bikaner. Dep: Mandawa/BikanerBy Car (with an English speaking Tourist Driver) Bikaner – popularly called the camel country. The city is renowned for the best riding camels in the world. Afternoon visit Junagarh Fort – built in 1593 A.D. by Raja Rai Singh, a general in the army of Emperor Akbar, and Camel Breeding farm. Overnight stay in Bikaner.",
      },
      {
        name: "Jaisalmer ",
        description: `Morning visit Deshnok’s Karni Mata Temple (32 kms): the famous 600 years old temple on the Jodhpur road dedicated to Karni Mata, an incarnation of Goddess Durga. The temple has huge intricately carved silver gates which were donated by Maharaja Ganga Singh. The most interesting thing about the temple are the rats who scamper freely within the sanctum sanctorum of the temple.
        
        They are regarded as sacred and are fed by priests and devotees owing to the belief that they will be reincarnated in the family of the goddess. Continue drive to Jaisalmer. Dep: Bikaner/Jaisalmer By Car (with an English speaking Tourist Driver) Direct transfer to hotel. Rest of the day at leisure and overnight in Jaisalmer.`,
      },
      {
        name: " Jhodhpur",
        description:
          "Morning drive to Jodhpur. Dep: Jaisalmer/Jodhpur By Car (with an English speaking Tourist Driver). En- route visit Osian – an oasis in the desert. (if time permits). Direct transfer to hotel. Afternoon visit Mandore Gardens and local market in Old Jodhpur. Evening free. overnight in Jodhpur.",
      },

      {
        name: " Nagaur",
        description: `
        Nagaur, located between Jodhpur and Bikaner, is a lesser-explored gem of Rajasthan known for its historical significance and rustic charm. The centerpiece is the massive Nagaur Fort, which houses beautiful palaces, temples, gardens, and ancient frescoes. The fort comes alive during the Nagaur Cattle Fair, one of the largest in India, drawing visitors with its vibrant mix of trading, folk music, camel races, and local crafts. Other notable sites include the Tarkeen Dargah, a revered Sufi shrine, and the serene Jain Glass Temple. With its authentic Rajasthani atmosphere, fewer crowds, and well-preserved heritage, Nagaur offers a peaceful yet culturally rich experience for travelers seeking offbeat destinations in Rajasthan.`,
      },
      {
        name: "Mandawa to Delhi Departure",
        description: ` Check out and drive to Delhi airport to board the flight back to your home with sweet memories, a bundle of souvenirs and an address book full of friends. (The Tour Ends).`,
      },
    ],
    Inclusion: [
      "All arrival, departure, sightseeing’s as per above Itinerary by air conditioned Luxury car with English speaking driver",
      "Daily buffet breakfast",
      "Indian sim card with cell phone",
      "One double/ twin bedroom",
      "Elephant ride at amber fort",
      " Boat ride at Udaipur",
      "rain ticket New Delhi to Jaisalmer",
      "Guide service at all destinations and monuments",
      "All applicable hotel & transport taxes",
      "Government services tax of 4.89%",
    ],
    Exclusion: [
      "Any meals other than those specified",
      "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
      "Entrance fees during sightseeing",
      "Any other item not specified",
      "Driver tip",
      "International airfare",
    ],
    FAQs: [],
  },
  {
    __id: "12",
    name: "East Rajasthan Tour",
    image:getIndexedImage(7),
    days: 8,
    nights: 7,
    Overview: [
      `
    The East Rajasthan Tour offers a captivating journey through the culturally rich and ecologically diverse eastern region of the state, blending royal heritage with wildlife and spirituality. The tour often starts from Jaipur, the Pink City, with its majestic forts like Amber and Nahargarh, royal palaces, and colorful bazaars. Moving to Ranthambore, visitors enjoy thrilling wildlife safaris in one of India’s top tiger reserves, home to Bengal tigers and ancient fort ruins nestled in the jungle. Bharatpur enchants bird lovers with the Keoladeo National Park, a UNESCO World Heritage site known for its migratory birds. Alwar, with attractions like Bala Quila, Siliserh Lake, and proximity to the haunted Bhangarh Fort, adds historical depth and mystery. The spiritual town of Ajmer, home to the Ajmer Sharif Dargah, and nearby Pushkar, with its sacred lake and Brahma Temple, offer a spiritual pause along the route. This tour gives a perfect blend of history, nature, culture, and faith, all within a compact and scenic circuit of Rajasthan.
    `,
    ],
    Highlights: [],
    Inclusion: [
      "All arrival, departure, sightseeing’s as per above Itinerary by air conditioned Luxury car with English speaking driver",
      "Daily buffet breakfast",
      "Indian sim card with cell phone",
      "One double/ twin bedroom",
      "Elephant ride at amber fort",
      " Boat ride at Udaipur",
      "rain ticket New Delhi to Jaisalmer",
      "Guide service at all destinations and monuments",
      "All applicable hotel & transport taxes",
      "Government services tax of 4.89%",
    ],
    Exclusion: [
      "Any meals other than those specified",
      "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
      "Entrance fees during sightseeing",
      "Any other item not specified",
      "Driver tip",
      "International airfare",
    ],
    Itinerary: [
      {
        name: "Jaipur",
        description: `
        We offer a private day tour in Jaipur City with a car, driver and guide. We suggest you try this tour of all the must-see places. This tour covers – Amber Fort with Elephant ride, Nahargarh Fort, City Palace, Hawa Mahal, Jantar Mantar, Albert Hall, Birla Temple, Local Market
        `,
      },
      {
        name: "Ajmer",
        description: `Ajmer is a spiritual center housing the Ajmer Sharif Dargah of Khwaja Moinuddin Chishti and the nearby Ana Sagar Lake.`,
      },
      {
        name: "Kumbargarh",
        description: `Kumbhalgarh is known for Kumbhalgarh Fort, with the second-longest wall in the world, and it is surrounded by scenic wildlife and hills.`,
      },
      {
        name: "Mount-Abu",
        description: `
        Mount Abu is Rajasthan’s only hill station, popular for the Dilwara Jain Temples, Nakki Lake, and the cool, green hill environment.
        `,
      },
      {
        name: " Udaipur",
        description: `Udaipur is the City of Lakes, known for Lake Pichola, City Palace, Jag Mandir, and romantic boat rides and hilltop views.`,
      },
      {
        name: " Chittorgarh",
        description: `Chittorgarh is symbolic of Rajput pride and sacrifice, with the enormous Chittorgarh Fort, Rana Kumbha Palace, and Vijay Stambh.`,
      },
      {
        name: " Bundi",
        description: `Bundi is a picturesque town featuring Taragarh Fort, Bundi Palace, and intricately carved stepwells like Raniji Ki Baori.`,
      },
      {
        name: " Bharatpur",
        description: `Bharatpur is known for the Keoladeo National Park, a UNESCO World Heritage site and a haven for migratory birds and birdwatchers.`,
      },
      {
        name: " Bharatpur to Jaipur departure",
        description: `Bharatpur is known for the Keoladeo National Park, a UNESCO World Heritage site and a haven for migratory birds and birdwatchers.`,
      },
    ],
    FAQs: [],
  },
  {
    __id: "13",
    name: "Mini Rajasthan Tour",
    image:getIndexedImage(5),
    days: 15,
    nights: 14,
    Overview: [
      `
    The Mini Rajasthan Tour is a compact yet enriching journey that captures the essence of Rajasthan’s royal heritage, desert charm, vibrant culture, and scenic beauty within a short span. Ideal for travelers with limited time, the tour typically includes key destinations like Jaipur, Jodhpur, and Udaipur. Starting in Jaipur, visitors explore architectural marvels like Amber Fort, City Palace, and Hawa Mahal while enjoying traditional markets and Rajasthani cuisine. The tour then moves to Jodhpur, the Blue City, where the massive Mehrangarh Fort, Umaid Bhawan Palace, and vibrant bazaars reveal the grandeur of Marwar. Finally, Udaipur, the City of Lakes, offers serene boat rides on Lake Pichola, visits to the majestic City Palace, and strolls through romantic gardens. This compact route gives travelers a taste of Rajasthan’s royal history, desert landscapes, local crafts, and warm hospitality—making it perfect for a first-time or quick visit.
    `,
    ],
    Highlights: [],
    Itinerary: [
      {
        name: "Arrive to Jaipur",
        description:
          "Begin your Rajasthan adventure in Jaipur, the Pink City. Visit the iconic Amber Fort, City Palace, and Hawa Mahal. Enjoy a traditional Rajasthani dinner and overnight stay in Jaipur.",
      },
      {
        name: " Jaipur",
        description: `
        We offer a private day tour in Jaipur City with a car, driver and guide. We suggest you try this tour of all the must-see places. This tour covers – Amber Fort with Elephant ride, Nahargarh Fort, City Palace, Hawa Mahal, Jantar Mantar, Albert Hall, Birla Temple, Local Market
        `,
      },
      {
        name: " Jaiselmer",
        description: `Jaisalmer is called the Golden City, famed for Jaisalmer Fort, Patwon Ki Haveli, and the surrounding Thar Desert sand dunes.`,
      },
      {
        name: " Jodhpur",
        description: `Jodhpur is the Blue City, home to the massive Mehrangarh Fort, Umaid Bhawan Palace, and the vibrant old city area.`,
      },
      {
        name: " Chittorgarh",
        description: `Chittorgarh is symbolic of Rajput pride and sacrifice, with the enormous Chittorgarh Fort, Rana Kumbha Palace, and Vijay Stambh.`,
      },
      {
        name: " Kumbargarh",
        description: `Kumbhalgarh is known for Kumbhalgarh Fort, with the second-longest wall in the world, and it is surrounded by scenic wildlife and hills.`,
      },
      {
        name: "Ajmer",
        description: `Ajmer is a spiritual center housing the Ajmer Sharif Dargah of Khwaja Moinuddin Chishti and the nearby Ana Sagar Lake.`,
      },
      {
        name: "Jaipur to Delhi departure",
        description: `
        Departure from Agra to Delhi.
        `,
      },
    ],
    Inclusion: [
      "All arrival, departure, sightseeing’s as per above Itinerary by air conditioned Luxury car with English speaking driver",
      "Daily buffet breakfast",
      "Indian sim card with cell phone",
      "One double/ twin bedroom",
      "Elephant ride at amber fort",
      " Boat ride at Udaipur",
      "rain ticket New Delhi to Jaisalmer",
      "Guide service at all destinations and monuments",
      "All applicable hotel & transport taxes",
      "Government services tax of 4.89%",
    ],
    Exclusion: [
      "Any meals other than those specified",
      "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
      "Entrance fees during sightseeing",
      "Any other item not specified",
      "Driver tip",
      "International airfare",
    ],
    FAQs: [],
  },
  {
    __id: "14",
    name: "Rajasthan Central City Tour",
    image: getIndexedImage(8),
    days: 100,
    nights: 500,
    Overview: [
      `
      The Rajasthan Central Tour offers a deep dive into the heart of the state, blending royal heritage, desert culture, and spiritual richness. Centered around Jodhpur, Ajmer, Pushkar, and Nagaur, the tour highlights majestic forts like Mehrangarh, sacred sites like the Ajmer Sharif Dargah, and the holy Pushkar Lake with its unique Brahma Temple. Nagaur Fort and its annual cattle fair provide a glimpse into traditional desert life. This central circuit showcases authentic Rajasthani architecture, vibrant markets, and folk traditions, offering a rich cultural experience in a compact, centrally located route.
      `,
    ],
    Highlights: [],
    Itinerary: [
      {
        name: "Jaipur",
        description: `
          We offer a private day tour in Jaipur City with a car, driver and guide. We suggest you try this tour of all the must-see places. This tour covers – Amber Fort with Elephant ride, Nahargarh Fort, City Palace, Hawa Mahal, Jantar Mantar, Albert Hall, Birla Temple, Local Market
          `,
      },
      {
        name: "Ajmer",
        description: `Ajmer is a spiritual center housing the Ajmer Sharif Dargah of Khwaja Moinuddin Chishti and the nearby Ana Sagar Lake.`,
      },
    ],
    Inclusion: [],
    Exclusion: [],
    FAQs: [],
  },
  {
    __id: "15",
    name: "Lake City Tour",
    image: getIndexedImage(9),
    days: 15,
    nights: 14,
    Overview: [
      `
      The Lake City Tour of Rajasthan revolves around the enchanting beauty of Udaipur, famously known as the City of Lakes. Nestled in the Aravalli hills, Udaipur offers a romantic blend of serene waters, royal palaces, and scenic landscapes. Highlights include the grand City Palace, tranquil Lake Pichola, the iconic Lake Palace, and the serene Fateh Sagar Lake. Nearby attractions like Saheliyon ki Bari, Bagore Ki Haveli, and Monsoon Palace add charm to the experience. The tour may also include nearby lake towns like Rajsamand and Jaisamand, making it ideal for those seeking beauty, heritage, and peace in one journey.
      `,
    ],
    Highlights: [],
    Itinerary: [
      {
        name: "Jaipur",
        description: `
        We offer a private day tour in Jaipur City with a car, driver and guide. We suggest you try this tour of all the must-see places. This tour covers – Amber Fort with Elephant ride, Nahargarh Fort, City Palace, Hawa Mahal, Jantar Mantar, Albert Hall, Birla Temple, Local Market
        `,
      },
      {
        name: "Ajmer",
        description: `Ajmer is a spiritual center housing the Ajmer Sharif Dargah of Khwaja Moinuddin Chishti and the nearby Ana Sagar Lake.`,
      },
      {
        name: "Rajsamand",
        description: `
        Rajsamand, located near Udaipur in Rajasthan, is known for the historic Rajsamand Lake, built by Maharana Raj Singh. Nearby attractions include the majestic Kumbhalgarh Fort, a UNESCO World Heritage Site, and the Kumbhalgarh Wildlife Sanctuary. Haldighati, famous for the battle of Maharana Pratap, and the cave temple of Parshuram Mahadev are also close by. The town is rich in history and offers scenic landscapes, making it a peaceful yet culturally significant destination.
        `,
      },
      {
        name: "Udaipur",
        description: `Udaipur is the City of Lakes, known for Lake Pichola, City Palace, Jag Mandir, and romantic boat rides and hilltop views.`,
      },
      {
        name: " Back to Jaipur",
        description: ` BAck to Jaipur`,
      },
    ],
    Inclusion: [],
    Exclusion: [],
    FAQs: [],
  },
  {
    __id: "16",
    name: "Desert Tour",
    image: "/images/camel1.jpg",
    days: 15,
    nights: 14,
    Overview: [``],
    Highlights: [],
    Itinerary: [
      {
        name: "Arrive from Delhi to Jaipur",
        description:
          "Begin your Rajasthan adventure in Jaipur, the Pink City. Visit the iconic Amber Fort, City Palace, and Hawa Mahal. Enjoy a traditional Rajasthani dinner and overnight stay in Jaipur.",
      },
      {
        name: "Bikaner",
        description: `Bikaner is known for Junagarh Fort, Lalgarh Palace, and the unique Karni Mata Temple (Rat Temple), as well as delicious snacks like bhujia.`,
      },
      {
        name: "Jaiselmer",
        description: `Jaisalmer is called the Golden City, famed for Jaisalmer Fort, Patwon Ki Haveli, and the surrounding Thar Desert sand dunes.`,
      },
      {
        name: "Jodhpur",
        description: `Jodhpur is the Blue City, home to the massive Mehrangarh Fort, Umaid Bhawan Palace, and the vibrant old city area.`,
      },
      {
        name: "Jaipur to Delhi Departure",
        description: `
        Depature from Jaipur to Delhi
        `,
      },
    ],
    Inclusion: [],
    Exclusion: [],
    FAQs: [],
  },
];

export const PRIVATETOURS = [
  {
    id: 1,
    logo: "/images/privatetourlogo.png",
    name: "Rajasthan Private Tour",
    description: "Experience royal palaces, desert adventures, and cultural charm.",
    duration: "Duration",
    days: "7 Days",
    group: "Group Size",
    people: "10 People",
    priceLabel: "Price",
    price: "₹18,000",
    featuresLabel: "Included Features",
    features: ["Luxury Hotels", "Guided City Tours", "Desert Safari", "Breakfast Included"],
  },
  {
    id: 2,
    logo: "/images/privatetourlogo.png",
    name: "South India Explorer",
    description: "Discover lush greenery, temples, and serene backwaters of the South.",
    duration: "Duration",
    days: "6 Days",
    group: "Group Size",
    people: "8 People",
    priceLabel: "Price",
    price: "₹15,000",
    featuresLabel: "Included Features",
    features: ["Deluxe Hotels", "Cultural Shows", "Private Transport", "Meals Included"],
  },
  {
    id: 3,
    logo: "/images/privatetourlogo.png",
    name: "Himalayan Adventure",
    description: "Embark on an unforgettable mountain escape with scenic trails.",
    duration: "Duration",
    days: "5 Days",
    group: "Group Size",
    people: "12 People",
    priceLabel: "Price",
    price: "₹20,000",
    featuresLabel: "Included Features",
    features: ["Mountain Camps", "Local Guide", "Campfire Nights", "Meals Included"],
  },
];


// Our services
export const SERVICES = [
  {
    __id: "2",
    name: "Rajasthan Tours",
    image: [
      { image: "/images/event.jpg", content: "Event Organizer" },
      { image: "/images/event2.jpg", content: "Event Organizer" },
      { image: "/images/event3.jpg", content: "Event Organizer" },
    ],
    description:
      "We specialize in organizing private and corporate events in Jaipur, ensuring every occasion is memorable and hassle-free.",
    price: "12,000",
    experiences: [
      "Luxury venue arrangements",
      "Professional event planning",
      "Customized décor and themes",
      
    ],
  },


  {
    __id: "3",
    name: "Car and Bike",
    image: [
      {
        image: "/images/bike1.jpg",
        content: "Car and Bike",
      },
      {
        image: "/images/car.jpg",
        content: "Car and Bike",
      },
      {
        image: "/images/bike2.jpg",
        content: "Car and Bike",
      },
    ],
    Overview: `ExploreIndiaView Tours (Tour Operator in India) is one of the oldest tour Operators & Holiday Planner in India. We remain as committed to serving travellers today as when they first opened their doors. In its working years ExploreIndiaView Tours has made business ventures with various companies to add the power of the world's leading Holidays and Tour expense management company. Steady growth and intelligent partnerships allow ExploreIndiaView Tours to care for the needs of any traveller, whether corporate or individual. The core values of ExploreIndiaView Tours are communication, motivation, satisfaction and partnership. Whether you are an individual or a seasoned business traveller, we offer the same level of service. Today most of the people who come to India or want to visit places like Jaipur Agra or even North & south India for long tours or for business trips prefer the Rajasthan Royal Tours The company has a fleet of cars ranging from luxury to standard with A/C and Non A/C facilities. The entire cars are well maintained and are driven by educated, multilingual and generous chauffeurs. Almost all our drivers are experienced and they know each and every route of New Delhi, Agra, Jaipur and the Main destination of India. we make your travel easier, and hassle-free and make you reach any place, destination, Monument, airport, railway station and office on time. If you are looking for car hire services in India or pickup and drop facilities to the airport or a car for a short trip to Agra and Jaipur OR Rajasthan, we are going to provide you with the best car at the most competitive rate. We give you great value for your hard money and charge a competitive market price for the service we deliver to you. With Rajasthan Royal Tours, you can book luxury cars for rent in India like BMW, Benz, Mercedes, Audi A6, and many other high-end models depending on various needs. So, enjoy the journey in style with the best taxi booking service provider in India.`,
  },
  {
    __id: "4",
    name: "Tour Guide Service",
    image: [
      {
        image: "/images/guide1.jpg",
        content: "Tour Guide Service",
      },
      {
        image: "/images/guide2.jpg",
        content: "Tour Guide Service",
      },
      {
        image: "/images/guide3.jpg",
        content: "Tour Guide Service",
      },
    ],
    Overview: ``,
  },
  {
    __id: "5",
    name: "Travel Insurance",
    image: [
      {
        image: "/images/travel1.jpg",
        content: "Travel Insurance",
      },
      {
        image: "/images/travel2.jpg",
        content: "Travel Insurance",
      },
      {
        image: "/images/travel3.jpg",
        content: "Travel Insurance",
      },
    ],
    Overview: `Travel insurance is a must whether you are on a business or leisure trip. Travel insurance safeguards you from any untoward incidents like luggage theft/loss, medical emergencies en route, etc. It is not enough to have travel insurance, it is essential that you have chosen the right travel insurance plan for Tour to India. At Rajasthan Royal Tours we offer the best Travel Insurance Services in Rajasthan. Here, we have experts who will guide you & offer reliable advice regarding the best travel insurance as per your budget and travel requirements. We work in the best interests of our customers & ensure that they understand all the nitty-gritty details of the travel insurance plan that they are an option for.`,
  },
];

// Hotels Data
export const HOTELSDATA = {
  images: [
    {
      image: "/images/hotel.jpg",
      content: "Our Partners Hotels",
    },
    {
      image: "/images/hotel-2.jpg",
      content: "Our Partners Hotels",
    },
    {
      image: "/images/hotel-1.jpg",
      content: "Our Partners Hotels",
    },
  ],
  hotels: [
    {
      __id: "1",
      city: "Udaipur",
      hotels: [
        {
          name: "Brahma Niwas",
          image:
            "https://pix8.agoda.net/hotelImages/13857570/-1/6e87c656a42cd5d881401625ad6f6b36.jpg?ce=0&s=1024x",
          desc: `Get your trip off to a great start with a stay at this property, which offers car park free of charge. Conveniently situated in the Lake City part of Udaipur, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous City Palace of Udaipur. Rated with 4 stars, this high-quality property provides guests with access to restaurant and outdoor pool on-site.`,
        },
        {
          name: "Sterling Jaisinghgarh Udaipur",
          image:
            "https://pix8.agoda.net/hotelImages/879882/-1/9c47ddd2ea4a5a2aff5085ae461e6ebe.jpg?ce=0&s=1024x",
          desc: `The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Conveniently situated in the Lake City part of Udaipur, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous City Palace of Udaipur. Rated with 4 stars, this high-quality property provides guests with access to restaurant, indoor pool and outdoor pool on-site.`,
        },
        {
          name: "The Oberoi Udaivilas, Udaipur",
          image:
            "https://pix8.agoda.net/hotelImages/1061960/-1/e97dbf900b9239783587743871df7cd8.jpg?ca=29&ce=0&s=600x",
          desc: `Fondly known as the "City of Lakes", Udaipur, the erstwhile capital of the Kingdom of Mewar, is resplendent with vast hilltop forts, palaces, temples and gardens that serve as reminders of its majestic history. Falling in love with the charm of the “City of Lakes” is easy when you are staying at the best hotel in Udaipur: The Oberoi Udaivilas. Located on the banks of Lake Pichola, our 5 star hotel is spread over 1,21,406 square metres of luxuriant gardens, with an intricate layout of interconnecting domes and corridors that reflect the layout of Udaipur itself; whose seven lakes are linked by canals. Superior accommodations, fine restaurants serving signature cuisine and a quiet emphasis on your wellbeing with daily yoga and personally curated spa therapies.`,
        },
      ],
    },
    {
      __id: "2",
      city: "Jaipur",
      hotels: [
        {
          name: "Holiday Inn Jaipur City Centre",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1280x900/273748308.jpg?k=f280555938bfb341be627a32e148dc6be52a794a787b02f8d205b356de94c154&o=&hp=1",
          desc: `Offering an outdoor swimming pool, a fitness center and a spa and wellness center, Holiday Inn Jaipur City Center is within 2.2 mi from the architectural marvel of the City Palace and the Amer Fort. Each elegant air-conditioned room here will provide you with a satellite TV, seating area and a mini-bar. Featuring a shower, private bathroom also comes with a hairdryer and free toiletries. Extras include an iPod dock. Guest can also request for amenities like pen drive and snack basket/ fruit basket.`,
        },
        {
          name: "Laxmi Palace Heritage Boutique Hotel",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1280x900/189255024.jpg?k=44d94947bf36bff8cb5b0020c6384a33d889b3fed31b1476d19a8d6e9ae709a0&o=&hp=1",
          desc: `You're eligible for a Genius discount at Laxmi Palace Heritage Boutique Hotel! To save at this property, all you have to do is sign in. Built in heritage style with transitional theme, Laxmi Palace, located in Jaipur has beautifully paintings with great architecture, attractive lobby, open terraces, lovely ambiance and comfortable rooms with antique furnishings. It offers Fresco Miniature paintings and a rooftop restaurant. Free WiFi and parking are provided.`,
        },
        {
          name: "The Oberoi Raj Vilas, Jaipur",
          image:
            "https://pix8.agoda.net/hotelImages/1061960/-1/e97dbf900b9239783587743871df7cd8.jpg?ca=29&ce=0&s=600x",
          desc: `Experience a sincerely warm welcome when you stay with us at our 5-star hotel in Jaipur: The Oberoi Rajvilas. Spread over 1,29,499 square meters of beautifully landscaped gardens, with traditional architecture, flaming mashaal torches and reflection pools. Exquisite accommodation, including luxury tents inspired by the era of Maharajas, fine restaurants serving authentic Rajasthani and international cuisines, specially curated romantic experiences for couples and our sincere hospitality. The perfect setting for the holiday of a lifetime at the best 5-star luxury hotel in Jaipur.`,
        },
      ],
    },
    {
      __id: "3",
      city: "Jaiselmer",
      hotels: [
        {
          name: "Chokhi Dhani - The Palace Hotel",
          image:
            "https://pix8.agoda.net/hotelImages/730328/-1/19e512f6136648bad7805e7dfcc6963d.jpg?ca=7&ce=1&s=600x",
          desc: `The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Conveniently situated in the Suthar Para part of Jaisalmer, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Jaisalmer Fort. Rated with 3 stars, this high-quality property provides guests with access to restaurant and fitness center on-site.`,
        },
        {
          name: "Golden Star Desert Camp",
          image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/503929610.jpg?k=1fb6e74e50a2db94d78782ac5ffc63a2059639119df606a7b7e1853ab174b6b4&o=&s=116x",
          desc: `Get your trip off to a great start with a stay at this property, which offers free Wi-Fi in all rooms. Conveniently situated in the Sam Sand Dunes part of Jaisalmer, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Jaisalmer Fort. This 5-star property is packed with in-house facilities to improve the quality and joy of your stay.`,
        },
        {
          name: "Sky Desert Safari Camp Jaisalmer",
          image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/324469633.jpg?k=a1789b6d4e5d53b55512ea71d45c629d8099ab510c0a21faa656dc4fcad156e0&o=&s=600x",
          desc: `The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Conveniently situated in the Sam Sand Dunes part of Jaisalmer, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Jaisalmer Fort. This 4-star property features massage to make your stay more indulgent and memorable.`,
        },
      ],
    },
    {
      __id: "4",
      city: "Jodhpur",
      hotels: [
        {
          name: "Krishna Prakash Heritage Haveli Hotel",
          image:
            "https://pix8.agoda.net/hotelImages/283921/-1/d75080f6ca045059310bb9910b151975.jpg?ca=16&ce=1&s=600x",
          desc: `The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Strategically situated in Gulab Sagar, allowing you access and proximity to local attractions and sights. Don't leave before paying a visit to the famous Mehrangarh Fort. Rated with 3 stars, this high-quality property provides guests with access to massage, restaurant and indoor pool on-site.`,
        },
        {
          name: "Radisson Jodhpur",
          image:
            "https://pix8.agoda.net/hotelImages/9455137/0/339b55207b46763f75ab41db030014c6.jpg?ca=9&ce=1&s=1024x",
          desc: `The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Conveniently situated in the Air Force Area part of Jodhpur, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Mehrangarh Fort. Rated with 3.5 stars, this high-quality property provides guests with access to restaurant, fitness center and indoor pool on-site.`,
        },
        {
          name: "Bijolai Place Jodhpur – Inde Hotel",
          image:
            "https://pix8.agoda.net/hotelImages/288261/-1/ca6a5fe9723251c126f17801df946e2d.png?ca=0&ce=1&s=375x",
          desc: `The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Conveniently situated in the Kayalana Lake part of Jodhpur, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Mehrangarh Fort. This 3.5-star property features restaurant to make your stay more indulgent and memorable.`,
        },
      ],
    },
    {
      __id: "5",
      city: "Agra",
      hotels: [
        {
          name: "Holiday Inn Agra MG Road",
          image:
            "https://pix8.agoda.net/hotelImages/7545956/0/1fdada58ee31d9022836b8f09e1e695c.jpg?ca=23&ce=0&s=600x",
          desc: `In addition to the standard of IHG Clean Promise, all guests get free Wi-Fi in all rooms and free parking if arriving by car. Conveniently situated in the Dayal Bagh part of Agra, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Taj Mahal. Rated with 5 stars, this high-quality property provides guests with access to restaurant, fitness center and indoor pool on-site.`,
        },
        {
          name: "Radisson Hotel Agra",
          image:
            "https://pix8.agoda.net/hotelImages/1177534/-1/08c2836b4099ca31ccd37fb430191bb1.jpg?ca=9&ce=1&s=600x",
          desc: `The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Strategically situated in Tajganj, allowing you access and proximity to local attractions and sights. Don't leave before paying a visit to the famous Taj Mahal. Rated with 5 stars, this high-quality property provides guests with access to massage, restaurant and fitness center on-site.`,
        },
        {
          name: "The Oberoi Amarvilas, Agra",
          image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/47406124.jpg?k=e033dd8dd176f693648a8ab488388f411b46ce34d68950117aa49423c0daf79c&o=&s=600x",
          desc: `The capital of the Mughal Empire in the 16th and 17th centuries, Agra is home to three UNESCO world heritage sites: the Taj Mahal, Agra Fort and the ancient city of Fatehpur Sikri; all of which are legacies from Mughal times. Located just 600 meters from the Taj Mahal, the world’s most exquisite testimony to undying love, it is easy to rekindle romance at The Oberoi Amarvilas. The best hotel in Agra is inspired by Mughal palace designs; with fountains, terraced lawns, reflection pools and pavilions. The Oberoi Amarvilas is a five star hotel that offers unrestricted views of Taj Mahal from all rooms and suites, complemented by our warm, personalised hospitality.`,
        },
      ],
    },
  ],
};

export const CAROUSELIMAGE = [
  {
    image: "/images/landing1.jpg",
    content: `Make your trip worthwhile`,
  },
  {
    image: "/images/landing2.jpg",
    content: `Top Adventure`,
  },
  {
    image: "/images/landing3.jpg",
    content: `Explore new Places`,
  },
  {
    image: "/images/landing4.jpg",
    content: `Discover new Things`,
  },
];

// Top Services
export const TOPSERVICES = [
  {
    name: "One Day Tour",
    image: getIndexedImage(10),
    path: "/onedaytour",
  },
  {
    name: "Adventure",
    image: getIndexedImage(11),
    path: "/adventure",
  },
];

  // {
  //   name: "Camping Hiking",
  //   image: "/images/camping1.jpg",
  //   path: "/camping_hiking",
  // },
  // {
  //   name: "Hotel Service",
  //   image: "/images/hotel-1.jpg",
  //   path: "/hotels",
  // },

// export const RAILWAYIMAGES = [
//   {
//     image: "/images/train1.jpg",
//     content: "Train Service",
//   },
//   {
//     image: "/images/train2.jpg",
//     content: "Train Service",
//   },
//   {
//     image: "/images/train3.jpg",
//     content: "Train Service",
//   },
// ];

// export const AIRLINESERVICES = [
//   {
//     name: "Delhi - Jaipur",
//   },
//   {
//     name: "Jaipur - Delhi",
//   },
//   {
//     name: "Delhi - Agra",
//   },
//   {
//     name: "Agra - Delhi",
//   },
//   {
//     name: "Mumbai - Jaipur",
//   },
//   {
//     name: "Jaipur - Mumbai",
//   },
//   {
//     name: "Mumbai - Agra",
//   },
//   {
//     name: "Agra - Mumbai",
//   },
// ];

// export const TRAINSERVICES = [
//   { name: "Delhi - Jaipur Express" },
//   { name: "Mumbai - Jaipur Superfast" },
//   { name: "Chennai - Jaipur Rajdhani" },
//   { name: "Kolkata - Jaipur Duronto" },
//   { name: "Hyderabad - Jaipur Special" },
//   { name: "Ahmedabad - Jaipur Intercity" },
// ];

// export const AIRLINEIMAGES = [
//   {
//     image: "/images/airline1.jpg",
//     content: "Airline Service",
//   },
//   {
//     image: "/images/airline2.jpg",
//     content: "Airline Service",
//   },
//   {
//     image: "/images/airline3.jpg",
//     content: "Airline Service",
//   },
// ];

// One Day Tour
export const ONEDAYTOUR = {
  images: [
    {
      image: getIndexedImage(12),
      content: "Top Day Tour",
    },
    {
      image: getIndexedImage(13),
      content: "Discover new Places",
    },
    {
      image: getIndexedImage(14),
      content: "Make your trip worthwhile",
    },
  ],
  cities: [
    {
      name: "Udaipur",
      image: "/images/package7.jpg",
      Overview: [
        {
          name: "Udaipur",
          description: `formerly the capital of the Mewar Kingdom, is a city in the western Indian state of Rajasthan. Founded by Maharana Udai Singh II in 1559, it’s set around a series of artificial lakes and is known for its lavish royal residences. City Palace, overlooking Lake Pichola, is a monumental complex of 11 palaces, courtyards and gardens, famed for its intricate peacock mosaic.`,
        },
        {
          name: "city palace",
          description: `Udaipur is a palace complex situated in the city of Udaipur in the Indian state of Rajasthan. It was built over a period of nearly 400 years, with contributions from several rulers of the Mewar dynasty. Its construction began in 1553, started by Maharana Udai Singh II of the Sisodia Rajput family as he shifted his capital from the erstwhile Chittor to the newfound city of Udaipur. The palace is located on the east bank of Lake Pichola and has several palaces built within its complex.`,
        },
        {
          name: "lake pichola",
          description: `This is a lake situated in the Lake City, Udaipur, Rajasthan. The true reflection of the grandeur of Rajasthan, Lake Pichola is amongst the top places to visit in Udaipur. Lake Pichola is a man-made freshwater lake, Lake Pichola Best Tourist Attraction in Udaipur, founded in 1362 AD, it was named after the adjacent Picholi village. It is one of the several contiguous lakes and developed over the last few centuries in and around the city of Udaipur. The lakes around Udaipur were mostly constructed by building dams to meet the drinking water and irrigation requirements of the city and its locality. Inside the Lake, two islands, Jag Niwas and Jag Mandir are situated and have been extended with several palaces to provide views of the lake.`,
        },
        {
          name: "Saheliyon Ki Bari",
          description: `Saheliyon Ki Bari was laid for a group of forty-eight maidens. This garden is located on the banks of the Fateh Sagar Lake, presenting a green retreat in the dry lands of Rajasthan. It was built from 1710 to 1734 by Maharana Sangram Singh for the royal ladies. As per legend, the garden was designed by the king himself and he presented this garden to his queen. The queen was accompanied by 48 maids in her marriage. To offer all of them pleasurable moments away from the political intrigues of the court, this garden was made. This patterned garden used to be the popular relaxing spot of the royal ladies. The queen with her maids and female companions used to come here for a stroll and spend their time in leisure
          `,
        },
        {
          name: "Jagdish Temple",
          description: `Jagdish Temple is one of the best architectural wonders of the Mewar dynasty. Jagdish temple showcases the Indo- Aryan architectural style. The temple is built keeping the rules of Vastushastra, the Hindu architectural science in mind. This three-storied temple is built on raised platform flaunting magnificently carved pillars, huge airy halls and painted walls that are adorned with vibrant colors and intricately decorated ceilings. At the entrance, there are two massive elephants statues of stone, installed to welcome the visitors. An inscription engraved on the stone slab is found at the entry. Mahara Jagat Singh installed the inscription to record his contributions to the temple.`,
        },
      ],
    },
    {
      name: "Jaipur",
      image: "/images/package5.jpg",
      Overview: [
        {
          name: "Jaipur",
          description: `We offer a private day tour in Jaipur City with a car, driver and guide. We suggest you try this tour of all the must-see places. This tour covers – Amber Fort with Elephant ride, Nahargarh Fort, City Palace, Hawa Mahal, Jantar Mantar, Albert Hall, Birla Temple, Local Market`,
        },
        {
          name: "Amber Fort",
          description: `Visit Amber Fort with an Elephant ride. The fort is situated on a hill 12Kms from the city,`,
        },
        {
          name: "Nahargarh Fort ",
          description: `he smallest of the three forts, notable primarily for excellent views over Man Sagar lake and the vast sprawl of Jaipur.`,
        },
        {
          name: "Jantar Mantar ",
          description: `The Jantar Mantar is the largest of five astronomical observatory built by Maharaja Jai Singh during the period 1727-1734 in north India. It is located very close to the City Palace.`,
        },
        {
          name: "Hawa Mahal",
          description: ``,
        },
        {
          name: "Albert Hall Museum,",
          description: ``,
        },
        {
          name: "Local Market of Jaipur",
          description: ``,
        },
      ],
    },
    {
      name: "Jodhpur",
      image: "/images/package11.jpg",
      Overview: [
        {
          name: "",
          description: `Showcasing various shades of blue, Jodhpur is one of the best places to visit in India. The royal city of Rajasthan is fondly called ‘Blue city’. Jodhpur tours offer exciting opportunities to explore numerous palaces, forts and havelis that add to the charm of the city. Commended as one of the largest cities in Rajasthan, days fall short in the royal pleasures. Also, the city is known as the ‘gateway to the Thar’ as it lies of the edge of the golden desert. For a tryst with history as well as delights of the desert, Jodhpur Tour Packages by Indian Holiday offers memorable holidays. Flowing out of the walls, the city has become one of the popular tourist spots in Rajasthan which is cherished by architecture lovers. Embracing the numerous palaces, forts, and havelis, even the lanes of the city ooze out a different vibe, something that can be cherished in Jodhpur tour only. Besides, the lakes, gardens, and mausoleums also pull in travelers who like less crowded places. Choose your favorite Jodhpur tour packages and enjoy wonderful family holidays in this beautiful ‘Blue City’. A myriad of attractions like towering Mehrangarh Fort, Umaid Bhawan Palace, Moti Mahal, etc. adorns the city. The Jaswant Thada, Mandore Gardens and Rao Jodha Desert Rock Park are some other highlights of the Jodhpur that render the visitors in a state of awe. While the charms are many, one of the must visit places in Jodhpur is the Bishnoi Village. Embark on safari and here you can witness the authentic bliss of Rajasthan, its culture and other charms. Book any of Jodhpur Tour packages and get ready for a superb experience. Savor delicious Jodhpuri food. Shop for traditional women footwear called ‘Jodhpuri Mojari’. Partake in popular festivals celebrated in Jodhpur like Gangaur, Teej, Rajasthan International Folk Festival and many more. A trip to Jodhpur is replete with many delightful moments to be cherished forever. Make the charm of the exploring the royal city all the more amazing with stay at the wonderful heritage hotels of Jodhpur. While the options are abundant, few match to the thrill of staying at the Umaid Bhavan Place, the newest royal palace in India. Also, it has the reputation of hosting some of the grandest royal weddings in India.`,
        },
        {
          name: "Mehrangarh Fort",
          description: `The Fort of Jodhpur crowns a rocky hill that rises 400 feet above the surrounding plain, and appears both to command and to meld with the landscape. One of the largest forts in Rajasthan, it contains some of the finest palaces and preserves in its museum many priceless relics of Indian courtly life. For over five centuries Mehrangarh has been the headquarters of the senior branch of Rajput clan known as the Rathores. According to their bards, the ruling dynasty of this clan had at an earlier period controlled Kanauj (in what is known as Uttar Pradesh). Like other prominent medieval Rajput rulers – including the famous Prithviraj Chauhan – they were defeated by the invaders from Afghanistan at the end of the 12th century.`,
        },
        {
          name: "Umaid Bhawan Palace",
          description: `Umaid Bhawan Palace, located in Jodhpur, Rajasthan, India, is one of the world’s largest private residences. A part of the palace is managed by Taj Hotels. It is named after Maharaja Umaid Singh, grandfather of the present owner, Gaj Singh. The palace has 347 rooms and is the principal residence of the former Jodhpur royal family. A part of the palace is not a residence The groundbreaking for the foundations of the building was carried out on 18 November 1929 by Maharaja Umaid Singh and the construction work was completed in 1943.`,
        },
        {
          name: "Taj Mahal of Marwar",
          description: `The beautiful memorial in marble often described as the “Taj Mahal of Marwar” was built in memory of Maharaja Jaswant Singhjill of Jodhpur (1873-1895) by his son Maharaja Sardar Singhji (1895-1911) and completed in 1906 A.D. The main hall has been built like a temple where puja (ritual) is also performed. The worship of ancestors is common to the Rajput clans. Today, Jaswant Thada is managed and looked after by the Mehrangarh Museum Trust (MMT) and is open to the public. The Trust is operating a Museum in Jaswant Thada displaying portraits of Marwar rulers along with informative didactics – the information serves as an orientation space to understand the history of Marwar through the Portraits. Its grounds serve as a serene venue for morning concerts during music festivals such as the Rajasthan International Folk Festival and the World Sacred Spirit Festival.`,
        },
      ],
    },
    {
      name: "Jaisalmer",
      image: "/images/package4.jpg",
      Overview: [
        {
          name: "",
          description: `Jaisalmer, also known as the "Golden City" is a popular tourist destination in Rajasthan, India, known for its stunning architecture, rich culture, and beautiful desert landscapes. A private day tour of Jaisalmer can include the following highlights:`,
        },
        {
          name: "Jaisalmer Fort:",
          description: `Also known as the "Sonar Quila", this UNESCO World Heritage Site is a must-see attraction in Jaisalmer. The fort is a stunning example of Rajasthani architecture and offers panoramic views of the city.`,
        },
        {
          name: "Havelis",
          description: `Jaisalmer is known for its beautiful havelis, traditional Rajasthani mansions, many of which have been converted into hotels and guesthouses. Some of the famous havelis are Patwon Ki Haveli, Salim Singh Ki Haveli, and Nathmal Ji Ki Haveli.`,
        },
        {
          name: "Jain Temples",
          description: `Jaisalmer is home to a number of Jain temples, including the Parsvanath Temple and the Rishabhdeo Temple, known for their intricate carvings and beautiful architecture.`,
        },
        {
          name: "Desert Safari",
          description: `Jaisalmer is located in the heart of the Thar Desert and a desert safari is a must-do activity. You can explore the desert on camelback or in a jeep and enjoy a traditional Rajasthani dinner under the stars.`,
        },
        {
          name: "Local Bazaar",
          description: `Visiting the local bazaar is an excellent way to experience the local culture and buy some souvenirs. The bazaar is famous for its textiles, handicrafts, and traditional jewelry.`,
        },
        {
          name: "Sam Sand Dunes",
          description: `Sam Sand Dunes is a popular spot for a sunset view, where you can see the beautiful desert landscape and enjoy a traditional Rajasthani cultural program.`,
        },
        {
          name: "",
          description: `It's always a good idea to check with the local authorities for any restriction or permit needed for traveling to some areas of the state. Keep in mind that the best time to visit Jaisalmer depends on your personal preferences and the kind of experience you are looking for. If you want to enjoy the desert activities, then the winter months are the best time to go. But if you're interested in sightseeing and other activities like trekking, then the summer months are the best time to go.
          
          `,
        },
      ],
    },
    {
      name: "Agra",
      image: "/images/package19.jpg",
      Overview: [
        {
          name: "Agra Tour Package",
          description: `Agra - the city of Taj Mahal was a special place to explore. There is something special in the air of Agra that speaks about its glorious past. I was overwhelmed with the first sight of Taj Mahal and tours to Itmad-Ud-Daula's tomb and Agra fort made my stay absolutely unforgettable. Today I am leaving this great city only with a firm desire to return back here very soon.`,
        },
        {
          name: "Factfile",
          description: `
          <strong>location</strong>: Uttar Pradesh<br/>
          <strong>Best Time to visit</strong>: September-March<br/>
          <strong>Must Visit Attraction</strong>: Taj Mahal<br/>
          <strong>Excursions</strong>: Fatehpur Sikri<br/>
          `,
        },
        {
          name: "A word about Agra",
          description: `Once the capital of Mughal empire in India, today Agra is a major tourist hub because of Taj Mahal. It boasts of a number of buildings that exhibit the fine craftsmanship of the Mughal era. Moreover its narrow lanes filled with the aroma of mughlai cuisine and exquisite handcrafted items made of fine leather also catch the attention of tourists.`,
        },
        {
          name: "Taj Mahal, Agra India",
          description: `The day started with a visit to Taj Mahal- an edifice, which I always wanted to explore. The incredible building was like a precious marble box inlaid with beautiful stones. I along with a Japanese guy headed towards the north entrance gate to watch the sunrise. The inner courtyard opens from an archway lined walkway into greenness. The beautiful details taken on the Taj made me speechless. Mughal floral patterns and Arabic writing adorn the arches, the flowers beautiful blues and reds of lapis lazuli, turquoise. I thought the Taj was all white but the subtlety of color was the best surprise. I left the place but kept looking back at it from my cab's window till the time it disappeared completely from my eyes.`,
        },
        {
          name: "Itmad-Ud-Daula's tomb",
          description: `I had seen the similar structure at Lahore that was also built by Nurjahan for Jehangir. The tomb, however was a delight to look at. The inlay designs and carvings were no less than the same at Taj Mahal but it was the beautiful marble lattice work that gave it a distinct charm. By the time I completed the visit to this beautiful architectural wonder, it was late night so I returned back to the hotel savoring the memories of a day well spent.`,
        },
        {
          name: "Agra Red Fort",
          description: `Next morning I headed directly to the Red Fort en route paying a short visit to Taj Mahal again. The mammoth fort had a variety of attractions including Diwan-E-Aam, Diwane-E-Khas, Octagonal Tower, Jehangir Palace, Mina Masjid, Moti Masjid, Sheesh Mahal and Golden Pavilions.`,
        },
        {
          name: "Shopping at Agra",
          description: `Exploring the extremely colorful markets of Agra was a great experience. I bought replicas of Taj Mahal as souvenirs for my friends and relatives. But the leather items including leather chappals (sandals), purses, bags and other decorative items were just irresistible.`,
        },
      ],
    },
    {
      name: "Ajmer",
      image: "/images/package21.jpg",
      Overview: [
        {
          name: "Ajmer Tour Package",
          description: `Ajmer gave me the first glimpse of the unity in diversity in India. Ajmer is the place where I learned how people from different religions live with each other in total peace and harmony. Specially, in the present circumstances, it was surprising to see people from different religions visiting the dargah with same devotion. I came here to watch the blend of Sufi culture and Hindu religion and Ajmer offered me just the same.`,
        },
        {
          name: "Factfile",
          description: `
          <strong>location</strong>: Rajasthan<br/>
          <strong>Best Time to visit</strong>: September-March<br/>
          <strong>Must Visit Attraction</strong>: Dargah<br/>
          <strong>Excursions</strong>: Pushkar<br/>
          `,
        },
        {
          name: "A word about ajmer",
          description: `Ajmer represents India's true face of secularism and tolerance. It is a city that attracts thousands of devotees of different religion who come here to seek the blessings of Khwaja Moinuddin Chishti. It is place where only faith matters and that faith is represented by the threads which are tied to the shrine of Khwaja Moinuddin Chishti.`,
        },
        {
          name: "Dargah of Khwaja Moinuddin Chishti",
          description: `As soon as I reached Ajmer, I dint waste a single minute and reached to the Dargah passing through the colorful bylanes of the city. The entry to the Dargah was through the Buland Darwaza that leads to the inner courtyard. The high gateway has beautifully carved silver doors. In the courtyard there were two huge cauldrons with capacity of 2240 kg and 4480 kg. Suddenly a saw a group of young peoples carrying threads and tying them to the shrine of the saint. Inquisitive, I asked them the reason and they told me that by doing so Khwaja will fulfill all their desires. But it was particularly heartening to see that the devotees were not just the Muslims but they represented all the major religions.`,
        },
        {
          name: "The Museum of Ajmer",
          description: `Exploring the Ajmer museum was like visiting the past of Rajasthan. The various galleries here exhibited a fine collection of important exhibits from almost all the princely states in Rajasthan. The museum's main sections were devoted to sculptures, epigraphs, prehistoric antiquities, arms and weapons. There was also a library with a collection of rare books and other historical publications.`,
        },
      ],
    },
    {
      name: "Bikaner",
      image: "/images/package22.jpg",
      Overview: [
        {
          name: "Bikaner Tour Package",
          description: `I had expected Bikaner to be a city with princely charm and it came out just the same. The forts and palaces of Bikaner reminded me the royal past of the city. The colorful markets provided me all the stuff that I could take back home as souvenirs. But at the end of trip I realized more than anything else, it was the hospitality of the people here that touched the core of my heart.`,
        },
        {
          name: "Factfile",
          description: `
          <strong>location</strong>: Rajasthan<br/>
          <strong>Best Time to visit</strong>: November-March<br/>
          <strong>Must Visit Attraction</strong>: Junagarh Fort<br/>
          <strong>Excursions</strong>: Bhandeshwar & Sandeshwar Temples<br/>
          `,
        },
        {
          name: "A word about Bikaner",
          description: `Bikaner, the royal walled city is a part of the desert tourist triangle lying on the northern tip of the triangle. The Bikaner city is named after Rathore prince, Rao Bikaji who founded it in 1486 AD. A seven-kilometers wall with five entrances surrounds he city protecting it from vagaries of the desert and any external aggression.`,
        },
        {
          name: "Junagarh Fort in Bikaner",
          description: `I wanted to see this unconquered fort and what an imposing site it was! The exquisite beauty of the Junagarh fort was best reflected by a high wall and deep moats that surrounded the fort. The 37 bastions guarded the Junagarh fort but there were only two gates providing access inside the fort. I chose Suraj Pol or the Sun Gate to enter into the fort and was surprised by the inside beauty. There was a profusion of 37 palaces, temples and pavilions made of red sandstone. The exquisitely carved windows, balconies, towers and mirrors, paintings and carved marble panels in the Moon Palace were enough for me to comprehend the architect's zest for excellence.`,
        },
        {
          name: "Lalgarh Palace in Bikaner",
          description: `The next destination was the glorious Lalgarh Palace. The very first sight of the palace was spellbinding terraced lawns and the Bougainvillea bushes adding to its beauty. The intricate filigree work and latticework exhibited the excellence of yesteryear's architecture. The Lalgarh palace museum displayed well preserved hunting trophies and old photographs.`,
        },
        {
          name: "The Ganga Golden Jubilee Museum",
          description: `The museum was divided into various parts that enabled me to visit it according to my preferences. The various sections here included Local Arts and Crafts, History, Sculpture, Terracotta and Bronzes, Armory, Miniature Paintings and Folk-Arts, Dr. L.P. Tessitori Memorial Section and Lithoprints of the British interpretation of the war of Independence 1857.`,
        },
      ],
    },
    {
      name: "Bharatpur",
      image: "/images/package23.jpg",
      Overview: [
        {
          name: "Bharatpur Tour Package",
          description: `Visiting the tranquil place like Bharatpur Bird Sanctuary was an eye opener. I reached here on my way to the famous Keoladeo Bird Sanctuary but the village itself was no less charming. The colorful chops here selling exquisite handcrafted items and the smiling faces of local people who are always willing to help is something I will remember for the rest of my life. I strongly recommend everyone to spend some time here in the village before heading to the Bharatpur Bird Sanctuary.`,
        },
        {
          name: "Factfile",
          description: `
          <strong>location</strong>: Rajasthan<br/>
          <strong>Best time to visit</strong>: November-February<br/>
          <strong>Must visit attraction</strong>: Keoladeo Bird Sanctuary<br/>
          <strong>Excursions</strong>: Deeg<br/>`,
        },
        {
          name: "A word about Bharatpur",
          description: `Bharatpur is popular for its bird sanctuary near the Keoladeo Ghana National Park, which is the finest in Asia with a rich avian variety. Every year, the rare Siberian cranes come to spend the winter in the warmer climate of Bharatpur the best place for Birdwatching in India. Of the remnants of the royal past remain the marvelous Bharatpur Palace housing a rich repository of a large number of ancient exhibits that date back to the early 15th century.`,
        },
        {
          name: "Bharatpur Bird Sanctuary",
          description: `I was aware of the fact the best time to watch birds in early morning so I hired an accommodation near the sanctuary. Early morning I started for the sanctuary on a rented bicycle. The actual sanctuary started 2 kms inside the gate. Once inside the main sanctuary, I could view countless birds including Indian More Hen, Snake bird, Saras crane, Grey Haron, Sleeping Heron, Weaver bird, Falcon, Owl and the all famous Siberian Cranes. I took a lot of photos of the birds and the landscape, which was also very attractive. The Siberian Cranes were deep in the mashes and were not visible clearly. So I headed towards the Python Point and was lucky to view atleast 20 pythons together. By the time I returned back, it beginning to dark and I returned back to my hotel room with enchanting memories of birds.`,
        },
        {
          name: "Lohagarh Fort in Bharatpur",
          description: `Next morning I wanted to visit the Bharatpur bird sanctuary again but time didn't permit me and I headed directly towards the Lohagarh Fort. As soon as I reached there a small kid came to me and offered his services as a guide. I accepted the offer and came to know that it was built in early 18 century and due to its impregnable defense, it sustained British attacks. I explored all the three palaces within its precincts - Kishori Mahal, Mahal Khas and Kothi Khas that left me speechless with their exquisite architecture.`,
        },
        {
          name: "The Palace of Bharatpur",
          description: `My next destination was the palace and it surprised me with its grand look. The architecture exhibited a unique fusion of Mughal and Rajput architectural styles with magnificent apartments and intricately designed floor tiles having interesting patterns.`,
        },
        {
          name: "Government Museum of Bharatpur",
          description: `A museum located in the central pan was a delight to explore. The whole museum was divided into various sections including archaeology, arts, crafts and industry, children gallery and miscellaneous. I was particularly impressed by the collection of paintings, manuscripts, zoological specimens and specimens of miniature paintings on leaves of the peepal tree, mica and old lithopapers.`,
        },
      ],
    },
    {
      name: "Chittaurgarh",
      image: "/images/package24.jpg",
      Overview: [
        {
          name: "Chittaurgarh Tour Package",
          description: `A fabulous place with countless places to see and admire! Here the palaces, forts and other ancient monuments provided me a glimpse of what must have been Rajpitana's greatest citadel. Chittaurgarh was such a wonderful experience that I would cherish for the rest of my life.`,
        },
        {
          name: "Factfile",
          description: `
          <strong>location</strong>: Rajasthan<br/>
          <strong>Best Time to visit</strong>: November-February<br/>
          <strong>Must Visit Attraction</strong>: The Fort <br/>
          <strong>Excursions</strong>: Nagari, Bassi Wildlife Sanctuary, Matri Kundia Temple<br/>
          `,
        },
        {
          name: "A word about Chittaurgarh",
          description: `Chittaurgarh exhibits the pride and glory of Rajasthan in the form of its various forts and monuments. It is a ruined citadel where the royal past lives in the imposing forts, graceful palaces and spectacular chhatris. The entire city echoes with the tales of romance and valor unique to the Rajput tradition.`,
        },
        {
          name: "The Chittaurgarh Fort",
          description: `The trip to this fascinating city began with a visit to the Chittorgarh Fort, which was perched on a height of 180m high hill. I approached the fort on the back of an elephant, which was an exhilarating experience. The main gates to enter into the fort were Padal Pol, Bhairon Pol, Hanuman Pol and Ram Pol. Inside the Chittaurgarh Fort there were exquisitely carved chhatris and tablets that reminded me the Rajput heroism.`,
        },
        {
          name: "Vijay Stambh, Chittaurgarh",
          description: `While driving towards the next destination I came across the magnificent Vijay Stambh. Though I had no plans to visit this but it was such a glorious monument that I decided to pay a short visit. The imposing 37 meter high structure was covered with exquisite sculpture of Hindu deities and depicting episodes from the two great epics- Ramayana and Mahabharata.`,
        },
        {
          name: "Rana Kumbha's Palace",
          description: `Driving through the colorful street of the city, I reached at Rana Kumbha Palace where Rani Padmini and other women committed Jauhar. It was the most massive monument in the fort of Chittaur.`,
        },
      ],
    },
  ],
};

export const ADVENTURE = {
  images: [
    {
      image:getIndexedImage(15),
      content: `Make your trip worthwhile`,
    },
    {
      image:getIndexedImage(16),
      content: `Top Adventure`,
    },
    {
      image: getIndexedImage(17),
      content: `Discover new Places`,
    },
  ],
  data: [
    {
      image: "/images/adventure1.jpg",
      name: "Hot Air Ballooning Ride",
      desc: `Flying of in the air, tethered by a hot air balloon is one of the best adventures to try, truly an experience of a lifetime. When it comes to exploring the beautiful landscape of Rajasthan, a hot air balloon ride is one of the best options. Not just adventurous it’s truly romantic. Soar above the vibrant Pushkar Festival and treat yourself to out-of-the-world views. Jaipur offers sunrise and sunset hot air balloon rides.`,
    },
    {
      image: "/images/adventure7.jpg",
      name: "Camping",
      desc: `Camping in Rajasthan is amazing. Imagine the fun you could have spending the night a tented accommodation under the sky full of stars. Relive your Arabian tale as you try camping in the desert state. Sam sand dunes in Jaisalmer, Pushkar, Bikaner, Samode, and Osian are the most popular of camping areas in the desert state. Desert camps in Rajasthan are set amidst the fascinating sand dunes and under the starlit skies, are something you must try once in life. Offering comfy beddings, luxury amenities and the finest Rajasthani cuisines, these accommodations are an extraordinary experience. Even better is, that there is live entertainment for guests. Folk performers croon their haunting melodies which skilled dances and acrobats show off their talents.`,
    },
    {
      image: "/images/camping4.jpg",
      name: "Desert and Camel Safari",
      desc: `The Thar Desert is the untitled crown of Rajasthan, therefore the most popular adventure in the area is desert safari. Camels, the ship of the desert are the only beasts who can navigate and survive the tough desert conditions. Camel safaris are exciting at you get to sit atop the loving beast and navigate the golden sand dunes. The desert safari tours range from few hours to a couple of weeks. Enjoy the ocean of sand dunes and through rural villages and revealing the spectacular sunset sights. Desert safaris in Rajasthan are popular in the sand dunes of Jaisalmer, Osian, Jodhpur, Bikaner and Pushkar.`,
    },
    {
      image: "/images/adventure4.jpg",
      name: "Wildlife Safari",
      desc: `Apart from safaris to the desert, the desert state offers exhilarating wildlife in India. It has lush pockets of green which are inhabited by wildlife of all kinds. From birds of all kinds, wild ass to roaring Tigers, a plethora of species from the animal world inhabit the wildlife sanctuaries. Formerly the hunting grounds of royalty, these parks are now thriving with wilderness and the excitement to explore it all. Bharatpur National Park in the marshlands of Rajasthan is an UNESCO World Heritage Site, a haven of migratory birds. Ranthambore National Park, Wild Ass Sanctuary, Nahargarh Forests, Jhalana Leopard Reserve, Sariska National Park, etc. are some of the most popular names for the adventure sport in Rajasthan. Enjoy wildlife safari with this package.`,
    },
    {
      image: "/images/adventure5.jpg",
      name: "Paragliding",
      desc: `Flying like a bird is a dream for many and this dream can be fulfilled with paragliding. It can be enjoyed by almost anyone but with a trained expertise. Paragliding in Rajasthan is getting popular among more and more adventure enthusiasts. There are organizers offering the sport in Jaipur, Jodhpur, Jaisalmer and Pushkar. You can fly over the hills of Mount Abu, colorful cities, majestic forts and the golden Thar Desert.`,
    },
    {
      image: "/images/adventure6.jpg",
      name: "Watersports",
      desc: `Rajasthan and water sports do not go hand in hand but you will be surprised to know that Rajasthan does have water activities for you to enjoy. Several cities in Rajasthan have a fair share of water in the form of lakes where you can indulge in boating, gliding, and rafting. It will offer you a great time on your next adventure tour to Rajasthan. Water-sports places in Rajasthan: Ramgarh Lake near Jaipur, Fateh Sagar Lake in Udaipur, rafting in the Gomati River, Siliserh Lake in Alwar.`,
    },
    {
      image: "/images/adventure2.jpg",
      name: "Trekking",
      desc: `Trekking is one of the secret yet quite exciting adventure activities in Rajasthan. The Aravalis in the state offer quite amazing trails. Also, most of the forts are set atop hills, which makes trekking to the indomitable forts all the more exhilarating. On the hill forts trekking trails you can combine adventure with history and incredible sightseeing. Walk through lush green environs, getting to the very top of the fabulous vantage points. Enjoy the view of spots of green, beautiful lakes, etc. In Mount Abu you can trek to the stunning Dilwara Jain temples.`,
    },
    {
      image: "/images/adventure10.jpg",
      name: "Water Sports",
      desc: `There is no dearth of water bodies or lakes in the state of Rajasthan. At present, the activities near lakes are increasing with a drastic number. You can actively participate in these adventurous sports in Rajasthan if you so wish. You can try parasailing or boating on the lakes. Some trainers can guide in this process. The visitors are also provided with life-saving jackets so that they can be prevented from certain risks. However, it is better to know swimming before trying the various types of water sports in Rajasthan. Earlier there were no such options for water sports. But over time, there have been wide options for water sports. The options are a few, but you will certainly enjoy them.`,
    },
    {
      image: "/images/adventure8.jpg",
      name: "Zip Lining",
      desc: `It is another one of the adventure sports to do in Rajasthan that is not for the faint hearted. If you want to explore any place from a certain height, then it will e a wise choice to choose zip line. With the help of a zip line, you can fly high over the outer battlements of Jodhpur. It will be an amazing experience to view the whole place from a great height. You will enjoy every moment and time with this sport adventure. Zip Line is a great way to refresh your body and soul and satisfy your adrenaline rush. You will always relish this beautiful moment in your whole life. Some trainers or instructors can assist you properly in this game.`,
    },
    {
      image: "/images/adventure9.jpg",
      name: "Jeep Safari",
      desc: `A jeep safari is one of the most noted adventure sports in Rajasthan that must be tried by everyone. A simple round in a jeep along the desert will give you a fabulous experience. It is mandatory for the visitors because it will take you to some unexplored destinations. You can also use jeep safari for sightseeing. Most of the people opt for a jeep safari to view the villages of Rajasthan that are hard to explore by any other means. Sometimes, they are also used for exploring the historical monuments of Rajasthan. Jeep safari, dunes, and village jeep safari are quite famous in Rajasthan. Most of such safaris are organized by various hotels and resorts. If you want, you can contact them for such trips.`,
    },
  ],
};

export const CAMPING = {
  images: [
    {
      image: "/images/camping1.jpg",
      content: ` Make your trip worthwhile`,
    },
    {
      image: "/images/adventure7.jpg",
      content: `Top Adventure`,
    },
    {
      image: "/images/camping3.jpg",
      content: `Discover new Places`,
    },
  ],
  data: [
    {
      image: "/images/adventure7.jpg",
      name: "Luxury overnight safari",
      desc: `While desert safaris are a great way to get off the beaten path, they can be uncomfortable and leave travelers less than well-rested. This overnight desert safari solves that problem by offering sleeping quarters in luxury tents. Head out deep into the desert, enjoy a “Rajasthani welcome,” camel rides, a Jeep safari, and dinner—and have a full night’s rest in a real bed.`,
    },
    {
      image: "/images/camping4.jpg",
      name: "Two-Night Camel Safari and Desert Camping",
      desc: `Experience true desert life with our two-night camel safari! Perfect for adventurous explorers, allowing you to explore hidden gems among the desert dunes and immerse yourself in desert life. With more time, you will have the chance to really delve into the secrets of the Thar Desert - perhaps meeting local communities or catching glimpses of native wildlife, and witnessing incredible sunsets and sunrises. With jeep back up, delicious food and safe drinking water, our safaris are the perfect way to explore the desert in comfort and style, with clean, comfortable bedding to sleep in at the end of each day. We are a family owned camel safari and desert camping tour operator based in Jaisalmer and the Thar desert, passionate about providing the best possible experience for our customers. We treat our camel friends like members of the family and put animal welfare and customer experience at the heart of our business.`,
    },
    {
      image: "/images/camel1.jpg",
      name: "Overnight Camel Safari at Non-Touristic Route",
      desc: `Enjoy the peace and quiet of the Thar Desert without the crowds of other tourists when you join an overnight camel safari on less-visited routes. You’ll be picked up in Jaisalmer in the mid-afternoon and driven out to the desert. Take a scenic sunset camel ride over the dunes before gathering around the camp bonfire to eat a freshly cooked dinner and relaxing for the night.`,
    },
    {
      image: "/images/guide1.jpg",
      name: "Jaipur Trekking and Hiking Tour with Guide",
      desc: `Get off the beaten track and explore the valleys and forests surrounding Jaipur during this guided sunrise trekking excursion. Listen to a lively overview of the region from an English-speaking trekking guide. Spot local flora and fauna and observe shepherds and their herds. Hiking routes are suitable for all levels, including beginners.`,
    },
    {
      image: "/images/adventure7.jpg",
      name: "Overnight Stay in a luxury Camp with a cultural show & dinner",
      desc: `The massive Thar Desert and its “ghost” villages need to be seen to be believed. On this discovery tour, you’ll start your journey at an abandoned 18th-century outpost, hearing wild stories of the past. You’ll move to a modern-day village, meeting locals, exploring the dunes, and enjoying a meal prepared by your desert guide over the campfire. As night falls, watch the stars before adjourning to your luxury tent.`,
    },
    {
      image: "/images/adventure9.jpg",
      name: "Desert Camel & Jeep Safari Private Tour From Jodhpur",
      desc: `This tour takes you far away from the bustling life of Jodhpur city to the tranquility of golden sand dunes where you can enjoy desert safari, sunset view, Rajasthani cooked dinner and Rajasthani Culture Folk Dance. Your tour starts with pickup in Jodhpur at your hotel, or the airport, train station or bus station. Travel by private car to Osian where you have the chance to independently visit the Sachiya Mata Temple. After taking in the temple, head to the starting point for the camel safari. The camel ride is considered a peak experience in Rajasthan. Stay to watch the skies and sands change colors during the sunset hour, then return to your private vehicle for transfer back to Jodhpur.`,
    },
  ],
};

export const RAJASTHANDISTRICTS = [
  "Ajmer",
  "Alwar",
  "Anupgarh",
  "Balotra",
  "Baran",
  "Barmer",
  "Beawar",
  "Bharatpur",
  "Bhilwara",
  "Bhiwadi",
  "Bikaner",
  "Bundi",
  "Chittorgarh",
  "Churu",
  "Dausa",
  "Dholpur",
  "Didwana-Kuchaman",
  "Dungarpur",
  "Ganganagar",
  "Gangapur City",
  "Hanumangarh",
  "Jaipur",
  "Jaisalmer",
  "Jalore",
  "Jhalawar",
  "Jhunjhunu",
  "Jodhpur",
  "Karauli",
  "Kekri",
  "Kota",
  "Kotputli-Behror",
  "Nagaur",
  "Neem Ka Thana",
  "Pali",
  "Phalodi",
  "Pratapgarh",
  "Rajsamand",
  "Salumbar",
  "Sanchore",
  "Sawai Madhopur",
  "Sikar",
  "Sirohi",
  "Sri Ganganagar",
  "Sri Karanpur",
  "Tonk",
  "Udaipur",
];

/*==========================================
        MAZE QUEST
        EASY MODE STORIES
==========================================*/

const easyStories = [

/*=========================
        LEVEL 1
=========================*/

{
    level:1,

    title:"🌲 The Lost Forest",

    description:
    "A magical forest hides an ancient gate. Only brave explorers can enter the mysterious maze.",

    guide:
    "Welcome Explorer! Every maze begins with a single step.",

    question:
    "I have keys but no locks. I have space but no rooms. What am I?",

    options:[
        "Keyboard",
        "House",
        "Car",
        "Forest"
    ],

    answer:"Keyboard",

    reward:{
        coins:20,
        xp:10,
        item:"Hint Scroll"
    }

},

/*=========================
        LEVEL 2
=========================*/

{
    level:2,

    title:"💎 Crystal Lake",

    description:
    "A glowing lake blocks your journey. Solve the puzzle to reveal the hidden bridge.",

    guide:
    "The lake reflects truth, not lies.",

    question:
    "What has a face but no eyes?",

    options:[
        "Clock",
        "Tree",
        "Mirror",
        "Book"
    ],

    answer:"Clock",

    reward:{
        coins:25,
        xp:15,
        item:"Magic Compass"
    }

},

/*=========================
        LEVEL 3
=========================*/

{
    level:3,

    title:"🌳 Whispering Trees",

    description:
    "Ancient trees whisper clues to those who listen carefully.",

    guide:
    "Nature always speaks the truth.",

    question:
    "What gets wetter as it dries?",

    options:[
        "Towel",
        "Water",
        "Soap",
        "Rain"
    ],

    answer:"Towel",

    reward:{
        coins:30,
        xp:20,
        item:"Wooden Key"
    }

},

/*=========================
        LEVEL 4
=========================*/

{
    level:4,

    title:"🏡 Hidden Village",

    description:
    "A forgotten village appears only at sunrise.",

    guide:
    "The old villagers love clever minds.",

    question:
    "Which month has 28 days?",

    options:[
        "February",
        "January",
        "All Months",
        "December"
    ],

    answer:"All Months",

    reward:{
        coins:35,
        xp:25,
        item:"Village Map"
    }

},

/*=========================
        LEVEL 5 (REWARD)
=========================*/

{
    level:5,

    title:"🏛 Forest Temple",

    description:
    "The first temple protects a hidden treasure chest.",

    guide:
    "Only wise explorers receive the blessing.",

    question:
    "The more you take, the more you leave behind. What are they?",

    options:[
        "Coins",
        "Footsteps",
        "Books",
        "Trees"
    ],

    answer:"Footsteps",

    reward:{
        coins:100,
        xp:50,
        item:"🎁 Treasure Chest"
    }

},

/*=========================
        LEVEL 6
=========================*/

{
    level:6,

    title:"🌸 Flower Valley",

    description:
    "The magical flowers bloom only for kind travelers.",

    guide:
    "Beauty hides great secrets.",

    question:
    "What has one eye but cannot see?",

    options:[
        "Needle",
        "Fish",
        "Cyclops",
        "Camera"
    ],

    answer:"Needle",

    reward:{
        coins:40,
        xp:30,
        item:"Healing Flower"
    }

},

/*=========================
        LEVEL 7
=========================*/

{
    level:7,

    title:"🌫 Fog Mountain",

    description:
    "Dense fog hides the correct path.",

    guide:
    "Trust logic, not your eyes.",

    question:
    "What can travel around the world while staying in one corner?",

    options:[
        "Stamp",
        "Bird",
        "Plane",
        "Moon"
    ],

    answer:"Stamp",

    reward:{
        coins:45,
        xp:35,
        item:"Fog Lantern"
    }

},

/*=========================
        LEVEL 8
=========================*/

{
    level:8,

    title:"🌊 Magic River",

    description:
    "The enchanted river changes direction every hour.",

    guide:
    "Everything flows, even time.",

    question:
    "What comes once in a minute, twice in a moment, but never in a thousand years?",

    options:[
        "Letter M",
        "Wind",
        "Shadow",
        "Time"
    ],

    answer:"Letter M",

    reward:{
        coins:50,
        xp:40,
        item:"River Crystal"
    }

},

/*=========================
        LEVEL 9
=========================*/

{
    level:9,

    title:"🌙 Moon Garden",

    description:
    "Moon flowers bloom only at midnight.",

    guide:
    "Patience is your greatest weapon.",

    question:
    "What has many teeth but cannot bite?",

    options:[
        "Comb",
        "Dog",
        "Tiger",
        "Lion"
    ],

    answer:"Comb",

    reward:{
        coins:55,
        xp:45,
        item:"Moon Flower"
    }

},

/*=========================
        LEVEL 10 (BOSS)
=========================*/

{
    level:10,

    title:"👑 Forest King",

    description:
    "The Forest King challenges every explorer before opening the next world.",

    guide:
    "This is your first Boss Battle!",

    question:
    "What belongs to you but other people use it more than you do?",

    options:[
        "Name",
        "House",
        "Money",
        "Phone"
    ],

    answer:"Name",

    reward:{
        coins:250,
        xp:150,
        item:"👑 Forest Crown"
    }

},

/*=========================
        LEVEL 11
=========================*/

{
    level:11,

    title:"🌿 Jungle Entrance",

    description:"A mysterious jungle welcomes brave explorers. Strange sounds echo everywhere.",

    guide:"Every journey begins with courage.",

    question:"What has many keys but can't open a single lock?",

    options:[
        "Piano",
        "Door",
        "Treasure",
        "Computer"
    ],

    answer:"Piano",

    reward:{
        coins:60,
        xp:50,
        item:"Explorer Hat"
    }

},

/*=========================
        LEVEL 12
=========================*/

{
    level:12,

    title:"🐒 Monkey Bridge",

    description:"Playful monkeys guard an old wooden bridge.",

    guide:"Think before crossing.",

    question:"What goes up but never comes down?",

    options:[
        "Age",
        "Ball",
        "Rocket",
        "Bird"
    ],

    answer:"Age",

    reward:{
        coins:65,
        xp:55,
        item:"Banana Charm"
    }

},

/*=========================
        LEVEL 13
=========================*/

{
    level:13,

    title:"🌳 Giant Banyan",

    description:"An ancient tree hides a secret passage beneath its roots.",

    guide:"Wisdom grows like trees.",

    question:"What has hands but cannot hold anything?",

    options:[
        "Clock",
        "Robot",
        "Statue",
        "Tree"
    ],

    answer:"Clock",

    reward:{
        coins:70,
        xp:60,
        item:"Tree Key"
    }

},

/*=========================
        LEVEL 14
=========================*/

{
    level:14,

    title:"🦜 Parrot Valley",

    description:"Talking parrots repeat clues to the hidden maze.",

    guide:"Listen carefully.",

    question:"What can fill a room but takes no space?",

    options:[
        "Light",
        "Water",
        "Air",
        "Smoke"
    ],

    answer:"Light",

    reward:{
        coins:75,
        xp:65,
        item:"Golden Feather"
    }

},

/*=========================
        LEVEL 15
=========================*/

{
    level:15,

    title:"🏛 Jungle Temple",

    description:"The forgotten temple protects an ancient treasure.",

    guide:"The strongest treasure is knowledge.",

    question:"The more you remove from me, the bigger I become. What am I?",

    options:[
        "Hole",
        "Rock",
        "River",
        "Tree"
    ],

    answer:"Hole",

    reward:{
        coins:150,
        xp:80,
        item:"🎁 Jungle Treasure"
    }

},

/*=========================
        LEVEL 16
=========================*/

{
    level:16,

    title:"🌊 Hidden Waterfall",

    description:"Behind the waterfall lies another mysterious path.",

    guide:"Sometimes the answer is hidden behind beauty.",

    question:"What runs but never walks?",

    options:[
        "River",
        "Dog",
        "Horse",
        "Cloud"
    ],

    answer:"River",

    reward:{
        coins:80,
        xp:70,
        item:"Water Crystal"
    }

},

/*=========================
        LEVEL 17
=========================*/

{
    level:17,

    title:"🦂 Poison Swamp",

    description:"One wrong step can trap you forever.",

    guide:"Choose wisely.",

    question:"What has a neck but no head?",

    options:[
        "Bottle",
        "Snake",
        "Tree",
        "Giraffe"
    ],

    answer:"Bottle",

    reward:{
        coins:85,
        xp:75,
        item:"Poison Shield"
    }

},

/*=========================
        LEVEL 18
=========================*/

{
    level:18,

    title:"🌙 Night Camp",

    description:"Camp under the stars before continuing your adventure.",

    guide:"Even heroes need rest.",

    question:"What has an eye but cannot see?",

    options:[
        "Needle",
        "Fish",
        "Camera",
        "Cyclops"
    ],

    answer:"Needle",

    reward:{
        coins:90,
        xp:80,
        item:"Camping Kit"
    }

},

/*=========================
        LEVEL 19
=========================*/

{
    level:19,

    title:"🗿 Ancient Ruins",

    description:"Broken statues point toward the forgotten maze.",

    guide:"History always leaves clues.",

    question:"What can you catch but never throw?",

    options:[
        "Cold",
        "Stone",
        "Ball",
        "Fish"
    ],

    answer:"Cold",

    reward:{
        coins:95,
        xp:90,
        item:"Ancient Coin"
    }

},

/*=========================
        LEVEL 20
=========================*/

{
    level:20,

    title:"👹 Jungle Guardian",

    description:"The mighty Jungle Guardian blocks your way to the next world.",

    guide:"Defeat the guardian using your intelligence.",

    question:"What belongs to you but others use it more than you?",

    options:[
        "Name",
        "Phone",
        "Money",
        "House"
    ],

    answer:"Name",

    reward:{
        coins:300,
        xp:200,
        item:"👑 Guardian Badge"
    }

},
/*=========================
        LEVEL 21
=========================*/

{
    level:21,

    title:"❄ Ice Kingdom Gate",

    description:"After defeating the Jungle Guardian, you arrive at the frozen gates of the Ice Kingdom.",

    guide:"Every frozen path hides a secret.",

    question:"What can you hold without touching it?",

    options:[
        "Conversation",
        "Stone",
        "Ice",
        "Book"
    ],

    answer:"Conversation",

    reward:{
        coins:110,
        xp:90,
        item:"Ice Key"
    }

},

/*=========================
        LEVEL 22
=========================*/

{
    level:22,

    title:"🧊 Frozen Lake",

    description:"A magical frozen lake blocks your journey.",

    guide:"Thin ice can be dangerous.",

    question:"What has legs but cannot walk?",

    options:[
        "Table",
        "Dog",
        "Human",
        "Chair"
    ],

    answer:"Table",

    reward:{
        coins:115,
        xp:95,
        item:"Snow Boots"
    }

},

/*=========================
        LEVEL 23
=========================*/

{
    level:23,

    title:"🏔 Ice Cave",

    description:"The cave sparkles with glowing blue crystals.",

    guide:"Look beyond appearances.",

    question:"What has many words but never speaks?",

    options:[
        "Book",
        "Teacher",
        "Phone",
        "Radio"
    ],

    answer:"Book",

    reward:{
        coins:120,
        xp:100,
        item:"Crystal Shard"
    }

},

/*=========================
        LEVEL 24
=========================*/

{
    level:24,

    title:"🐧 Penguin Village",

    description:"Friendly penguins ask you to solve their ancient puzzle.",

    guide:"Helping others opens new paths.",

    question:"What is always coming but never arrives?",

    options:[
        "Tomorrow",
        "Train",
        "Winter",
        "Rain"
    ],

    answer:"Tomorrow",

    reward:{
        coins:125,
        xp:105,
        item:"Penguin Badge"
    }

},

/*=========================
        LEVEL 25 (REWARD)
=========================*/

{
    level:25,

    title:"🎁 Frozen Treasure",

    description:"Hidden beneath the snow is a legendary treasure chest.",

    guide:"Only clever explorers deserve great rewards.",

    question:"What has a thumb and four fingers but isn't alive?",

    options:[
        "Glove",
        "Hand",
        "Robot",
        "Monkey"
    ],

    answer:"Glove",

    reward:{
        coins:300,
        xp:180,
        item:"🎁 Frozen Treasure Chest"
    }

},

/*=========================
        LEVEL 26
=========================*/

{
    level:26,

    title:"🐺 Snow Wolf",

    description:"A giant snow wolf blocks the frozen trail. It will only let wise explorers pass.",

    guide:"Courage alone isn't enough. Use your mind.",

    question:"What has an eye but cannot see?",

    options:[
        "Needle",
        "Cyclops",
        "Fish",
        "Camera"
    ],

    answer:"Needle",

    reward:{
        coins:135,
        xp:110,
        item:"Wolf Fang"
    }

},

/*=========================
        LEVEL 27
=========================*/

{
    level:27,

    title:"🌨 Blizzard Pass",

    description:"A powerful snowstorm hides every path. Find the correct answer before moving ahead.",

    guide:"Even the strongest storm eventually passes.",

    question:"What can fill an entire room without taking any space?",

    options:[
        "Light",
        "Water",
        "Air",
        "Smoke"
    ],

    answer:"Light",

    reward:{
        coins:140,
        xp:120,
        item:"Blizzard Lantern"
    }

},

/*=========================
        LEVEL 28
=========================*/

{
    level:28,

    title:"🏰 Ice Fortress",

    description:"The frozen fortress protects the Ice King's royal treasure.",

    guide:"Every wall has a hidden secret.",

    question:"What comes down but never goes up?",

    options:[
        "Rain",
        "Ball",
        "Bird",
        "Leaf"
    ],

    answer:"Rain",

    reward:{
        coins:145,
        xp:130,
        item:"Frozen Shield"
    }

},

/*=========================
        LEVEL 29
=========================*/

{
    level:29,

    title:"💎 Crystal Palace",

    description:"Thousands of glowing crystals light the palace. One puzzle remains before the throne.",

    guide:"Look carefully. The smallest clue matters.",

    question:"What breaks when you say its name?",

    options:[
        "Silence",
        "Glass",
        "Ice",
        "Stone"
    ],

    answer:"Silence",

    reward:{
        coins:150,
        xp:140,
        item:"Crystal Crown"
    }

},

/*=========================
        LEVEL 30
=========================*/

{
    level:30,

    title:"👑 Ice King",

    description:"The mighty Ice King challenges you. Defeat him to unlock the next world.",

    guide:"Only true Maze Masters can defeat a king.",

    question:"I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",

    options:[
        "Echo",
        "Cloud",
        "Shadow",
        "Snow"
    ],

    answer:"Echo",

    reward:{
        coins:500,
        xp:300,
        item:"👑 Ice King's Crown"
    }

},
/*=========================
        LEVEL 31
=========================*/

{
    level:31,

    title:"🏜 Desert Entrance",

    description:"The Ice King's crown reveals a secret portal leading to the Desert Temple.",

    guide:"Not every path in the desert is real.",

    question:"What has cities but no houses, forests but no trees, and rivers but no water?",

    options:[
        "Map",
        "Globe",
        "Book",
        "Computer"
    ],

    answer:"Map",

    reward:{
        coins:160,
        xp:150,
        item:"Desert Compass"
    }

},

/*=========================
        LEVEL 32
=========================*/

{
    level:32,

    title:"🌪 Sand Storm",

    description:"A massive sandstorm hides the maze entrance.",

    guide:"Stay calm even when you can't see.",

    question:"What has one head, one foot and four legs?",

    options:[
        "Bed",
        "Chair",
        "Table",
        "Robot"
    ],

    answer:"Bed",

    reward:{
        coins:165,
        xp:155,
        item:"Sand Cloak"
    }

},

/*=========================
        LEVEL 33
=========================*/

{
    level:33,

    title:"🦂 Scorpion Valley",

    description:"Poisonous scorpions guard the ancient pathway.",

    guide:"Patience is stronger than fear.",

    question:"What begins with T, ends with T and has T inside?",

    options:[
        "Teapot",
        "Tent",
        "Ticket",
        "Tablet"
    ],

    answer:"Teapot",

    reward:{
        coins:170,
        xp:160,
        item:"Scorpion Shield"
    }

},

/*=========================
        LEVEL 34
=========================*/

{
    level:34,

    title:"🏺 Ancient Pyramid",

    description:"The pyramid walls are covered with mysterious symbols.",

    guide:"Every symbol tells a story.",

    question:"What can you break without touching it?",

    options:[
        "Promise",
        "Glass",
        "Stone",
        "Wood"
    ],

    answer:"Promise",

    reward:{
        coins:175,
        xp:165,
        item:"Golden Scarab"
    }

},

/*=========================
        LEVEL 35 (REWARD)
=========================*/

{
    level:35,

    title:"💰 Hidden Treasure Chamber",

    description:"A hidden chamber full of gold lies beneath the pyramid.",

    guide:"Greed clouds judgment.",

    question:"What has many rings but no fingers?",

    options:[
        "Telephone",
        "Tree",
        "Planet",
        "Clock"
    ],

    answer:"Telephone",

    reward:{
        coins:400,
        xp:220,
        item:"🎁 Pharaoh Treasure"
    }

},

/*=========================
        LEVEL 36
=========================*/

{
    level:36,

    title:"🐫 Camel Caravan",

    description:"A caravan offers help if you solve their ancient riddle.",

    guide:"Knowledge is the best currency.",

    question:"What comes before thunder?",

    options:[
        "Lightning",
        "Rain",
        "Cloud",
        "Wind"
    ],

    answer:"Lightning",

    reward:{
        coins:180,
        xp:170,
        item:"Traveler's Water Bottle"
    }

},

/*=========================
        LEVEL 37
=========================*/

{
    level:37,

    title:"🌵 Cactus Garden",

    description:"The cactus maze hides a forgotten temple key.",

    guide:"Sometimes the safest path isn't the shortest.",

    question:"What has an endless supply of letters but starts empty?",

    options:[
        "Mailbox",
        "Book",
        "Dictionary",
        "School"
    ],

    answer:"Mailbox",

    reward:{
        coins:185,
        xp:175,
        item:"Temple Key"
    }

},

/*=========================
        LEVEL 38
=========================*/

{
    level:38,

    title:"👻 Mirage Desert",

    description:"Mirages confuse every explorer. Find the truth to continue.",

    guide:"Don't trust everything you see.",

    question:"What is full of holes but still holds water?",

    options:[
        "Sponge",
        "Bottle",
        "Bucket",
        "Cup"
    ],

    answer:"Sponge",

    reward:{
        coins:190,
        xp:180,
        item:"Mirage Crystal"
    }

},

/*=========================
        LEVEL 39
=========================*/

{
    level:39,

    title:"⚱ Pharaoh's Hall",

    description:"The final hall before meeting the mighty Pharaoh.",

    guide:"Only true explorers reach this far.",

    question:"What can run but never walks?",

    options:[
        "River",
        "Horse",
        "Dog",
        "Wind"
    ],

    answer:"River",

    reward:{
        coins:200,
        xp:190,
        item:"Royal Ankh"
    }

},

/*=========================
        LEVEL 40 (BOSS)
=========================*/

{
    level:40,

    title:"👑 Pharaoh Boss",

    description:"The ancient Pharaoh awakens to test your wisdom one last time.",

    guide:"Defeat the Pharaoh to unlock the next world.",

    question:"The more you have of me, the less you see. What am I?",

    options:[
        "Darkness",
        "Light",
        "Fog",
        "Sand"
    ],

    answer:"Darkness",

    reward:{
        coins:700,
        xp:400,
        item:"👑 Pharaoh's Crown"
    }

},
/*=========================
        LEVEL 41
=========================*/

{
    level:41,

    title:"🌋 Volcano Entrance",

    description:"The Pharaoh's Crown unlocks a hidden portal to the Volcano Island. The ground shakes beneath your feet.",

    guide:"Stay calm. Every eruption follows a pattern.",

    question:"What has a head, a tail, but no body?",

    options:[
        "Coin",
        "Snake",
        "Dragon",
        "Lizard"
    ],

    answer:"Coin",

    reward:{
        coins:210,
        xp:200,
        item:"Heat Shield"
    }

},

/*=========================
        LEVEL 42
=========================*/

{
    level:42,

    title:"🔥 Lava River",

    description:"A river of lava blocks your path. Find the correct answer to activate the stone bridge.",

    guide:"Every obstacle has a solution.",

    question:"What can be broken but never held?",

    options:[
        "Promise",
        "Glass",
        "Stick",
        "Rock"
    ],

    answer:"Promise",

    reward:{
        coins:220,
        xp:210,
        item:"Fire Boots"
    }

},

/*=========================
        LEVEL 43
=========================*/

{
    level:43,

    title:"🪨 Burning Caves",

    description:"Inside the volcano, glowing caves hide ancient treasures.",

    guide:"The brightest path isn't always the safest.",

    question:"What gets bigger the more you take away?",

    options:[
        "Hole",
        "Mountain",
        "River",
        "Fire"
    ],

    answer:"Hole",

    reward:{
        coins:230,
        xp:220,
        item:"Magma Crystal"
    }

},

/*=========================
        LEVEL 44
=========================*/

{
    level:44,

    title:"🌉 Broken Bridge",

    description:"A damaged bridge hangs over molten lava.",

    guide:"Cross carefully and think wisely.",

    question:"What has four wheels and flies?",

    options:[
        "Garbage Truck",
        "Car",
        "Bus",
        "Bike"
    ],

    answer:"Garbage Truck",

    reward:{
        coins:240,
        xp:230,
        item:"Bridge Token"
    }

},

/*=========================
        LEVEL 45 (REWARD)
=========================*/

{
    level:45,

    title:"💎 Magma Treasure",

    description:"Hidden inside the volcano is a glowing treasure chamber.",

    guide:"Great rewards await brave explorers.",

    question:"What has many eyes but cannot see?",

    options:[
        "Potato",
        "Spider",
        "Fish",
        "Crow"
    ],

    answer:"Potato",

    reward:{
        coins:500,
        xp:300,
        item:"🎁 Magma Treasure Chest"
    }

},

/*=========================
        LEVEL 46
=========================*/

{
    level:46,

    title:"🔥 Fire Maze",

    description:"Walls of fire keep changing every few seconds.",

    guide:"Observe before you move.",

    question:"What begins with E but contains only one letter?",

    options:[
        "Envelope",
        "Earth",
        "Engine",
        "Elephant"
    ],

    answer:"Envelope",

    reward:{
        coins:250,
        xp:240,
        item:"Fire Map"
    }

},

/*=========================
        LEVEL 47
=========================*/

{
    level:47,

    title:"🐉 Dragon Nest",

    description:"A young dragon protects the entrance to the Volcano King's palace.",

    guide:"Respect every guardian.",

    question:"What has many needles but doesn't sew?",

    options:[
        "Pine Tree",
        "Tailor",
        "Clock",
        "Machine"
    ],

    answer:"Pine Tree",

    reward:{
        coins:260,
        xp:250,
        item:"Dragon Scale"
    }

},

/*=========================
        LEVEL 48
=========================*/

{
    level:48,

    title:"⚒ Lava Forge",

    description:"An ancient forge creates magical weapons from molten rock.",

    guide:"Strength comes from patience.",

    question:"What has a bark but no bite?",

    options:[
        "Tree",
        "Dog",
        "Wolf",
        "Fox"
    ],

    answer:"Tree",

    reward:{
        coins:270,
        xp:260,
        item:"Molten Hammer"
    }

},

/*=========================
        LEVEL 49
=========================*/

{
    level:49,

    title:"👹 Volcano Throne",

    description:"The throne room is guarded by fiery spirits.",

    guide:"One final challenge before the boss.",

    question:"What can you hear but never touch?",

    options:[
        "Sound",
        "Stone",
        "Smoke",
        "Cloud"
    ],

    answer:"Sound",

    reward:{
        coins:280,
        xp:270,
        item:"Flame Orb"
    }

},

/*=========================
        LEVEL 50 (BOSS)
=========================*/

{
    level:50,

    title:"👑 Volcano Lord",

    description:"The mighty Volcano Lord emerges from the lava. Defeat him to unlock the Sky Kingdom.",

    guide:"This is your toughest battle yet.",

    question:"I am always hungry. The more you feed me, the bigger I become. What am I?",

    options:[
        "Fire",
        "Dragon",
        "Lion",
        "Volcano"
    ],

    answer:"Fire",

    reward:{
        coins:1000,
        xp:500,
        item:"👑 Volcano Crown"
    }

},
/*=========================
        LEVEL 51
=========================*/

{
    level:51,

    title:"☁ Sky Kingdom Gate",

    description:"The Volcano Crown opens a magical portal to the floating Sky Kingdom.",

    guide:"Only those who believe can walk on clouds.",

    question:"What has wings but cannot fly?",

    options:[
        "Penguin",
        "Airplane",
        "Bird",
        "Butterfly"
    ],

    answer:"Penguin",

    reward:{
        coins:300,
        xp:280,
        item:"Cloud Boots"
    }

},

/*=========================
        LEVEL 52
=========================*/

{
    level:52,

    title:"🌈 Rainbow Bridge",

    description:"A glowing rainbow bridge connects two floating islands.",

    guide:"Beauty often hides the safest path.",

    question:"What has many branches but no leaves?",

    options:[
        "Bank",
        "Tree",
        "River",
        "Road"
    ],

    answer:"Bank",

    reward:{
        coins:310,
        xp:290,
        item:"Rainbow Crystal"
    }

},

/*=========================
        LEVEL 53
=========================*/

{
    level:53,

    title:"🦅 Eagle Peak",

    description:"The giant eagles challenge everyone entering the kingdom.",

    guide:"Look from above before making a decision.",

    question:"What has one voice but becomes four when shared?",

    options:[
        "Secret",
        "Song",
        "Echo",
        "Story"
    ],

    answer:"Secret",

    reward:{
        coins:320,
        xp:300,
        item:"Golden Feather"
    }

},

/*=========================
        LEVEL 54
=========================*/

{
    level:54,

    title:"⚡ Thunder Clouds",

    description:"Lightning flashes across the sky, revealing hidden paths.",

    guide:"Every flash is a clue.",

    question:"What can you see once in a year, twice in a week and never in a day?",

    options:[
        "Letter E",
        "Moon",
        "Sun",
        "Cloud"
    ],

    answer:"Letter E",

    reward:{
        coins:330,
        xp:310,
        item:"Lightning Orb"
    }

},

/*=========================
        LEVEL 55 (REWARD)
=========================*/

{
    level:55,

    title:"🎁 Sky Treasure",

    description:"Hidden above the clouds is a legendary treasure chest.",

    guide:"The sky rewards brave explorers.",

    question:"What has a heart that never beats?",

    options:[
        "Artichoke",
        "Robot",
        "Stone",
        "Tree"
    ],

    answer:"Artichoke",

    reward:{
        coins:700,
        xp:400,
        item:"🎁 Sky Treasure Chest"
    }

},

/*=========================
        LEVEL 56
=========================*/

{
    level:56,

    title:"☁ Cloud Maze",

    description:"The clouds constantly change shape, confusing every traveler.",

    guide:"The shortest path isn't always the easiest.",

    question:"What has a neck but no head?",

    options:[
        "Bottle",
        "Snake",
        "Tree",
        "Shirt"
    ],

    answer:"Bottle",

    reward:{
        coins:340,
        xp:320,
        item:"Cloud Compass"
    }

},

/*=========================
        LEVEL 57
=========================*/

{
    level:57,

    title:"🏰 Floating Castle",

    description:"A magnificent castle floats high above the world.",

    guide:"The royal guards value wisdom.",

    question:"What can be cracked, made, told and played?",

    options:[
        "Joke",
        "Stone",
        "Glass",
        "Wood"
    ],

    answer:"Joke",

    reward:{
        coins:350,
        xp:330,
        item:"Castle Key"
    }

},

/*=========================
        LEVEL 58
=========================*/

{
    level:58,

    title:"🕊 Angel Garden",

    description:"A peaceful garden where magical birds sing ancient songs.",

    guide:"Silence often reveals the answer.",

    question:"What is so fragile that saying its name breaks it?",

    options:[
        "Silence",
        "Glass",
        "Paper",
        "Ice"
    ],

    answer:"Silence",

    reward:{
        coins:360,
        xp:340,
        item:"Angel Feather"
    }

},

/*=========================
        LEVEL 59
=========================*/

{
    level:59,

    title:"👼 Sky Palace",

    description:"The palace doors open only for true Maze Masters.",

    guide:"One final test remains.",

    question:"What can be seen but never touched?",

    options:[
        "Rainbow",
        "Stone",
        "Book",
        "Chair"
    ],

    answer:"Rainbow",

    reward:{
        coins:380,
        xp:360,
        item:"Sky Gem"
    }

},

/*=========================
        LEVEL 60 (BOSS)
=========================*/

{
    level:60,

    title:"👑 Sky King",

    description:"The ruler of the Sky Kingdom challenges you before opening the Ocean World.",

    guide:"Only true heroes reach this height.",

    question:"The more you remove from me, the larger I become. What am I?",

    options:[
        "Hole",
        "Mountain",
        "River",
        "Cloud"
    ],

    answer:"Hole",

    reward:{
        coins:1200,
        xp:700,
        item:"👑 Sky King's Crown"
    }

},
/*=========================
        LEVEL 61
=========================*/

{
    level:61,

    title:"🌊 Ocean Gate",

    description:"The Sky King's Crown reveals a portal beneath the sea.",

    guide:"The ocean hides more secrets than the land.",

    question:"What can travel around the world while staying in one corner?",

    options:[
        "Stamp",
        "Ship",
        "Fish",
        "Bird"
    ],

    answer:"Stamp",

    reward:{
        coins:400,
        xp:380,
        item:"Ocean Compass"
    }

},

/*=========================
        LEVEL 62
=========================*/

{
    level:62,

    title:"🐠 Coral Reef",

    description:"Beautiful coral reefs hide the correct maze path.",

    guide:"Beauty can hide danger.",

    question:"What has a face and two hands but no arms or legs?",

    options:[
        "Clock",
        "Robot",
        "Person",
        "Statue"
    ],

    answer:"Clock",

    reward:{
        coins:420,
        xp:390,
        item:"Coral Necklace"
    }

},

/*=========================
        LEVEL 63
=========================*/

{
    level:63,

    title:"🦀 Crab Cave",

    description:"Giant crabs guard the underwater cave.",

    guide:"Observe every movement.",

    question:"What has many teeth but cannot bite?",

    options:[
        "Comb",
        "Lion",
        "Shark",
        "Dog"
    ],

    answer:"Comb",

    reward:{
        coins:440,
        xp:400,
        item:"Crab Shell"
    }

},

/*=========================
        LEVEL 64
=========================*/

{
    level:64,

    title:"🐬 Dolphin Bay",

    description:"Friendly dolphins offer clues to the hidden treasure.",

    guide:"Kindness opens hidden doors.",

    question:"What comes once in a minute, twice in a moment and never in a thousand years?",

    options:[
        "Letter M",
        "Moon",
        "Water",
        "Fish"
    ],

    answer:"Letter M",

    reward:{
        coins:460,
        xp:420,
        item:"Dolphin Whistle"
    }

},

/*=========================
        LEVEL 65 (REWARD)
=========================*/

{
    level:65,

    title:"💎 Sunken Treasure",

    description:"A legendary pirate chest lies beneath the sea.",

    guide:"The greatest treasures are earned.",

    question:"What belongs to you but everyone else uses it more?",

    options:[
        "Name",
        "Money",
        "House",
        "Bag"
    ],

    answer:"Name",

    reward:{
        coins:900,
        xp:500,
        item:"💎 Ocean Treasure"
    }

},

/*=========================
        LEVEL 66
=========================*/

{
    level:66,

    title:"🦈 Shark Zone",

    description:"Hungry sharks patrol the deepest waters.",

    guide:"Never panic underwater.",

    question:"What has one eye but cannot see?",

    options:[
        "Needle",
        "Fish",
        "Pirate",
        "Storm"
    ],

    answer:"Needle",

    reward:{
        coins:480,
        xp:440,
        item:"Shark Tooth"
    }

},

/*=========================
        LEVEL 67
=========================*/

{
    level:67,

    title:"🐙 Octopus Labyrinth",

    description:"The giant octopus creates a living maze.",

    guide:"Follow the correct tentacle.",

    question:"What gets wetter while drying?",

    options:[
        "Towel",
        "Water",
        "Boat",
        "Fish"
    ],

    answer:"Towel",

    reward:{
        coins:500,
        xp:460,
        item:"Octopus Ink"
    }

},

/*=========================
        LEVEL 68
=========================*/

{
    level:68,

    title:"🚢 Pirate Ship",

    description:"An abandoned pirate ship floats silently in the sea.",

    guide:"Old legends always leave clues.",

    question:"What has lots of money but no wallet?",

    options:[
        "Bank",
        "King",
        "Shop",
        "Pirate"
    ],

    answer:"Bank",

    reward:{
        coins:520,
        xp:480,
        item:"Pirate Key"
    }

},

/*=========================
        LEVEL 69
=========================*/

{
    level:69,

    title:"🏰 Atlantis Palace",

    description:"The lost city of Atlantis appears before you.",

    guide:"Only worthy explorers may enter.",

    question:"What is always in front of you but cannot be seen?",

    options:[
        "Future",
        "Shadow",
        "Mirror",
        "Ocean"
    ],

    answer:"Future",

    reward:{
        coins:550,
        xp:500,
        item:"Atlantis Crystal"
    }

},

/*=========================
        LEVEL 70 (BOSS)
=========================*/

{
    level:70,

    title:"👑 Sea King",

    description:"The mighty Sea King rises from the ocean depths to challenge you.",

    guide:"Defeat the Sea King to unlock the Space World.",

    question:"I have keys but no locks, space but no rooms, and you can enter but not go inside. What am I?",

    options:[
        "Keyboard",
        "Treasure Box",
        "Map",
        "Phone"
    ],

    answer:"Keyboard",

    reward:{
        coins:1500,
        xp:900,
        item:"👑 Sea King's Trident"
    }

},
/*=========================
        LEVEL 71
=========================*/

{
    level:71,

    title:"🚀 Space Portal",

    description:"The Sea King's Trident opens a portal to the mysterious Space Galaxy.",

    guide:"Every star lights the way to a new adventure.",

    question:"What has no beginning, end, or middle?",

    options:[
        "Circle",
        "Line",
        "Triangle",
        "Square"
    ],

    answer:"Circle",

    reward:{
        coins:600,
        xp:550,
        item:"Space Helmet"
    }

},

/*=========================
        LEVEL 72
=========================*/

{
    level:72,

    title:"🪐 Planet Orbit",

    description:"Floating planets create a rotating maze in space.",

    guide:"Timing is everything.",

    question:"What comes once in a year, twice in a week, and never in a day?",

    options:[
        "Letter E",
        "Moon",
        "Planet",
        "Star"
    ],

    answer:"Letter E",

    reward:{
        coins:620,
        xp:570,
        item:"Planet Map"
    }

},

/*=========================
        LEVEL 73
=========================*/

{
    level:73,

    title:"☄ Asteroid Belt",

    description:"Dangerous asteroids move across your path.",

    guide:"Stay alert and avoid collisions.",

    question:"What has hands but cannot clap?",

    options:[
        "Clock",
        "Robot",
        "Statue",
        "Alien"
    ],

    answer:"Clock",

    reward:{
        coins:650,
        xp:590,
        item:"Asteroid Shield"
    }

},

/*=========================
        LEVEL 74
=========================*/

{
    level:74,

    title:"👽 Alien Camp",

    description:"Friendly aliens challenge your intelligence before helping you.",

    guide:"Knowledge is understood in every language.",

    question:"What has many keys but can't open a single lock?",

    options:[
        "Piano",
        "Door",
        "Keyboard",
        "Treasure"
    ],

    answer:"Piano",

    reward:{
        coins:670,
        xp:610,
        item:"Alien Translator"
    }

},

/*=========================
        LEVEL 75 (REWARD)
=========================*/

{
    level:75,

    title:"🎁 Cosmic Treasure",

    description:"A glowing treasure chest floats freely through space.",

    guide:"The universe rewards brave explorers.",

    question:"What can fill a room but takes up no space?",

    options:[
        "Light",
        "Water",
        "Smoke",
        "Air"
    ],

    answer:"Light",

    reward:{
        coins:1200,
        xp:700,
        item:"🎁 Cosmic Treasure Chest"
    }

},

/*=========================
        LEVEL 76
=========================*/

{
    level:76,

    title:"🤖 Robot Factory",

    description:"Ancient robots guard the entrance to the Galaxy Core.",

    guide:"Machines respect logic.",

    question:"What has a neck but no head?",

    options:[
        "Bottle",
        "Tree",
        "Snake",
        "Robot"
    ],

    answer:"Bottle",

    reward:{
        coins:700,
        xp:630,
        item:"Robot Chip"
    }

},

/*=========================
        LEVEL 77
=========================*/

{
    level:77,

    title:"🌌 Milky Way",

    description:"Stars form a glowing maze across the galaxy.",

    guide:"Every star tells a story.",

    question:"What gets sharper the more you use it?",

    options:[
        "Brain",
        "Knife",
        "Pencil",
        "Sword"
    ],

    answer:"Brain",

    reward:{
        coins:730,
        xp:660,
        item:"Galaxy Map"
    }

},

/*=========================
        LEVEL 78
=========================*/

{
    level:78,

    title:"🛰 Space Station",

    description:"A forgotten space station still contains advanced technology.",

    guide:"Search every room carefully.",

    question:"What has an eye but cannot see?",

    options:[
        "Needle",
        "Cyclops",
        "Camera",
        "Fish"
    ],

    answer:"Needle",

    reward:{
        coins:760,
        xp:690,
        item:"Space Core"
    }

},

/*=========================
        LEVEL 79
=========================*/

{
    level:79,

    title:"⭐ Galaxy Throne",

    description:"The final chamber shines brighter than a thousand stars.",

    guide:"One final puzzle remains.",

    question:"What belongs to you but others use it more?",

    options:[
        "Name",
        "Phone",
        "Money",
        "House"
    ],

    answer:"Name",

    reward:{
        coins:800,
        xp:720,
        item:"Galaxy Crystal"
    }

},

/*=========================
        LEVEL 80 (BOSS)
=========================*/

{
    level:80,

    title:"👑 Galaxy Emperor",

    description:"The supreme ruler of the galaxy challenges you. Victory unlocks the Time Dimension.",

    guide:"Only the greatest Maze Masters reach the stars.",

    question:"I speak without a mouth and hear without ears. What am I?",

    options:[
        "Echo",
        "Wind",
        "Shadow",
        "Light"
    ],

    answer:"Echo",

    reward:{
        coins:2000,
        xp:1200,
        item:"👑 Galaxy Crown"
    }

},
/*=========================
        LEVEL 81
=========================*/

{
    level:81,

    title:"⏳ Time Portal",

    description:"The Galaxy Crown activates a mysterious portal that bends time itself.",

    guide:"Time never stops, but you can learn from it.",

    question:"What flies forever but never rests?",

    options:[
        "Time",
        "Bird",
        "Plane",
        "Wind"
    ],

    answer:"Time",

    reward:{
        coins:850,
        xp:750,
        item:"Time Compass"
    }

},

/*=========================
        LEVEL 82
=========================*/

{
    level:82,

    title:"🦖 Dinosaur Valley",

    description:"You've traveled millions of years into the past where dinosaurs roam freely.",

    guide:"Sometimes the oldest path is the safest.",

    question:"What has many teeth but cannot chew?",

    options:[
        "Comb",
        "Lion",
        "Shark",
        "Tiger"
    ],

    answer:"Comb",

    reward:{
        coins:900,
        xp:780,
        item:"Dino Fossil"
    }

},

/*=========================
        LEVEL 83
=========================*/

{
    level:83,

    title:"🏰 Ancient Kingdom",

    description:"An ancient civilization protects the next Time Crystal.",

    guide:"History always leaves clues.",

    question:"What has one eye but cannot see?",

    options:[
        "Needle",
        "Cyclops",
        "Fish",
        "Robot"
    ],

    answer:"Needle",

    reward:{
        coins:950,
        xp:820,
        item:"Ancient Scroll"
    }

},

/*=========================
        LEVEL 84
=========================*/

{
    level:84,

    title:"🤖 Future City",

    description:"A futuristic city filled with advanced AI challenges your intelligence.",

    guide:"Technology helps those who think.",

    question:"What has keys but no locks?",

    options:[
        "Keyboard",
        "House",
        "Treasure",
        "Door"
    ],

    answer:"Keyboard",

    reward:{
        coins:1000,
        xp:850,
        item:"AI Chip"
    }

},

/*=========================
        LEVEL 85 (REWARD)
=========================*/

{
    level:85,

    title:"🎁 Time Treasure",

    description:"A magical treasure appears only once every thousand years.",

    guide:"Rare rewards are worth waiting for.",

    question:"What gets wetter while drying?",

    options:[
        "Towel",
        "Water",
        "Cloud",
        "Boat"
    ],

    answer:"Towel",

    reward:{
        coins:1800,
        xp:1000,
        item:"🎁 Time Crystal Chest"
    }

},

/*=========================
        LEVEL 86
=========================*/

{
    level:86,

    title:"⌛ Hourglass Cave",

    description:"A giant magical hourglass controls the flow of time.",

    guide:"Every second matters.",

    question:"What can run but never walks?",

    options:[
        "River",
        "Dog",
        "Horse",
        "Tiger"
    ],

    answer:"River",

    reward:{
        coins:1050,
        xp:900,
        item:"Golden Hourglass"
    }

},

/*=========================
        LEVEL 87
=========================*/

{
    level:87,

    title:"⚡ Time Storm",

    description:"A storm mixes the past, present and future together.",

    guide:"Stay focused despite the chaos.",

    question:"What has hands but cannot clap?",

    options:[
        "Clock",
        "Robot",
        "Human",
        "Statue"
    ],

    answer:"Clock",

    reward:{
        coins:1100,
        xp:950,
        item:"Storm Orb"
    }

},

/*=========================
        LEVEL 88
=========================*/

{
    level:88,

    title:"🌀 Time Labyrinth",

    description:"The maze changes every few seconds as time shifts.",

    guide:"Think before every step.",

    question:"What has a face but no eyes?",

    options:[
        "Clock",
        "Moon",
        "Mask",
        "Mirror"
    ],

    answer:"Clock",

    reward:{
        coins:1150,
        xp:1000,
        item:"Time Key"
    }

},

/*=========================
        LEVEL 89
=========================*/

{
    level:89,

    title:"👁 Hall of Destiny",

    description:"The final chamber before meeting the Guardian of Time.",

    guide:"Your destiny depends on one final answer.",

    question:"What is always ahead but never arrives?",

    options:[
        "Tomorrow",
        "Yesterday",
        "Today",
        "Night"
    ],

    answer:"Tomorrow",

    reward:{
        coins:1200,
        xp:1100,
        item:"Destiny Crystal"
    }

},

/*=========================
        LEVEL 90 (BOSS)
=========================*/

{
    level:90,

    title:"👑 Time Guardian",

    description:"The Time Guardian controls the flow of all worlds. Defeat him to unlock the Final Kingdom.",

    guide:"Only true Maze Masters can master time itself.",

    question:"The more you take away from me, the bigger I become. What am I?",

    options:[
        "Hole",
        "Mountain",
        "River",
        "Clock"
    ],

    answer:"Hole",

    reward:{
        coins:2500,
        xp:1500,
        item:"👑 Time Guardian Crown"
    }

},
 /*=========================
        LEVEL 91
=========================*/

{
    level:91,

    title:"🏰 Royal Gate",

    description:"The Time Guardian opens the gates of the legendary Final Kingdom.",

    guide:"Only the greatest explorers enter this kingdom.",

    question:"What has many rooms but no doors?",

    options:[
        "Mushroom",
        "Castle",
        "Hotel",
        "School"
    ],

    answer:"Mushroom",

    reward:{
        coins:1300,
        xp:1200,
        item:"Royal Key"
    }

},

/*=========================
        LEVEL 92
=========================*/

{
    level:92,

    title:"⚔ Knight's Arena",

    description:"Royal knights challenge your wisdom before allowing you to pass.",

    guide:"A true hero wins with intelligence.",

    question:"What has a neck but no head?",

    options:[
        "Bottle",
        "Tree",
        "Snake",
        "Shirt"
    ],

    answer:"Bottle",

    reward:{
        coins:1350,
        xp:1250,
        item:"Knight Shield"
    }

},

/*=========================
        LEVEL 93
=========================*/

{
    level:93,

    title:"🧙 Wizard Tower",

    description:"The Royal Wizard guards an ancient magical spell.",

    guide:"Magic follows knowledge.",

    question:"What can fill a room but takes no space?",

    options:[
        "Light",
        "Smoke",
        "Water",
        "Air"
    ],

    answer:"Light",

    reward:{
        coins:1400,
        xp:1300,
        item:"Magic Wand"
    }

},

/*=========================
        LEVEL 94
=========================*/

{
    level:94,

    title:"🐉 Dragon Cave",

    description:"A giant dragon sleeps inside the royal cave.",

    guide:"Never wake the dragon without a plan.",

    question:"What can you catch but never throw?",

    options:[
        "Cold",
        "Ball",
        "Fish",
        "Stone"
    ],

    answer:"Cold",

    reward:{
        coins:1450,
        xp:1350,
        item:"Dragon Scale"
    }

},

/*=========================
        LEVEL 95
=========================*/

{
    level:95,

    title:"💎 Legendary Treasure",

    description:"The legendary treasure chest contains priceless magical artifacts.",

    guide:"The greatest treasure is wisdom.",

    question:"What has an eye but cannot see?",

    options:[
        "Needle",
        "Fish",
        "Cyclops",
        "Camera"
    ],

    answer:"Needle",

    reward:{
        coins:2500,
        xp:1600,
        item:"💎 Legendary Treasure"
    }

},

/*=========================
        LEVEL 96
=========================*/

{
    level:96,

    title:"🌉 Crystal Bridge",

    description:"A glowing crystal bridge leads toward the royal palace.",

    guide:"Every step brings you closer to victory.",

    question:"What has four wheels and flies?",

    options:[
        "Garbage Truck",
        "Car",
        "Bus",
        "Bike"
    ],

    answer:"Garbage Truck",

    reward:{
        coins:1500,
        xp:1400,
        item:"Crystal Bridge Pass"
    }

},

/*=========================
        LEVEL 97
=========================*/

{
    level:97,

    title:"🏛 Hall of Heroes",

    description:"Statues of previous Maze Masters watch your journey.",

    guide:"Become the next legend.",

    question:"What belongs to you but others use more?",

    options:[
        "Name",
        "Phone",
        "Money",
        "House"
    ],

    answer:"Name",

    reward:{
        coins:1550,
        xp:1450,
        item:"Hero Medal"
    }

},

/*=========================
        LEVEL 98
=========================*/

{
    level:98,

    title:"🗝 Final Maze",

    description:"The most difficult maze in the kingdom tests every skill you've learned.",

    guide:"Stay calm and trust yourself.",

    question:"What breaks when you say its name?",

    options:[
        "Silence",
        "Glass",
        "Stone",
        "Ice"
    ],

    answer:"Silence",

    reward:{
        coins:1600,
        xp:1500,
        item:"Final Key"
    }

},

/*=========================
        LEVEL 99
=========================*/

{
    level:99,

    title:"👑 Throne Room",

    description:"The throne room stands before the ultimate battle.",

    guide:"One final answer before destiny.",

    question:"What is always coming but never arrives?",

    options:[
        "Tomorrow",
        "Yesterday",
        "Night",
        "Morning"
    ],

    answer:"Tomorrow",

    reward:{
        coins:1800,
        xp:1700,
        item:"Royal Crown Jewel"
    }

},

/*=========================
        LEVEL 100
=========================*/

{
    level:100,

    title:"🏆 MAZE MASTER",

    description:"Congratulations! You defeated every world and became the Ultimate Maze Master!",

    guide:"Your adventure ends... but legends never die.",

    question:"What is the most powerful tool a Maze Master has?",

    options:[
        "Intelligence",
        "Sword",
        "Magic",
        "Luck"
    ],

    answer:"Intelligence",

    reward:{
        coins:5000,
        xp:5000,
        gems:500,
        energy:10,
        badge:"🏆 Maze Master",
        item:"👑 Maze Master Trophy"
    }

}








];

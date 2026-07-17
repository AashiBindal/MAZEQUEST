/*==========================================
        MAZE QUEST
        MEDIUM MODE STORIES
        LEVELS 101–110
==========================================*/

const mediumStories = [

/*==========================================
            LEVEL 101
==========================================*/

{
    level:101,

    title:"🏠 Student's Journey Begins",

    description:
    "Today is the first day of school. Aman must travel safely from his home to the school before the morning bell rings.",

    guide:
    "Reach the school safely. Follow the road and avoid getting lost.",

    question:
    "What is the safest place to cross a road?",

    options:[
        "Zebra Crossing",
        "Middle of the Road",
        "Anywhere",
        "Footpath"
    ],

    answer:"Zebra Crossing",

    reward:{
        coins:220,
        xp:110,
        gems:2
    },

    maze:{
        theme:"School Journey",

        player:"👦",

        start:"🏠",

        end:"🏫",

        objects:[
            {
                type:"road"
            }
        ]
    }

},

/*==========================================
            LEVEL 102
==========================================*/

{
    level:102,

    title:"🔑 Find the School Key",

    description:
    "The school gate is locked. Aman must first collect the school key hidden inside the colony.",

    guide:
    "Without the key, the gate won't open.",

    question:
    "Which object opens a locked gate?",

    options:[
        "Key",
        "Stone",
        "Book",
        "Water"
    ],

    answer:"Key",

    reward:{
        coins:240,
        xp:120,
        gems:2
    },

    maze:{
        theme:"Locked School",

        player:"👦",

        start:"🏠",

        end:"🏫",

        objects:[

            {
                type:"key",
                row:4,
                col:3
            },

            {
                type:"gate",
                row:8,
                col:8
            }

        ]
    }

},
/*==========================================
            LEVEL 103
==========================================*/

{
    level:103,

    title:"🚗 Busy Traffic Road",

    description:
    "Aman has reached the city's busiest road. Cars are moving very fast. Cross the road carefully and reach the school safely.",

    guide:
    "Watch the moving traffic. Cross only when the road is safe.",

    question:
    "What does a RED traffic signal mean?",

    options:[
        "Stop",
        "Go",
        "Run",
        "Turn Around"
    ],

    answer:"Stop",

    reward:{
        coins:260,
        xp:130,
        gems:3
    },

    maze:{
        theme:"Traffic Road",

        player:"👦",

        start:"🏠",

        end:"🏫",

        objects:[

            {
                type:"movingCar",
                row:3,
                startCol:0,
                endCol:9,
                speed:1
            },

            {
                type:"movingCar",
                row:6,
                startCol:9,
                endCol:0,
                speed:2
            }

        ]
    }

},

/*==========================================
            LEVEL 104
==========================================*/

{
    level:104,

    title:"🚦 Traffic Signal Challenge",

    description:
    "The traffic signal changes every few seconds. Aman must wait for the green signal before crossing.",

    guide:
    "Red means STOP. Green means GO.",

    question:
    "Which signal allows you to cross the road?",

    options:[
        "Green",
        "Red",
        "Yellow",
        "Blue"
    ],

    answer:"Green",

    reward:{
        coins:280,
        xp:140,
        gems:3
    },

    maze:{
        theme:"Traffic Signal",

        player:"👦",

        start:"🏠",

        end:"🏫",

        objects:[

            {
                type:"trafficSignal",
                row:5,
                col:5,
                interval:5
            }

        ]
    }

},

/*==========================================
            LEVEL 105
==========================================*/

{
    level:105,

    title:"🚌 Catch the School Bus",

    description:
    "The school bus is waiting for only a few seconds. Aman must reach the bus stop before it leaves.",

    guide:
    "Reach the bus stop quickly and board the school bus.",

    question:
    "Which vehicle usually takes children to school?",

    options:[
        "School Bus",
        "Train",
        "Boat",
        "Helicopter"
    ],

    answer:"School Bus",

    reward:{
        coins:350,
        xp:180,
        gems:5,
        energy:1,
        badge:"Early Bird"
    },

    maze:{
        theme:"School Bus",

        player:"👦",

        start:"🏠",

        end:"🏫",

        objects:[

            {
                type:"bus",
                row:8,
                col:4
            },

            {
                type:"coin",
                row:2,
                col:6,
                value:50
            },

            {
                type:"heart",
                row:4,
                col:7
            }

        ]
    }

},
/*==========================================
            LEVEL 106
==========================================*/

{
    level:106,

    title:"👮 The Helpful Police Officer",

    description:
    "Aman is confused at a busy intersection. A police officer is helping children cross safely.",

    guide:
    "Follow the police officer's directions and stay safe.",

    question:
    "Who helps control traffic on roads?",

    options:[
        "Police Officer",
        "Doctor",
        "Chef",
        "Pilot"
    ],

    answer:"Police Officer",

    reward:{
        coins:320,
        xp:160,
        gems:4
    },

    maze:{
        theme:"Traffic Control",

        player:"👦",

        start:"🏠",

        end:"🏫",

        objects:[

            {
                type:"police",
                row:5,
                col:5
            },

            {
                type:"coin",
                row:3,
                col:7,
                value:75
            }

        ]
    }

},

/*==========================================
            LEVEL 107
==========================================*/

{
    level:107,

    title:"🌧 Rainy School Morning",

    description:
    "Heavy rain has flooded some roads. Aman must find a safe route to school.",

    guide:
    "Avoid waterlogged paths and slippery areas.",

    question:
    "What should you carry during heavy rain?",

    options:[
        "Umbrella",
        "Football",
        "TV",
        "Pillow"
    ],

    answer:"Umbrella",

    reward:{
        coins:340,
        xp:170,
        gems:4
    },

    maze:{
        theme:"Rain Challenge",

        player:"👦",

        start:"🏠",

        end:"🏫",

        objects:[

            {
                type:"umbrella",
                row:2,
                col:4
            },

            {
                type:"water",
                row:6,
                col:6
            },

            {
                type:"water",
                row:6,
                col:7
            }

        ]
    }

},

/*==========================================
            LEVEL 108
==========================================*/

{
    level:108,

    title:"🐶 The Stray Dog",

    description:
    "A playful stray dog is running around the streets. Aman must avoid getting distracted and reach school.",

    guide:
    "Stay focused on your journey.",

    question:
    "What is the safest thing to do near an unknown dog?",

    options:[
        "Stay Calm",
        "Tease It",
        "Throw Stones",
        "Run Towards It"
    ],

    answer:"Stay Calm",

    reward:{
        coins:360,
        xp:180,
        gems:5
    },

    maze:{
        theme:"Dog Chase",

        player:"👦",

        start:"🏠",

        end:"🏫",

        objects:[

            {
                type:"dog",
                row:4,
                col:5,
                movement:"random"
            },

            {
                type:"heart",
                row:7,
                col:2
            }

        ]
    }

},

/*==========================================
            LEVEL 109
==========================================*/

{
    level:109,

    title:"🌉 The Broken Bridge",

    description:
    "The usual bridge to school is broken. Aman must find the bridge key to activate a temporary crossing.",

    guide:
    "Find the key and unlock the bridge.",

    question:
    "What helps people cross a river?",

    options:[
        "Bridge",
        "Chair",
        "Window",
        "Clock"
    ],

    answer:"Bridge",

    reward:{
        coins:380,
        xp:190,
        gems:5
    },

    maze:{
        theme:"Broken Bridge",

        player:"👦",

        start:"🏠",

        end:"🏫",

        objects:[

            {
                type:"key",
                row:3,
                col:3
            },

            {
                type:"bridgeGate",
                row:6,
                col:6
            },

            {
                type:"coin",
                row:8,
                col:2,
                value:100
            }

        ]
    }

},

/*==========================================
            LEVEL 110
==========================================*/

{
    level:110,

    title:"🏫 Final School Entrance",

    description:
    "Aman has finally reached the school campus. The principal has locked the main gate with two security keys.",

    guide:
    "Collect both keys and unlock the final gate.",

    question:
    "Why is education important?",

    options:[
        "To Gain Knowledge",
        "To Waste Time",
        "To Avoid Learning",
        "To Stay Home"
    ],

    answer:"To Gain Knowledge",

    reward:{
        coins:600,
        xp:300,
        gems:10,
        badge:"School Hero"
    },

    maze:{
        theme:"Final School Entrance",

        player:"👦",

        start:"🏠",

        end:"🏫",

        objects:[

            {
                type:"key",
                row:2,
                col:2
            },

            {
                type:"key",
                row:8,
                col:8
            },

            {
                type:"finalGate",
                row:5,
                col:5
            },

            {
                type:"principal",
                row:9,
                col:4
            }

        ]
    }

},
/*==========================================
            LEVEL 111
==========================================*/

{
    level:111,

    title:"🌳 Enter the Jungle",

    description:
    "Explorer Aryan has entered the mysterious Emerald Jungle in search of the legendary Ancient Temple. Thick trees surround every path.",

    guide:
    "Find the correct path through the forest without getting lost.",

    question:
    "Which plant is the biggest in a forest?",

    options:[
        "Tree",
        "Flower",
        "Grass",
        "Bush"
    ],

    answer:"Tree",

    reward:{
        coins:400,
        xp:200,
        gems:5
    },

    maze:{
        theme:"Emerald Jungle",

        player:"🧒",

        start:"⛺",

        end:"🌲",

        objects:[

            {
                type:"tree",
                row:3,
                col:3
            },

            {
                type:"tree",
                row:4,
                col:6
            },

            {
                type:"tree",
                row:7,
                col:2
            }

        ]
    }

},

/*==========================================
            LEVEL 112
==========================================*/

{
    level:112,

    title:"🌿 Hidden Forest Path",

    description:
    "Dense bushes hide the real jungle trail. Aryan must discover the secret route leading deeper into the forest.",

    guide:
    "Look carefully. Not every path is visible.",

    question:
    "What helps explorers find directions in a forest?",

    options:[
        "Compass",
        "Television",
        "Fan",
        "Mirror"
    ],

    answer:"Compass",

    reward:{
        coins:410,
        xp:205,
        gems:5
    },

    maze:{
        theme:"Hidden Trail",

        player:"🧒",

        start:"🌲",

        end:"🏕",

        objects:[

            {
                type:"bush",
                row:2,
                col:5
            },

            {
                type:"bush",
                row:5,
                col:2
            },

            {
                type:"bush",
                row:7,
                col:7
            },

            {
                type:"compass",
                row:4,
                col:4
            }

        ]
    }

},

/*==========================================
            LEVEL 113
==========================================*/

{
    level:113,

    title:"🦁 The Jungle King",

    description:
    "A hungry lion is patrolling the jungle. Aryan must avoid the moving lion while continuing his adventure.",

    guide:
    "Stay away from the lion's path and move carefully.",

    question:
    "Which animal is called the King of the Jungle?",

    options:[
        "Lion",
        "Tiger",
        "Elephant",
        "Monkey"
    ],

    answer:"Lion",

    reward:{
        coins:430,
        xp:215,
        gems:5
    },

    maze:{
        theme:"Lion Territory",

        player:"🧒",

        start:"🌲",

        end:"🌉",

        objects:[

            {
                type:"lion",
                row:5,
                col:3,
                movement:"horizontal",
                speed:2
            },

            {
                type:"tree",
                row:2,
                col:6
            },

            {
                type:"coin",
                row:8,
                col:5,
                value:100
            }

        ]
    }

},

/*==========================================
            LEVEL 114
==========================================*/

{
    level:114,

    title:"🌉 The Broken Bridge",

    description:
    "A raging river blocks Aryan's path. The old wooden bridge is broken. Find another way to cross safely.",

    guide:
    "Be careful! Falling into the river will cost you a life.",

    question:
    "What helps people cross a river safely?",

    options:[
        "Bridge",
        "Tree",
        "Tent",
        "Rock"
    ],

    answer:"Bridge",

    reward:{
        coins:420,
        xp:210,
        gems:5
    },

    maze:{
        theme:"Broken Bridge",

        player:"🧒",

        start:"🌲",

        end:"🏞",

        objects:[

            {
                type:"brokenBridge",
                row:5,
                col:5
            },

            {
                type:"river",
                row:5,
                col:4
            },

            {
                type:"river",
                row:5,
                col:6
            }

        ]
    }

},

/*==========================================
            LEVEL 115
==========================================*/

{
    level:115,

    title:"🔑 Temple Key",

    description:
    "The entrance to the Ancient Temple is locked. Find the sacred key hidden deep inside the jungle.",

    guide:
    "Without the Temple Key, the gate will never open.",

    question:
    "Which object is used to unlock a door?",

    options:[
        "Key",
        "Stick",
        "Leaf",
        "Stone"
    ],

    answer:"Key",

    reward:{
        coins:450,
        xp:230,
        gems:6,
        badge:"Key Hunter"
    },

    maze:{
        theme:"Temple Key",

        player:"🧒",

        start:"🌲",

        end:"🏛",

        objects:[

            {
                type:"templeKey",
                row:3,
                col:8
            },

            {
                type:"templeGate",
                row:8,
                col:7
            },

            {
                type:"coin",
                row:4,
                col:4,
                value:100
            }

        ]
    }

},

/*==========================================
            LEVEL 116
==========================================*/

{
    level:116,

    title:"🐍 Snake Trail",

    description:
    "Venomous snakes are crawling through the jungle path. Move carefully and avoid them while searching for the temple.",

    guide:
    "Never step on the snake's path.",

    question:
    "What should you do if you see a snake?",

    options:[
        "Stay Away",
        "Catch It",
        "Throw Stones",
        "Touch It"
    ],

    answer:"Stay Away",

    reward:{
        coins:470,
        xp:240,
        gems:6
    },

    maze:{
        theme:"Snake Trail",

        player:"🧒",

        start:"🌲",

        end:"🏛",

        objects:[

            {
                type:"snake",
                row:5,
                col:4,
                movement:"horizontal"
            },

            {
                type:"snake",
                row:7,
                col:6,
                movement:"vertical"
            },

            {
                type:"heart",
                row:2,
                col:8
            }

        ]
    }

},

/*==========================================
            LEVEL 117
==========================================*/

{
    level:117,

    title:"🐒 Monkey Forest",

    description:
    "A group of mischievous monkeys is jumping from tree to tree. They may steal your Temple Key if you are not careful.",

    guide:
    "Avoid the monkeys and continue your journey safely.",

    question:
    "Which animal loves climbing trees?",

    options:[
        "Monkey",
        "Lion",
        "Elephant",
        "Snake"
    ],

    answer:"Monkey",

    reward:{
        coins:490,
        xp:250,
        gems:6
    },

    maze:{
        theme:"Monkey Forest",

        player:"🧒",

        start:"🌲",

        end:"🏛",

        objects:[

            {
                type:"monkey",
                row:3,
                col:5,
                movement:"random",
                speed:2
            },

            {
                type:"banana",
                row:6,
                col:7
            },

            {
                type:"coin",
                row:2,
                col:8,
                value:120
            }

        ]
    }

},

/*==========================================
            LEVEL 118
==========================================*/

{
    level:118,

    title:"💎 The Sacred Crystal",

    description:
    "Deep inside the jungle lies a glowing Sacred Crystal. Collect it before entering the Ancient Temple.",

    guide:
    "The crystal unlocks the temple's magical power.",

    question:
    "Which object shines brightly like a treasure?",

    options:[
        "Crystal",
        "Stone",
        "Leaf",
        "Wood"
    ],

    answer:"Crystal",

    reward:{
        coins:520,
        xp:260,
        gems:7
    },

    maze:{
        theme:"Crystal Cave",

        player:"🧒",

        start:"🌲",

        end:"🏛",

        objects:[

            {
                type:"crystal",
                row:5,
                col:5
            },

            {
                type:"bat",
                row:4,
                col:6,
                movement:"horizontal"
            },

            {
                type:"coin",
                row:8,
                col:2,
                value:150
            }

        ]
    }

},

/*==========================================
            LEVEL 119
==========================================*/

{
    level:119,

    title:"🚪 Temple Entrance",

    description:
    "The Ancient Temple stands before Aryan, but two magical seals protect the entrance. Collect both sacred keys to unlock it.",

    guide:
    "Both keys are required to open the temple gate.",

    question:
    "How many keys are needed to unlock the temple?",

    options:[
        "Two",
        "One",
        "Three",
        "None"
    ],

    answer:"Two",

    reward:{
        coins:560,
        xp:280,
        gems:8
    },

    maze:{
        theme:"Temple Gate",

        player:"🧒",

        start:"🌲",

        end:"🏛",

        objects:[

            {
                type:"templeKey",
                row:2,
                col:3
            },

            {
                type:"templeKey",
                row:8,
                col:7
            },

            {
                type:"magicGate",
                row:5,
                col:5
            }

        ]
    }

},

/*==========================================
            LEVEL 120
==========================================*/

{
    level:120,

    title:"🏛 The Ancient Temple",

    description:
    "After overcoming every challenge, Aryan finally enters the Ancient Temple and discovers the legendary Jungle Treasure hidden for centuries.",

    guide:
    "Collect the Sacred Treasure to complete the Jungle Adventure.",

    question:
    "What was hidden inside the Ancient Temple?",

    options:[
        "Treasure",
        "Car",
        "Computer",
        "Chair"
    ],

    answer:"Treasure",

    reward:{
        coins:1000,
        xp:500,
        gems:20,
        energy:2,
        badge:"🏆 Jungle Explorer",
        item:"💎 Sacred Jungle Crystal"
    },

    maze:{
        theme:"Ancient Temple",

        player:"🧒",

        start:"🌲",

        end:"🏛",

        boss:"Temple Guardian",

        objects:[

            {
                type:"guardian",
                row:5,
                col:5,
                movement:"circle",
                speed:2
            },

            {
                type:"treasure",
                row:9,
                col:9
            },

            {
                type:"crystal",
                row:7,
                col:6
            }

        ]
    }

},

/*==========================================
            LEVEL 121
==========================================*/

{
    level:121,

    title:"🏴‍☠️ Arrival at Pirate Island",

    description:
    "Explorer Aryan reaches the mysterious Pirate Island. Legends say a priceless treasure is hidden somewhere on the island.",

    guide:
    "Find the safest path through the island.",

    question:
    "Who sails a pirate ship?",

    options:[
        "Pirate",
        "Doctor",
        "Farmer",
        "Teacher"
    ],

    answer:"Pirate",

    reward:{
        coins:550,
        xp:275,
        gems:8
    },

    maze:{
        theme:"Pirate Island",

        player:"🧒",

        start:"🚢",

        end:"🏝",

        objects:[

            {
                type:"palmTree",
                row:3,
                col:4
            },

            {
                type:"palmTree",
                row:6,
                col:7
            },

            {
                type:"anchor",
                row:8,
                col:2
            }

        ]
    }

},

/*==========================================
            LEVEL 122
==========================================*/

{
    level:122,

    title:"🌊 Dangerous Sea Crossing",

    description:
    "Strong sea waves surround the island. Aryan must carefully cross the wooden docks without falling into the ocean.",

    guide:
    "Stay on the wooden path.",

    question:
    "Which vehicle travels on the sea?",

    options:[
        "Ship",
        "Bus",
        "Bike",
        "Train"
    ],

    answer:"Ship",

    reward:{
        coins:570,
        xp:285,
        gems:8
    },

    maze:{
        theme:"Sea Crossing",

        player:"🧒",

        start:"🚢",

        end:"🏝",

        objects:[

            {
                type:"water",
                row:5,
                col:5
            },

            {
                type:"bridge",
                row:5,
                col:6
            },

            {
                type:"coin",
                row:2,
                col:8,
                value:150
            }

        ]
    }

},

/*==========================================
            LEVEL 123
==========================================*/

{
    level:123,

    title:"🦜 The Talking Parrot",

    description:
    "A magical parrot knows the secret path to the treasure cave. Listen carefully to its clues.",

    guide:
    "Follow the parrot's advice.",

    question:
    "Which bird can imitate human speech?",

    options:[
        "Parrot",
        "Crow",
        "Peacock",
        "Sparrow"
    ],

    answer:"Parrot",

    reward:{
        coins:600,
        xp:300,
        gems:9
    },

    maze:{
        theme:"Parrot Forest",

        player:"🧒",

        start:"🏝",

        end:"🦜",

        objects:[

            {
                type:"parrot",
                row:4,
                col:4
            },

            {
                type:"coin",
                row:7,
                col:2,
                value:200
            }

        ]
    }

},

/*==========================================
            LEVEL 124
==========================================*/

{
    level:124,

    title:"💣 Pirate Cannons",

    description:
    "Pirates are protecting the treasure with giant cannons. Avoid the cannonballs and continue your journey.",

    guide:
    "Time your movement carefully.",

    question:
    "What comes out of a cannon?",

    options:[
        "Cannonball",
        "Water",
        "Flower",
        "Book"
    ],

    answer:"Cannonball",

    reward:{
        coins:650,
        xp:320,
        gems:10
    },

    maze:{
        theme:"Cannon Attack",

        player:"🧒",

        start:"🏝",

        end:"🏴‍☠️",

        objects:[

            {
                type:"cannon",
                row:3,
                col:6,
                direction:"horizontal"
            },

            {
                type:"cannon",
                row:7,
                col:3,
                direction:"vertical"
            }

        ]
    }

},

/*==========================================
            LEVEL 125
==========================================*/

{
    level:125,

    title:"🗝 Treasure Key",

    description:
    "The pirate captain has hidden the treasure key somewhere inside the cave. Find it before opening the treasure vault.",

    guide:
    "Collect the key first, then reach the treasure door.",

    question:
    "What is needed to unlock a treasure chest?",

    options:[
        "Key",
        "Stone",
        "Hammer",
        "Leaf"
    ],

    answer:"Key",

    reward:{
        coins:750,
        xp:375,
        gems:12,
        badge:"Pirate Hunter"
    },

    maze:{
        theme:"Treasure Cave",

        player:"🧒",

        start:"🏴‍☠️",

        end:"🚪",

        objects:[

            {
                type:"treasureKey",
                row:2,
                col:7
            },

            {
                type:"treasureDoor",
                row:8,
                col:8
            },

            {
                type:"coin",
                row:5,
                col:3,
                value:250
            }

        ]
    }

},

/*==========================================
            LEVEL 126
==========================================*/

{
    level:126,

    title:"🦀 The Crab Beach",

    description:
    "Aryan reaches a sandy beach where giant crabs are moving in every direction. Cross the beach without getting caught.",

    guide:
    "Watch the crabs carefully before moving.",

    question:
    "Which animal usually walks sideways?",

    options:[
        "Crab",
        "Horse",
        "Tiger",
        "Rabbit"
    ],

    answer:"Crab",

    reward:{
        coins:780,
        xp:390,
        gems:12
    },

    maze:{
        theme:"Crab Beach",

        player:"🧒",

        start:"🏖",

        end:"🌴",

        objects:[

            {
                type:"crab",
                row:4,
                col:3,
                movement:"horizontal",
                speed:2
            },

            {
                type:"crab",
                row:7,
                col:6,
                movement:"vertical",
                speed:1
            }

        ]
    }

},

/*==========================================
            LEVEL 127
==========================================*/

{
    level:127,

    title:"🌪 The Whirlpool",

    description:
    "A giant whirlpool blocks the sea route. Aryan must avoid its powerful pull and reach the other side safely.",

    guide:
    "Never step into the whirlpool.",

    question:
    "What is a whirlpool made of?",

    options:[
        "Water",
        "Sand",
        "Fire",
        "Stone"
    ],

    answer:"Water",

    reward:{
        coins:820,
        xp:410,
        gems:13
    },

    maze:{
        theme:"Whirlpool",

        player:"🧒",

        start:"🏝",

        end:"⚓",

        objects:[

            {
                type:"whirlpool",
                row:5,
                col:5
            },

            {
                type:"bridge",
                row:3,
                col:6
            }

        ]
    }

},

/*==========================================
            LEVEL 128
==========================================*/

{
    level:128,

    title:"⚓ The Pirate Ship",

    description:
    "Aryan has found the legendary pirate ship. Hidden traps and swinging ropes guard the deck.",

    guide:
    "Avoid the traps and search for the captain's cabin.",

    question:
    "Who controls a pirate ship?",

    options:[
        "Captain",
        "Farmer",
        "Doctor",
        "Teacher"
    ],

    answer:"Captain",

    reward:{
        coins:860,
        xp:430,
        gems:14
    },

    maze:{
        theme:"Pirate Ship",

        player:"🧒",

        start:"⚓",

        end:"🚢",

        objects:[

            {
                type:"ropeTrap",
                row:3,
                col:5
            },

            {
                type:"pirate",
                row:6,
                col:4,
                movement:"random"
            },

            {
                type:"coin",
                row:8,
                col:8,
                value:300
            }

        ]
    }

},

/*==========================================
            LEVEL 129
==========================================*/

{
    level:129,

    title:"🏴‍☠️ Pirate Captain",

    description:
    "The fearless Pirate Captain stands before the treasure room. Outsmart him to unlock the final chest.",

    guide:
    "Avoid the captain's patrol route.",

    question:
    "Who is the leader of a pirate crew?",

    options:[
        "Captain",
        "Cook",
        "Sailor",
        "Guard"
    ],

    answer:"Captain",

    reward:{
        coins:950,
        xp:470,
        gems:15
    },

    maze:{
        theme:"Captain's Cabin",

        player:"🧒",

        start:"🚢",

        end:"🏴‍☠️",

        objects:[

            {
                type:"pirateCaptain",
                row:5,
                col:5,
                movement:"circle",
                speed:2
            },

            {
                type:"goldKey",
                row:2,
                col:8
            }

        ]
    }

},

/*==========================================
            LEVEL 130
==========================================*/

{
    level:130,

    title:"💎 The Legendary Treasure",

    description:
    "After defeating every obstacle, Aryan finally discovers the legendary pirate treasure hidden for hundreds of years.",

    guide:
    "Collect the treasure and complete Pirate Island.",

    question:
    "What do pirates usually search for?",

    options:[
        "Treasure",
        "Homework",
        "Books",
        "Shoes"
    ],

    answer:"Treasure",

    reward:{
        coins:1500,
        xp:700,
        gems:25,
        energy:2,
        badge:"🏴‍☠️ Pirate Champion",
        item:"💎 Legendary Pirate Treasure"
    },

    maze:{
        theme:"Treasure Chamber",

        player:"🧒",

        start:"⚓",

        end:"💎",

        boss:"Pirate Captain",

        objects:[

            {
                type:"treasureChest",
                row:9,
                col:9
            },

            {
                type:"diamond",
                row:6,
                col:5
            },

            {
                type:"goldCoin",
                row:3,
                col:3,
                value:500
            }

        ]
    }

},
/*==========================================
            LEVEL 131
==========================================*/

{
    level:131,

    title:"🏜 Enter the Golden Desert",

    description:
    "After escaping Pirate Island, Aryan reaches the Golden Desert. Endless sand dunes and dangerous cacti stand between him and the legendary Sun Temple.",

    guide:
    "Avoid the cactus and stay on the safe path.",

    question:
    "Which plant is commonly found in a desert?",

    options:[
        "Cactus",
        "Rose",
        "Lotus",
        "Pine Tree"
    ],

    answer:"Cactus",

    reward:{
        coins:800,
        xp:400,
        gems:12
    },

    maze:{
        theme:"Golden Desert",

        player:"🧒",

        start:"🏜",

        end:"🌵",

        objects:[

            {
                type:"cactus",
                row:3,
                col:5
            },

            {
                type:"cactus",
                row:6,
                col:7
            },

            {
                type:"coin",
                row:8,
                col:2,
                value:200
            }

        ]
    }

},

/*==========================================
            LEVEL 132
==========================================*/

{
    level:132,

    title:"🐪 Camel Caravan",

    description:
    "A friendly camel caravan is travelling across the hot desert. Ride the camel to cross the long sandy route faster.",

    guide:
    "Use the camel whenever possible.",

    question:
    "Which animal is called the Ship of the Desert?",

    options:[
        "Camel",
        "Horse",
        "Elephant",
        "Donkey"
    ],

    answer:"Camel",

    reward:{
        coins:840,
        xp:420,
        gems:13
    },

    maze:{
        theme:"Camel Caravan",

        player:"🧒",

        start:"🏜",

        end:"🐪",

        objects:[

            {
                type:"camel",
                row:4,
                col:4,
                movement:"horizontal"
            },

            {
                type:"cactus",
                row:7,
                col:6
            },

            {
                type:"waterBottle",
                row:2,
                col:8
            }

        ]
    }

},

/*==========================================
            LEVEL 133
==========================================*/

{
    level:133,

    title:"💧 The Hidden Oasis",

    description:
    "The desert heat is becoming unbearable. Aryan must find a hidden oasis before continuing his journey.",

    guide:
    "Collect the water bottle to restore your energy.",

    question:
    "What is most important for survival in a desert?",

    options:[
        "Water",
        "Television",
        "Laptop",
        "Football"
    ],

    answer:"Water",

    reward:{
        coins:880,
        xp:440,
        gems:13
    },

    maze:{
        theme:"Hidden Oasis",

        player:"🧒",

        start:"🏜",

        end:"💧",

        objects:[

            {
                type:"waterBottle",
                row:5,
                col:5
            },

            {
                type:"oasis",
                row:8,
                col:8
            },

            {
                type:"palmTree",
                row:6,
                col:2
            }

        ]
    }

},

/*==========================================
            LEVEL 134
==========================================*/

{
    level:134,

    title:"🌪 Desert Sandstorm",

    description:
    "A massive sandstorm suddenly appears, reducing visibility. Aryan must carefully navigate through the storm.",

    guide:
    "Move slowly because the path is difficult to see.",

    question:
    "What usually causes poor visibility in a desert?",

    options:[
        "Sandstorm",
        "Snowfall",
        "Rainbow",
        "Fog Machine"
    ],

    answer:"Sandstorm",

    reward:{
        coins:930,
        xp:460,
        gems:14
    },

    maze:{
        theme:"Sandstorm",

        player:"🧒",

        start:"🏜",

        end:"🌪",

        objects:[

            {
                type:"sandstorm",
                row:5,
                col:5,
                radius:3
            },

            {
                type:"cactus",
                row:4,
                col:7
            },

            {
                type:"coin",
                row:3,
                col:2,
                value:250
            }

        ]
    }

},

/*==========================================
            LEVEL 135
==========================================*/

{
    level:135,

    title:"🦂 Scorpion Valley",

    description:
    "Dangerous scorpions guard the entrance to the ancient desert ruins. Avoid their patrols and continue your adventure.",

    guide:
    "Watch the scorpions' movement before crossing.",

    question:
    "Which creature is famous for its poisonous sting?",

    options:[
        "Scorpion",
        "Rabbit",
        "Cow",
        "Parrot"
    ],

    answer:"Scorpion",

    reward:{
        coins:1000,
        xp:500,
        gems:15,
        badge:"Desert Survivor"
    },

    maze:{
        theme:"Scorpion Valley",

        player:"🧒",

        start:"🏜",

        end:"🦂",

        objects:[

            {
                type:"scorpion",
                row:3,
                col:4,
                movement:"horizontal",
                speed:2
            },

            {
                type:"scorpion",
                row:7,
                col:7,
                movement:"vertical",
                speed:1
            },

            {
                type:"heart",
                row:8,
                col:3
            }

        ]
    }

},
/*==========================================
            LEVEL 136
==========================================*/

{
    level:136,

    title:"🗝 The Desert Key",

    description:
    "Aryan discovers an ancient stone chamber hidden beneath the sand. The sacred Desert Key is buried inside. Find it before reaching the Sun Temple.",

    guide:
    "Collect the key first. The temple gate will not open without it.",

    question:
    "What is used to unlock a locked gate?",

    options:[
        "Key",
        "Stone",
        "Rope",
        "Torch"
    ],

    answer:"Key",

    reward:{
        coins:1050,
        xp:520,
        gems:16
    },

    maze:{
        theme:"Desert Key Chamber",

        player:"🧒",

        start:"🏜",

        end:"🚪",

        objects:[

            {
                type:"desertKey",
                row:2,
                col:8
            },

            {
                type:"stoneDoor",
                row:8,
                col:7
            },

            {
                type:"cactus",
                row:5,
                col:5
            }

        ]
    }

},

/*==========================================
            LEVEL 137
==========================================*/

{
    level:137,

    title:"🦅 Eagle's Sky",

    description:
    "A giant eagle circles above the desert searching for prey. Stay out of its flight path while crossing the cliffs.",

    guide:
    "Move only when the eagle flies away.",

    question:
    "Which bird has excellent eyesight?",

    options:[
        "Eagle",
        "Parrot",
        "Crow",
        "Pigeon"
    ],

    answer:"Eagle",

    reward:{
        coins:1100,
        xp:550,
        gems:17
    },

    maze:{
        theme:"Eagle Canyon",

        player:"🧒",

        start:"🏜",

        end:"🦅",

        objects:[

            {
                type:"eagle",
                row:3,
                col:5,
                movement:"horizontal",
                speed:2
            },

            {
                type:"coin",
                row:7,
                col:3,
                value:300
            }

        ]
    }

},

/*==========================================
            LEVEL 138
==========================================*/

{
    level:138,

    title:"🏺 Ancient Pyramid",

    description:
    "Aryan enters a mysterious pyramid filled with hidden tunnels, traps and secret treasures.",

    guide:
    "Search carefully for the hidden passage.",

    question:
    "Which famous structure is found in the Egyptian desert?",

    options:[
        "Pyramid",
        "Castle",
        "Bridge",
        "Tower"
    ],

    answer:"Pyramid",

    reward:{
        coins:1180,
        xp:590,
        gems:18
    },

    maze:{
        theme:"Ancient Pyramid",

        player:"🧒",

        start:"🏺",

        end:"🚪",

        objects:[

            {
                type:"hiddenPassage",
                row:5,
                col:4
            },

            {
                type:"trap",
                row:7,
                col:6
            },

            {
                type:"treasure",
                row:2,
                col:7
            }

        ]
    }

},

/*==========================================
            LEVEL 139
==========================================*/

{
    level:139,

    title:"☀ Sun Temple Gate",

    description:
    "The magnificent Sun Temple stands before Aryan. Two magical Desert Keys are needed to unlock the glowing gate.",

    guide:
    "Collect both keys before reaching the gate.",

    question:
    "How many keys are required to unlock the Sun Temple?",

    options:[
        "Two",
        "One",
        "Three",
        "Four"
    ],

    answer:"Two",

    reward:{
        coins:1300,
        xp:650,
        gems:20
    },

    maze:{
        theme:"Sun Temple",

        player:"🧒",

        start:"🏜",

        end:"☀",

        objects:[

            {
                type:"desertKey",
                row:2,
                col:3
            },

            {
                type:"desertKey",
                row:8,
                col:8
            },

            {
                type:"sunGate",
                row:5,
                col:5
            }

        ]
    }

},

/*==========================================
            LEVEL 140
==========================================*/

{
    level:140,

    title:"👑 The Desert Crown",

    description:
    "After surviving every challenge, Aryan finally enters the Sun Temple where the legendary Desert Crown is protected by the mighty Sun Guardian.",

    guide:
    "Defeat the guardian and claim the Desert Crown.",

    question:
    "What is the final treasure inside the Sun Temple?",

    options:[
        "Desert Crown",
        "Sword",
        "Shield",
        "Helmet"
    ],

    answer:"Desert Crown",

    reward:{
        coins:2000,
        xp:1000,
        gems:30,
        energy:3,
        badge:"👑 Desert Champion",
        item:"☀ Legendary Desert Crown"
    },

    maze:{
        theme:"Sun Temple Throne",

        player:"🧒",

        start:"🏜",

        end:"👑",

        boss:"Sun Guardian",

        objects:[

            {
                type:"sunGuardian",
                row:5,
                col:5,
                movement:"circle",
                speed:2
            },

            {
                type:"desertCrown",
                row:9,
                col:9
            },

            {
                type:"sunCrystal",
                row:6,
                col:6
            }

        ]
    }

},
/*==========================================
            LEVEL 141
==========================================*/

{
    level:141,

    title:"❄ Welcome to Snow Kingdom",

    description:
    "After obtaining the Desert Crown, Aryan travels north and reaches the magical Snow Kingdom. Everything is covered with ice and snow.",

    guide:
    "Walk carefully because the icy floor is very slippery.",

    question:
    "What covers the ground during winter?",

    options:[
        "Snow",
        "Sand",
        "Leaves",
        "Water"
    ],

    answer:"Snow",

    reward:{
        coins:1100,
        xp:550,
        gems:18
    },

    maze:{
        theme:"Snow Kingdom",

        player:"🧒",

        start:"🏔",

        end:"❄",

        objects:[

            {
                type:"iceTile",
                row:3,
                col:4
            },

            {
                type:"iceTile",
                row:5,
                col:6
            },

            {
                type:"snowTree",
                row:8,
                col:2
            }

        ]
    }

},

/*==========================================
            LEVEL 142
==========================================*/

{
    level:142,

    title:"⛸ Slippery Ice Path",

    description:
    "The frozen path is extremely slippery. Aryan keeps sliding until he reaches a solid surface.",

    guide:
    "Plan every move carefully on the ice.",

    question:
    "Which surface is slippery?",

    options:[
        "Ice",
        "Grass",
        "Road",
        "Wood"
    ],

    answer:"Ice",

    reward:{
        coins:1150,
        xp:580,
        gems:19
    },

    maze:{
        theme:"Frozen Lake",

        player:"🧒",

        start:"🏔",

        end:"🧊",

        objects:[

            {
                type:"iceTile",
                row:2,
                col:5
            },

            {
                type:"iceTile",
                row:6,
                col:7
            },

            {
                type:"coin",
                row:4,
                col:8,
                value:300
            }

        ]
    }

},

/*==========================================
            LEVEL 143
==========================================*/

{
    level:143,

    title:"⛄ Snowman Guards",

    description:
    "Friendly-looking snowmen are actually magical guards protecting the frozen palace.",

    guide:
    "Avoid their patrol route.",

    question:
    "A snowman is made of?",

    options:[
        "Snow",
        "Sand",
        "Clay",
        "Stone"
    ],

    answer:"Snow",

    reward:{
        coins:1200,
        xp:600,
        gems:20
    },

    maze:{
        theme:"Snowman Village",

        player:"🧒",

        start:"❄",

        end:"🏰",

        objects:[

            {
                type:"snowman",
                row:4,
                col:4,
                movement:"horizontal",
                speed:1
            },

            {
                type:"snowman",
                row:7,
                col:5,
                movement:"vertical",
                speed:1
            }

        ]
    }

},

/*==========================================
            LEVEL 144
==========================================*/

{
    level:144,

    title:"🐺 Frozen Wolf Forest",

    description:
    "A pack of hungry wolves patrols the snowy forest. Aryan must escape without being caught.",

    guide:
    "Stay away from the wolves' path.",

    question:
    "Which animal howls at night?",

    options:[
        "Wolf",
        "Horse",
        "Cow",
        "Rabbit"
    ],

    answer:"Wolf",

    reward:{
        coins:1280,
        xp:640,
        gems:21
    },

    maze:{
        theme:"Frozen Forest",

        player:"🧒",

        start:"🌲",

        end:"❄",

        objects:[

            {
                type:"wolf",
                row:3,
                col:7,
                movement:"random",
                speed:2
            },

            {
                type:"wolf",
                row:6,
                col:3,
                movement:"horizontal",
                speed:2
            },

            {
                type:"heart",
                row:8,
                col:8
            }

        ]
    }

},

/*==========================================
            LEVEL 145
==========================================*/

{
    level:145,

    title:"🌨 Blizzard Storm",

    description:
    "A powerful blizzard covers the kingdom with heavy snow. Visibility becomes very low, making the maze much harder to solve.",

    guide:
    "Stay close to landmarks and don't lose your direction.",

    question:
    "What is a very strong snowstorm called?",

    options:[
        "Blizzard",
        "Rainbow",
        "Sunrise",
        "Earthquake"
    ],

    answer:"Blizzard",

    reward:{
        coins:1400,
        xp:700,
        gems:22,
        badge:"❄ Snow Survivor"
    },

    maze:{
        theme:"Blizzard",

        player:"🧒",

        start:"🏔",

        end:"🌨",

        objects:[

            {
                type:"blizzard",
                row:5,
                col:5,
                radius:3
            },

            {
                type:"iceTile",
                row:7,
                col:4
            },

            {
                type:"snowCrystal",
                row:2,
                col:8
            }

        ]
    }

},
/*==========================================
            LEVEL 146
==========================================*/

{
    level:146,

    title:"🧊 Frozen Crystal Cave",

    description:
    "Deep beneath the Snow Kingdom lies a frozen crystal cave filled with sparkling ice crystals. Aryan must collect the Ice Crystal Key to continue.",

    guide:
    "Collect the Ice Crystal before reaching the exit.",

    question:
    "Which material forms an icicle?",

    options:[
        "Ice",
        "Stone",
        "Glass",
        "Sand"
    ],

    answer:"Ice",

    reward:{
        coins:1450,
        xp:720,
        gems:23
    },

    maze:{
        theme:"Crystal Cave",

        player:"🧒",

        start:"🧊",

        end:"💎",

        objects:[

            {
                type:"snowCrystal",
                row:3,
                col:6
            },

            {
                type:"iceTile",
                row:5,
                col:5
            },

            {
                type:"iceKey",
                row:8,
                col:2
            }

        ]
    }

},

/*==========================================
            LEVEL 147
==========================================*/

{
    level:147,

    title:"🌉 Frozen Bridge",

    description:
    "Only a thin frozen bridge connects the two mountains. One wrong step will break the ice.",

    guide:
    "Stay on the bridge and avoid cracked ice.",

    question:
    "What happens when thin ice breaks?",

    options:[
        "You fall into water",
        "It becomes stronger",
        "It catches fire",
        "It disappears"

    ],

    answer:"You fall into water",

    reward:{
        coins:1500,
        xp:750,
        gems:24
    },

    maze:{
        theme:"Frozen Bridge",

        player:"🧒",

        start:"🏔",

        end:"🌉",

        objects:[

            {
                type:"iceBridge",
                row:5,
                col:4
            },

            {
                type:"crackedIce",
                row:6,
                col:6
            },

            {
                type:"wolf",
                row:3,
                col:8,
                movement:"horizontal"
            }

        ]
    }

},

/*==========================================
            LEVEL 148
==========================================*/

{
    level:148,

    title:"🗝 Ice Palace Gate",

    description:
    "Aryan reaches the magnificent Ice Palace. The magical Ice Gate will only open after collecting the Frozen Key.",

    guide:
    "Find the key before reaching the palace.",

    question:
    "What opens a locked gate?",

    options:[
        "Key",
        "Hammer",
        "Stick",
        "Torch"
    ],

    answer:"Key",

    reward:{
        coins:1600,
        xp:800,
        gems:25
    },

    maze:{
        theme:"Ice Palace",

        player:"🧒",

        start:"❄",

        end:"🏰",

        objects:[

            {
                type:"iceKey",
                row:2,
                col:8
            },

            {
                type:"iceGate",
                row:7,
                col:5
            },

            {
                type:"snowman",
                row:5,
                col:3,
                movement:"vertical"
            }

        ]
    }

},

/*==========================================
            LEVEL 149
==========================================*/

{
    level:149,

    title:"👸 The Ice Queen",

    description:
    "The Ice Queen protects the legendary Frozen Crystal. Escape her magical attacks and reach the throne room.",

    guide:
    "Avoid the Ice Queen's magic path.",

    question:
    "Who rules the Snow Kingdom?",

    options:[
        "Ice Queen",
        "Pirate",
        "Dragon",
        "King Cobra"
    ],

    answer:"Ice Queen",

    reward:{
        coins:1800,
        xp:900,
        gems:28
    },

    maze:{
        theme:"Ice Throne",

        player:"🧒",

        start:"🏰",

        end:"👸",

        objects:[

            {
                type:"iceQueen",
                row:5,
                col:5,
                movement:"circle",
                speed:2
            },

            {
                type:"snowCrystal",
                row:3,
                col:7
            }

        ]
    }

},

/*==========================================
            LEVEL 150
==========================================*/

{
    level:150,

    title:"💙 Frozen Crystal Treasure",

    description:
    "After defeating the Ice Queen, Aryan finally claims the legendary Frozen Crystal, bringing peace back to the Snow Kingdom.",

    guide:
    "Collect the Frozen Crystal to complete the Snow Kingdom.",

    question:
    "What is the final treasure of the Snow Kingdom?",

    options:[
        "Frozen Crystal",
        "Golden Sword",
        "Magic Ring",
        "Silver Shield"
    ],

    answer:"Frozen Crystal",

    reward:{
        coins:2500,
        xp:1200,
        gems:40,
        energy:3,
        badge:"❄ Snow Champion",
        item:"💙 Legendary Frozen Crystal"
    },

    maze:{
        theme:"Crystal Throne",

        player:"🧒",

        start:"🏰",

        end:"💙",

        boss:"Ice Queen",

        objects:[

            {
                type:"frozenCrystal",
                row:9,
                col:9
            },

            {
                type:"iceQueen",
                row:5,
                col:5,
                movement:"circle",
                speed:2
            },

            {
                type:"gift",
                row:2,
                col:2
            }

        ]
    }

},
/*==========================================
            LEVEL 151
==========================================*/

{
    level:151,

    title:"🏰 Enter the Haunted Castle",

    description:
    "After obtaining the Frozen Crystal, Aryan discovers an abandoned castle hidden in a dark forest. Strange voices echo through its broken halls.",

    guide:
    "Avoid ghosts and search for the castle entrance.",

    question:
    "Which place is usually believed to have ghosts?",

    options:[
        "Haunted Castle",
        "School",
        "Library",
        "Playground"
    ],

    answer:"Haunted Castle",

    reward:{
        coins:1600,
        xp:800,
        gems:25
    },

    maze:{
        theme:"Haunted Castle",

        player:"🧒",

        start:"🌲",

        end:"🏰",

        objects:[

            {
                type:"ghost",
                row:3,
                col:4,
                movement:"random"
            },

            {
                type:"torch",
                row:7,
                col:6
            },

            {
                type:"coin",
                row:5,
                col:2,
                value:300
            }

        ]
    }

},

/*==========================================
            LEVEL 152
==========================================*/

{
    level:152,

    title:"👻 Hall of Spirits",

    description:
    "Invisible spirits pass through the castle walls. Aryan must predict their movement to survive.",

    guide:
    "Watch ghost movements carefully before crossing.",

    question:
    "Ghosts are commonly shown as?",

    options:[
        "Spirits",
        "Animals",
        "Robots",
        "Plants"
    ],

    answer:"Spirits",

    reward:{
        coins:1650,
        xp:830,
        gems:26
    },

    maze:{
        theme:"Spirit Hall",

        player:"🧒",

        start:"👻",

        end:"🚪",

        objects:[

            {
                type:"ghost",
                row:4,
                col:5,
                movement:"throughWalls",
                speed:2
            },

            {
                type:"ghost",
                row:6,
                col:7,
                movement:"horizontal"
            }

        ]
    }

},

/*==========================================
            LEVEL 153
==========================================*/

{
    level:153,

    title:"🦇 Bat Cave",

    description:
    "Hundreds of bats suddenly fly through the dark cave beneath the castle.",

    guide:
    "Avoid the flying bats while crossing the cave.",

    question:
    "Which animal hangs upside down?",

    options:[
        "Bat",
        "Tiger",
        "Horse",
        "Elephant"
    ],

    answer:"Bat",

    reward:{
        coins:1700,
        xp:850,
        gems:27
    },

    maze:{
        theme:"Bat Cave",

        player:"🧒",

        start:"🕳",

        end:"🦇",

        objects:[

            {
                type:"bat",
                row:2,
                col:8,
                movement:"circle"
            },

            {
                type:"bat",
                row:7,
                col:4,
                movement:"random"
            },

            {
                type:"heart",
                row:5,
                col:5
            }

        ]
    }

},

/*==========================================
            LEVEL 154
==========================================*/

{
    level:154,

    title:"🔦 Lantern Maze",

    description:
    "The castle becomes completely dark. Aryan finds an old magical lantern that lights only a small area around him.",

    guide:
    "Use the lantern to reveal hidden paths.",

    question:
    "Which object helps you see in darkness?",

    options:[
        "Lantern",
        "Book",
        "Stone",
        "Chair"
    ],

    answer:"Lantern",

    reward:{
        coins:1800,
        xp:900,
        gems:28
    },

    maze:{
        theme:"Dark Corridor",

        player:"🧒",

        start:"🔦",

        end:"🚪",

        objects:[

            {
                type:"lantern",
                row:4,
                col:3
            },

            {
                type:"ghost",
                row:6,
                col:6,
                movement:"random"
            }

        ]
    }

},

/*==========================================
            LEVEL 155
==========================================*/

{
    level:155,

    title:"🗝 Haunted Key",

    description:
    "A mysterious glowing key is hidden inside the cursed library. Without it, the castle gate cannot be opened.",

    guide:
    "Collect the Haunted Key before reaching the exit.",

    question:
    "What is needed to unlock a magical door?",

    options:[
        "Key",
        "Sword",
        "Shield",
        "Helmet"
    ],

    answer:"Key",

    reward:{
        coins:1900,
        xp:950,
        gems:30,
        badge:"👻 Ghost Hunter"
    },

    maze:{
        theme:"Cursed Library",

        player:"🧒",

        start:"📚",

        end:"🚪",

        objects:[

            {
                type:"hauntedKey",
                row:3,
                col:8
            },

            {
                type:"magicDoor",
                row:8,
                col:6
            },

            {
                type:"bat",
                row:5,
                col:5,
                movement:"horizontal"
            }

        ]
    }

},

/*==========================================
            LEVEL 156
==========================================*/

{
    level:156,

    title:"🕷 Spider Web Chamber",

    description:
    "The deepest room of the castle is covered with giant spider webs. Every wrong step can trap Aryan forever.",

    guide:
    "Avoid sticky spider webs and giant spiders.",

    question:
    "Which creature spins a web?",

    options:[
        "Spider",
        "Snake",
        "Dog",
        "Lion"
    ],

    answer:"Spider",

    reward:{
        coins:2000,
        xp:1000,
        gems:32
    },

    maze:{
        theme:"Spider Chamber",

        player:"🧒",

        start:"🕸",

        end:"🕷",

        objects:[

            {
                type:"giantSpider",
                row:4,
                col:4,
                movement:"circle",
                speed:2
            },

            {
                type:"spiderWeb",
                row:6,
                col:7
            },

            {
                type:"coin",
                row:8,
                col:3,
                value:500
            }

        ]
    }

},
/*==========================================
            LEVEL 157
==========================================*/

{
    level:157,

    title:"💀 Skeleton Army",

    description:
    "After escaping the Spider Chamber, Aryan enters the Castle Barracks where ancient Skeleton Warriors have awakened to guard the Dark King's palace.",

    guide:
    "Avoid the skeleton patrol and don't get surrounded.",

    question:
    "What remains after a body completely decomposes?",

    options:[
        "Skeleton",
        "Leaves",
        "Wood",
        "Water"
    ],

    answer:"Skeleton",

    reward:{
        coins:2100,
        xp:1050,
        gems:34
    },

    maze:{
        theme:"Skeleton Barracks",

        player:"🧒",

        start:"⚔",

        end:"💀",

        objects:[

            {
                type:"skeleton",
                row:3,
                col:5,
                movement:"horizontal",
                speed:2
            },

            {
                type:"skeleton",
                row:7,
                col:6,
                movement:"vertical",
                speed:2
            },

            {
                type:"heart",
                row:8,
                col:2
            }

        ]
    }

},

/*==========================================
            LEVEL 158
==========================================*/

{
    level:158,

    title:"🚪 Secret Passage",

    description:
    "Aryan discovers a hidden lever that opens a secret passage behind the castle wall. Only observant explorers can find it.",

    guide:
    "Pull the hidden lever before entering the secret door.",

    question:
    "What opens a secret passage?",

    options:[
        "Hidden Lever",
        "Coin",
        "Torch",
        "Helmet"
    ],

    answer:"Hidden Lever",

    reward:{
        coins:2200,
        xp:1100,
        gems:35
    },

    maze:{
        theme:"Hidden Passage",

        player:"🧒",

        start:"🧱",

        end:"🚪",

        objects:[

            {
                type:"lever",
                row:2,
                col:7
            },

            {
                type:"secretDoor",
                row:8,
                col:6
            },

            {
                type:"ghost",
                row:5,
                col:4,
                movement:"throughWalls"
            }

        ]
    }

},

/*==========================================
            LEVEL 159
==========================================*/

{
    level:159,

    title:"👑 Dark King's Throne",

    description:
    "Aryan finally reaches the throne room where the Dark King controls every ghost, skeleton and monster inside the castle.",

    guide:
    "Avoid the Dark King's attacks and survive until you reach the throne.",

    question:
    "Who rules the Haunted Castle?",

    options:[
        "Dark King",
        "Ice Queen",
        "Pirate Captain",
        "Explorer"
    ],

    answer:"Dark King",

    reward:{
        coins:2500,
        xp:1250,
        gems:40
    },

    maze:{
        theme:"Dark Throne",

        player:"🧒",

        start:"🏰",

        end:"👑",

        objects:[

            {
                type:"darkKing",
                row:5,
                col:5,
                movement:"circle",
                speed:3
            },

            {
                type:"darkMagic",
                row:4,
                col:7
            },

            {
                type:"skeleton",
                row:7,
                col:3,
                movement:"random"
            }

        ]
    }

},

/*==========================================
            LEVEL 160
==========================================*/

{
    level:160,

    title:"💎 Shadow Crystal",

    description:
    "After defeating the Dark King, Aryan recovers the legendary Shadow Crystal. The Haunted Castle is finally free from its ancient curse.",

    guide:
    "Collect the Shadow Crystal to complete the Haunted Castle world.",

    question:
    "What is the legendary treasure of the Haunted Castle?",

    options:[
        "Shadow Crystal",
        "Golden Crown",
        "Magic Sword",
        "Silver Shield"
    ],

    answer:"Shadow Crystal",

    reward:{
        coins:3500,
        xp:1800,
        gems:60,
        energy:5,
        badge:"👑 Haunted Castle Champion",
        item:"💎 Legendary Shadow Crystal"
    },

    maze:{
        theme:"Shadow Chamber",

        player:"🧒",

        start:"🏰",

        end:"💎",

        boss:"Dark King",

        objects:[

            {
                type:"shadowCrystal",
                row:9,
                col:9
            },

            {
                type:"darkKing",
                row:5,
                col:5,
                movement:"circle",
                speed:3
            },

            {
                type:"treasureChest",
                row:2,
                col:2
            }

        ]
    }

},
/*==========================================
            LEVEL 161
==========================================*/

{
    level:161,

    title:"🌋 Enter the Volcano Kingdom",

    description:
    "After obtaining the Shadow Crystal, Aryan reaches the dangerous Volcano Kingdom. Rivers of lava surround the ancient Fire Fortress.",

    guide:
    "Stay away from lava and follow the safe rocky path.",

    question:
    "What flows out of an active volcano?",

    options:[
        "Lava",
        "Ice",
        "Sand",
        "Rain"
    ],

    answer:"Lava",

    reward:{
        coins:2200,
        xp:1100,
        gems:35
    },

    maze:{
        theme:"Volcano Entrance",

        player:"🧒",

        start:"🌋",

        end:"🏰",

        objects:[

            {
                type:"lava",
                row:3,
                col:4
            },

            {
                type:"lava",
                row:5,
                col:6
            },

            {
                type:"coin",
                row:8,
                col:2,
                value:400
            }

        ]
    }

},

/*==========================================
            LEVEL 162
==========================================*/

{
    level:162,

    title:"🌉 Burning Stone Bridge",

    description:
    "The only path across the lava river is an old moving stone bridge. Time every step carefully before crossing.",

    guide:
    "Cross only when the bridge reaches your side.",

    question:
    "What is used to cross a river?",

    options:[
        "Bridge",
        "Ladder",
        "Chair",
        "Wall"
    ],

    answer:"Bridge",

    reward:{
        coins:2300,
        xp:1150,
        gems:36
    },

    maze:{
        theme:"Lava Bridge",

        player:"🧒",

        start:"🌉",

        end:"🔥",

        objects:[

            {
                type:"movingBridge",
                row:5,
                col:5,
                movement:"horizontal"
            },

            {
                type:"lava",
                row:6,
                col:4
            },

            {
                type:"heart",
                row:2,
                col:8
            }

        ]
    }

},

/*==========================================
            LEVEL 163
==========================================*/

{
    level:163,

    title:"🔥 Fireball Corridor",

    description:
    "Ancient volcano traps continuously shoot blazing fireballs across the corridor.",

    guide:
    "Wait for the right moment before crossing.",

    question:
    "Fireballs are mainly made of?",

    options:[
        "Fire",
        "Water",
        "Snow",
        "Wind"
    ],

    answer:"Fire",

    reward:{
        coins:2400,
        xp:1200,
        gems:38
    },

    maze:{
        theme:"Fire Corridor",

        player:"🧒",

        start:"🔥",

        end:"🚪",

        objects:[

            {
                type:"fireball",
                row:4,
                col:2,
                movement:"horizontal",
                speed:3
            },

            {
                type:"fireball",
                row:7,
                col:8,
                movement:"vertical",
                speed:2
            },

            {
                type:"fireCrystal",
                row:6,
                col:5
            }

        ]
    }

},

/*==========================================
            LEVEL 164
==========================================*/

{
    level:164,

    title:"🌡 Heat Chamber",

    description:
    "The temperature inside the volcano rises rapidly. Aryan's Heat Meter keeps increasing while exploring.",

    guide:
    "Collect cooling crystals before the Heat Meter becomes full.",

    question:
    "What helps reduce body temperature?",

    options:[
        "Cool Water",
        "More Fire",
        "Hot Sand",
        "Smoke"
    ],

    answer:"Cool Water",

    reward:{
        coins:2500,
        xp:1250,
        gems:40
    },

    maze:{
        theme:"Heat Chamber",

        player:"🧒",

        start:"🌋",

        end:"❄",

        objects:[

            {
                type:"heatZone",
                row:5,
                col:5
            },

            {
                type:"coolCrystal",
                row:2,
                col:7
            },

            {
                type:"lava",
                row:7,
                col:4
            }

        ]
    }

},

/*==========================================
            LEVEL 165
==========================================*/

{
    level:165,

    title:"🗝 Fire Temple Key",

    description:
    "The entrance to the Fire Temple is sealed by an ancient magical gate. Aryan must find the glowing Fire Key hidden inside the volcano.",

    guide:
    "Collect the Fire Key before reaching the Fire Gate.",

    question:
    "What is required to unlock the Fire Temple?",

    options:[
        "Fire Key",
        "Sword",
        "Shield",
        "Helmet"
    ],

    answer:"Fire Key",

    reward:{
        coins:2700,
        xp:1350,
        gems:45,
        badge:"🔥 Lava Survivor"
    },

    maze:{
        theme:"Fire Temple",

        player:"🧒",

        start:"🌋",

        end:"🚪",

        objects:[

            {
                type:"fireKey",
                row:3,
                col:8
            },

            {
                type:"fireGate",
                row:8,
                col:6
            },

            {
                type:"babyDragon",
                row:5,
                col:5,
                movement:"random",
                speed:2
            }

        ]
    }

},
/*==========================================
            LEVEL 166
==========================================*/

{
    level:166,

    title:"🐉 Dragon Hatchery",

    description:
    "Aryan enters the Dragon Hatchery where young dragons are learning to breathe fire. The room is filled with burning eggs and dangerous flames.",

    guide:
    "Avoid the baby dragons and their fire breath.",

    question:
    "A baby dragon grows into a?",

    options:[
        "Dragon",
        "Phoenix",
        "Tiger",
        "Lion"
    ],

    answer:"Dragon",

    reward:{
        coins:2800,
        xp:1400,
        gems:46
    },

    maze:{
        theme:"Dragon Hatchery",

        player:"🧒",

        start:"🥚",

        end:"🐉",

        objects:[

            {
                type:"babyDragon",
                row:4,
                col:4,
                movement:"random",
                speed:2
            },

            {
                type:"fireball",
                row:6,
                col:7,
                movement:"horizontal"
            },

            {
                type:"dragonEgg",
                row:2,
                col:8
            }

        ]
    }

},

/*==========================================
            LEVEL 167
==========================================*/

{
    level:167,

    title:"🌋 Volcano Eruption",

    description:
    "The volcano suddenly erupts! Huge rocks and lava bursts fall from the sky while Aryan searches for the escape tunnel.",

    guide:
    "Keep moving to avoid falling lava rocks.",

    question:
    "What happens when a volcano erupts?",

    options:[
        "Lava comes out",
        "Snow falls",
        "Rain starts",
        "River freezes"
    ],

    answer:"Lava comes out",

    reward:{
        coins:3000,
        xp:1500,
        gems:48
    },

    maze:{
        theme:"Volcano Eruption",

        player:"🧒",

        start:"🌋",

        end:"🚪",

        objects:[

            {
                type:"eruption",
                row:5,
                col:5
            },

            {
                type:"fallingRock",
                row:3,
                col:7
            },

            {
                type:"lava",
                row:7,
                col:3
            }

        ]
    }

},

/*==========================================
            LEVEL 168
==========================================*/

{
    level:168,

    title:"⚙ Fire Mechanism",

    description:
    "An ancient machine controls the Fire Temple. Aryan must activate three fire switches to unlock the final chamber.",

    guide:
    "Press every Fire Switch before reaching the exit.",

    question:
    "How many switches must be activated?",

    options:[
        "Three",
        "One",
        "Two",
        "Four"
    ],

    answer:"Three",

    reward:{
        coins:3200,
        xp:1600,
        gems:50
    },

    maze:{
        theme:"Fire Mechanism",

        player:"🧒",

        start:"⚙",

        end:"🚪",

        objects:[

            {
                type:"fireSwitch",
                row:2,
                col:3
            },

            {
                type:"fireSwitch",
                row:5,
                col:6
            },

            {
                type:"fireSwitch",
                row:8,
                col:8
            },

            {
                type:"fireGate",
                row:6,
                col:4
            }

        ]
    }

},

/*==========================================
            LEVEL 169
==========================================*/

{
    level:169,

    title:"👑 Fire Dragon",

    description:
    "Aryan finally reaches the throne room of the mighty Fire Dragon. The dragon guards the legendary Phoenix Flame Crystal.",

    guide:
    "Avoid the dragon's fire breath and reach the treasure chamber.",

    question:
    "Who protects the Phoenix Flame Crystal?",

    options:[
        "Fire Dragon",
        "Ice Queen",
        "Ghost",
        "Pirate"
    ],

    answer:"Fire Dragon",

    reward:{
        coins:3800,
        xp:1900,
        gems:60
    },

    maze:{
        theme:"Dragon Throne",

        player:"🧒",

        start:"🏰",

        end:"🐲",

        objects:[

            {
                type:"fireDragon",
                row:5,
                col:5,
                movement:"circle",
                speed:3
            },

            {
                type:"fireball",
                row:4,
                col:7,
                movement:"random"
            }

        ]
    }

},

/*==========================================
            LEVEL 170
==========================================*/

{
    level:170,

    title:"🔥 Phoenix Flame Crystal",

    description:
    "After defeating the Fire Dragon, Aryan discovers the legendary Phoenix Flame Crystal. Its magical power calms the Volcano Kingdom forever.",

    guide:
    "Collect the Phoenix Flame Crystal to complete the Volcano Kingdom.",

    question:
    "What is the legendary treasure of the Volcano Kingdom?",

    options:[
        "Phoenix Flame Crystal",
        "Golden Crown",
        "Silver Sword",
        "Magic Shield"
    ],

    answer:"Phoenix Flame Crystal",

    reward:{
        coins:5000,
        xp:2500,
        gems:100,
        energy:5,
        badge:"🔥 Volcano Champion",
        item:"🔥 Legendary Phoenix Flame Crystal"
    },

    maze:{
        theme:"Phoenix Chamber",

        player:"🧒",

        start:"🌋",

        end:"🔥",

        boss:"Fire Dragon",

        objects:[

            {
                type:"phoenixCrystal",
                row:9,
                col:9
            },

            {
                type:"fireDragon",
                row:5,
                col:5,
                movement:"circle",
                speed:4
            },

            {
                type:"treasureChest",
                row:2,
                col:2
            }

        ]
    }

},
/*==========================================
            LEVEL 171
==========================================*/

{
    level:171,

    title:"🌊 Welcome to Ocean Kingdom",

    description:
    "After defeating the Fire Dragon and obtaining the Phoenix Flame Crystal, Aryan enters the magical Ocean Kingdom. Ancient underwater ruins hide the next legendary crystal, but dangerous sea creatures guard every path.",

    guide:
    "Follow the safe path and avoid moving fish while reaching the Ocean Gate.",

    difficulty:"Medium",

    mazeSize:20,

    timeLimit:120,

    hints:2,

    lives:3,

    music:"ocean_theme.mp3",

    background:"ocean1.jpg",

    weather:"bubbles",

    checkpoint:true,

    question:
    "Which animal lives in the ocean?",

    options:[
        "Fish",
        "Tiger",
        "Lion",
        "Camel"
    ],

    answer:"Fish",

    reward:{
        coins:5200,
        xp:2600,
        gems:105
    },

    maze:{

        layout:"open",

        player:"🧒",

        start:"🏖",

        end:"🌊",

        objects:[

            {
                type:"fish",
                row:2,
                col:4,
                movement:"horizontal",
                minCol:2,
                maxCol:8,
                speed:1
            },

            {
                type:"fish",
                row:6,
                col:7,
                movement:"horizontal",
                minCol:5,
                maxCol:9,
                speed:1
            },

            {
                type:"coral",
                row:4,
                col:3
            },

            {
                type:"bubble",
                row:7,
                col:5
            }

        ]

    }

},
/*==========================================
            LEVEL 172
==========================================*/

{
    level:172,

    title:"🪸 Coral Maze",

    description:
    "Aryan enters a beautiful Coral Forest where giant coral walls block every path. Schools of colorful fish swim through the maze while magical bubbles help explorers reach hidden passages.",

    guide:
    "Follow the coral passages and use Bubble Lift to reach the Ocean Gate.",

    difficulty:"Medium",

    mazeSize:20,

    timeLimit:120,

    hints:2,

    lives:3,

    music:"ocean_theme.mp3",

    background:"coral_maze.jpg",

    weather:"bubbles",

    checkpoint:true,

    question:
    "What is Coral?",

    options:[
        "Marine Organism",
        "Tree",
        "Mountain",
        "Bird"
    ],

    answer:"Marine Organism",

    reward:{
        coins:5400,
        xp:2700,
        gems:108
    },

    maze:{

        layout:"coral",

        player:"🧒",

        start:"🌊",

        end:"🏛",

        objects:[

            {
                type:"coralWall",
                row:2,
                col:3
            },

            {
                type:"coralWall",
                row:3,
                col:3
            },

            {
                type:"coralWall",
                row:4,
                col:3
            },

            {
                type:"coralWall",
                row:6,
                col:7
            },

            {
                type:"fish",
                row:5,
                col:6,
                movement:"horizontal",
                minCol:5,
                maxCol:10,
                speed:2
            },

            {
                type:"fish",
                row:8,
                col:5,
                movement:"horizontal",
                minCol:2,
                maxCol:8,
                speed:1
            },

            {
                type:"bubbleLift",
                row:7,
                col:4
            },

            {
                type:"treasureChest",
                row:10,
                col:9
            }

        ]

    }

},

/*==========================================
            LEVEL 173
==========================================*/

{
    level:173,

    title:"🌊 Ocean Current",

    description:
    "Powerful underwater currents flow through the ancient sea tunnels. Aryan must use the currents wisely because some push him toward danger while others help him reach hidden paths.",

    guide:
    "Avoid dangerous currents and follow the safe water flow.",

    difficulty:"Medium",

    mazeSize:20,

    timeLimit:115,

    hints:2,

    lives:3,

    music:"ocean_current.mp3",

    background:"current_zone.jpg",

    weather:"current",

    checkpoint:true,

    question:
    "What causes objects to move underwater?",

    options:[
        "Water Current",
        "Cloud",
        "Smoke",
        "Sand"
    ],

    answer:"Water Current",

    reward:{
        coins:5600,
        xp:2800,
        gems:110
    },

    maze:{

        layout:"current",

        player:"🧒",

        start:"🌊",

        end:"💎",

        objects:[

            {
                type:"current",
                row:2,
                col:4,
                direction:"right",
                strength:2
            },

            {
                type:"current",
                row:5,
                col:3,
                direction:"down",
                strength:1
            },

            {
                type:"current",
                row:7,
                col:8,
                direction:"left",
                strength:2
            },

            {
                type:"current",
                row:10,
                col:5,
                direction:"up",
                strength:1
            },

            {
                type:"fish",
                row:6,
                col:6,
                movement:"horizontal",
                minCol:5,
                maxCol:10,
                speed:2
            },

            {
                type:"bubbleLift",
                row:9,
                col:2
            },

            {
                type:"pearl",
                row:11,
                col:9
            }

        ]

    }

},
/*==========================================
            LEVEL 174
==========================================*/

{
    level:174,

    title:"🦈 Shark Patrol Maze",

    description:
    "Aryan enters the most dangerous part of the Ocean Kingdom. Hungry sharks patrol the underwater maze without stopping. One wrong move and the sharks will chase him.",

    guide:
    "Observe the shark's movement pattern before crossing each passage.",

    difficulty:"Medium",

    mazeSize:20,

    timeLimit:110,

    hints:2,

    lives:3,

    music:"shark_zone.mp3",

    background:"shark_patrol.jpg",

    weather:"deepOcean",

    checkpoint:true,

    question:
    "Which sea animal is known as a dangerous predator?",

    options:[
        "Shark",
        "Goldfish",
        "Seahorse",
        "Starfish"
    ],

    answer:"Shark",

    reward:{
        coins:5800,
        xp:2900,
        gems:112
    },

    maze:{

        layout:"sharkPatrol",

        player:"🧒",

        start:"🌊",

        end:"🏛",

        objects:[

            {
                type:"shark",

                row:3,
                col:2,

                movement:"path",

                path:[

                    {row:3,col:2},
                    {row:3,col:8},
                    {row:6,col:8},
                    {row:6,col:2}

                ],

                speed:2
            },

            {
                type:"shark",

                row:10,
                col:5,

                movement:"horizontal",

                minCol:4,

                maxCol:12,

                speed:3
            },

            {
                type:"fish",

                row:8,
                col:4,

                movement:"horizontal",

                minCol:4,

                maxCol:10,

                speed:1
            },

            {
                type:"coralWall",

                row:5,
                col:6
            },

            {
                type:"heart",

                row:12,
                col:2
            },

            {
                type:"coin",

                row:9,
                col:11,

                value:500
            }

        ]

    }

},

/*==========================================
            LEVEL 175
==========================================*/

{
    level:175,

    title:"🫧 Bubble Elevator",

    description:
    "Aryan reaches an ancient underwater tower. Only magical Bubble Elevators can lift him to the upper floors where the Ocean Temple entrance awaits.",

    guide:
    "Ride the Bubble Lift carefully and avoid the moving sea creatures.",

    difficulty:"Medium",

    mazeSize:20,

    timeLimit:105,

    hints:2,

    lives:3,

    music:"bubble_lift.mp3",

    background:"bubble_tower.jpg",

    weather:"bubbleStorm",

    checkpoint:true,

    question:
    "What helps Aryan move upward underwater?",

    options:[
        "Bubble Lift",
        "Fire",
        "Sand",
        "Rock"
    ],

    answer:"Bubble Lift",

    reward:{
        coins:6000,
        xp:3000,
        gems:115,
        badge:"🌊 Ocean Explorer"
    },

    maze:{

        layout:"vertical",

        player:"🧒",

        start:"🌊",

        end:"🏛",

        objects:[

            {
                type:"bubbleLift",

                row:15,
                col:3,

                movement:"up",

                speed:2
            },

            {
                type:"bubbleLift",

                row:10,
                col:7,

                movement:"up",

                speed:2
            },

            {
                type:"bubbleLift",

                row:5,
                col:12,

                movement:"up",

                speed:2
            },

            {
                type:"jellyfish",

                row:8,
                col:5,

                movement:"vertical",

                minRow:6,

                maxRow:11,

                speed:2
            },

            {
                type:"fish",

                row:12,
                col:10,

                movement:"horizontal",

                minCol:8,

                maxCol:15,

                speed:2
            },

            {
                type:"pearl",

                row:4,
                col:15
            },

            {
                type:"treasureChest",

                row:2,
                col:9
            }

        ]

    }

},

/*==========================================
            LEVEL 176
==========================================*/

{
    level:176,

    title:"🪼 Jellyfish Garden",

    description:
    "Aryan enters a glowing Jellyfish Garden. Hundreds of electric jellyfish float peacefully, but touching even one will give a powerful electric shock.",

    guide:
    "Watch the jellyfish movement carefully before crossing.",

    difficulty:"Medium",

    mazeSize:20,

    timeLimit:100,

    hints:2,

    lives:3,

    music:"jellyfish_garden.mp3",

    background:"jellyfish_garden.jpg",

    weather:"electricBubbles",

    checkpoint:true,

    question:
    "Which sea creature can give an electric sting?",

    options:[
        "Jellyfish",
        "Dolphin",
        "Whale",
        "Crab"
    ],

    answer:"Jellyfish",

    reward:{
        coins:6200,
        xp:3100,
        gems:118
    },

    maze:{

        layout:"electricGarden",

        player:"🧒",

        start:"🌊",

        end:"🪸",

        objects:[

            {
                type:"jellyfish",
                row:4,
                col:5,
                movement:"vertical",
                minRow:2,
                maxRow:8,
                speed:2
            },

            {
                type:"jellyfish",
                row:10,
                col:8,
                movement:"vertical",
                minRow:8,
                maxRow:14,
                speed:3
            },

            {
                type:"fish",
                row:7,
                col:10,
                movement:"horizontal",
                minCol:8,
                maxCol:14,
                speed:2
            },

            {
                type:"electricZone",
                row:9,
                col:6
            },

            {
                type:"pearl",
                row:14,
                col:12
            }

        ]

    }

},

/*==========================================
            LEVEL 177
==========================================*/

{
    level:177,

    title:"🦀 Crab Beach",

    description:
    "Aryan reaches the Ocean Floor where giant crabs guard hidden treasure. They patrol continuously and block every narrow path.",

    guide:
    "Cross only when the crab moves away.",

    difficulty:"Medium",

    mazeSize:20,

    timeLimit:95,

    hints:2,

    lives:3,

    music:"crab_beach.mp3",

    background:"crab_beach.jpg",

    weather:"sandBubbles",

    checkpoint:true,

    question:
    "Crabs usually walk in which direction?",

    options:[
        "Sideways",
        "Straight",
        "Backward",
        "Upward"
    ],

    answer:"Sideways",

    reward:{
        coins:6400,
        xp:3200,
        gems:120
    },

    maze:{

        layout:"crabPatrol",

        player:"🧒",

        start:"🏖",

        end:"🏛",

        objects:[

            {
                type:"crab",
                row:5,
                col:4,
                movement:"horizontal",
                minCol:3,
                maxCol:10,
                speed:2
            },

            {
                type:"crab",
                row:11,
                col:9,
                movement:"horizontal",
                minCol:8,
                maxCol:15,
                speed:3
            },

            {
                type:"bubbleLift",
                row:8,
                col:5
            },

            {
                type:"coin",
                row:13,
                col:12,
                value:700
            },

            {
                type:"shell",
                row:6,
                col:14
            }

        ]

    }

},

/*==========================================
            LEVEL 178
==========================================*/

{
    level:178,

    title:"🗝 Pearl Cave",

    description:
    "The entrance to the Ancient Ocean Temple is locked. Aryan must search the mysterious Pearl Cave to find the magical Pearl Key.",

    guide:
    "Collect the Pearl Key before reaching the Pearl Gate.",

    difficulty:"Medium",

    mazeSize:20,

    timeLimit:90,

    hints:2,

    lives:3,

    music:"pearl_cave.mp3",

    background:"pearl_cave.jpg",

    weather:"glow",

    checkpoint:true,

    question:
    "What opens the Pearl Gate?",

    options:[
        "Pearl Key",
        "Sword",
        "Hammer",
        "Shield"
    ],

    answer:"Pearl Key",

    reward:{
        coins:6700,
        xp:3350,
        gems:125
    },

    maze:{

        layout:"keyDoor",

        player:"🧒",

        start:"🌊",

        end:"🚪",

        objects:[

            {
                type:"pearlKey",
                row:15,
                col:4
            },

            {
                type:"pearlGate",
                row:6,
                col:15
            },

            {
                type:"jellyfish",
                row:9,
                col:8,
                movement:"vertical",
                minRow:7,
                maxRow:13,
                speed:2
            },

            {
                type:"fish",
                row:5,
                col:6,
                movement:"horizontal",
                minCol:5,
                maxCol:11,
                speed:2
            },

            {
                type:"treasureChest",
                row:16,
                col:16
            }

        ]

    }

},

/*==========================================
            LEVEL 179
==========================================*/

{
    level:179,

    title:"🐙 Octopus Cave",

    description:
    "Aryan discovers the legendary Octopus Cave. A giant octopus protects the hidden route to the Ocean Temple. Its massive tentacles constantly move, blocking every passage.",

    guide:
    "Observe the tentacles carefully and cross only when the path is clear.",

    difficulty:"Medium",

    mazeSize:20,

    timeLimit:85,

    hints:2,

    lives:3,

    music:"octopus_cave.mp3",

    background:"octopus_cave.jpg",

    weather:"deepOcean",

    checkpoint:true,

    question:
    "How many arms does an octopus have?",

    options:[
        "8",
        "6",
        "4",
        "10"
    ],

    answer:"8",

    reward:{
        coins:7000,
        xp:3500,
        gems:130
    },

    maze:{

        layout:"octopusMaze",

        player:"🧒",

        start:"🌊",

        end:"🏛",

        objects:[

            {
                type:"octopus",

                row:10,

                col:10,

                movement:"expand",

                speed:2
            },

            {
                type:"tentacle",

                row:9,

                col:10,

                movement:"vertical",

                minRow:7,

                maxRow:12,

                speed:2
            },

            {
                type:"tentacle",

                row:10,

                col:8,

                movement:"horizontal",

                minCol:6,

                maxCol:11,

                speed:2
            },

            {
                type:"jellyfish",

                row:6,

                col:14,

                movement:"vertical",

                minRow:4,

                maxRow:9,

                speed:2
            },

            {
                type:"bubbleLift",

                row:15,

                col:5
            },

            {
                type:"pearl",

                row:3,

                col:16
            }

        ]

    }

},

/*==========================================
            LEVEL 180
==========================================*/

{
    level:180,

    title:"🏛 Ocean Temple",

    description:
    "After crossing countless underwater dangers, Aryan finally reaches the Ancient Ocean Temple. The sacred Ocean Heart Crystal is hidden inside, but only those who solve the final challenge may claim it.",

    guide:
    "Collect the Pearl Key, unlock the temple gate and reach the Ocean Heart Crystal.",

    difficulty:"Medium",

    mazeSize:20,

    timeLimit:80,

    hints:1,

    lives:3,

    music:"ocean_temple.mp3",

    background:"ocean_temple.jpg",

    weather:"holyLight",

    checkpoint:true,

    question:
    "Which object unlocks the Ocean Temple?",

    options:[
        "Pearl Key",
        "Sword",
        "Shield",
        "Torch"
    ],

    answer:"Pearl Key",

    reward:{
        coins:8000,
        xp:4000,
        gems:150,
        badge:"🌊 Ocean Champion",
        crystal:"💎 Ocean Heart Crystal"
    },

    maze:{

        layout:"temple",

        player:"🧒",

        start:"🌊",

        end:"💎",

        objects:[

            {
                type:"pearlKey",

                row:16,

                col:3
            },

            {
                type:"templeGate",

                row:8,

                col:15
            },

            {
                type:"shark",

                row:12,

                col:8,

                movement:"path",

                path:[
                    {row:12,col:8},
                    {row:12,col:14},
                    {row:15,col:14},
                    {row:15,col:8}
                ],

                speed:3
            },

            {
                type:"jellyfish",

                row:5,

                col:9,

                movement:"vertical",

                minRow:3,

                maxRow:9,

                speed:3
            },

            {
                type:"current",

                row:9,

                col:5,

                direction:"right",

                strength:2
            },

            {
                type:"octopus",

                row:10,

                col:10,

                movement:"expand",

                speed:2
            },

            {
                type:"oceanCrystal",

                row:18,

                col:18
            }

        ]

    }

},

/*==========================================
            LEVEL 181
==========================================*/

{
    level:181,

    title:"🚀 Space Launch Base",

    description:
    "Aryan enters the Space Launch Base. Before reaching outer space, he must cross the launch area filled with moving cargo robots and rocket boosters.",

    guide:
    "Avoid the moving robots and reach the launch rocket.",

    difficulty:"Medium",

    mazeSize:22,

    timeLimit:80,

    hints:1,

    lives:3,

    music:"space_launch.mp3",

    background:"space_launch.jpg",

    weather:"stars",

    checkpoint:true,

    question:"Which planet do humans live on?",

    options:[
        "Earth",
        "Mars",
        "Venus",
        "Jupiter"
    ],

    answer:"Earth",

    reward:{
        coins:8200,
        xp:4100,
        gems:155
    },

    maze:{

        layout:"launchBase",

        player:"🧑‍🚀",

        start:"🚀",

        end:"🛰",

        objects:[

            {
                type:"robot",

                row:6,

                col:4,

                movement:"horizontal",

                minCol:3,

                maxCol:12,

                speed:2
            },

            {
                type:"robot",

                row:12,

                col:10,

                movement:"horizontal",

                minCol:8,

                maxCol:17,

                speed:3
            },

            {
                type:"rocketFire",

                row:15,

                col:8,

                movement:"blink",

                interval:2
            }

        ]

    }

},

/*==========================================
            LEVEL 182
==========================================*/

{
    level:182,

    title:"🛰 Space Station",

    description:
    "Aryan reaches the International Space Station where floating platforms constantly move through zero gravity.",

    guide:
    "Use moving platforms to cross the station.",

    difficulty:"Medium",

    mazeSize:22,

    timeLimit:78,

    hints:1,

    lives:3,

    music:"space_station.mp3",

    background:"space_station.jpg",

    weather:"zeroGravity",

    checkpoint:true,

    question:"What keeps astronauts floating?",

    options:[
        "Zero Gravity",
        "Wind",
        "Rain",
        "Cloud"
    ],

    answer:"Zero Gravity",

    reward:{
        coins:8400,
        xp:4200,
        gems:160
    },

    maze:{

        layout:"spaceStation",

        player:"🧑‍🚀",

        start:"🛰",

        end:"⭐",

        objects:[

            {
                type:"platform",

                row:5,

                col:6,

                movement:"horizontal",

                minCol:4,

                maxCol:12,

                speed:2
            },

            {
                type:"platform",

                row:11,

                col:10,

                movement:"vertical",

                minRow:8,

                maxRow:15,

                speed:2
            },

            {
                type:"satellite",

                row:8,

                col:16,

                movement:"circular",

                radius:2,

                speed:1
            }

        ]

    }

},
















];

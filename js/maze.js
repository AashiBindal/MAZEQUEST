/*==========================================
        MAZE QUEST
        MAIN CONTROLLER
==========================================*/

// ==========================================
// Elements
// ==========================================

const canvas = document.getElementById("mazeCanvas");
const ctx = canvas.getContext("2d");

const playerName = document.getElementById("playerName");
const playerAvatar = document.getElementById("playerAvatar");

const levelNumber = document.getElementById("levelNumber");
const difficultyMode = document.getElementById("difficultyMode");

const coinsText = document.getElementById("coins");
const xpText = document.getElementById("xp");
const livesText = document.getElementById("lives");
const hintsText = document.getElementById("hints");

const mazeSizeText = document.getElementById("mazeSize");
const stepCounter = document.getElementById("stepCounter");

const timerText = document.getElementById("timer");

const hintBtn = document.getElementById("hintBtn");
const restartBtn = document.getElementById("restartBtn");
const pauseBtn = document.getElementById("pauseBtn");
const backBtn = document.getElementById("backBtn");

const loadingScreen =
    document.getElementById("loadingScreen");

const winPopup =
    document.getElementById("winPopup");

const pausePopup =
    document.getElementById("pausePopup");

const gameOverPopup =
    document.getElementById("gameOverPopup");

const nextLevelBtn =
    document.getElementById("nextLevelBtn");

const playAgainBtn =
    document.getElementById("playAgainBtn");

const dashboardBtn =
    document.getElementById("dashboardBtn");

const resumeBtn =
    document.getElementById("resumeBtn");

const retryBtn =
    document.getElementById("retryBtn");


// ==========================================
// Load Player
// ==========================================

let player =
    JSON.parse(localStorage.getItem("player"));

if (!player) {

    window.location.href = "login.html";

}

playerName.textContent =
    player.name || "Player";

playerAvatar.textContent =
    player.avatar || "🧙";

coinsText.textContent =
    player.coins || 0;

xpText.textContent =
    player.xp || 0;


// ==========================================
// Difficulty & Level
// ==========================================

const difficulty =
    localStorage.getItem("difficulty") || "Easy";

const level =
    Number(
        localStorage.getItem("selectedLevel")
    ) || 1;

levelNumber.innerHTML =
    "LEVEL " + level;

difficultyMode.innerHTML =
    difficulty.toUpperCase() + " MODE";


// ==========================================
// Load Current Story
// ==========================================

let currentStory = null;

if (difficulty === "Medium") {

    currentStory = mediumStories.find(
        story => story.level === level 
    );

}

if (currentStory) {

    console.log("Current Story:", currentStory);

} else {

    console.log("Story not found");

}


// ==========================================
// Difficulty Settings
// ==========================================

let GRID_SIZE = 10;

let TOTAL_HINTS = Infinity;

let TIME_LIMIT = 0;

switch (difficulty) {

    case "Easy":

        GRID_SIZE = 10;

        TOTAL_HINTS = Infinity;

        TIME_LIMIT = 0;

        break;

    case "Medium":

        GRID_SIZE = 20;

        TOTAL_HINTS = 3;

        TIME_LIMIT = 60;

        break;

    case "Extreme":

        GRID_SIZE = 35;

        TOTAL_HINTS = 0;

        TIME_LIMIT = 30;

        break;

}

if (difficulty === "Medium" && currentStory) {

    if (currentStory.mazeSize) {
        GRID_SIZE = currentStory.mazeSize;
    }

    if (currentStory.timeLimit) {
        TIME_LIMIT = currentStory.timeLimit;
    }

    if (typeof currentStory.hints === "number") {
        TOTAL_HINTS = currentStory.hints;
    }

}

mazeSizeText.innerHTML =
    GRID_SIZE + " × " + GRID_SIZE;

hintsText.innerHTML =
    TOTAL_HINTS === Infinity
        ?
        "∞"
        :
        TOTAL_HINTS;


// ==========================================
// Canvas Size
// ==========================================

canvas.width = 700;
canvas.height = 700;

const CELL_SIZE =
    canvas.width / GRID_SIZE;


// ==========================================
// Game Variables
// ==========================================

let maze = [];

let currentLevelData = null;
let currentObjects = [];
let collectedKeys = [];
let objectAnimInterval = null;

let timer = TIME_LIMIT;

let gamePaused = false;

let gameWon = false;

let gameStarted = false;
/*==========================================
        MAZE ENGINE
        PART-2
==========================================*/

// ==========================================
// Cell Class
// ==========================================

class Cell {

    constructor(row, col) {

        this.row = row;

        this.col = col;

        this.visited = false;

        this.walls = {

            top: true,

            right: true,

            bottom: true,

            left: true

        };

    }

}

// ==========================================
// Create Empty Grid
// ==========================================

function createGrid() {

    maze = [];

    for (let r = 0; r < GRID_SIZE; r++) {

        let row = [];

        for (let c = 0; c < GRID_SIZE; c++) {

            row.push(

                new Cell(r, c)

            );

        }

        maze.push(row);

    }

}

// ==========================================
// Get Cell
// ==========================================

function getCell(r, c) {

    if (

        r < 0 ||

        c < 0 ||

        r >= GRID_SIZE ||

        c >= GRID_SIZE

    ) {

        return null;

    }

    return maze[r][c];

}

// ==========================================
// Seeded Random Generator
// (Same level = Same maze)
// ==========================================

let seed = 0;

function setSeed(level) {

    if (difficulty === "Easy") {

        seed = 1000 + level;

    }

    else if (difficulty === "Medium") {

        seed = 2000 + level;

    }

    else {

        seed = 3000 + level;

    }

}

function random() {

    seed =

        (seed * 9301 + 49297) % 233280;

    return seed / 233280;

}

// ==========================================
// Shuffle Array
// ==========================================

function shuffle(array) {

    for (

        let i = array.length - 1;

        i > 0;

        i--

    ) {

        const j =

            Math.floor(

                random() * (i + 1)

            );

        [

            array[i],

            array[j]

        ]

            =

            [

                array[j],

                array[i]

            ];

    }

}

// ==========================================
// Remove Wall
// ==========================================

function removeWalls(a, b) {

    let dx = b.col - a.col;

    let dy = b.row - a.row;

    if (dx === 1) {

        a.walls.right = false;

        b.walls.left = false;

    }

    else if (dx === -1) {

        a.walls.left = false;

        b.walls.right = false;

    }

    else if (dy === 1) {

        a.walls.bottom = false;

        b.walls.top = false;

    }

    else if (dy === -1) {

        a.walls.top = false;

        b.walls.bottom = false;

    }

}
/*==========================================
        MAZE GENERATOR
        PART-3
==========================================*/

// ==========================================
// Get Unvisited Neighbours
// ==========================================

function getNeighbours(cell) {

    const neighbours = [];

    const top =
        getCell(cell.row - 1, cell.col);

    const right =
        getCell(cell.row, cell.col + 1);

    const bottom =
        getCell(cell.row + 1, cell.col);

    const left =
        getCell(cell.row, cell.col - 1);

    if (top && !top.visited) {

        neighbours.push(top);

    }

    if (right && !right.visited) {

        neighbours.push(right);

    }

    if (bottom && !bottom.visited) {

        neighbours.push(bottom);

    }

    if (left && !left.visited) {

        neighbours.push(left);

    }

    shuffle(neighbours);

    return neighbours;

}

// ==========================================
// Recursive Backtracking
// ==========================================

function carveMaze(current) {

    current.visited = true;

    const neighbours =
        getNeighbours(current);

    for (const next of neighbours) {

        if (!next.visited) {

            removeWalls(current, next);

            carveMaze(next);

        }

    }

}

// ==========================================
// Generate Maze
// ==========================================

function generateMaze() {

    createGrid();

    setSeed(level);

    carveMaze(

        maze[0][0]

    );

    // Entrance

    maze[0][0].walls.left = false;

    // Exit

    maze[GRID_SIZE - 1][GRID_SIZE - 1]

        .walls.right = false;

}
/*==========================================
        DRAW MAZE
        PART-4
==========================================*/

// ==========================================
// Draw Complete Maze
// ==========================================

function drawMaze() {

    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );

    ctx.lineWidth = 3;

    ctx.lineCap = "round";

    ctx.strokeStyle = "#00D4FF";

    for (let r = 0; r < GRID_SIZE; r++) {

        for (let c = 0; c < GRID_SIZE; c++) {

            const cell = maze[r][c];

            const x = c * CELL_SIZE;

            const y = r * CELL_SIZE;

            // Top Wall

            if (cell.walls.top) {

                ctx.beginPath();

                ctx.moveTo(x, y);

                ctx.lineTo(

                    x + CELL_SIZE,

                    y

                );

                ctx.stroke();

            }

            // Right Wall

            if (cell.walls.right) {

                ctx.beginPath();

                ctx.moveTo(

                    x + CELL_SIZE,

                    y

                );

                ctx.lineTo(

                    x + CELL_SIZE,

                    y + CELL_SIZE

                );

                ctx.stroke();

            }

            // Bottom Wall

            if (cell.walls.bottom) {

                ctx.beginPath();

                ctx.moveTo(

                    x,

                    y + CELL_SIZE

                );

                ctx.lineTo(

                    x + CELL_SIZE,

                    y + CELL_SIZE

                );

                ctx.stroke();

            }

            // Left Wall

            if (cell.walls.left) {

                ctx.beginPath();

                ctx.moveTo(

                    x,

                    y

                );

                ctx.lineTo(

                    x,

                    y + CELL_SIZE

                );

                ctx.stroke();

            }

        }

    }

    drawStart();

    drawExit();

}
/*==========================================
        START CELL
==========================================*/

function drawStart() {

    ctx.fillStyle = "#00FF88";

    ctx.fillRect(

        4,

        4,

        CELL_SIZE - 8,

        CELL_SIZE - 8

    );

}
/*==========================================
        EXIT CELL
==========================================*/

function drawExit() {

    const x =

        (GRID_SIZE - 1)

        *

        CELL_SIZE;

    const y =

        (GRID_SIZE - 1)

        *

        CELL_SIZE;

    ctx.fillStyle = "#FF4D6D";

    ctx.fillRect(

        x + 4,

        y + 4,

        CELL_SIZE - 8,

        CELL_SIZE - 8

    );

}
/*==========================================
        INITIALIZE MAZE
==========================================*/

function initMaze() {

    playerPos.row = 0;

    playerPos.col = 0;

    totalSteps = 0;

    stepCounter.innerHTML = "Steps : 0";

    generateMaze();

    // 👇 YAHAN ye code add karo
    if (difficulty === "Medium") {

        currentLevelData = mediumStories.find(
            story => story.level === level
        );

    }

    else if (difficulty === "Easy") {

        currentLevelData = easyStories.find(
            story => story.level === level
        );

    }

    else {

        currentLevelData = extremeStories.find(
            story => story.level === level
        );

    }

    

currentObjects = currentLevelData?.maze?.objects
    ? JSON.parse(JSON.stringify(currentLevelData.maze.objects))
    : [];


    collectedKeys = [];

    renderMaze();

    drawPlayer();

    if (loadingScreen) {

        loadingScreen.classList.add("hidden");

    }

    if (TIME_LIMIT > 0) {

        startTimer();

    }

    startObjectMovement();

}
/*==========================================
        REFRESH
==========================================*/

function refreshMaze() {

    renderMaze();

}
/*==========================================
        PREMIUM DRAWING EFFECTS
        PART-5
==========================================*/

// ==========================================
// Draw Start Portal
// ==========================================

function drawStartPortal() {

    const x = CELL_SIZE / 2;

    const y = CELL_SIZE / 2;

    const gradient = ctx.createRadialGradient(
        x,
        y,
        5,
        x,
        y,
        CELL_SIZE / 2
    );

    gradient.addColorStop(0, "#00FF88");
    gradient.addColorStop(.6, "rgba(0,255,136,.45)");
    gradient.addColorStop(1, "rgba(0,255,136,0)");

    ctx.beginPath();

    ctx.fillStyle = gradient;

    ctx.arc(

        x,

        y,

        CELL_SIZE / 2,

        0,

        Math.PI * 2

    );

    ctx.fill();

}

// ==========================================
// Draw Exit Portal
// ==========================================

function drawExitPortal() {

    const x =
        (GRID_SIZE - 1) * CELL_SIZE +
        CELL_SIZE / 2;

    const y =
        (GRID_SIZE - 1) * CELL_SIZE +
        CELL_SIZE / 2;

    const gradient = ctx.createRadialGradient(
        x,
        y,
        5,
        x,
        y,
        CELL_SIZE / 2
    );

    gradient.addColorStop(0, "#FF4D6D");
    gradient.addColorStop(.6, "rgba(255,77,109,.45)");
    gradient.addColorStop(1, "rgba(255,77,109,0)");

    ctx.beginPath();

    ctx.fillStyle = gradient;

    ctx.arc(

        x,

        y,

        CELL_SIZE / 2,

        0,

        Math.PI * 2

    );

    ctx.fill();

}
// ==========================================
// Draw Finish Flag
// ==========================================

function drawFinishFlag() {

    const x =
        (GRID_SIZE - 1) * CELL_SIZE +
        CELL_SIZE / 2;

    const y =
        (GRID_SIZE - 1) * CELL_SIZE +
        CELL_SIZE / 2;

    ctx.font =
        (CELL_SIZE * 0.55) + "px Arial";

    ctx.textAlign = "center";

    ctx.textBaseline = "middle";

    ctx.fillText(

        "🏁",

        x,

        y

    );

}
// ==========================================
// Draw Better Walls
// ==========================================

function applyWallStyle() {

    ctx.strokeStyle = "#00D4FF";

    ctx.lineWidth = 3;

    ctx.shadowColor = "#00D4FF";

    ctx.shadowBlur = 12;

}
// ==========================================
// Premium Refresh
// ==========================================

function renderMaze() {

    applyWallStyle();

    drawMaze();

    drawStartPortal();

    drawExitPortal();

    drawFinishFlag();

    drawObjects();

    drawPlayer();

}
function drawObjects(){

    currentObjects.forEach(object=>{

        switch(object.type){

            case "key":

                drawKey(object);

                break;

            case "gate":

                drawGate(object);

                break;

        }

    });

}
/*==========================================
        OBJECT ICONS
==========================================*/

const OBJECT_ICONS = {

    key: "🔑", templeKey: "🔑", goldKey: "🔑", desertKey: "🔑",
    iceKey: "🔑", hauntedKey: "🔑", fireKey: "🔑", pearlKey: "🔑",
    energyKey: "🔑", galaxyKey: "🔑", treasureKey: "🔑",

    gate: "🚪", bridgeGate: "🚪", finalGate: "🚪", templeGate: "🚪",
    magicGate: "🚪", stoneDoor: "🚪", iceGate: "🚪", magicDoor: "🚪",
    secretDoor: "🚪", fireGate: "🚪", pearlGate: "🚪", spaceGate: "🚪",
    treasureDoor: "🚪", sunGate: "🚪",

    coin: "🪙", goldCoin: "🪙",

    heart: "❤️",

    coral: "🪸", bubble: "🫧", bubbleLift: "🫧",

    tree: "🌳", snowTree: "🌲", palmTree: "🌴", bush: "🌿",

    compass: "🧭",

    lion: "🦁", tiger: "🐯", snake: "🐍", monkey: "🐒", banana: "🍌",
    bat: "🦇", wolf: "🐺", dog: "🐕", crab: "🦀", fish: "🐟",
    shark: "🦈", jellyfish: "🪼", octopus: "🐙", tentacle: "🦑",
    eagle: "🦅", parrot: "🦜", scorpion: "🦂", camel: "🐪", dolphin: "🐬",

    crystal: "💎", snowCrystal: "❄️", fireCrystal: "🔥",
    coolCrystal: "🧊", sunCrystal: "☀️", spaceCrystal: "💎",
    energyCrystal: "💎", oceanCrystal: "💎", phoenixCrystal: "🔥",
    shadowCrystal: "🔮", frozenCrystal: "💙",

    treasure: "🏆", treasureChest: "🎁",

    diamond: "💎", pearl: "🦪",

    guardian: "🛡️", galaxyGuard: "🛡️", eliteGuard: "🛡️",
    eliteAlien: "👽", sunGuardian: "🛡️",

    ghost: "👻", skeleton: "💀", giantSpider: "🕷️", spiderWeb: "🕸️",
    darkKing: "👑", darkMagic: "🌀",

    torch: "🔥", lantern: "🏮", lever: "🔧",

    river: "🌊", water: "💧", waterBottle: "🥤", oasis: "🏝️",
    bridge: "🌉", brokenBridge: "🌉", movingBridge: "🌉",
    iceBridge: "🌉", crackedIce: "🧊", iceTile: "🧊",

    lava: "🌋", fireball: "🔥", heatZone: "🔥", eruption: "🌋",
    fallingRock: "🪨", fireSwitch: "🔘", babyDragon: "🐲",
    fireDragon: "🐉", dragonEgg: "🥚",

    umbrella: "☂️", police: "👮", movingCar: "🚗", bus: "🚌",
    trafficSignal: "🚦", principal: "🧑‍💼",

    cactus: "🌵", sandstorm: "🌪️",

    hiddenPassage: "🕳️", trap: "⚠️",

    snowman: "⛄", blizzard: "❄️", iceQueen: "👸",

    ropeTrap: "🪢", pirate: "🏴‍☠️", pirateCaptain: "🏴‍☠️",
    cannon: "💣", whirlpool: "🌀", anchor: "⚓", current: "🌊",

    robot: "🤖", rocketFire: "🔥", platform: "🟦", satellite: "🛰️",
    meteor: "☄️", moonDrone: "🤖", crater: "🕳️", jumpPad: "⬆️",
    alien: "👽", energyOrb: "🔵", ufo: "🛸", fuelCell: "🔋",
    blackHole: "⚫", laser: "🔴", portal: "🌀", drone: "🤖",
    shockwave: "💥", wormhole: "🌀", galaxyCrown: "👑",
    cosmicRift: "🌌", guardianDrone: "🤖", rotatingLaser: "🔴",
    reactorCore: "⚛️", teleporter: "🌀", laserWall: "🔴",
    laserStorm: "⚡", guardianKing: "👑", galaxyCore: "🌌",

    gift: "🎁", badge: "🎖️", road: "🛣️", desertCrown: "👑"

};

function getObjectIcon(type) {

    return OBJECT_ICONS[type] || "❓";

}

/*==========================================
        OBJECT CATEGORIES (behavior)
==========================================*/

const COLLECTIBLE_TYPES = [
    "key","templeKey","goldKey","desertKey","iceKey","hauntedKey","fireKey",
    "pearlKey","energyKey","galaxyKey","treasureKey",
    "coin","goldCoin","crystal","snowCrystal","fireCrystal","coolCrystal",
    "sunCrystal","spaceCrystal","energyCrystal","oceanCrystal","phoenixCrystal",
    "shadowCrystal","frozenCrystal","diamond","pearl","treasure","treasureChest",
    "compass","waterBottle","umbrella","banana","dragonEgg","energyOrb",
    "fuelCell","gift","badge","desertCrown","galaxyCrown","galaxyCore"
];

const HEART_TYPES = ["heart"];

const HAZARD_TYPES = [
    "lion","tiger","snake","wolf","dog","shark","jellyfish","scorpion",
    "ghost","skeleton","giantSpider","darkKing","fireball","lava","eruption",
    "fallingRock","babyDragon","fireDragon","movingCar","cannon","whirlpool",
    "pirate","pirateCaptain","meteor","alien","ufo","blackHole","laser",
    "rotatingLaser","laserWall","laserStorm","guardianKing","guardian",
    "sunGuardian","eliteAlien","eliteGuard","galaxyGuard","robot","moonDrone",
    "drone","guardianDrone","crab","octopus","monkey","bat","sandstorm",
    "blizzard","trap","cosmicRift","shockwave","iceQueen"
];

const GATE_TYPES = [
    "gate","bridgeGate","finalGate","templeGate","magicGate","stoneDoor",
    "iceGate","magicDoor","secretDoor","fireGate","pearlGate","spaceGate",
    "treasureDoor","sunGate"
];

/*==========================================
        DRAW ALL OBJECTS
==========================================*/

function drawObjects() {

    currentObjects.forEach(object => {

        const x = object.col * CELL_SIZE + CELL_SIZE / 2;
        const y = object.row * CELL_SIZE + CELL_SIZE / 2;

        ctx.font = (CELL_SIZE * 0.5) + "px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillText(getObjectIcon(object.type), x, y);

    });

}

/*==========================================
        OBJECT MOVEMENT (Animated)
==========================================*/

function startObjectMovement() {

    if (objectAnimInterval) {

        clearInterval(objectAnimInterval);

    }

    objectAnimInterval = setInterval(() => {

        if (gamePaused || gameWon) {

            return;

        }

        let moved = false;

        currentObjects.forEach(object => {

            if (!object.movement) return;

            const speed = object.speed || 1;

            switch (object.movement) {

                case "horizontal": {

                    const minCol = object.minCol ?? object.startCol ?? 0;
                    const maxCol = object.maxCol ?? object.endCol ?? (GRID_SIZE - 1);

                    if (object._dir === undefined) object._dir = 1;

                    object.col += object._dir * speed * 0.2;

                    if (object.col >= maxCol) { object.col = maxCol; object._dir = -1; }
                    else if (object.col <= minCol) { object.col = minCol; object._dir = 1; }

                    moved = true;
                    break;
                }

                case "vertical": {

                    const minRow = object.minRow ?? 0;
                    const maxRow = object.maxRow ?? (GRID_SIZE - 1);

                    if (object._dir === undefined) object._dir = 1;

                    object.row += object._dir * speed * 0.2;

                    if (object.row >= maxRow) { object.row = maxRow; object._dir = -1; }
                    else if (object.row <= minRow) { object.row = minRow; object._dir = 1; }

                    moved = true;
                    break;
                }

                case "random": {

                    object.row += (Math.random() - 0.5) * 0.4 * speed;
                    object.col += (Math.random() - 0.5) * 0.4 * speed;

                    object.row = Math.max(0, Math.min(GRID_SIZE - 1, object.row));
                    object.col = Math.max(0, Math.min(GRID_SIZE - 1, object.col));

                    moved = true;
                    break;
                }

                case "circle":
                case "circular": {

                    const radius = object.radius || 2;

                    if (object._angle === undefined) object._angle = 0;

                    const cr = object._centerRow ?? object.row;
                    const cc = object._centerCol ?? object.col;

                    object._centerRow = cr;
                    object._centerCol = cc;

                    object._angle += 0.05 * speed;

                    object.row = cr + Math.sin(object._angle) * radius;
                    object.col = cc + Math.cos(object._angle) * radius;

                    moved = true;
                    break;
                }

                case "path": {

                    if (!object.path || object.path.length === 0) return;

                    if (object._pathIndex === undefined) object._pathIndex = 0;

                    const target = object.path[object._pathIndex];

                    const dr = target.row - object.row;
                    const dc = target.col - object.col;

                    const dist = Math.sqrt(dr * dr + dc * dc);

                    if (dist < 0.3) {

                        object._pathIndex = (object._pathIndex + 1) % object.path.length;

                    } else {

                        object.row += (dr / dist) * 0.15 * speed;
                        object.col += (dc / dist) * 0.15 * speed;

                    }

                    moved = true;
                    break;
                }

            }

        });

        if (moved) {

            renderMaze();
            checkObjectCollision();

        }

    }, 150);

}

/*==========================================
        OBJECT COLLISION
==========================================*/

function checkObjectCollision() {

    for (let i = currentObjects.length - 1; i >= 0; i--) {

        const object = currentObjects[i];

        const objRow = Math.round(object.row);
        const objCol = Math.round(object.col);

        if (objRow !== playerPos.row || objCol !== playerPos.col) {
            continue;
        }

        // Collectible

        if (COLLECTIBLE_TYPES.includes(object.type)) {

            if (object.type.toLowerCase().includes("key")) {
                collectedKeys.push(object.type);
            }

            if (object.value) {

                player.coins = (player.coins || 0) + object.value;

                localStorage.setItem("player", JSON.stringify(player));

                refreshPlayerStats();

            }

            currentObjects.splice(i, 1);

            continue;

        }

        // Heart

        if (HEART_TYPES.includes(object.type)) {

            player.lives = (player.lives || 3) + 1;

            if (livesText) livesText.innerHTML = player.lives;

            currentObjects.splice(i, 1);

            continue;

        }

        // Gate (needs key)

        if (GATE_TYPES.includes(object.type)) {

            if (collectedKeys.length > 0) {

                currentObjects.splice(i, 1);

            } else {

                alert("🔒 This gate is locked! Find a key first.");

                pushPlayerBack();

            }

            continue;

        }

        // Hazard

        if (HAZARD_TYPES.includes(object.type)) {

            handlePlayerHit();

            continue;

        }

    }

}

function pushPlayerBack() {

    playerPos.row = 0;
    playerPos.col = 0;

    renderMaze();

}

function handlePlayerHit() {

    player.lives = (player.lives || 3) - 1;

    if (livesText) {
        livesText.innerHTML = Math.max(player.lives, 0);
    }

    if (player.lives <= 0) {

        gameOver();

    } else {

        alert("⚠️ You got caught! Back to start.");

        playerPos.row = 0;
        playerPos.col = 0;

        renderMaze();

    }

}








/*===========
===============================
        HINT SYSTEM (BFS)
        PART-6
==========================================*/

// ==========================================
// Find Shortest Path
// ==========================================

function findShortestPath() {

    const queue = [];

    const visited = [];

    const parent = [];

    for (let r = 0; r < GRID_SIZE; r++) {

        visited[r] = [];

        parent[r] = [];

        for (let c = 0; c < GRID_SIZE; c++) {

            visited[r][c] = false;

            parent[r][c] = null;

        }

    }

    queue.push({

        row: playerPos.row,

        col: playerPos.col

    });

    visited[playerPos.row][playerPos.col] = true;

    while (queue.length) {

        const current = queue.shift();

        if (

            current.row === GRID_SIZE - 1 &&

            current.col === GRID_SIZE - 1

        ) {

            break;

        }

        const cell =

            maze[current.row][current.col];

        // TOP

        if (

            !cell.walls.top &&

            current.row > 0 &&

            !visited[current.row - 1][current.col]

        ) {

            visited[current.row - 1][current.col] = true;

            parent[current.row - 1][current.col] = current;

            queue.push({

                row: current.row - 1,

                col: current.col

            });

        }

        // RIGHT

        if (

            !cell.walls.right &&

            current.col < GRID_SIZE - 1 &&

            !visited[current.row][current.col + 1]

        ) {

            visited[current.row][current.col + 1] = true;

            parent[current.row][current.col + 1] = current;

            queue.push({

                row: current.row,

                col: current.col + 1

            });

        }

        // BOTTOM

        if (

            !cell.walls.bottom &&

            current.row < GRID_SIZE - 1 &&

            !visited[current.row + 1][current.col]

        ) {

            visited[current.row + 1][current.col] = true;

            parent[current.row + 1][current.col] = current;

            queue.push({

                row: current.row + 1,

                col: current.col

            });

        }

        // LEFT

        if (

            !cell.walls.left &&

            current.col > 0 &&

            !visited[current.row][current.col - 1]

        ) {

            visited[current.row][current.col - 1] = true;

            parent[current.row][current.col - 1] = current;

            queue.push({

                row: current.row,

                col: current.col - 1

            });

        }

    }

    const path = [];

    let node = {

        row: GRID_SIZE - 1,

        col: GRID_SIZE - 1

    };

    while (node) {

        path.unshift(node);

        node = parent[node.row][node.col];

    }

    return path;

}
/*==========================================
        DRAW HINT PATH
==========================================*/

function drawHint(path) {

    ctx.save();

    ctx.fillStyle = "rgba(255,215,0,.45)";

    for (const step of path) {

        ctx.fillRect(

            step.col * CELL_SIZE + 6,

            step.row * CELL_SIZE + 6,

            CELL_SIZE - 12,

            CELL_SIZE - 12

        );

    }

    ctx.restore();

}
/*==========================================
        SHOW HINT
==========================================*/

function showHint() {

    if (TOTAL_HINTS === 0) {

        alert("No hints available!");

        return;

    }

    const path =

        findShortestPath();

    renderMaze();

    drawHint(path);

    drawPlayer();

    if (TOTAL_HINTS !== Infinity) {

        TOTAL_HINTS--;

        hintsText.innerHTML =

            TOTAL_HINTS;

    }

}
/*==========================================
        HINT BUTTON
==========================================*/

hintBtn.addEventListener("click", () => {

    showHint();

});
/*==========================================
        WIN SYSTEM
        PART-7
==========================================*/

// ==========================================
// Win Level
// ==========================================

function completeLevel() {

    if (gameWon) {

        return;

    }

    gameWon = true;

    saveProgress();

    // Stop Timer

    if (typeof timerInterval !== "undefined") {

        clearInterval(timerInterval);

    }

    // Rewards

    let rewardCoins;
    let rewardXP;

    // Agar Medium/story-based reward available hai to wahi use karo

    if (currentStory && currentStory.reward) {

        rewardCoins = currentStory.reward.coins || 0;

        rewardXP = currentStory.reward.xp || 0;

    } else {

        // Easy / Extreme ke liye generic formula

        rewardCoins = level * 20;

        rewardXP = level * 10;

        if (level % 5 === 0) {

            rewardCoins += 100;

            rewardXP += 50;

        }

        if (level % 10 === 0) {

            rewardCoins += 300;

            rewardXP += 150;

        }

    }

    // Update Player

    player.coins =
        (player.coins || 0) + rewardCoins;

    player.xp =
        (player.xp || 0) + rewardXP;

    localStorage.setItem(

        "player",

        JSON.stringify(player)

    );

    refreshPlayerStats();

    // Update Popup

    document.getElementById("rewardCoins").innerHTML =
        rewardCoins;

    document.getElementById("rewardXP").innerHTML =
        rewardXP;

    // Show Popup

    winPopup.classList.remove("hidden");

}
/*==========================================
        SAVE PROGRESS
        (Difficulty-wise key, same as levels.js)
==========================================*/

function saveProgress() {

    const progressKey = difficulty + "_progress";

    let progress =

        JSON.parse(

            localStorage.getItem(progressKey)

        );

    if (!progress) {

        let startLevel = 1;

        if (difficulty === "Medium") startLevel = 101;

        if (difficulty === "Extreme") startLevel = 201;

        progress = {

            currentLevel: startLevel,

            completed: 0,

            coins: 0

        };

    }

    if (level >= progress.currentLevel) {

        progress.currentLevel = level + 1;

    }

    progress.completed =

        Math.max(

            progress.completed,

            level

        );

    localStorage.setItem(

        progressKey,

        JSON.stringify(progress)

    );

}
/*==========================================
        NEXT LEVEL
==========================================*/

function unlockNextLevel() {

    saveProgress();

    localStorage.setItem(

        "selectedLevel",

        level + 1

    );

}
/*==========================================
        BUTTON EVENTS
==========================================*/

nextLevelBtn.addEventListener(

    "click",

    () => {

        unlockNextLevel();

        window.location.href = "story.html";

    }

);

playAgainBtn.addEventListener(

    "click",

    () => {

        window.location.reload();

    }

);

dashboardBtn.addEventListener(

    "click",

    () => {

        window.location.href = "levels.html";

    }

);
/*==========================================
        CHECK WIN
==========================================*/

function checkWin() {

    if (

        playerPos.row === GRID_SIZE - 1 &&

        playerPos.col === GRID_SIZE - 1

    ) {

        completeLevel();

    }

}
/*==========================================
        UPDATE PLAYER PANEL
==========================================*/

function refreshPlayerStats() {

    coinsText.innerHTML =

        player.coins;

    xpText.innerHTML =

        player.xp||0;


}
/*==========================================
        GAME CONTROLLER
        PART-8
==========================================*/

// ==========================================
// Timer
// ==========================================

let timerInterval = null;

function startTimer() {

    if (TIME_LIMIT === 0) {

        timerText.innerHTML = "∞";

        return;

    }

    timer = TIME_LIMIT;

    timerText.innerHTML = timer;

    timerInterval = setInterval(() => {

        if (gamePaused || gameWon) {

            return;

        }

        timer--;

        timerText.innerHTML = timer;

        if (timer <= 0) {

            clearInterval(timerInterval);

            gameOver();

        }

    }, 1000);

}
// ==========================================
// Pause / Resume
// ==========================================

pauseBtn.addEventListener("click", () => {

    gamePaused = true;

    pausePopup.classList.remove("hidden");

});

resumeBtn.addEventListener("click", () => {

    gamePaused = false;

    pausePopup.classList.add("hidden");

});
// ==========================================
// Restart
// ==========================================

restartBtn.addEventListener("click", () => {

    location.reload();

});
// ==========================================
// Game Over
// ==========================================

function gameOver() {

    gamePaused = true;

    gameOverPopup.classList.remove("hidden");

}

retryBtn.addEventListener("click", () => {

    location.reload();

});
// ==========================================
// Back Button
// ==========================================

backBtn.addEventListener("click", () => {

    window.location.href = "levels.html";

});
// ==========================================
// Pause Popup — Restart / Exit
// ==========================================

const restartGameBtn = document.getElementById("restartGameBtn");

if (restartGameBtn) {

    restartGameBtn.addEventListener("click", () => {

        location.reload();

    });

}

const exitGameBtn = document.getElementById("exitGameBtn");

if (exitGameBtn) {

    exitGameBtn.addEventListener("click", () => {

        window.location.href = "levels.html";

    });

}
// ==========================================
// Game Over Popup — Dashboard
// ==========================================

const exitBtn = document.getElementById("exitBtn");

if (exitBtn) {

    exitBtn.addEventListener("click", () => {

        window.location.href = "levels.html";

    });

}
// ==========================================
// Keyboard Shortcuts
// ==========================================

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        gamePaused = !gamePaused;

        pausePopup.classList.toggle("hidden");

    }

    if (e.key === "r" || e.key === "R") {

        location.reload();

    }

});
// ==========================================
// Start Game
// ==========================================

window.addEventListener("load", () => {

    loadingScreen.classList.add("hidden");

    initMaze();

    refreshPlayerStats();

});
/*==========================================
        MAZE QUEST
        PLAYER MOVEMENT
==========================================*/

// ==========================================
// Player Position
// ==========================================

let playerPos = {

    row: 0,

    col: 0

};

let totalSteps = 0;

// ==========================================
// Draw Player
// ==========================================

function drawPlayer() {

    const size = CELL_SIZE * 0.45;

    const x =
        playerPos.col * CELL_SIZE +
        CELL_SIZE / 2;

    const y =
        playerPos.row * CELL_SIZE +
        CELL_SIZE / 2;

    ctx.beginPath();

    ctx.fillStyle = "#00D4FF";

    ctx.arc(

        x,

        y,

        size,

        0,

        Math.PI * 2

    );

    ctx.fill();

}

// ==========================================
// Move Player
// ==========================================

function movePlayer(direction) {

    if (gamePaused || gameWon) {

        return;

    }

    let moved = false;

    let current =
        maze[playerPos.row][playerPos.col];

    switch (direction) {

        case "up":

            if (!current.walls.top) {

                playerPos.row--;
                moved = true;
            }

            break;

        case "down":

            if (!current.walls.bottom) {

                playerPos.row++;
                moved = true;
            }

            break;

        case "left":

            if (!current.walls.left) {

                playerPos.col--;
                moved = true;
            }

            break;

        case "right":

            if (!current.walls.right) {

                playerPos.col++;
                moved = true;
            }

            break;

    }

    if(moved) {

        totalSteps++;
    }

    stepCounter.innerHTML =
        "Steps : " + totalSteps;

    renderMaze();

    checkWin();

    checkObjectCollision();

}
// ==========================================
// Keyboard Controls
// ==========================================

document.addEventListener("keydown", (e) => {

    switch(e.key){

        case "ArrowUp":
        case "w":
        case "W":
            movePlayer("up");
            break;

        case "ArrowDown":
        case "s":
        case "S":
            movePlayer("down");
            break;

        case "ArrowLeft":
        case "a":
        case "A":
            movePlayer("left");
            break;

        case "ArrowRight":
        case "d":
        case "D":
            movePlayer("right");
            break;
    }

});
// ==========================================
// Mobile Controls
// ==========================================

document
    .getElementById("upBtn")
    .addEventListener("click", () => {

        movePlayer("up");

    });

document
    .getElementById("downBtn")
    .addEventListener("click", () => {

        movePlayer("down");

    });

document
    .getElementById("leftBtn")
    .addEventListener("click", () => {

        movePlayer("left");

    });

document
    .getElementById("rightBtn")
    .addEventListener("click", () => {

        movePlayer("right");

    });
/*==========================================
        MAZE QUEST - LEVELS
==========================================*/

// ================================
// Elements
// ================================

const levelsGrid = document.getElementById("levelsGrid");

const difficultyTitle = document.getElementById("difficultyTitle");
const difficultyInfo = document.getElementById("difficultyInfo");

const playerName = document.getElementById("playerName");
const playerAvatar = document.getElementById("playerAvatar");

const currentLevel = document.getElementById("currentLevel");
const completedLevels = document.getElementById("completedLevels");
const coins = document.getElementById("coins");

const backBtn = document.getElementById("backBtn");

const particleContainer = document.getElementById("particles");
const cursorGlow = document.querySelector(".cursor-glow");


// ================================
// Load Player
// ================================

let player = JSON.parse(localStorage.getItem("player"));

if (!player) {

    window.location.href = "login.html";

}

playerName.textContent = player.name;
playerAvatar.textContent = player.avatar;

coins.textContent = player.coins || 0;


// ================================
// Difficulty
// ================================

const difficulty = localStorage.getItem("difficulty") || "Easy";

difficultyTitle.innerHTML = difficulty.toUpperCase() + " MODE";

switch (difficulty) {

    case "Easy":

        difficultyInfo.innerHTML =
            "10 × 10 Maze • Unlimited Hints";

        break;

    case "Medium":

        difficultyInfo.innerHTML =
            "20 × 20 Maze • 3 Hints • 60 sec";

        break;

    case "Extreme":

        difficultyInfo.innerHTML =
            "35 × 35 Maze • No Hints • 30 sec";

        break;

}


// ================================
// Level Range Per Difficulty
// ================================

let LEVEL_START = 1;
let TOTAL_LEVELS = 100;

if (difficulty === "Medium") {

    LEVEL_START = 101;
    TOTAL_LEVELS = 100; // Levels 101 - 200

} else if (difficulty === "Extreme") {

    LEVEL_START = 201;
    TOTAL_LEVELS = 100; // Levels 201 - 300 (CONFIRM with extreme.js)

} else {

    LEVEL_START = 1;
    TOTAL_LEVELS = 100; // Levels 1 - 100

}

const LEVEL_END = LEVEL_START + TOTAL_LEVELS - 1;


// ================================
// Progress (Difficulty Wise)
// PERMANENT FIX: Self-healing migration guard
// ================================

const progressKey = difficulty + "_progress";

let progress = JSON.parse(localStorage.getItem(progressKey));

// AGAR progress exist karta hai LEKIN currentLevel is difficulty
// ke valid range se bahar hai (purana/stale data), to auto-reset karo.
// Coins preserve rakhte hain, sirf level reset hota hai.

if (

    progress &&

    (

        progress.currentLevel < LEVEL_START ||

        progress.currentLevel > LEVEL_END + 1

    )

) {

    console.warn(

        "⚠ Stale progress detected for " +

        difficulty +

        ". Auto-fixing currentLevel from " +

        progress.currentLevel +

        " to " +

        LEVEL_START

    );

    progress = {

        currentLevel: LEVEL_START,

        completed: 0,

        coins: progress.coins || 0

    };

    localStorage.setItem(progressKey, JSON.stringify(progress));

}

// Agar progress bilkul exist hi nahi karta (bilkul naya player/mode)

if (!progress) {

    progress = {

        currentLevel: LEVEL_START,

        completed: 0,

        coins: 0

    };

    localStorage.setItem(progressKey, JSON.stringify(progress));

}

currentLevel.innerHTML = progress.currentLevel;

completedLevels.innerHTML = progress.completed;

coins.innerHTML = progress.coins;


// ================================
// Generate Levels
// ================================

levelsGrid.innerHTML = "";

for (let i = LEVEL_START; i <= LEVEL_END; i++) {

    const card = document.createElement("div");

    card.classList.add("level-card");

    // Unlock Logic

    if (i <= progress.currentLevel) {

        card.classList.add("unlocked");

    } else {

        card.classList.add("locked");

    }

    // Completed

    if (i < progress.currentLevel) {

        card.classList.remove("locked");

        card.classList.add("completed");

    }

    // Position within this difficulty's own range

    const relativeIndex = i - LEVEL_START + 1;

    // Reward

    if (relativeIndex % 5 === 0) {

        card.classList.add("reward");

    }

    // Boss

    if (relativeIndex % 10 === 0) {

        card.classList.add("boss");

    }

    // Card HTML

    let icon = "🧩";

    if (relativeIndex % 10 === 0) {

        icon = "👑";

    } else if (relativeIndex % 5 === 0) {

        icon = "🎁";

    }

    card.innerHTML = `

        <div style="font-size:40px;">
            ${icon}
        </div>

        <h3>LEVEL ${i}</h3>

        <p>

            ${
                i <= progress.currentLevel
                ? "Tap to Play"
                : "Locked"
            }

        </p>

    `;

    card.setAttribute("data-level", i);

    // Click

    if (i <= progress.currentLevel) {

        card.addEventListener("click", () => {

            localStorage.setItem("selectedLevel", i);

            localStorage.setItem("difficulty", difficulty);

            window.location.href = "story.html";

        });

    }

    levelsGrid.appendChild(card);

}


// ================================
// Particles
// ================================

for (let i = 0; i < 120; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    const size = Math.random() * 4 + 2;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (Math.random() * 10 + 8) + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particle.style.opacity = Math.random();

    particleContainer.appendChild(particle);

}


// ================================
// Cursor Glow
// ================================

document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = e.clientX + "px";

    cursorGlow.style.top = e.clientY + "px";

});


// ================================
// Back
// ================================

backBtn.addEventListener("click", () => {

    window.location.href = "difficulty.html";

});
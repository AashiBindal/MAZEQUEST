/*==========================================
        MAZE QUEST - DASHBOARD
==========================================*/

// ==========================================
// ELEMENTS
// ==========================================

const playerName = document.getElementById("playerName");
const playerAvatar = document.getElementById("playerAvatar");

const coins = document.getElementById("coins");
const stars = document.getElementById("stars");
const lives = document.getElementById("lives");

const currentLevel = document.getElementById("currentLevel");
const xpFill = document.getElementById("xpFill");

const particleContainer = document.getElementById("particles");
const cursorGlow = document.querySelector(".cursor-glow");

// Buttons
const continueBtn = document.getElementById("continueBtn");
const difficultyBtn = document.getElementById("difficultyBtn");
const levelsBtn = document.getElementById("levelsBtn");
const profileBtn = document.getElementById("profileBtn");
const leaderboardBtn = document.getElementById("leaderboardBtn");
const algorithmBtn = document.getElementById("algorithmBtn");
const achievementBtn = document.getElementById("achievementBtn");
const statisticsBtn = document.getElementById("statisticsBtn");
const settingsBtn = document.getElementById("settingsBtn");
const logoutBtn = document.getElementById("logoutBtn");

// ==========================================
// LOAD PLAYER DATA
// ==========================================

const player = JSON.parse(localStorage.getItem("player"));

if (player) {

    playerName.textContent = player.name;
    playerAvatar.textContent = player.avatar;

    coins.textContent = player.coins;
    stars.textContent = player.stars;

    lives.textContent = player.lives || 3;

    currentLevel.textContent = player.level;

    // XP = level × 10 (temporary logic)
    let xp = player.level * 10;

    if (xp > 100) xp = 100;

    xpFill.style.width = xp + "%";

}
else {

    // Login nahi hua
    window.location.href = "login.html";

}

// ==========================================
// FLOATING PARTICLES
// ==========================================

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

// ==========================================
// CURSOR GLOW
// ==========================================

document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

});

// ==========================================
// BUTTON NAVIGATION
// ==========================================

continueBtn.addEventListener("click", () => {

    window.location.href = "maze.html";

});

difficultyBtn.addEventListener("click", () => {

    window.location.href = "difficulty.html";

});

levelsBtn.addEventListener("click", () => {

    window.location.href = "levels.html";

});

profileBtn.addEventListener("click", () => {

    window.location.href = "profile.html";

});

leaderboardBtn.addEventListener("click", () => {

    window.location.href = "leaderboard.html";

});

settingsBtn.addEventListener("click", () => {

    window.location.href = "settings.html";

});

// ==========================================
// COMING SOON PAGES
// ==========================================

algorithmBtn.addEventListener("click", () => {

    alert("🧠 Algorithm Lab Coming Soon!");

});

achievementBtn.addEventListener("click", () => {

    alert("🏅 Achievements Coming Soon!");

});

statisticsBtn.addEventListener("click", () => {

    alert("📊 Statistics Coming Soon!");

});

// ==========================================
// LOGOUT
// ==========================================

logoutBtn.addEventListener("click", () => {

    const logout = confirm("Are you sure you want to logout?");

    if (logout) {

        localStorage.removeItem("player");

        window.location.href = "welcome.html";

    }

});
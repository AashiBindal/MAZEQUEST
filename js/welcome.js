/*=========================================
        MAZE QUEST - WELCOME SCREEN
=========================================*/

// ================================
// ELEMENTS
// ================================

const particleContainer = document.getElementById("particles");
const cursorGlow = document.querySelector(".cursor-glow");

const continueBtn = document.querySelector(".continue-btn");
const newGameBtn = document.getElementById("newGame");
const loginBtn = document.getElementById("login");
const leaderboardBtn = document.getElementById("leaderboard");
const settingsBtn = document.getElementById("settings");
const exitBtn = document.getElementById("exit");

const clickSound = document.getElementById("clickSound");
const bgMusic = document.getElementById("bgMusic");

// ================================
// FLOATING PARTICLES
// ================================

for (let i = 0; i < 150; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    const size = Math.random() * 4 + 2;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (Math.random() * 10 + 8) + "s";

    particle.style.animationDelay =
        (Math.random() * 8) + "s";

    particle.style.opacity = Math.random();

    particleContainer.appendChild(particle);

}

// ================================
// CONTINUE BUTTON
// ================================

const progress = localStorage.getItem("playerProgress");

if (!progress) {

    continueBtn.style.display = "none";

}

// ================================
// PLAY BUTTON SOUND
// ================================

function playClick() {

    if (clickSound) {

        clickSound.currentTime = 0;
        clickSound.play().catch(() => {});

    }

}

// ================================
// BACKGROUND MUSIC
// ================================

window.addEventListener("click", () => {

    if (bgMusic) {

        bgMusic.volume = 0.25;

        bgMusic.play().catch(() => {});

    }

}, { once: true });

// ================================
// NEW GAME
// ================================

newGameBtn.addEventListener("click", () => {

    playClick();

    localStorage.setItem("playerProgress", "Level1");

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = "login.html";

    }, 700);

});

// ================================
// CONTINUE
// ================================

continueBtn.addEventListener("click", () => {

    playClick();

    document.body.classList.add("fade-out");

    setTimeout(() => {

        window.location.href = "dashboard.html";

    }, 700);

});

// ================================
// LOGIN
// ================================

loginBtn.addEventListener("click", () => {

    playClick();

    window.location.href = "login.html";

});

// ================================
// LEADERBOARD
// ================================

leaderboardBtn.addEventListener("click", () => {

    playClick();

    alert("Leaderboard Coming Soon!");

});

// ================================
// SETTINGS
// ================================

settingsBtn.addEventListener("click", () => {

    playClick();

    alert("Settings Coming Soon!");

});

// ================================
// EXIT
// ================================

exitBtn.addEventListener("click", () => {

    playClick();

    const exitGame = confirm("Do you really want to exit Maze Quest?");

    if (exitGame) {

        window.close();

    }

});

// ================================
// MOUSE GLOW
// ================================

document.addEventListener("mousemove", (e) => {

    if (!cursorGlow) return;

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

});
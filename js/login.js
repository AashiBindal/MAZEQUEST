/*==========================================
        MAZE QUEST - LOGIN PAGE
==========================================*/

// ================================
// ELEMENTS
// ================================

const username = document.getElementById("username");
const email = document.getElementById("email");

const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");

const avatars = document.querySelectorAll(".avatar");

const particleContainer = document.getElementById("particles");
const cursorGlow = document.querySelector(".cursor-glow");

// ================================
// PLAYER DATA
// ================================

let selectedAvatar = "🧙";

// ================================
// FLOATING PARTICLES
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
        (Math.random() * 8) + "s";

    particle.style.opacity = Math.random();

    particleContainer.appendChild(particle);

}

// ================================
// AVATAR SELECTION
// ================================

avatars.forEach((avatar) => {

    avatar.addEventListener("click", () => {

        avatars.forEach(a => a.classList.remove("active"));

        avatar.classList.add("active");

        selectedAvatar = avatar.innerText;

    });

});

// ================================
// START GAME
// ================================

startBtn.addEventListener("click", () => {

    const playerName = username.value.trim();
    const playerEmail = email.value.trim();

    if (playerName === "") {

        alert("Please enter your player name!");

        username.focus();

        return;

    }

    // Player Data

    const player = {

        name: playerName,

        email: playerEmail,

        avatar: selectedAvatar,

        level: 1,

        coins: 0,

        stars: 0,

        difficulty: "",

        completedLevels: []

    };

    localStorage.setItem("player", JSON.stringify(player));

    window.location.href = "dashboard.html";

});

// ================================
// BACK BUTTON
// ================================

backBtn.addEventListener("click", () => {

    window.location.href = "welcome.html";

});

// ================================
// CURSOR GLOW
// ================================

document.addEventListener("mousemove", (e) => {

    if (!cursorGlow) return;

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

});

// ================================
// ENTER KEY SUPPORT
// ================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        startBtn.click();

    }

});

// ================================
// AUTO FILL (IF PLAYER EXISTS)
// ================================

const savedPlayer = JSON.parse(localStorage.getItem("player"));

if (savedPlayer) {

    username.value = savedPlayer.name || "";

    email.value = savedPlayer.email || "";

    avatars.forEach((avatar) => {

        if (avatar.innerText === savedPlayer.avatar) {

            avatar.classList.add("active");

            selectedAvatar = savedPlayer.avatar;

        } else {

            avatar.classList.remove("active");

        }

    });

}
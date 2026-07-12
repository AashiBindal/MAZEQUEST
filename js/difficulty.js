/*==========================================
        MAZE QUEST - DIFFICULTY PAGE
==========================================*/

// ==========================================
// ELEMENTS
// ==========================================

const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const extreme = document.getElementById("extreme");

const backBtn = document.getElementById("backBtn");

const particleContainer = document.getElementById("particles");
const cursorGlow = document.querySelector(".cursor-glow");

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
        (Math.random() * 5) + "s";

    particle.style.opacity = Math.random();

    particleContainer.appendChild(particle);

}

// ==========================================
// CURSOR GLOW
// ==========================================

document.addEventListener("mousemove", (e) => {

    if (!cursorGlow) return;

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

});

// ==========================================
// DIFFICULTY SELECT FUNCTION
// ==========================================

function selectDifficulty(level, element){

    // Remove previous selection
    document.querySelectorAll(".difficulty-card").forEach(card => {

        card.classList.remove("selected");

    });

    // Add selection
    element.classList.add("selected");

    // Save Difficulty
    localStorage.setItem("difficulty", level);

    // Update Player Object
    let player = JSON.parse(localStorage.getItem("player"));

    if(player){

        player.difficulty = level;

        localStorage.setItem("player", JSON.stringify(player));

    }

    // Animation Delay

    setTimeout(() => {

        window.location.href = "levels.html";

    },1000);

}

// ==========================================
// CARD EVENTS
// ==========================================

easy.addEventListener("click",()=>{

    selectDifficulty("Easy",easy);

});

medium.addEventListener("click",()=>{

    selectDifficulty("Medium",medium);

});

extreme.addEventListener("click",()=>{

    selectDifficulty("Extreme",extreme);

});

// ==========================================
// BACK BUTTON
// ==========================================

backBtn.addEventListener("click",()=>{

    window.location.href="dashboard.html";

});

// ==========================================
// LOAD PREVIOUS SELECTION
// ==========================================

const savedDifficulty = localStorage.getItem("difficulty");

if(savedDifficulty){

    if(savedDifficulty==="Easy"){

        easy.classList.add("selected");

    }

    else if(savedDifficulty==="Medium"){

        medium.classList.add("selected");

    }

    else if(savedDifficulty==="Extreme"){

        extreme.classList.add("selected");

    }

}

// ==========================================
// KEYBOARD SHORTCUTS
// ==========================================

document.addEventListener("keydown",(e)=>{

    switch(e.key){

        case "1":
            easy.click();
            break;

        case "2":
            medium.click();
            break;

        case "3":
            extreme.click();
            break;

        case "Escape":
            backBtn.click();
            break;

    }

});
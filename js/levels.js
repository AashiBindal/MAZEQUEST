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

if(!player){

    window.location.href="login.html";

}

playerName.textContent = player.name;
playerAvatar.textContent = player.avatar;

coins.textContent = player.coins || 0;


// ================================
// Difficulty
// ================================

const difficulty = localStorage.getItem("difficulty") || "Easy";

difficultyTitle.innerHTML = difficulty.toUpperCase()+" MODE";

switch(difficulty){

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
// Progress
// ================================

// ================================
// Progress (Difficulty Wise)
// ================================

const progressKey = difficulty + "_progress";

let progress = JSON.parse(localStorage.getItem(progressKey));

if(!progress){

    progress={

        currentLevel:1,

        completed:0,

        coins:0

    };

    localStorage.setItem(progressKey,JSON.stringify(progress));

}

currentLevel.innerHTML = progress.currentLevel;

completedLevels.innerHTML = progress.completed;

coins.innerHTML = progress.coins;

currentLevel.innerHTML=progress.currentLevel;

completedLevels.innerHTML=progress.completed;


// ================================
// Generate Levels
// ================================

const TOTAL_LEVELS = 100;
levelsGrid.innerHTML="";
for(let i=1;i<=TOTAL_LEVELS;i++){

    const card=document.createElement("div");

    card.classList.add("level-card");

    // Unlock Logic

    if(i<=progress.currentLevel){

        card.classList.add("unlocked");

    }

    else{

        card.classList.add("locked");

    }

    // Completed

    if(i < progress.currentLevel){

    card.classList.remove("locked");

    card.classList.add("completed");

}

    // Reward

    if(i%5===0){

        card.classList.add("reward");

    }

    // Boss

    if(i%10===0){

        card.classList.add("boss");

    }

    // Card HTML

    let icon="🧩";

    if(i%10===0){

        icon="👑";

    }

    else if(i%5===0){

        icon="🎁";

    }

    card.innerHTML=`

        <div style="font-size:40px;">
            ${icon}
        </div>

        <h3>LEVEL ${i}</h3>

        <p>

            ${
                i<=progress.currentLevel
                ? "Tap to Play"
                : "Locked"
            }

        </p>

    `;

    card.setAttribute("data-level", i);

    // Click

    if(i<=progress.currentLevel){

        card.addEventListener("click",()=>{

    localStorage.setItem("selectedLevel",i);

    localStorage.setItem("difficulty",difficulty);

    window.location.href="story.html";

});

    }

    levelsGrid.appendChild(card);

}


// ================================
// Particles
// ================================

for(let i=0;i<120;i++){

    const particle=document.createElement("div");

    particle.classList.add("particle");

    const size=Math.random()*4+2;

    particle.style.width=size+"px";
    particle.style.height=size+"px";

    particle.style.left=Math.random()*100+"%";

    particle.style.animationDuration=
    (Math.random()*10+8)+"s";

    particle.style.animationDelay=
    Math.random()*5+"s";

    particle.style.opacity=Math.random();

    particleContainer.appendChild(particle);

}


// ================================
// Cursor Glow
// ================================

document.addEventListener("mousemove",(e)=>{

    cursorGlow.style.left=e.clientX+"px";

    cursorGlow.style.top=e.clientY+"px";

});


// ================================
// Back
// ================================

backBtn.addEventListener("click",()=>{

    window.location.href="difficulty.html";

});

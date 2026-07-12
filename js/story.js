/*==========================================
        MAZE QUEST - STORY PAGE
==========================================*/

// ==========================================
// ELEMENTS
// ==========================================

const playerName = document.getElementById("playerName");
const playerAvatar = document.getElementById("playerAvatar");

const levelTitle = document.getElementById("levelTitle");
const difficultyText = document.getElementById("difficulty");

const storyTitle = document.getElementById("storyTitle");
const storyDescription = document.getElementById("storyDescription");

const guideMessage = document.getElementById("guideMessage");

const question = document.getElementById("question");
const options = document.querySelectorAll(".option");

const resultMessage = document.getElementById("resultMessage");

const rewardCoins = document.getElementById("rewardCoins");
const rewardXP = document.getElementById("rewardXP");
const rewardBonus = document.getElementById("rewardBonus");

const continueBtn = document.getElementById("continueBtn");
const backBtn = document.getElementById("backBtn");

const particles = document.getElementById("particles");
const cursorGlow = document.querySelector(".cursor-glow");

// ==========================================
// LOAD PLAYER
// ==========================================

let player = JSON.parse(localStorage.getItem("player"));

if(!player){

    window.location.href="login.html";

}

playerName.textContent = player.name;
playerAvatar.textContent = player.avatar;

// ==========================================
// LOAD LEVEL
// ==========================================

const level = Number(localStorage.getItem("selectedLevel")) || 1;

const difficulty = localStorage.getItem("difficulty") || "Easy";

levelTitle.innerHTML = "LEVEL " + level;

difficultyText.innerHTML = difficulty.toUpperCase() + " MODE";

// ==========================================
// STORY DATA
// ==========================================

const stories=[

{

title:"🌲 The Lost Forest",

description:"A magical forest hides an ancient gate. Solve the puzzle before entering the mysterious maze.",

guide:"Welcome explorer! Every maze hides a secret. Think carefully before answering.",

question:"I have keys but no locks. I have space but no rooms. You can enter but cannot leave. What am I?",

options:["Keyboard","House","Car","Forest"],

answer:"Keyboard"

},

{

title:"🏰 The Haunted Castle",

description:"Ghosts guard the castle entrance. Only the smartest explorers can enter.",

guide:"The spirits love riddles. Don't disappoint them!",

question:"What has hands but cannot clap?",

options:["Clock","Tree","Book","Robot"],

answer:"Clock"

},

{

title:"🏛 Ancient Temple",

description:"The temple door opens only for those who understand shadows.",

guide:"Light creates answers. Observe carefully.",

question:"What follows you everywhere but can never touch you?",

options:["Shadow","Cloud","Wind","Rain"],

answer:"Shadow"

}

];

// ==========================================
// SELECT STORY
// ==========================================

const currentStory = stories[(level-1)%stories.length];

storyTitle.innerHTML = currentStory.title;

storyDescription.innerHTML = currentStory.description;

guideMessage.innerHTML = currentStory.guide;

question.innerHTML = currentStory.question;

rewardCoins.innerHTML = (level*20)+" Coins";

rewardXP.innerHTML = (level*10)+" XP";

rewardBonus.innerHTML =

level%5===0

?

"Treasure Chest"

:

"Bonus Hint";

// ==========================================
// LOAD OPTIONS
// ==========================================

options.forEach((button,index)=>{

button.innerHTML=currentStory.options[index];

button.dataset.answer=currentStory.options[index];

});

// ==========================================
// ANSWER CHECK
// ==========================================

options.forEach(button=>{

button.addEventListener("click",()=>{

options.forEach(btn=>{

btn.disabled=true;

});

if(button.dataset.answer===currentStory.answer){

button.classList.add("correct");

resultMessage.innerHTML=

"✅ Correct! The gate has opened.";

continueBtn.disabled=false;

}

else{

button.classList.add("wrong");

resultMessage.innerHTML=

"❌ Wrong Answer! Try Again.";

setTimeout(()=>{

location.reload();

},1500);

}

});

});

// ==========================================
// CONTINUE
// ==========================================

continueBtn.addEventListener("click",()=>{

window.location.href="maze.html";

});

// ==========================================
// BACK
// ==========================================

backBtn.addEventListener("click",()=>{

window.location.href="levels.html";

});

// ==========================================
// CURSOR GLOW
// ==========================================

document.addEventListener("mousemove",(e)=>{

cursorGlow.style.left=e.clientX+"px";

cursorGlow.style.top=e.clientY+"px";

});

// ==========================================
// PARTICLES
// ==========================================

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

particles.appendChild(particle);

}
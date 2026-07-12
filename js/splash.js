/*====================================
        MAZE QUEST SPLASH SCREEN
=====================================*/


// ================================
// Loading Percentage
// ================================

const progress = document.querySelector(".progress");
const percentage = document.getElementById("percentage");
const loadingMessage = document.getElementById("loadingMessage");
const gameTip = document.getElementById("gameTip");



// ================================
// Loading Messages
// ================================

const loadingMessages = [

    "Initializing Maze Engine...",

    "Generating Maze World...",

    "Loading Puzzle Data...",

    "Preparing BFS Algorithm...",

    "Preparing DFS Algorithm...",

    "Preparing Backtracking...",

    "Creating Hidden Treasures...",

    "Spawning Enemies...",

    "Loading Sound Effects...",

    "Almost Ready..."

];


// ================================
// Random Tips
// ================================

const tips = [

"BFS always finds the shortest path.",

"Collect keys before reaching the exit.",

"Treasure chests contain bonus coins.",

"Hidden paths can unlock secret rewards.",

"Use hints wisely.",

"Every 5 levels gives special rewards.",

"Don't rush. Observe the maze carefully.",

"Backtracking explores every possible path."

];




// ================================
// Random Tip
// ================================

gameTip.innerHTML =
tips[Math.floor(Math.random()*tips.length)];




// ================================
// Floating Particles
// ================================

const particleContainer =
document.getElementById("particles");



for(let i=0;i<90;i++){

const particle=document.createElement("div");

particle.classList.add("particle");

const size=Math.random()*4+2;

particle.style.width=size+"px";

particle.style.height=size+"px";

particle.style.left=Math.random()*100+"%";

particle.style.animationDuration=
(Math.random()*10+8)+"s";

particle.style.animationDelay=
(Math.random()*8)+"s";

particle.style.opacity=Math.random();

particleContainer.appendChild(particle);

}




// ================================
// Loading Animation
// ================================

let value=0;

const loading=setInterval(()=>{

value++;

progress.style.width=value+"%";

percentage.innerHTML=value+"%";



// Change Message

if(value==10){

loadingMessage.innerHTML=
loadingMessages[1];

}

if(value==20){

loadingMessage.innerHTML=
loadingMessages[2];

}

if(value==35){

loadingMessage.innerHTML=
loadingMessages[3];

}

if(value==50){

loadingMessage.innerHTML=
loadingMessages[4];

}

if(value==65){

loadingMessage.innerHTML=
loadingMessages[5];

}

if(value==75){

loadingMessage.innerHTML=
loadingMessages[6];

}

if(value==85){

loadingMessage.innerHTML=
loadingMessages[7];

}

if(value==93){

loadingMessage.innerHTML=
loadingMessages[8];

}

if(value==99){

loadingMessage.innerHTML=
loadingMessages[9];

}



// Loading Complete

if(value>=100){

clearInterval(loading);

loadingMessage.innerHTML="Welcome Explorer!";



// Fade Effect

document.body.style.transition="1.2s";

document.body.style.opacity="0";



// Redirect

setTimeout(()=>{

window.location.href = "pages/welcome.html";

},1400);

}



},80);

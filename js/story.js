/*==========================================
        MAZE QUEST - STORY PAGE
==========================================*/

// ======================================
// HTML ELEMENTS
// ======================================

const playerName = document.getElementById("playerName");
const playerAvatar = document.getElementById("playerAvatar");

const difficultyMode = document.getElementById("difficultyMode");

const levelNumber = document.getElementById("levelNumber");
const worldName = document.getElementById("worldName");

const storyTitle = document.getElementById("storyTitle");
const storyDescription = document.getElementById("storyDescription");

const guideMessage = document.getElementById("guideMessage");

const question = document.getElementById("question");

const optionButtons =
document.querySelectorAll(".option-btn");

const rewardCoins =
document.getElementById("rewardCoins");

const rewardXP =
document.getElementById("rewardXP");

const rewardItem =
document.getElementById("rewardItem");

const submitBtn =
document.getElementById("submitBtn");

const startMaze =
document.getElementById("startMaze");

const skipStory =
document.getElementById("skipStory");

const resultBox =
document.getElementById("resultBox");

const resultText =
document.getElementById("resultText");

const progressFill =
document.getElementById("progressFill");

const progressText =
document.getElementById("progressText");

const backBtn =
document.getElementById("backBtn");

const particleContainer =
document.getElementById("particles");

const cursorGlow =
document.querySelector(".cursor-glow");

// ======================================
// LOAD PLAYER
// ======================================

const player =
JSON.parse(localStorage.getItem("player"));

if(!player){

    window.location.href="login.html";

}

playerName.textContent =
player.name || "Player";

playerAvatar.textContent =
player.avatar || "🧙";

// ======================================
// LOAD DIFFICULTY
// ======================================

const difficulty =
localStorage.getItem("difficulty") || "Easy";

difficultyMode.textContent =
difficulty + " Mode";

// ======================================
// LOAD LEVEL
// ======================================

const selectedLevel =
parseInt(localStorage.getItem("selectedLevel")) || 1;

levelNumber.textContent =
"LEVEL " + selectedLevel;

// ======================================
// SELECT STORY ARRAY
// ======================================

let stories=[];

switch(difficulty){

    case "Easy":

        stories=easyStories;

        break;

    case "Medium":

        stories=mediumStories;

        break;

    case "Extreme":

        stories=extremeStories;

        break;

}

// ======================================
// FIND CURRENT LEVEL
// ======================================

const currentStory =
stories.find(

story=>story.level===selectedLevel

);

// Safety Check

if(!currentStory){

    alert("Story not found!");

    window.location.href="levels.html";

}

// ======================================
// WORLD NAME
// ======================================

function getWorld(level){

       if (difficulty === "Medium") {

        if (level <= 110) return "🏠 School Journey";
        if (level <= 120) return "🌳 Emerald Jungle";
        if (level <= 130) return "🏴‍☠️ Pirate Island";
        if (level <= 140) return "🏜 Golden Desert";
        if (level <= 150) return "❄ Snow Kingdom";
        if (level <= 160) return "🏰 Haunted Castle";
        if (level <= 170) return "🌋 Volcano Kingdom";
        if (level <= 180) return "🌊 Ocean Kingdom";
        if (level <= 190) return "🚀 Space Galaxy";
        return "🌌 Galaxy Kingdom";

    }

    if(level<=10)
        return "🌲 Lost Forest";

    if(level<=20)
        return "🌿 Jungle Expedition";

    if(level<=30)
        return "❄ Ice Kingdom";

    if(level<=40)
        return "🏜 Desert Temple";

    if(level<=50)
        return "🌋 Volcano Island";

    if(level<=60)
        return "☁ Sky Kingdom";

    if(level<=70)
        return "🌊 Ocean World";

    if(level<=80)
        return "🚀 Space Galaxy";

    if(level<=90)
        return "⏳ Time Dimension";

    return "👑 Final Kingdom";

}

worldName.textContent =
getWorld(selectedLevel);
// ======================================
// DISPLAY STORY
// ======================================

storyTitle.textContent =
currentStory.title;

storyDescription.textContent =
currentStory.description;

guideMessage.textContent =
currentStory.guide;

question.textContent =
currentStory.question;


// ======================================
// LOAD OPTIONS
// ======================================

let selectedAnswer = "";

optionButtons.forEach((button,index)=>{

    button.textContent =
    currentStory.options[index];

    button.dataset.answer =
    currentStory.options[index];

    button.classList.remove(
        "correct",
        "wrong",
        "selected"
    );

});


// ======================================
// LOAD REWARDS
// ======================================

rewardCoins.textContent =
(currentStory.reward?.coins ?? 0) + " Coins";

rewardXP.textContent =
(currentStory.reward?.xp ?? 0) + " XP";

rewardItem.textContent =
currentStory.reward?.item ?? "Mystery Reward";


// ======================================
// RESET BUTTONS
// ======================================

submitBtn.disabled = true;

startMaze.disabled = true;

resultText.textContent = "";

resultBox.style.display = "none";


// ======================================
// OPTION SELECT
// ======================================

optionButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        optionButtons.forEach(btn=>{

            btn.classList.remove("selected");

        });

        button.classList.add("selected");

        selectedAnswer =
        button.dataset.answer;

        submitBtn.disabled = false;

    });

});


// ======================================
// STORY PROGRESS BAR
// ======================================

const totalLevels = stories.length;

const currentIndex = stories.findIndex(
    story => story.level === selectedLevel
);

const percent = Math.round(
    ((currentIndex + 1) / totalLevels) * 100
);

progressFill.style.width = percent + "%";
progressText.textContent = percent + "%";

// ======================================
// SUBMIT ANSWER
// ======================================

submitBtn.addEventListener("click",()=>{

    submitBtn.disabled = true;

    optionButtons.forEach(btn=>{

        btn.disabled = true;

    });

    const correctAnswer = currentStory.answer;

    if(selectedAnswer === correctAnswer){

        resultBox.style.display = "block";

        resultText.innerHTML =
        "🎉 Correct Answer! The maze gate has opened.";

        resultBox.classList.remove("wrong");
        resultBox.classList.add("correct");

        optionButtons.forEach(btn=>{

            if(btn.dataset.answer===correctAnswer){

                btn.classList.add("correct");

            }

        });

        // Enable Start Button

        startMaze.disabled = false;

    }

    else{

        resultBox.style.display="block";

        resultText.innerHTML =
        "❌ Wrong Answer! Try Again.";

        resultBox.classList.remove("correct");
        resultBox.classList.add("wrong");

        optionButtons.forEach(btn=>{

            if(btn.dataset.answer===correctAnswer){

                btn.classList.add("correct");

            }

            if(btn.dataset.answer===selectedAnswer){

                btn.classList.add("wrong");

            }

        });

        // Retry after 2 sec

        setTimeout(()=>{

            optionButtons.forEach(btn=>{

                btn.disabled=false;

                btn.classList.remove(
                    "correct",
                    "wrong",
                    "selected"
                );

            });

            submitBtn.disabled=true;

            selectedAnswer="";

            resultBox.style.display="none";

        },2000);

    }

});


// ======================================
// START MAZE
// ======================================

startMaze.addEventListener("click",()=>{

    // Save current level

    localStorage.setItem(
        "currentMazeLevel",
        selectedLevel
    );

    // Save progress

    let progress =
    JSON.parse(
    localStorage.getItem("progress")
    ) || {};

    progress.lastPlayed =
    selectedLevel;

    localStorage.setItem(
        "progress",
        JSON.stringify(progress)
    );

    window.location.href="maze.html";

});


// ======================================
// SKIP STORY
// ======================================

skipStory.addEventListener("click",()=>{

    window.location.href="maze.html";

});


// ======================================
// BACK BUTTON
// ======================================

backBtn.addEventListener("click",()=>{

    window.location.href="levels.html";

});

// ======================================
// FLOATING PARTICLES
// ======================================

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

    particle.style.opacity=
    Math.random();

    particleContainer.appendChild(particle);

}


// ======================================
// CURSOR GLOW
// ======================================

document.addEventListener("mousemove",(e)=>{

    if(cursorGlow){

        cursorGlow.style.left=
        e.clientX+"px";

        cursorGlow.style.top=
        e.clientY+"px";

    }

});


// ======================================
// PAGE ENTRY ANIMATION
// ======================================

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition=
        "opacity .8s ease";

        document.body.style.opacity="1";

    },100);

});


// ======================================
// KEYBOARD SHORTCUTS
// ======================================

document.addEventListener("keydown",(e)=>{

    // Enter = Submit

    if(e.key==="Enter" && !submitBtn.disabled){

        submitBtn.click();

    }

    // Escape = Back

    if(e.key==="Escape"){

        backBtn.click();

    }

});


// ======================================
// DEBUG
// ======================================

console.log("========== STORY ==========");

console.log("Difficulty :",difficulty);

console.log("Level :",selectedLevel);

console.log("Story :",currentStory.title);

console.log("Player :",player.name);

console.log("===========================");
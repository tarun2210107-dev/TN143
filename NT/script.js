let slides = document.querySelectorAll(".cinematic-slider .slide");
let sparkleBox = document.querySelector(".sparkles");

let index = 0;

function createSparkles() {

    for(let i=0; i<6; i++) {

        let heart = document.createElement("span");
        heart.innerHTML = "💖";

        heart.style.left = Math.random()*100 + "%";
        heart.style.bottom = "0px";

        sparkleBox.appendChild(heart);

        setTimeout(()=> heart.remove(),2000);
    }
}

setInterval(()=>{

    slides[index].classList.remove("active");

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");

    createSparkles();

}, 2000);


/* Typing Love Letter */
const letterText = `
My dearest Nandini ❤️,

From our first meet in LT,
to video calls during exams,
to bike rides that made my heart race...

Every moment with you feels magical.
I don’t need perfection,
I just need YOU.

Forever yours,
Tarun 💕
`;

let i = 0;
function typeLetter() {
    if (i < letterText.length) {
        document.querySelector(".letter p").innerHTML += letterText.charAt(i);
        i++;
        setTimeout(typeLetter, 50);
    }
}
window.onload = typeLetter;

/* Surprise Button */
function showLove() {
    document.getElementById("surprise").innerHTML =
        "Nandini, you are my favorite place to be ❤️🌹";
}

/* Moving NO Button 😜 */
function moveButton() {
    const btn = document.querySelector(".no");
    btn.style.top = Math.random() * 70 + "vh";
    btn.style.left = Math.random() * 70 + "vw";
}

/* YES Button */
function yesAnswer() {
    alert("YAYYY ❤️ Tarun & Nandini forever 💍💖");
}
/* Valentine Countdown */
const valentineDate = new Date("Feb 14, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = valentineDate - now;

    if (distance < 0) return;

    document.getElementById("days").innerHTML =
        Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerHTML =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerHTML =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerHTML =
        Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);
/* ================= SURPRISE MEMORY REVEAL ================= */

const memories = [
    "🌸 Our First Meet In LT",
    "📱 Late Night Video Calls During Exams",
    "🏍️ Beautiful Bike Rides Together",
    "❤️ Every Moment With You Feels Magical Tarun + Nandini"
];

let memoryIndex = 0;

function startSurprise() {
    const box = document.getElementById("memoryBox");
    box.innerHTML = "";

    let interval = setInterval(() => {
        if (memoryIndex >= memories.length) {
            clearInterval(interval);
            return;
        }

        let p = document.createElement("p");
        p.innerText = memories[memoryIndex];
        box.appendChild(p);

        memoryIndex++;
    }, 1500);
}


/* ================= OPEN PROPOSAL POPUP ================= */

function openProposal() {
    document.getElementById("proposalPopup").style.display = "flex";
}


/* ================= MOVING NO BUTTON ================= */

function moveButton() {
    const btn = document.querySelector(".popup .no");

    btn.style.top = Math.random() * 70 + "vh";
    btn.style.left = Math.random() * 70 + "vw";
}


/* Move NO button when hovering */
document.addEventListener("mouseover", function(e) {
    if (e.target.classList.contains("no")) {
        moveButton();
    }
});


/* ================= YES CELEBRATION ================= */

function acceptProposal() {

    document.querySelector(".popup-content").innerHTML = `
        <h2>YAYYYY ❤️</h2>
        <p>Nandini, You Just Made Tarun The Happiest Person Alive 💍</p>
        <p>Forever Starts Now 💕</p>
        <div class="hearts">💖 💖 💖 💖 💖</div>
    `;
}
function showMemoryImage(filePath) {

    const box = document.getElementById("memoryImageBox");
    const music = document.getElementById("bgMusic");

    // Clear previous content
    box.innerHTML = "";

    // Check if file is video
    if (filePath.endsWith(".mp4")) {

        box.innerHTML = `
            <video controls autoplay class="memory-video">
                <source src="${filePath}" type="video/mp4">
            </video>
        `;

        // Start music
        music.play();
    }

    else {

        box.innerHTML = `
            <img src="${filePath}" class="memory-img">
        `;
    }
}

/* OPEN POPUP */
function openProposal() {
    document.getElementById("proposalPopup").style.display = "flex";
}

/* TRACK NO CLICKS */
let noClickCount = 0;

function handleNoClick() {

    const text = document.getElementById("proposalText");
    const yesBtn = document.getElementById("yesBtn");

    noClickCount++;

    if (noClickCount === 1) {
        text.innerHTML = "Please ek baar aur soch lo 🥺";
        yesBtn.style.transform = "scale(1.2)";
    }

    else if (noClickCount === 2) {
        text.innerHTML = "Itni jaldi NO mat bolo ❤️";
        yesBtn.style.transform = "scale(1.4)";
    }

    else if (noClickCount >= 3) {
        text.innerHTML = "Tarun really loves you Nandini 💕";
        yesBtn.style.transform = "scale(1.6)";
    }
}


/* YES SUCCESS */
function acceptProposal() {

    document.querySelector(".popup-content").innerHTML = `
        <h2>YAYYYY ❤️</h2>
        <p>Nandini, You Made My Life Complete 💍</p>
        <p>Tarun ❤️ Nandini Forever</p>
    `;
}

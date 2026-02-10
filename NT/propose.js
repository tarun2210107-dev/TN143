document.addEventListener("DOMContentLoaded", () => {

    let noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn");

    let size = 1;

    /* NO Button Run Away */
    noBtn.addEventListener("mouseover", () => {

        let x = Math.random() * (window.innerWidth - 100);
        let y = Math.random() * (window.innerHeight - 50);

        noBtn.style.position = "absolute";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";

        size += 0.2;
        yesBtn.style.transform = `scale(${size})`;

    });

    /* YES Button Celebration */
    yesBtn.addEventListener("click", () => {

        // Fireworks
        const duration = 3000;
        const end = Date.now() + duration;

        (function frame() {

            confetti({
                particleCount: 6,
                spread: 70,
                origin: { y: 0.6 }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }

        })();

        // Success Screen
        setTimeout(() => {
            document.body.innerHTML = `
                <div style="height:100vh;display:flex;flex-direction:column;
                justify-content:center;align-items:center;color:white;
                background:linear-gradient(135deg,#ff758c,#ff7eb3);">

                <h1>YAYYYYY ❤️</h1>
                <h2>Nandini Said YES 💍</h2>
                <p>Tarun ❤️ Nandini Forever</p>

                </div>
            `;
        }, 1500);

    });

});

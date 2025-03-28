document.addEventListener("mousemove", (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    document.querySelectorAll(".parallax").forEach((element) => {
        const speed = element.getAttribute("data-speed");
        element.style.transform = `translate(${x * speed * 20}px, ${y * speed * 20}px)`;
    })
})

// SIGNIN PAGE OPEN AND CLOSE ANIMATION

const signinButton = document.getElementById('signinButton');
const signinPage = document.getElementById('signinPage');
const closeIcon = document.getElementById('closeIcon');

signinButton.addEventListener('click', function(){
    signinPage.classList.remove('closeSignin');
    signinPage.classList.add("openSignin")
});

closeIcon.addEventListener('click', function(){
    signinPage.classList.remove("openSignin");
    signinPage.classList.add('closeSignin');
})

// SIDEBAR ELEMENTS
const sideBar = document.querySelector('.sidebar');
const menuButton = document.querySelector('.menu-icon');
const closeButton = document.querySelector('.close-icon');

// OPEN SIDEBAR
menuButton.addEventListener("click", function(){
    sideBar.classList.remove('close-sidebar')
    sideBar.classList.add('open-sidebar')
})

closeButton.addEventListener("click", function(){
    sideBar.classList.remove('open-sidebar')
    sideBar.classList.add('close-sidebar')
})

const text = "{Coder's Club}";
const speed = 150; // Typing speed
const delay = 1000; // Delay before deleting
let i = 0, isDeleting = false;

function typeEffect() {
    let displayText = text.substring(0, i);
    document.getElementById("animatedText").textContent = displayText;

    if (!isDeleting && i < text.length) {
        i++;
        setTimeout(typeEffect, speed);
    } else if (isDeleting && i > 0) {
        i--;
        setTimeout(typeEffect, speed / 2);
    } else {
        isDeleting = !isDeleting;
        setTimeout(typeEffect, delay);
    }
}

typeEffect();




window.onload = function () {
    setTimeout(() => {
        var duration = 3000; // Confetti effect for 3 seconds
        var end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 10,  // More particles for denser effect
                spread: 200,        // Spread across the screen
                startVelocity: 40,  // Velocity for smooth falling
                scalar: 1.2,        // Size of particles
                ticks: 250,         // Ensures full fall
                gravity: 0.6,       // Slow falling effect
                shapes: ['circle', 'square'], // Different shapes for variation
                colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'], // Custom Colors
                origin: { 
                    x: Math.random(),  // Random x position across the screen
                    y: 0 // Start from top
                }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }, 500); // Start delay
};
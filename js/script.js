const unlockBtn = document.getElementById('unlockBtn');
const spiritAudio = new Audio('assets/audio/spirit-unlock.wav');

unlockBtn.addEventListener('click', function() {
    // 1. Play the audio
    spiritAudio.play();

    // 2. Visual Transformation
    document.body.style.boxShadow = "inset 0 0 100px #ff6600";

    // NEW: Reveal the secret lore
    const secretSection = document.getElementById('secretLore');
    secretSection.classList.remove('d-none');
    
    // Optional: Add a small animation so it doesn't just "pop" in
    secretSection.style.animation = "fadeInUp 1s ease";
    
    // 3. UI Update
    this.innerText = "SOUL ACTIVE";
    this.classList.replace('btn-outline-warning', 'btn-warning');

    // 4. Pro Tip: Instead of alert, let's log to console or show a toast
    console.log("Spirit Consciousness Level: 100%");
});

window.addEventListener('scroll', () => {
    // 1. Handle Scroll Progress Bar
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("scrollProgress").style.width = scrolled + "%";

    // 2. Handle Reveal Animations
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
});

spiritAudio.play().catch(error => {
    console.log("Audio playback failed: User must interact with the page first or file is missing.");
});

document.getElementById('secretLore').classList.add('revealed');

particlesJS.load('particles-js', 'https://api.jsonsilo.com/public/b331908d-8c58-4eac-bac8-0551f327e200', function() {
  console.log('Spirit Particles Loaded!');
});

particlesJS.load('particles-js', 'https://api.jsonsilo.com/public/b331908d-8c58-4eac-bac8-0551f327e200', function() {
  console.log('Spirit Embers Manifested!');
});

function setAffinity(type) {
    const resultDiv = document.getElementById('affinity-result');
    
    if (type === 'vayu') {
        document.body.style.boxShadow = "inset 0 0 100px #00d4ff"; // Blue Glow
        resultDiv.innerText = "Soul Affinity: VAYU (Speed & Grace)";
        resultDiv.style.color = "#00d4ff";
        console.log("User chose the path of Wind.");
    } else if (type === 'agni') {
        document.body.style.boxShadow = "inset 0 0 100px #ff6600"; // Orange Glow
        resultDiv.innerText = "Soul Affinity: AGNI (Power & Destruction)";
        resultDiv.style.color = "#ff6600";
        console.log("User chose the path of Flame.");
    }
}
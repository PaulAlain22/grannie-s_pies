// Smooth scroll to menu section
function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}

// Surprise message
function showMessage() {
    const msg = document.getElementById("message");

    const messages = [
        "🥧 You just unlocked happiness!",
        "🔥 Fresh pies coming your way!",
        "🍰 You have great taste!",
        "😄 Granny approves this message!"
    ];

    const random = Math.floor(Math.random() * messages.length);
    msg.textContent = messages[random];
}

// Navbar shrink effect on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        nav.style.padding = "10px 40px";
    } else {
        nav.style.padding = "20px 40px";
    }
});
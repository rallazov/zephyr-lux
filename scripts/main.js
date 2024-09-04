document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
});
// scripts/main.js
document.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");

    // Check if the page has been scrolled down
    if (window.scrollY > 100 && !navbar.matches(':hover')) {
        navbar.classList.add("hidden");
    } else {
        navbar.classList.remove("hidden");
    }
});

// Optional: Add hover event to prevent disappearing when hovering
document.querySelector(".navbar").addEventListener("mouseover", function() {
    this.classList.remove("hidden");
});

document.querySelector(".navbar").addEventListener("mouseout", function() {
    if (window.scrollY > 100) {
        this.classList.add("hidden");
    }
});


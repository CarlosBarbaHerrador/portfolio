document.addEventListener("DOMContentLoaded", () => {
    // Actualizar año actual en el footer
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Efecto interactivo de navegación activa según scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    console.log(
        "%cPortfolio v2.0 - Carlos Barba Herrador",
        "color: #6366f1; font-size: 16px; font-weight: bold;"
    );
});

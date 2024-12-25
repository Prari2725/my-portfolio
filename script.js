// Select sections and dot container
const sections = document.querySelectorAll(".section");
const dotsContainer = document.querySelector(".dots");

// Create a dot for each section
sections.forEach((section, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dots__item");

    // Scroll to the corresponding section on dot click
    dot.addEventListener("click", () => {
        section.scrollIntoView({ behavior: "smooth" });
    });

    dotsContainer.appendChild(dot);
});

// Highlight the active dot as the user scrolls
document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        const dot = dotsContainer.children[index];
        if (
            scrollPosition >= sectionTop - sectionHeight / 2 &&
            scrollPosition < sectionTop + sectionHeight / 2
        ) {
            dot.classList.add("dots__item--active");
        } else {
            dot.classList.remove("dots__item--active");
        }
    });
});
// Example to update a progress bar
document.getElementById("progress-python").style.width = "95%";
document.getElementById("progress-python").textContent = "95%";

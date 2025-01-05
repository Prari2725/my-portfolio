// Select sections and dot container
const sections = document.querySelectorAll(".section");
const dotsContainer = document.querySelector(".dots");
let currentSectionIndex = 0; // Keeps track of the current section
let isScrolling = false; // Prevents rapid-fire scrolling

// Create a dot for each section
sections.forEach((section, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dots__item");

    // Scroll to the corresponding section on dot click
    dot.addEventListener("click", () => {
        section.scrollIntoView({ behavior: "smooth" });
        currentSectionIndex = index; // Update current section index
        updateActiveDot(); // Update active dot
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
            currentSectionIndex = index; // Update current section index
        } else {
            dot.classList.remove("dots__item--active");
        }
    });
});

// Function to update the active dot
const updateActiveDot = () => {
    dotsContainer.querySelectorAll(".dots__item").forEach((dot, index) => {
        if (index === currentSectionIndex) {
            dot.classList.add("dots__item--active");
        } else {
            dot.classList.remove("dots__item--active");
        }
    });
};

// Add mouse wheel scrolling functionality
window.addEventListener("wheel", (e) => {
    if (isScrolling) return; // Prevent overlapping scroll events
    if (e.deltaY > 0) {
        // Scroll down
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
            sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
            updateActiveDot();
        }
    } else {
        // Scroll up
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
            updateActiveDot();
        }
    }

    isScrolling = true; // Lock scrolling during animation
    setTimeout(() => {
        isScrolling = false; // Unlock scrolling after animation
    }, 300); // Adjust timeout to change scroll speed
});

// Example to update a progress bar
document.getElementById("progress-python").style.width = "95%";
document.getElementById("progress-python").textContent = "95%";

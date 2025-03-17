function showContent(sectionId, contentType) {
    // Ensure the section exists
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Get all content sections inside the specific section
    const sections = section.querySelectorAll(".content-section");

    // Hide all content sections
    sections.forEach((content) => {
        content.classList.remove("active");
    });

    // Show the specific content for the clicked section
    const selectedContent = document.getElementById(`${sectionId}-${contentType}-content`);
    if (selectedContent) {
        selectedContent.classList.add("active");
    }
}
function selectedButton(buttonNumber, sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    let button1, button2;

    // Assign buttons based on section
    if (sectionId === "wySection") {
        button1 = section.querySelector('.wybutton1');
        button2 = section.querySelector('.wybutton2');
    } else if (sectionId === "reviewSection") {
        button1 = section.querySelector('.reviewbutton1');
        button2 = section.querySelector('.reviewbutton2');
    }

    // Ensure buttons exist before proceeding
    if (button1 && button2) {
        button1.classList.remove('active');
        button2.classList.remove('active');

        if (buttonNumber === 1) {
            button1.classList.add('active');
        } else if (buttonNumber === 2) {
            button2.classList.add('active');
        }
    }
}

let currentIndex = 0;

function showContent(sectionId, contentType) {
    // Ensure the section exists
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Get all content sections inside the specific section
    const sections = section.querySelectorAll(".content-section");

    // Hide all content sections
    sections.forEach((content) => {
        content.classList.remove("active");
    });

    // Show the specific content for the clicked section
    const selectedContent = document.getElementById(`${sectionId}-${contentType}-content`);
    if (selectedContent) {
        selectedContent.classList.add("active");
    }

    // Reset carousel to the first slide when switching sections
    if (contentType === "customers") {
        currentIndex = 0;
        updateCarousel();
    }
}

function selectedButton(buttonNumber, sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    let button1, button2;

    // Assign buttons based on section
    if (sectionId === "reviewSection") {
        button1 = section.querySelector('.reviewbutton1');
        button2 = section.querySelector('.reviewbutton2');
    }

    // Ensure buttons exist before proceeding
    if (button1 && button2) {
        button1.classList.remove('active');
        button2.classList.remove('active');

        if (buttonNumber === 1) {
            button1.classList.add('active');
        } else if (buttonNumber === 2) {
            button2.classList.add('active');
        }
    }
}

function nextSlide() {
    const slides = document.querySelectorAll('.review-slide');
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to first slide
    }
    updateCarousel();
}

function prevSlide() {
    const slides = document.querySelectorAll('.review-slide');
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1; // Loop back to last slide
    }
    updateCarousel();
}

function currentSlide(index) {
    currentIndex = index;
    updateCarousel();
}

function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    const dots = document.querySelectorAll('.dot');
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentIndex) {
            dot.classList.add('active');
        }
    });
}
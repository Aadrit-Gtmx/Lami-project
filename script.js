// Adds bounce effect to buttons
function bounceButton(button) {
    button.classList.add('bounce');
    setTimeout(() => button.classList.remove('bounce'), 300);
}

// Adds pop effect to features
function popEffect(element) {
    element.classList.add('pop');
    setTimeout(() => element.classList.remove('pop'), 300);
}

// Automatically scroll gallery images horizontally
let currentIndex = 0;

function showNextImages() {
    const gallery = document.querySelector('.gallery-scroll');
    const images = document.querySelectorAll('.gallery-scroll img');
    const totalImages = images.length;

    // Update index and handle wrapping around
    currentIndex = (currentIndex + 2) % totalImages; // Change 2 to how many images you want to show at once
    const newTransform = `translateX(-${(currentIndex * 100) / totalImages}%)`; // Moves by percentage of the total width
    gallery.style.transform = newTransform;
}

// Start the image carousel, changing images every 3 seconds
setInterval(showNextImages, 3000);

// Start scrolling gallery on load
window.onload = function() {
    // Optionally, you can call any other functions here
    console.log("Gallery is ready!");
};

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".testimonial-container");
    const testimonials = Array.from(container.children);
    
    // Clone the testimonials to create a seamless loop
    testimonials.forEach(testimonial => {
        const clone = testimonial.cloneNode(true);
        container.appendChild(clone);
    });
    
    // Set the width of the container to accommodate all testimonials
    const totalWidth = testimonials.length * 300; // Adjust this based on the width of your testimonials
    container.style.width = `${totalWidth}px`;

    // Start the scrolling animation
    let currentIndex = 0;

    function scrollTestimonials() {
        currentIndex++;
        if (currentIndex >= testimonials.length) {
            currentIndex = 0; // Reset to the first testimonial
            container.style.transition = 'none'; // Disable transition for instant jump
            container.style.transform = 'translateX(0)'; // Jump back to the start
            requestAnimationFrame(() => {
                setTimeout(() => {
                    container.style.transition = 'transform 20s linear'; // Re-enable transition
                    currentIndex++; // Move to the next testimonial
                    container.style.transform = `translateX(-${(currentIndex * 100) / (testimonials.length)}%)`; // Move to the next testimonial
                }, 50); // Small delay to allow the jump to take effect
            });
        } else {
            container.style.transform = `translateX(-${(currentIndex * 100) / (testimonials.length)}%)`;
        }
    }

    // Set the interval for scrolling
    setInterval(scrollTestimonials, 3000);
});
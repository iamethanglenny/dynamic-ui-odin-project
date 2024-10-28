import "./styles.css";
import { initializeDropdowns } from "./menu.js";
import { carousel } from './carousel-nav.js';

document.addEventListener("DOMContentLoaded", () => {
    // Initialize the carousel
    carousel.init();

    // Select arrow elements
    const prevArrow = document.getElementById("prev-arrow");
    const nextArrow = document.getElementById("next-arrow");

    // Add click event listeners to arrows
    prevArrow.addEventListener("click", () => carousel.prevSlide());
    nextArrow.addEventListener("click", () => carousel.nextSlide());
});

document.addEventListener('DOMContentLoaded', initializeDropdowns);


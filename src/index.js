import "./styles.css";
import { initializeDropdowns } from "./menu.js";
import { slideshow } from "./carousel-nav.js";

const { plusSlides, currentSlide } = slideshow();

window.plusSlides = plusSlides;
window.currentSlide = currentSlide;

document.addEventListener('DOMContentLoaded', initializeDropdowns);


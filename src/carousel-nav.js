

const slideshow = () => {

    let slideIndex = 1;

    document.addEventListener("DOMContentLoaded", () => {
        showSlides(slideIndex);
    });

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlide");
        let dots = document.getElementsByClassName("dot");

        if (slides.length === 0 || dots.length === 0) return;
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += "active";
    }
    return { plusSlides, currentSlide };
}


export { slideshow }
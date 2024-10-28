
export const carousel = (() => {
    let currentIndex = 0;
    let slideInterval;
    const slides = document.querySelectorAll(".carousel-slides .slide");
    const dots = document.querySelectorAll(".dot");

    const showSlide = (index) => {
        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;

        document.querySelector(".carousel-slides").style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    };

    const nextSlide = () => {
        showSlide(currentIndex + 1);
    };

    const prevSlide = () => {
        showSlide(currentIndex - 1);
    };

    const goToSlide = (index) => {
        showSlide(index);
    };

    const startAutoSlide = () => {
        slideInterval = setInterval(nextSlide, 5000);
    };

    const stopAutoSlide = () => {
        clearInterval(slideInterval);
    };

    const init = () => {
        showSlide(currentIndex);
        startAutoSlide();

        document.querySelector(".carousel-container").addEventListener("mouseover", stopAutoSlide);
        document.querySelector(".carousel-container").addEventListener("mouseout", startAutoSlide);
    };

    return {
        init,
        nextSlide,
        prevSlide,
        goToSlide,
    };
})();

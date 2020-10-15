document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 2,
        dist: -80,
        shift: 5,
        padding: 3,
        nunVisible: 1,
        indicators: true,
    });
});
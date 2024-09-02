/*------------------------------------
       Project  Slider - index.html 
     --------------------------------------*/

$(document).ready(function () {
    const projectSwiperContainer = document.querySelector('.project-slider-active .swiper-container');

    if ($(projectSwiperContainer).length > 0) {
        let destinationSlider = new Swiper(projectSwiperContainer, {
            slidesPerView: 4,
            slidesPerColumn: 1,
            loop: true,
            spaceBetween: 24,
            speed: 5000,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            effect: 'slide',
            cssMode: false,
            slideTransition: 'linear',

            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 3,
                },
                1600: {
                    slidesPerView: 4,
                },
            },

            a11y: false,
        });

    }
});

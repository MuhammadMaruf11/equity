/*------------------------------------
      Hero  Slider - index.html 
    --------------------------------------*/

$(document).ready(function () {
    const heroSwiperContainer = document.querySelector('.about-hero-slider-active .swiper-container');

    if (jQuery(heroSwiperContainer).length > 0) {
        let destinationSlider = new Swiper(heroSwiperContainer, {
            slidesPerView: 1,
            slidesPerColumn: 1,
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            autoplay: {
                delay: 3000,
            },
            a11y: false,
        });
    }
});
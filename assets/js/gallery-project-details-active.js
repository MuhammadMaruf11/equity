
/*------------------------------------
     gallery  Slider - index.html 
   --------------------------------------*/
$(document).ready(function () {

    const gallerySwiperContainer = document.querySelector('.gallery-slider-active .swiper-container')

    // Slider With Thumbs
    if (jQuery(gallerySwiperContainer).length > 0) {
        let destinationSlider = new Swiper(gallerySwiperContainer, {
            // Optional parameters
            slidesPerView: 3,
            slidesPerColumn: 1,
            spaceBetween: 24,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 3000,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },

            },

            a11y: false

        });
    }
});
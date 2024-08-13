(function ($) {
    'use strict';
    /*------------------------------------
           Project  Slider - index.html 
         --------------------------------------*/

    // Slider With Thumbs
    if (jQuery(".project-slider-active .swiper-container").length > 0) {
        let destinationSlider = new Swiper('.project-slider-active .swiper-container', {
            // Optional parameters
            slidesPerView: 4,
            slidesPerColumn: 1,
            loop: true,

            autoplay: {
                delay: 2000,
            },

            breakpoints: {
                320: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 4,
                },
            },

            a11y: false

        });
    }



})(jQuery);

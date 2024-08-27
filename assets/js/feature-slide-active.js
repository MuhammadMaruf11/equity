/*------------------------------------
      feature slider - index.html 
     --------------------------------------*/
$(document).ready(function () {
    const featureSwiperContainer = document.querySelector('.feature-slider-active .swiper-container')
    // Slider With Thumbs
    if (jQuery(featureSwiperContainer).length > 0) {
        let destinationSlider = new Swiper(featureSwiperContainer, {
            // Optional parameters
            slidesPerView: 1,
            slidesPerColumn: 1,
            spaceBetween: 24,
            loop: true,

            autoplay: {
                delay: 2000,
            },

            a11y: false

        });
    }


    const featureBtnPrev = document.querySelector('.feature-slider-button .btn-prev');
    const featureBtnNext = document.querySelector('.feature-slider-button .btn-next');

    featureBtnPrev.addEventListener('click', () => {
        featureSwiperContainer.swiper.slidePrev();
    });

    featureBtnNext.addEventListener('click', () => {
        featureSwiperContainer.swiper.slideNext();
    })
});


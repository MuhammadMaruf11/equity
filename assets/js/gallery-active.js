
/*------------------------------------
     gallery  Slider - index.html 
   --------------------------------------*/
$(document).ready(function () {

    const gallerySwiperContainer = document.querySelector('.gallery-slider-active .swiper-container')

    // Slider With Thumbs
    if (jQuery(gallerySwiperContainer).length > 0) {
        let destinationSlider = new Swiper(gallerySwiperContainer, {
            // Optional parameters
            slidesPerView: 15,
            slidesPerColumn: 1,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 5000,
            },
            // effect: 'coverflow',
            // coverflowEffect: {
            //     rotate: 50,
            //     stretch: 0,
            //     depth: 100,
            //     modifier: 1,
            //     slideShadows: true,
            // },
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

    const galleryBtnPrev = document.querySelector('.gallery-slider-button .btn-prev');
    const galleryBtnNext = document.querySelector('.gallery-slider-button .btn-next');

    galleryBtnPrev.addEventListener('click', () => {
        gallerySwiperContainer.swiper.slidePrev();
    });

    galleryBtnNext.addEventListener('click', () => {
        gallerySwiperContainer.swiper.slideNext();
    })
});
/*------------------------------------
       Project  Slider - index.html 
     --------------------------------------*/
$(document).ready(function () {
    const projectSwiperContainer = document.querySelector('.project-slider-active .swiper-container')

    // Slider With Thumbs
    if (jQuery(projectSwiperContainer).length > 0) {
        let destinationSlider = new Swiper(projectSwiperContainer, {
            // Optional parameters
            slidesPerView: 4,
            slidesPerColumn: 1,
            spaceBetween: 24,
            loop: true,
            spaceBetween: 24,
            autoplay: {
                delay: 2000,
            },

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
                    slidesPerView: 4,
                },
            },

            a11y: false

        });
    }

    const projectBtnPrev = document.querySelector('.project-slider-button .btn-prev');
    const projectBtnNext = document.querySelector('.project-slider-button .btn-next');

    projectBtnPrev.addEventListener('click', () => {
        projectSwiperContainer.swiper.slidePrev();
    });

    projectBtnNext.addEventListener('click', () => {
        projectSwiperContainer.swiper.slideNext();
    })
});

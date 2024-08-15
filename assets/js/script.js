(function ($) {
    'use strict';

    /*------------------------------------
          preloader Counter
      --------------------------------------*/

    // Hide the loader
    document.getElementById('loader').style.display = 'none';
    // Show the content
    document.getElementById('content').style.display = 'block';


    /*------------------------------------
          Odometer Counter
      --------------------------------------*/

    $('.odometer').appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    /*------------------------------------
   venobox plugin
--------------------------------------*/

    $('.venobox').venobox();

    /*------------------------------------
         Hero  Slider - index.html 
       --------------------------------------*/

    const heroSwiperContainer = document.querySelector('.hero-slider-active .swiper-container')

    // Slider With Thumbs
    if (jQuery(heroSwiperContainer).length > 0) {
        let destinationSlider = new Swiper(heroSwiperContainer, {
            // Optional parameters
            slidesPerView: 1,
            slidesPerColumn: 1,
            loop: true,

            autoplay: {
                delay: 5000,
            },

            a11y: false

        });
    }


    /*------------------------------------
           Project  Slider - index.html 
         --------------------------------------*/

    const projectSwiperContainer = document.querySelector('.project-slider-active .swiper-container')

    // Slider With Thumbs
    if (jQuery(projectSwiperContainer).length > 0) {
        let destinationSlider = new Swiper(projectSwiperContainer, {
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

    const projectBtnPrev = document.querySelector('.project-slider-button .btn-prev');
    const projectBtnNext = document.querySelector('.project-slider-button .btn-next');

    projectBtnPrev.addEventListener('click', () => {
        projectSwiperContainer.swiper.slidePrev();
    });

    projectBtnNext.addEventListener('click', () => {
        projectSwiperContainer.swiper.slideNext();
    });



    /*------------------------------------
          feature slider - index.html 
         --------------------------------------*/

    /*------------------------------------
              Project  Slider - index.html 
            --------------------------------------*/
    const featureSwiperContainer = document.querySelector('.feature-slider-active .swiper-container')
    // Slider With Thumbs
    if (jQuery(featureSwiperContainer).length > 0) {
        let destinationSlider = new Swiper(featureSwiperContainer, {
            // Optional parameters
            slidesPerView: 1,
            slidesPerColumn: 1,
            loop: true,

            autoplay: {
                delay: 20000000,
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
    });


    /*------------------------------------
         Project  Slider - index.html 
       --------------------------------------*/


    const gallerySwiperContainer = document.querySelector('.gallery-slider-active .swiper-container')

    // Slider With Thumbs
    if (jQuery(gallerySwiperContainer).length > 0) {
        let destinationSlider = new Swiper(gallerySwiperContainer, {
            // Optional parameters
            slidesPerView: 3,
            slidesPerColumn: 1,
            loop: true,
            centeredSlides: true,
            spaceBetween: 54,
            autoplay: {
                delay: 5000,
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
                    slidesPerView: 3,
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
    });


    /*------------------------------------
            Ainmate On Scroll - index.html 
          --------------------------------------*/


    AOS.init({
        duration: 800,
    });

    /*------------------------------------
             Marquee - index.html 
           --------------------------------------*/

    const marquee = document.getElementById('marquee');

    marquee.addEventListener('mouseover', function () {
        marquee.stop();
    });

    marquee.addEventListener('mouseout', function () {
        marquee.start();
    });

})(jQuery);



/*------------------------------------
        hero slider image - index.html 
      --------------------------------------*/

$(document).ready(function () {
    const heroBg = $('.hero-bg')[0];

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    $(heroBg).addClass('visible');
                }
            });
        },
        {
            threshold: 0.5,
        }
    );

    observer.observe(heroBg);
    // jQuery for handling the scroll-based resizing of the hero image
    $(window).on('scroll', function () {

        const scrollPos = $(window).scrollTop();
        const heroHeight = $('.hero-bg').height();
        const maxScroll = heroHeight - 200;
        const maxWidth = 1920;
        const minWidth = 1296;

        // Calculate the new width based on scroll position
        let newWidth = (minWidth + (maxWidth - minWidth) * (scrollPos / maxScroll));

        // Ensure the width doesn't exceed maxWidth or go below minWidth
        newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));

        // Apply the new width to the hero image
        $('.hero-slider-img').css({
            'width': `${newWidth}px`,
        });
        $('.hero-img').css({
            'width': `${newWidth}px`,
        });

    });



});



/*------------------------------------
        feature title - index.html 
      --------------------------------------*/

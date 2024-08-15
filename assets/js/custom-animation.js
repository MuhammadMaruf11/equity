/*------------------------------------
        hero title - index.html 
      --------------------------------------*/

$(document).ready(function () {
    const heroTitle = $('.hero-title');

    // Flip the title when it scrolls into view
    $(window).on('scroll', function () {
        const scrollPos = $(window).scrollTop();
        const heroOffsetTop = heroTitle.offset().top;

        if (scrollPos + $(window).height() > heroOffsetTop) {
            heroTitle.addClass('flip-in').removeClass('flip-out');
        } else {
            heroTitle.addClass('flip-out').removeClass('flip-in');
        }
    });

    // Flip the title on page load
    $(window).trigger('scroll');
});




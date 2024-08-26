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

    // jQuery for handling the scroll-based adjustment of the clip-path inset
    $(window).on('scroll', function () {
        const scrollPos = $(window).scrollTop();
        const heroHeight = $('.hero-bg').height();
        const maxScroll = heroHeight - 650;

        let maxInset, minInset;

        // Set minInset and maxInset based on screen size
        if (window.innerWidth >= 1400) { // XXL devices
            maxInset = 7; // Max inset value at the start
            minInset = 0; // Min inset value at the max scroll
        } else if (window.innerWidth >= 1200) { // XL devices
            maxInset = 7;
            minInset = 0;
        } else if (window.innerWidth >= 992) { // Large devices (desktops)
            maxInset = 7;
            minInset = 0;
        } else if (window.innerWidth >= 768) { // Medium devices (tablets)
            maxInset = 7;
            minInset = 0;
        } else { // Small devices (phones)
            maxInset = 7;
            minInset = 0;
        }

        // Adjust maxScroll for mobile devices to ensure the scroll effect is more noticeable
        const adjustedMaxScroll = maxScroll < 200 ? 200 : maxScroll;

        // Calculate the new inset value based on scroll position
        let newInset = maxInset - (maxInset - minInset) * (scrollPos / adjustedMaxScroll);

        // Ensure the inset doesn't exceed maxInset or go below minInset
        newInset = Math.max(minInset, Math.min(maxInset, newInset));

        // Apply the new clip-path to the hero image
        $('.hero-slider-img').css({
            'clip-path': `inset(0vw ${newInset}vw)`,
        });
    });
});

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
              sideBarMenu - All Pages
            --------------------------------------*/

    $("#menuBtn").on("click", function (event) {
        event.preventDefault();
        console.log("object");
        $(".side-bar-menu").addClass("active");
    });

    $("#crossBtn").on("click", function (event) {
        event.preventDefault();
        $(".side-bar-menu").removeClass("active");
    });


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
            Ainmate On Scroll - index.html 
          --------------------------------------*/


    AOS.init({
        duration: 800,
        // once: true,
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

    document.addEventListener("DOMContentLoaded", function () {
        const marquee = document.getElementById('marquee');

        if (window.innerWidth <= 768) { // Mobile devices
            marquee.setAttribute('scrollamount', '8');
        } else {
            marquee.setAttribute('scrollamount', '15');
        }
    });

    window.addEventListener('resize', function () {
        const marquee = document.getElementById('marquee');

        if (window.innerWidth <= 768) { // Mobile devices
            marquee.setAttribute('scrollamount', '8');
        } else {
            marquee.setAttribute('scrollamount', '15');
        }
    });

})(jQuery);


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
        once: true,
    });

    /*------------------------------------
             Marquee - index.html 
           --------------------------------------*/

    $(document).ready(function () {
        $('.marquee-wrapper').hover(
            function () {
                $('.marquee-content').css('animation-play-state', 'paused');
            },
            function () {
                $('.marquee-content').css('animation-play-state', 'running');
            }
        );
    });


})(jQuery);


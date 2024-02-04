// Required Java Script

// Wow //

new WOW().init();



$(document).ready(function () {

// sticky //
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
            $('#header').addClass("sticky");
        }
        else{
            $('#header').removeClass("sticky");
        }
    });



    /* Demo purposes only */
    $(".hover").mouseleave(
        function() {
            $(this).removeClass("hover");
        }
    );



    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 80
        }, 500);
    });

});





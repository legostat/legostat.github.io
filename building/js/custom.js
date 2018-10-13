/*
| ----------------------------------------------------------------------------------
| TABLE OF CONTENT
| ----------------------------------------------------------------------------------
-SETTING
-Sticky Header
-BX CAROUSELS
-Zoom Images
-CAROUSEL PRODUCTS
-POST SLIDER
-PARALAX
-Disable  Animated
-HOME SLIDER
-Dropdown Menu Fade
-Animated Entrances
-SCROLL TOP
-PRICE RANGE
-Chars Start
-Prefooter
-ISOTOPE FILTER
*/
$(document).ready(function() {


    "use strict";


    /////////////////////////////////////////////////////////////////
    // SETTING
    /////////////////////////////////////////////////////////////////

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();



    $('ul li:last-child').addClass('li-last');




    var tabletWidth = 767;
    var mobileWidth = 640;



    /////////////////////////////////////
    //  Sticky Header
    /////////////////////////////////////



    if (windowWidth > tabletWidth) {



        var headerSticky = $(".layout-theme").data("header");
        var headerTop = $(".layout-theme").data("header-top");


        if (headerSticky.length) {
            $(window).on('scroll', function() {
                var winH = $(window).scrollTop();
                var $pageHeader = $('.header');
                if (winH > headerTop) {

                    $('.yamm').addClass("animated");
                    $('.yamm').addClass("animation-done");
                    $('.yamm').addClass("bounce");
                    $pageHeader.addClass('sticky');



                } else {

                    $('.yamm').removeClass("bounce");
                    $('.yamm').removeClass("animated");
                    $('.yamm').removeClass("animation-done");
                    $pageHeader.removeClass('sticky');

                }


            });
        }

    }

    /////////////////////////////////////
    //  BX CAROUSELS
    /////////////////////////////////////


    function carouselReload() {



        $(".bxslider").each(function(i) {


            var widthslides = $(this).data("width-slides");
            var marginslides = $(this).data("margin-slides");
            var autoslides = $(this).data("auto-slides");
            var moveslides = $(this).data("move-slides");
            var infiniteslides = $(this).data("infinite-slides");
            var maxslides = $(this).data("max-slides");
            var minslides = $(this).data("min-slides");
            var verticaleslides = $(this).data("vertical-slides");




            $(this).bxSlider({
                slideWidth: widthslides,
                minSlides: minslides,
                maxSlides: maxslides,
                slideMargin: marginslides,
                auto: autoslides,
                moveSlides: moveslides,
                mode: verticaleslides,
                infiniteLoop: false,
                hideControlOnEnd: true
            });


            $('.bx-next').html(' <i class="fa fa-angle-right"></i>')
            $('.bx-prev').html(' <i class="fa fa-angle-left"></i>')

        });

    }

    carouselReload();

    ////////////////////////////////////////////
    // PARALAX
    ///////////////////////////////////////////

    $(window).scroll(function(e) {
        parallax();

    });

    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.bg-section').css('top', -(scrolled * 0.3) + 'px');
    }

    if (windowWidth < mobileWidth) {


        /////////////////////////////////////
        //  Disable Mobile Animated
        /////////////////////////////////////


        $("body").removeClass("animated-css");




    }


    $('.animated-css .animated:not(.animation-done)').waypoint(function() {
        var animation = $(this).data('animation');

        $(this).addClass('animation-done').addClass(animation);

    }, {
        triggerOnce: true,
        offset: '90%'
    });


    /////////////////////////////////////////////////////////////////
    //   Dropdown Menu Fade
    /////////////////////////////////////////////////////////////////




    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).stop(true, true).slideDown("fast");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu', this).stop(true, true).slideUp("fast");
            $(this).toggleClass('open');
        }
    );


    $(".yamm .navbar-nav>li").hover(
        function() {
            $('.dropdown-menu', this).fadeIn("fast");
        },
        function() {
            $('.dropdown-menu', this).fadeOut("fast");
        });




    window.prettyPrint && prettyPrint();
    $(document).on('click', '.yamm .dropdown-menu', function(e) {
        e.stopPropagation()
    })







    /////////////////////////////////////
    //  SCROLL TOP
    /////////////////////////////////////


    if ($('body').length) {
        $(window).on('scroll', function() {
            var winH = $(window).scrollTop();

            if (winH > 500) {
                $(".scroll-top").addClass('scroll-top-view');
            } else {
                $(".scroll-top").removeClass('scroll-top-view');
            }
        });
    }


    $('.scroll-top').click(function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });

});

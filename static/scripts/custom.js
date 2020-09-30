$(function () {

    // Sticky header
    if ($(window).scrollTop() > 80) {
        $('.header').addClass('fixed-header');
    } else {
        $('.header').removeClass('fixed-header');
    }
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 80) {
            $('.header').addClass('fixed-header');
        } else {
            $('.header').removeClass('fixed-header');
        }
    });

    // Search Form
    $('.header').on('click', '.search-toggle', function (e) {
        e.stopPropagation();
        var selector = $(".header");
        $(selector).toggleClass('show').find('.search-input').focus();
        e.preventDefault();
    });

    $(document).on('click', function (e) {
        var searchcontainer = $(".search-box");
        if (!searchcontainer.is(e.target) && searchcontainer.has(e.target).length === 0) {
            $(".header").removeClass('show');
        }
    });

    // Mobile Menu
    $(".hamburger").click(function () {
        $(this).toggleClass("active");
        $('.navbar-collapse').toggleClass("open-menu").css('top', $('.header').outerHeight());
    });

    // Active Menu
    $(".navbar-nav:not(.right-menu) .nav-item .nav-link").each(function () {
        if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
            $(this).addClass('active');
        }
    });

    // Padding-top for header style-3
    if ($(window).width() >= 768) {
        if ($('.header').hasClass('style-3')) {
            $('.site-wrapper').css('padding-top', $('.header').outerHeight());
        }
    }

    // Scroll down
    $('#go-down').on('click', function (e) {
        var nextSection = jQuery(this).closest(".hero-section").nextAll("section").first();
        e.preventDefault();
        $('html, body').animate({
            scrollTop: nextSection.offset().top
        }, 500, 'linear');
    });

    // FAB
    $(".fabtn,.backdrop").click(function () {
        $(".fabtn").toggleClass("fabtn-open");
        if ($(".backdrop").is(":visible")) {
            $(".backdrop").fadeOut(125);
            $(".fabtn.child")
                .stop()
                .animate({
                    bottom: $("#masterfabtn").css("bottom"),
                    opacity: 0
                }, 125, function () {
                    $(this).css("display", "none");
                });
        } else {
            $(".backdrop").fadeIn(125);
            $(".fabtn.child").each(function () {
                $(this)
                    .stop()
                    .css("display", "block")
                    .animate({
                        bottom: (parseInt($("#masterfabtn").css("bottom")) + parseInt($("#masterfabtn").outerHeight()) + 70 * $(this).data("subitem") - $(".fabtn.child").outerHeight()) + "px",
                        opacity: 1
                    }, 125);
            });
        }
    });

    $(window).on('load', function () {
        hneSliderOverlayPosition();
        quickResourcesHeight();
    });

    $(window).on('resize', function () {
        quickResourcesHeight();
    });

    featSlider();
    hneSlider();
    stepScroller();
    quickResourcesHeight();

    // HNE Slider
    function hneSlider() {
        var hne_slider = $(".hne-slider");
        hne_slider.each(function () {
            $(this).slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                fade: false,
                arrows: false,
                variableWidth: true,
                responsive: [{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });
        $('.prev-slide').click(function () {
            $(this).parent().prev().find('.hne-slider').slick('slickPrev');
        });
        $('.next-slide').click(function () {
            $(this).parent().prev().find('.hne-slider').slick('slickNext');
        });
    }

    function featSlider() {
        var feat_slider = $(".featured-slider");
        feat_slider.each(function () {
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                fade: false,
                arrows: false
            });
        });
        $('.prev-slide').click(function () {
            $(this).parent().prev('.featured-slider').slick('slickPrev');
        });
        $('.next-slide').click(function () {
            $(this).parent().prev('.featured-slider').slick('slickNext');
        });
    }

    function hneSliderOverlayPosition() {
        if ($('.hive-news-events').length) {
            var position = $('.slider-container').position();
            var height = $('.slider-container').outerHeight();
            $('.hive-news-events').css('--overlayTop', position.top).css('--overlayHeight', height);
        }
    }

    function stepScroller() {
        $('.step-items').scroll(function () {
            var scrollDistance = $('.step-items').scrollTop();

            // Assign active class to nav links while scolling
            $('.step-item').each(function (i) {
                if ($(this).position().top <= scrollDistance) {
                    $('.step-nav .step-title.active').removeClass('active');
                    $('.step-nav .step-title').eq(i).addClass('active');
                }
            });
        }).scroll();
    }

    function quickResourcesHeight() {
        if ($(window).width() > 992) {
            var resourceCol8Height = $('.hive-3-col-section.style-2.resource .row:first > .col-8').height();
            var h4Height = $('.hive-3-col-section.style-2.resource .row:first > .col-4 h4').outerHeight(true);
            var actualHeight = resourceCol8Height - h4Height - 80;
            var target = $('.hive-3-col-section.style-2.resource .row:first > .col-4 .qr-container');
            target.css('height', actualHeight).css('overflow-y', 'auto');
        }
    }
});
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

	$(document).on('click', '.go-down', function(e){
		e.preventDefault();
		$('body, html').animate({scrollTop: $('#about-hive').offset().top - $('.header').height()}, 'slow');
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

	if ($('.hive-scroller-v-2').length > 0) {
		$(document).on("scroll", function (e) {
			setCurrentStepItem();
		});

		setCurrentStepItem();
	}

	function setCurrentStepItem() {

		$('.hive-scroller-v-2 .step-items .step-item').each(function (i) {

			var direction = stopSectionScrollDirection();
			var elem;

			if (direction == "down") {
				if ($(this) != $(".hive-scroller-v-2 .step-items").last()) {
					$(this).next();
				}
			} else {
				if ($(this) != $(".hive-scroller-v-2 .step-items").first()) {
					$(this).prev();
				}
			}

			elem = elem ? elem : $(this);

			if (elem.hasClass("active")) {
				return;
			}

			if (elem.offset().top < $(document).scrollTop() + $(window).height() / 3 && elem.offset().top > $(document).scrollTop()) {

				$('.hive-scroller-v-2 .step-items .step-item').removeClass("active");
				$(this).addClass("active");

				$(".step-hexes .step-hex.active").removeClass("active");
				$(".step-hexes .step-hex").eq($(this).index()).addClass("active");

			}
		});

		sectionStart = jQuery(".hive-scroller-v-2").offset().top - jQuery(window).height();
		sectionEnd = jQuery(".hive-scroller-v-2").offset().top + jQuery(".hive-scroller-v-2").height() - jQuery(window).height() / 2;
		currentScroll = $(document).scrollTop();

		if (currentScroll > sectionStart && currentScroll < sectionEnd) {
			jQuery(".hive-scroller-v-2 .step-hexes-inner").fadeIn(500);
		} else {
			jQuery(".hive-scroller-v-2 .step-hexes-inner").fadeOut(200);
		}

		if ($('.hive-scroller-v-2 .step-items .step-item.active').length == 0) {
			$('.hive-scroller-v-2 .step-items .step-item').first().addClass("active");
			$(".step-hexes .step-hex").first().addClass("active");
		}
	}


	var scrollLastPosition = 0;

	function stopSectionScrollDirection() {

		var windowScrollTop = $(window).scrollTop();

		var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

		if (st > scrollLastPosition) {
			return "down";
		} else if (st < scrollLastPosition) {
			return "up";
		}
	}

	// Mouse Parallax
	$('.animated-hex').mousemove(function (e) {
		$('[data-depth]', this).each(function () {
			var depth = $(this).data('depth');
			var amountMovedX = (e.pageX * -depth / 4);
			var amountMovedY = (e.pageY * -depth / 4);

			$(this).css({
				'transform': 'translate3d(' + amountMovedX + 'px,' + amountMovedY + 'px, 0)',
			});
		});
	});

	var footerHeight = $('.footer-2').outerHeight();
	$('body').css("marginBottom", footerHeight);

	if ($('.feature-slider').length > 0) {
		$(".feature-slider").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			infinite: true,
			fade: false,
			arrows: false,
			vertical: true,
			verticalSwiping: true,
			autoplay: true,
			autoplaySpeed: 1000,
			responsive: [{
				breakpoint: 768,
				settings: "unslick",
			}]
		});
	};

	const init = {
		autoplay: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}]
	};

	if ($('.logos').length > 0) {
		$(() => {
			const win = $(window);
			const slider = $(".logos");

			win.on("load resize", () => {
				if (win.width() < 992) {
					slider.not(".slick-initialized").slick(init);
				} else if (slider.hasClass("slick-initialized")) {
					slider.slick("unslick");
				}
			});
		});
	};
});
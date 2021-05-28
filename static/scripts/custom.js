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
	$(".navbar-nav .nav-item .nav-link").each(function () {
		if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
			$(this).addClass('active');
		}
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

	dLink();

	$(window).resize(function () {
		dLink();
	});

	function dLink() {
		$('.link.d-link').each(function () {
			var w = $(this).innerWidth() + 'px';
			$(this).css({
				"--width": w
			});
		});
	}

	// accordion
	jQuery(".faq-accordion .collapse.show").each(function () {
		jQuery(this).prev(".acc-title").parent().addClass("active");
	});

	jQuery(".faq-accordion .collapse").on('show.bs.collapse', function () {
		jQuery(this).prev(".acc-title").parent().addClass("active");
	}).on('hide.bs.collapse', function () {
		jQuery(this).prev(".acc-title").parent().removeClass("active");
	});

	jQuery('.go-down').on('click',function(e){
		e.preventDefault();
		var target = $(this).attr('href');
        if ($(target).length) {
	        $('html, body').animate({ scrollTop: $(target).offset().top - 100 }, 'slow');
	    }
        return false;
	})

});
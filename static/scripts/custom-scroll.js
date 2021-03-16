if(window.location.pathname == '/'){
$(function () {


	stepScroller();
	stopSectionAddState();

	var firstScroll = true;
	var animatingElement = false;
	var alreadyScrolledDown = false;
	var alreadyScrolledUp = false;
	var scrollStep = 20;
	var scrollLastPosition = 0;
	var scrollDirection;
	var lastScrollTime = new Date();

	function stepScroller() {

		if (isTouchDevice() || jQuery(window).width() <= 991) { // disable for mobile devices
			return;
		}

		var eTop = $(".hive-scroller-section-2").offset().top;
		var eHeight = $(".hive-scroller-section-2").height();
		var eBottom = eTop + eHeight - $(window).height() + 50;

		$(document).on("scroll touchmove mousewheel", function (e) {


			console.log("SCROLL");

			var windowScrollTop = $(window).scrollTop();

			var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

			if (st > scrollLastPosition + 1) {
				scrollDirection = "down";
			} else if (st < scrollLastPosition - 1) {
				scrollDirection = "up";
			}

			scrollLastPosition = st <= 0 ? 0 : st;

			if (!chk_scroll_down(jQuery(".step-items")) && !chk_scroll_up(jQuery(".step-items"))) {
				$(document).scrollTop(eBottom);
			}

			// console.log(scrollDirection);

			if (scrollDirection == "down") {


				if (!chk_scroll_down(jQuery(".step-items"))) {
					alreadyScrolledDown = false;
				} else {
					// setTimeout(function(){ 
					alreadyScrolledDown = true;
					// }, 100);
				}

				if (windowScrollTop > eBottom && !alreadyScrolledDown) {

					$(document).scrollTop(eBottom); // disable scrolling past this element

					if (new Date() - lastScrollTime <= 500) {
						return;
					}
					lastScrollTime = new Date();


					// if(firstScroll) {
					// console.log("################");
					// firstScroll = false;

					// setTimeout(function(){
					// return false;
					// }, 1100);

					// return false;
					// }


					if (!animatingElement && firstScroll) {

						animatingElement = true;
						elementToShow = $(".step-items .step-item:not(.active)").first();

						if (elementToShow.length) {
							scrollTopElement = $(".step-items").scrollTop() + elementToShow.position().top;
						} else {
							scrollTopElement = 0;
						}

						$(".step-items").stop().animate({
							scrollTop: scrollTopElement
						}, 500, function () {
							setTimeout(function () {
								animatingElement = false;
							}, 100);
						});
					}
				} else {
					firstScroll = true;
				}
			}

			if (scrollDirection == "up") {

				if (!chk_scroll_up(jQuery(".step-items"))) {
					alreadyScrolledUp = false;
				} else {
					// setTimeout(function(){ 
					alreadyScrolledUp = true;
					// }, 100);
				}

				if (windowScrollTop < eBottom && !alreadyScrolledUp) {

					// $('html, body').animate({scrollTop : eBottom}, 200);
					$(document).scrollTop(eBottom); // disable scrolling past this element

					if (new Date() - lastScrollTime <= 500) {
						return;
					}
					lastScrollTime = new Date();


					// if(firstScroll) {
					// console.log("################");
					// firstScroll = false;

					// setTimeout(function(){
					// return false;
					// }, 1100);

					// return false;
					// }

					if (!animatingElement) {

						animatingElement = true;
						elementToShow = $(".step-items .step-item.active").last().prev();

						if (elementToShow.length) {
							scrollTopElement = $(".step-items").scrollTop() + elementToShow.position().top;
						} else {
							$(".step-items").outerHeight();
						}

						$(".step-items").stop().animate({
							scrollTop: scrollTopElement
						}, 500, function () {
							setTimeout(function () {
								animatingElement = false;
							}, 100);
						});
					}
				} else {
					firstScroll = true;
				}
			}
		});
	}

	function scrollDownEvent() {

	}

	function scrollUEvent() {

	}

	function stepScrollerOnlyWScrollDown() {

		if (isTouchDevice() || jQuery(window).width() <= 991) { // disable for mobile devices
			return;
		}

		var alreadyScrolled = false;
		var scrollStep = 20;

		var eTop = $(".hive-scroller-section-2").offset().top;
		var eHeight = $(".hive-scroller-section-2").height();
		var eBottom = eTop + eHeight - $(window).height() + 50;

		$(document).on("scroll", function (e) {

			// console.log(e);

			var windowScrollTop = $(window).scrollTop();

			if (!alreadyScrolled && chk_scroll(jQuery(".step-items"))) {
				setTimeout(function () {
					alreadyScrolled = true;
				}, 500);
			}

			if (windowScrollTop > eBottom && !alreadyScrolled) {

				$(".step-items").scrollTop($(".step-items").position().top + scrollStep); // scroll inside innner element
				$(document).scrollTop(eBottom); // disable scrolling past this element

				scrollStep += 20;
			}
		});
	}

	// init scroll section
	// stopSectionInit();
});
}

var animatingElement;
var eBottom;
var scrollLastPosition = 0;
var lastScrollTime = 0;
var stopSectionActive = true;
var scrollDirection = "down";
var scrollDirecitonList = [];
var stopSectionScroll = false;

function stopSectionInit() {

	// get stop position of element
	var eTop = $(".hive-scroller-section-2").offset().top;
	var eHeight = $(".hive-scroller-section-2").height();

	eBottom = eTop + eHeight - $(window).height() + 50;

	$(document).on("scroll", function (e) {


		if (stopSectionScroll) {
			stopSection();
		}

		stopSectionScrollDirection();

		// console.log(scrollDirection);

		if (scrollDirection == "down") {
			console.log("111");
			stopSectionScrollDown();
		} else if (scrollDirection == "up") {
			stopSectionScrollUp();
		}

		// stopSectionScrollEvent();
	});
	stopSectionAddState();
}

function stopSection() {
	$(document).stop().scrollTop(eBottom);
}

function stopSectionStopMutipleEvents() {

	if (new Date() - lastScrollTime <= 500) {
		return true;
	}
	lastScrollTime = new Date();

	return false;
}

function stopSectionScroll() {

	return stopSectionScroll;
}

function stopSectionScrollDown() {

	// if($(window).scrollTop() > eBottom && !stopSectionScrolledDown()) {
	if ($(window).scrollTop() >= eBottom) {

		stopSectionScroll = true;
		scrollDirection = "down";

		stopSection();

		if (stopSectionStopMutipleEvents()) {
			return false;
		}

		console.log("SCROLL DOWN");

		// stopSectionJumpToNextItem();
	}
}


function stopSectionScrollUp() {

	if ($(window).scrollTop() < eBottom && !stopSectionScrolledUp()) {

		scrollDirection = "up";
		stopSection();

		if (stopSectionStopMutipleEvents()) {
			return false;
		}

		console.log("SCROLL UUUPP");

		// stopSectionJumpToPrevItem();
	}
}

function stopSectionScrollDirection() {

	var windowScrollTop = $(window).scrollTop();

	var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

	if (st > scrollLastPosition) {
		scrollDirecitonList.push("down");
	} else if (st < scrollLastPosition) {
		scrollDirecitonList.push("up");
	}

	if (scrollDirecitonList.length > 3) {
		scrollDirecitonList.shift();
	}

	scrollLastPosition = st <= 0 ? 0 : st;

	scrollDirection = stopSectionScrollGetDirection();

	return scrollDirection;
}

function stopSectionScrollGetDirection() {

	var down = 0;
	var up = 0;

	for (var i = 0; i < scrollDirecitonList.length; ++i) {
		if (scrollDirecitonList[i] == "down") {
			down++;
		} else {
			up++;
		}
	}

	return down > up ? "down" : "up";
}

function stopSectionJumpToPrevItem() {

	if (animatingElement) {
		return;
	}

	animatingElement = true;

	elementToShow = $(".step-items .step-item.active").last().prev();

	if (elementToShow.length) {
		scrollTopElement = $(".step-items").scrollTop() + elementToShow.position().top;
	} else {
		scrollTopElement = 0;
	}

	$(".step-items").stop().animate({
		scrollTop: scrollTopElement
	}, 500, function () {
		setTimeout(function () {
			animatingElement = false;
		}, 100);
	});
}

function stopSectionJumpToNextItem() {

	if (animatingElement) {
		return;
	}

	animatingElement = true;

	elementToShow = $(".step-items .step-item:not(.active)").first();

	if (elementToShow.length) {
		scrollTopElement = $(".step-items").scrollTop() + elementToShow.position().top;
	} else {
		scrollTopElement = $(".step-items").outerHeight();
	}

	$(".step-items").stop().animate({
		scrollTop: scrollTopElement
	}, 500, function () {
		setTimeout(function () {
			animatingElement = false;
		}, 100);
	});
}


function stopSectionAddState() {

	$('.step-items').on("scroll", function () {
		$('.step-items .step-item').each(function (i) {

			if (jQuery(this).prev().position().top < 0) {
				jQuery(this).addClass("active");
			} else {
				jQuery(this).removeClass("active");
			}
		});

		if ($('.step-items .step-item.active').length == 0) {
			$('.step-items .step-item').first().addClass("active");
		}
	});
}


function stopSectionScrolledUp() {

	if (jQuery(".step-items").scrollTop() == 0) {
		return true;
	}

	return false;
}

function stopSectionScrolledDown() {

	if (jQuery(".step-items")[0].scrollHeight - jQuery(".step-items").scrollTop() == jQuery(".step-items").outerHeight()) {
		return true;
	}

	return false;
}

function isTouchDevice() {

	return (('ontouchstart' in window) ||
		(navigator.maxTouchPoints > 0) ||
		(navigator.msMaxTouchPoints > 0));
}


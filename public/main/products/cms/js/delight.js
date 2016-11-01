// Agency Theme JavaScript

(function($) {
	"use strict"; // Start of use strict

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top - 50)
		}, 1250, 'easeInOutExpo');
		event.preventDefault();
	});

	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
		target: '.navbar-fixed-top',
		offset: 51
	});

	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
		$('.navbar-toggle:visible').click();
	});

	// Offset for Main Navigation
	$('#mainNav').affix({
		offset: {
			top: 100
		}
	});

	$('#cms-download').click(function() {
		window.location.href = 'downloadables/cms.pdf';
	});
	$('#sms-download').click(function() {
		window.location.href = 'downloadables/sms.pdf';
	});

})(jQuery); // End of use strict

$(document).ready(function() {
	$("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
		e.preventDefault();
		$(this).siblings('a.active').removeClass("active");
		$(this).addClass("active");
		var index = $(this).index();
		$("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
		$("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
	});
});

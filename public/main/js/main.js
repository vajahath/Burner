(function($) {
	$(function() {

		$('.button-collapse').sideNav();
		$('.parallax').parallax();
		$('.modal-trigger').leanModal();
		$('.carousel').carousel({
			// time_constant:1000
		});
		var options = [{
			selector: '#sosoft-1',
			offset: 320,
			callback: function(el) {
				$('.carousel').carousel('next', 2);
			}
		}];
		Materialize.scrollFire(options);
	}); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {
	$(document).on('click', '.dropdown .dropdown-menu', function(e) {
		e.stopPropagation();
	});

	//////////////////
	// bhoechie-tab //
	//////////////////
	$("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
		e.preventDefault();
		$(this).siblings('a.active').removeClass("active");
		$(this).addClass("active");
		var index = $(this).index();
		$("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active").hide();
		$("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active").fadeIn();
	});

	//////////////////////
	// for booking page //
	//////////////////////
	// when user clicks the continue button
	$('.next').click(function() {
		var theid = $(this).attr("swichto");
		$('.nav-tabs a[href="#' + theid + '"]').tab('show');

		$('#s-' + theid).addClass('step-active');
	});
	// when user clicks the back button
	$('.back').click(function() {
		$('.nav-tabs a[href="#' + $(this).attr("switchto") + '"]').tab('show');

		$('#s-' + $(this).attr("current")).removeClass('step-active');

	});
	// over
});
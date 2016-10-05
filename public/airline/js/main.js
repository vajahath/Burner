$(document).ready(function() {
	$('.datepik').datepicker({
		orientation: "bottom auto",
		todayHighlight: false,
		"autoclose": true
	});

	/**
	 * for dropdown -propagation stoped
	 */
	$('.propagation-stoped').on({
		"click": function(e) {
			e.stopPropagation();
		}
	});

	$('.cplus').click(function() {
		$(this).parent().prev().children().text(+$(this).parent().prev().children().text() + 1);
		$('#ctotal').val(+$('#ctotal').val() + 1);
	});
	$('.cminus').click(function() {
		var pval = +$(this).parent().next().children().text();
		if (pval > 0) {
			$(this).parent().next().children().text(pval - 1);
			$('#ctotal').val(+$('#ctotal').val() - 1);
		}
	});
});

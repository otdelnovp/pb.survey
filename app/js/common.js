$(function() {

	$('select').selectric({
	});

	$('.wrapper').addClass('ready');
	setTimeout(function(){
		$('.poll').addClass('ready');
	},300);

	$('.poll_answer_other').click(function(){
		$(".poll_answer_other_check input").prop('checked', true);
		$(".poll_answer_other_input input").focus();
	});

});

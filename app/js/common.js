$(function() {

	$('select').selectric();

	$('.wrapper').addClass('ready');
	setTimeout(function(){
		$('.poll').addClass('ready');
	},300);

});

$(function() {

	$('select').styler();

	$('.wrapper').addClass('ready');
	setTimeout(function(){
		$('.poll').addClass('ready');
	},300);

});

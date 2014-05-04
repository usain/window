/* 	Author: Dylan Scott 
	Date: May 2014
*/
$(document).ready(function(){

	var $mailchimpDraw 	= $("#mc_embed_signup"),
		$emailButton 	= $(".icon-envelope"),
		$close			= $(".close"),
		$yearClick		= $(".click"),
		$exhibition		= $(".year");

	$mailchimpDraw.hide();
	$exhibition.hide();

	$emailButton.click(function(e){

		e.preventDefault();
		$mailchimpDraw.slideToggle(400);

	});

	$close.click(function(e){

		e.preventDefault();
		$mailchimpDraw.slideToggle(400);

	});

	$yearClick.click(function(e){

		e.preventDefault();
		$(this).next().slideToggle(400);

	});



});//end of ready
























/* 	Author: Dylan Scott
	Date: May 2014
*/
$(document).ready(function(){


//variables

	var $mailchimpDraw 	= $("#mc_embed_signup"),
		$emailButton 	= $(".icon-envelope"),
		$close			= $(".close"),
		$yearClick		= $(".click"),
		$exhibition		= $(".year");

//init states

	$mailchimpDraw.hide();
	$exhibition.hide();

//mailchimp draw

	$emailButton.click(function(e){

		e.preventDefault();
		$mailchimpDraw.slideToggle(400);

	});

	$close.click(function(e){

		e.preventDefault();
		$mailchimpDraw.slideToggle(400);

	});

//year draw

	$yearClick.click(function(e){

		e.preventDefault();
		$(this).next().slideToggle(400);

	});

//~~~~~~~~~~~~~~~~~ waypoints ~~~~~~~~~~~~~~~~~//

	$('.current').waypoint(function(direction) {
	  	console.log('Basic example callback triggered.'+ direction);
	});

	$('.onsite').waypoint('sticky');

});//end of ready
























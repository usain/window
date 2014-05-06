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
	// $exhibition.hide();

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

	$('header').waypoint('sticky');

	$('.onsite').waypoint('sticky', {
  		offset: 64 // Apply "stuck" when element 30px from top

	});

	$('.online').waypoint('sticky', {
  		offset: 64 // Apply "stuck" when element 30px from top
	});

	$('h2').waypoint('sticky', {
  		offset: 64 // Apply "stuck" when element 30px from top
	});


//~~~~~~~~~~~~~~~~~ animate onsite bar down ~~~~~~~~~~~~~~~~~//
	// console.log($('.onsite').height());

	// $('.onsite').waypoint(function(direction){

	// 	$(this).stop().animate({

	// 		top: $('.onsite').height()+$('nav').height()-2

	// 		}, 'slow');

	// 	if(direction==="up"){

	// 		$('nav').stop().animate({

	// 			top : 0

	// 		}, 'slow');
	// 	};

	// });

});//end of ready
























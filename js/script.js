/*	Author: Dylan Scott
	Date: May 2014
*/
$(document).ready(function(){


//variables

	var       $mailchimpDraw 	= $("#mc_embed_signup"),
		$emailButton 		= $(".icon-envelope"),
		$close			= $(".close"),
		$yearClick		= $(".sticky-wrapper"),
		$exhibition		= $(".year"),
		$navButton		= $('#navButton'),
		$navItems        		= $('.navItems'),
		$main			= $('#main');

//init states

	$mailchimpDraw.hide();
	$navItems.hide();
	//$exhibition.hide();

//mailchimp draw

	$emailButton.click(function(e){

		e.preventDefault();
		$mailchimpDraw.slideToggle(400);

	});

	$close.click(function(e){

		e.preventDefault();
		$mailchimpDraw.slideToggle(400);

	});

//navigation draw

	$navButton.click(function(e){

		e.preventDefault();
		$navItems.slideToggle(400);

	});

//year draw

	$yearClick.click(function(e){

		e.preventDefault();
		//$(this).next().slideToggle(400);
		$('.year').slideToggle(400);

	});

//~~~~~~~~~~~~~~~~~ waypoints ~~~~~~~~~~~~~~~~~//

	$('header').waypoint('sticky');

	$('.onsite').waypoint('sticky', {
  		offset: 64 // Apply "stuck" when element 64px from top

	});

	$('.online').waypoint('sticky', {
  		offset: 64 // Apply "stuck" when element 64px from top
	});

	$('h2').waypoint('sticky', {
  		offset: 64 // Apply "stuck" when element 64px from top
	});

//~~~~~~~~~~~~~~~~~ responsive videos ~~~~~~~~~~~~~~~~~//

	$main.fitVids();

//~~~~~~~~~~~~~~~~~ press release text toggle ~~~~~~~~~~~~~~~~~//

	$('.showText').hide();

	$('.center').click(function(e){

		e.preventDefault();
		//$(this).children().removeClass('icon-arrow-down2').addClass('icon-arrow-up2');
		if ($('.showText').is(':visible')){
			$(this).children().removeClass('icon-arrow-up2').addClass('icon-arrow-down2');
		}else{
			$(this).children().removeClass('icon-arrow-down2').addClass('icon-arrow-up2');
		}

		$('.showText').slideToggle(400);
	});


});//end of ready
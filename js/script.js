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

//~~~~~~~~~~~~~~~~~ placeholder ~~~~~~~~~~~~~~~~~//

	$('input, textarea').placeholder();

	// var html;
	// 			if ($.fn.placeholder.input && $.fn.placeholder.textarea) {
	// 				html = '<strong>Your current browser natively supports <code>placeholder</code> for <code>input</code> and <code>textarea</code> elements.</strong> The plugin won’t run in this case, since it’s not needed. If you want to test the plugin, use an older browser ;)';
	// 			} else if ($.fn.placeholder.input) {
	// 				html = '<strong>Your current browser natively supports <code>placeholder</code> for <code>input</code> elements, but not for <code>textarea</code> elements.</strong> The plugin will only do its thang on the <code>textarea</code>s.';
	// 			}
	// 			if (html) {
	// 				$('<p class="note">' + html + '</p>').insertAfter('form');
				 // }

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

	// $('.followWrap').click(function(){

	// 	alert('this is clicked');
	// 	// $(this).next('.years').slideDown();

	// });


//~~~~~~~~~~~~~~~~~ instagram ~~~~~~~~~~~~~~~~~//

	$('#main').stickyHeaders({
						onHeaderChange: function() { // When we scroll, trigger an event that tells us which header is currently at the top. We'll use this to update the select pulldown.
							var headerId = $(this).attr('data-header');
							$('#headerJumpSelect').val(headerId);
						}
					});

	// $('#headerJumpSelect').on('click', function(){ // When the select changes, jump to the matching header.
	// 	var headerId = $(this).val();
	// 	var position = $('.stickyHeader[data-header="' + headerId + '"]').attr('data-originalPOS');
	// 	$('.stickyContainer').scrollTop(position);
	// });


//~~~~~~~~~~~~~~~~~ instagram ~~~~~~~~~~~~~~~~~//

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
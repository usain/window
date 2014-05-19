/*
Instagram scroll pattern built on:
  Sticky Elements Shortcut for jQuery Waypoints - v2.0.4
  Copyright (c) 2011-2014 Caleb Troughton
  Dual licensed under the MIT license and GPL license.
  https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
Dylan Scott 19th May 2014
*/


(function() {
  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      return define(['jquery', 'waypoints'], factory);
    } else {
      return factory(root.jQuery);
    }
  })(this, function stickyTitles(stickies) {
    this.load = function() {

            stickies.each(function(){

                var thisSticky = jQuery(this).wrap('<div class="followWrap" />');
                    thisSticky.parent().height(thisSticky.outerHeight());

                jQuery.data(thisSticky[0], 'pos', thisSticky.offset().top-64);

            });
        }
    $.waypoints('extendFn', 'sticky', unction() {

        stickies.each(function(i){

            var thisSticky = jQuery(this),
                nextSticky = stickies.eq(i+1),
                prevSticky = stickies.eq(i-1),
                pos = jQuery.data(thisSticky[0], 'pos');

            if (pos <= jQuery(window).scrollTop()) {

                thisSticky.addClass("fixed");

                if (nextSticky.length > 0 && thisSticky.offset().top >= jQuery.data(nextSticky[0], 'pos') - thisSticky.outerHeight()) {

                    thisSticky.addClass("absolute").css("top", jQuery.data(nextSticky[0], 'pos') - thisSticky.outerHeight()+64);

                }

            } else {

                thisSticky.removeClass("fixed");

                if (prevSticky.length > 0 && jQuery(window).scrollTop() <= jQuery.data(thisSticky[0], 'pos')  - prevSticky.outerHeight()) {

                    prevSticky.removeClass("absolute").removeAttr("style");

                }

            }
        });
    
  });

}).call(this);

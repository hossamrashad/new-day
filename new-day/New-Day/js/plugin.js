/* jslint plusplus: true, evil:true */
/*global $, jQuery, document, window, alert, prompt, confirm */

/***************************************************/

/* Window Height */
$(function () {
  "use strict";
  var windowH = $(window).height();
  $(".jq-windowHeight").height(windowH);

  $(window).resize(function () {
    $(".jq-windowHeight").height(windowH);
  });
});

// button scroll to top
$(document).ready(function () {
  "use strict";
  $(window).scroll(function () {
    var buttonScroll = $(".scroll-to-top");
    if ($(window).scrollTop() >= 500) {
      if (buttonScroll.is(":hidden")) {
        buttonScroll.fadeIn(400);
      }
    } else {
      buttonScroll.fadeOut(400);
    }
  });
  $(".scroll-to-top").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
});

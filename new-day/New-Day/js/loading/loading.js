/* jslint plusplus: true, evil:true */
/* global $, jQuery, document, window, alert, prompt, confirm */

/* start section loading */
$(document).ready(function () {
  "use strict";

  $(".loading .spinner").fadeOut(2000, function () {
    $(this)
      .parent()
      .fadeOut(2000, function () {
        $(this).remove();
      });
  });
});
/* end section loading */

/* start PRELOADER */
$(document).ready(function () {
  "use strict";
  (function ($) {
    $(window).ready(function () {
      $("#preloader").fadeOut(3000);
    });
  })(jQuery);
});
/* end PRELOADER */

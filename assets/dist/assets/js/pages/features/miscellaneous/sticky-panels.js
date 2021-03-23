/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*********************************************************************!*\
  !*** ../demo7/src/js/pages/features/miscellaneous/sticky-panels.js ***!
  \*********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */

// Class definition
// Based on:  https://github.com/rgalus/sticky-js

var KTStickyPanelsDemo = function () {

    // Private functions

    // Basic demo
    var demo1 = function () {
        if (KTLayoutAsideToggle && KTLayoutAsideToggle.onToggle) {
            var sticky = new Sticky('.sticky');

            KTLayoutAsideToggle.onToggle(function() {
                setTimeout(function() {
                    sticky.update(); // update sticky positions on aside toggle
                }, 500);
            });
        }
    }

    return {
        // public functions
        init: function() {
            demo1();
        }
    };
}();

jQuery(document).ready(function() {
    KTStickyPanelsDemo.init();
});

/******/ })()
;
//# sourceMappingURL=sticky-panels.js.map
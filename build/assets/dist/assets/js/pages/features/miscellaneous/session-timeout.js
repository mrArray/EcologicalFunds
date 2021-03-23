/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!***********************************************************************!*\
  !*** ../demo7/src/js/pages/features/miscellaneous/session-timeout.js ***!
  \***********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */


var KTSessionTimeoutDemo = function () {
    var initDemo = function () {
        $.sessionTimeout({
            title: 'Session Timeout Notification',
            message: 'Your session is about to expire.',
            keepAliveUrl: HOST_URL + '/api//session-timeout/keepalive.php',
            redirUrl: '?p=page_user_lock_1',
            logoutUrl: '?p=page_user_login_1',
            warnAfter: 5000, //warn after 5 seconds
            redirAfter: 15000, //redirect after 15 secons,
            ignoreUserActivity: true,
            countdownMessage: 'Redirecting in {timer} seconds.',
            countdownBar: true
        });
    }

    return {
        //main function to initiate the module
        init: function () {
            initDemo();
        }
    };
}();

jQuery(document).ready(function() {
    KTSessionTimeoutDemo.init();
});

/******/ })()
;
//# sourceMappingURL=session-timeout.js.map
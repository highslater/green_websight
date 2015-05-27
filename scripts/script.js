/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    'use strict';
    $('.hamburger').click(function () {
        $(this).toggleClass('transform');
        $(".list, .listBack").slideToggle(1000);
    });
    
});
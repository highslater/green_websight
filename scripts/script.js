/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    'use strict';
    $('.hamburger').click(function () {
        $(this).toggleClass('transform');
        $('.list, .listBack').slideToggle(1000);
    });
    var $link = $('.listBack');
    $link.on('mouseenter mouseleave', 'a', function () {
        $('#testDiv').slideToggle(100);
    });
});


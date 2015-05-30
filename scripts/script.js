/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    'use strict';
    
    $('.hamburger').click(function () {
        $(this).toggleClass('transform');
        $('.list, .listBack').slideToggle(1000);
    });
    
});

$(document).ready(function () {
    'use strict';
    
    
    var $link = $('.listBack');
    
    $link.mouseenter(function () {
        $('#testDiv').slideDown();
    });
    
    $link.mouseleave(function () {
        $('#testDiv').slideUp();
    });
    
    
});
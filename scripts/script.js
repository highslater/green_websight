$(document).ready(function() {
    $('.hamburger').on('click', function(){
        $(this).toggleClass('transform');
        $('.list').toggle();
        $('.listBack').toggle();
    });
    
    
});
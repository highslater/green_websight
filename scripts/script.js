$(document).ready(function() {
    var closed = true;
    $('.hamburger').click(function(){
        $(this).toggleClass('transform');
        
        if (closed){
            $('.list').slideDown(1000);
            $('.listBack').slideDown(1200);
            closed = false;
        }
        
        else { 
            $('.list').slideUp(1200);
            $('.listBack').slideUp(1200);
            closed = true;
        }   
    }); 
});
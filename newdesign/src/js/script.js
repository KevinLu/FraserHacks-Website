$(document).ready(function(){
    $(window).scroll(function(){
        $("#hero").css("opacity", 1 - $(window).scrollTop() / ($('#hero').height()*1.5));
    });
});
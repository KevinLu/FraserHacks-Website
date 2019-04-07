$(document).ready(function(){
    $(window).scroll(function(){
        $("#hero").css("opacity", 1 - $(window).scrollTop() / ($('#hero').height()*0.8));
    });
});

console.log('%c Interested in volunteering/mentoring at FraserHacks? E-mail us at contact@fraserhacks.ca ', 'background: #222; color: #bada55');
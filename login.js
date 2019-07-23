$(document).ready(function (){
    $('.signIn').click(function(){
        
        $('.loginBox').css({
            transform : "perspective(600px) rotateY(-180deg)"
        });

        $('.signature').css({
            transform : "perspective(600px) rotateY(0deg)"
        });

    });
});
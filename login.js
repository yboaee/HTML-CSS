$(document).ready(function (){
    // 버튼 이벤트
    $('.signIn').click(function(){        
        $('.loginBox').css({
            transform : "perspective(600px) rotateY(-180deg)"
        });

        $('.signature').css({
            transform : "perspective(600px) rotateY(0deg)"
        });
    });
    $('.disagree').click(function(){
        $('.loginBox').css({
            transform : "perspective(600px) rotateY(0deg)"
        });

        $('.signature').css({
            transform : "perspective(600px) rotateY(180deg)"
        });
        $("#id").val('');
        $("#pw").val('');
    });
});
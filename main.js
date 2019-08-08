$(document).ready(function(){
    $(".includeNavbar").load("./navbar.html");
    counter_Animation();

    
});
function counter_Animation(){
    /* Statistic Animation */
    $('.counter-value').each(function(){
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        },{
            duration: 4000,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
}
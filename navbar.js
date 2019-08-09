$(document).ready(function(){
    display_Sidebar();

});

/* SideBar Animation */
function display_Sidebar(){
    $(".toggle_menu").click(function(){
        $(".main-nav").addClass("visible_menu");
        $(".toggle_menu").addClass("opacity_zero");

        /* wrapper 같이 move */
        $(this).parents("div").css("width", "250px");
        $(".wrapper").css("margin-left", "250px");
        $(".wrapper").css("transition", "all 0.3s ease-in-out");
    });

    $(".fa-times").click(function(){
        $(".main-nav").removeClass("visible_menu");
        $(".toggle_menu").removeClass("opacity_zero");

        /* wrapper 같이 move */
        $(".main-nav").parents("div").css("width", "0px");
        $(".wrapper").css("margin-left", "0px");
        $(".wrapper").css("transition", "all 0.3s ease-in-out");
    });
}
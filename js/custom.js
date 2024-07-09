$(document).ready(function () {

    // start responsive menu
    $(".btn a").click(function () {
        if ($(".iconbar > a").attr("data-change") === "close") {
            $(".responsive-menu").show();
            $(".responsive-menu").animate({
                right: 0
            }, 500);
            $(".iconbar > a").attr("data-change", "open");
        } else {
            $(".responsive-menu").animate({
                right: "-100%"
            }, 500, function () {
                $(".responsive-menu > ul > li").next("ul").slideUp();
            });
            $(".responsive-menu").hide(500);
            $(".iconbar > a").attr("data-change", "close");
        }
    });
    $("li").click(function () {
        $(this).next("ul").slideToggle("fast").siblings("ul").slideUp("fast");
    });
    // end responsive menu

    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 1000);
        return false;
    });
});


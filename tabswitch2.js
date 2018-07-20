$(document).ready(function(){
    $("#tabs div").click(function() {
        $("#tabs div").removeClass('active');

        $(this).addClass("active");

        $(".payment-content").hide();

        var selected_tab = $(this).find("a").attr("href");

        $(selected_tab).fadeIn();

        return false;
    });
});

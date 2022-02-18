$(document).ready(function() {

    $(".navbar").hide();

    $(function() {
        $(window).scroll(function() {

            if ($(this).scrollTop() < 150) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });
});

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += "responsive";
    } else {
        x.className = "nav";
    }
}
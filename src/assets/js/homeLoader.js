$(document).ready(function () {
    // Load layout
    $("#navbar").load("components/layout/navbar.html",function() {
        $('.dropdown-menu a').click(function(e) {
            e.stopPropagation();
        })
    });
    $("#aside").load("components/layout/aside.html");

    //load homepage
    $("#main").load("pages/home/index.html", function () {
        $('#breadcrumb').load('components/breadcrumb.html');
        $('#slider').load('pages/home/components/slider.html');
        $('#progressRate').load('pages/home/components/progress-rate.html');
        $('#comments').load('pages/home/components/comments.html');
        
    });


}); 
$(document).ready(function () {
    // Load layout
    $("#navbar").load("components/layout/navbar.html",function() {
        $('.dropdown-menu a').click(function(e) {
            e.stopPropagation();
        })
    });
    $("#aside").load("components/layout/aside.html");
    $("#suggested-services").load("components/layout/suggested-services.html");

    //load vendor
    $("#main").load("pages/vendor/index.html", function () {
        $('#breadcrumb').load('components/breadcrumb.html');

        $('#slider').load('pages/vendor/components/slider.html');

        $('#progressRate').load('pages/vendor/components/progress-rate.html');
        $('#comments').load('pages/vendor/components/comments.html');

        let counter = 3;
        let totalPrice = 300;
        $('#decrement').click(function() {
            if(counter == 0) return
            counter--;
            totalPrice-=100;
            $('#counter').text(counter);
            $('#totalPrice').text('$'+totalPrice)
        });
        $('#increment').click(function() {
            counter++;
            totalPrice+=100
            $('#counter').text(counter);
            $('#totalPrice').text('$'+totalPrice)
        })
    }); 


}); 
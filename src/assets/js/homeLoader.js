$(document).ready(function() {
    // Load layout
    $("#navbar").load("components/layout/navbar.html");
    $("#aside").load("components/layout/aside.html");

    //load homepage
    $("#main").load("pages/home/index.html", function() {
        $('#breadcrumb').load('components/breadcrumb.html')
    });

    
});
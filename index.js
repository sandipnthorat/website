
$(function () {
    $("#header").load("header.html");
    $("#navbar").load("navbar.html");
    // $("#slider").load("slider.html");
    $("#teachers").load("teachers.html");
    $("#acadamicLanding").load("acadamicLanding.html");
    $("#contactusLanding").load("contactusLanding.html");
    $("#footer").load("footer.html");
});

$('#nav-dropdown').hover(function(){ 
    $('.dropdown-toggle', this).trigger('click'); 
});

document.querySelector(".celibration").addEventListener("click", function (e) {
    party.confetti(runButton, {
        count: party.variation.range(0, 100),
	size: party.variation.range(0.6, 1.4),
    });

    party.sparkles(runButton, {
        // Specify further (optional) configuration here.
        count: party.variation.range(0, 100),
        speed: party.variation.range(50, 300),
    });
});


document.querySelector('#about').addEventListener("click", function (e) {
    alert('me punha alo')

    $("#landing-page").hide()
})
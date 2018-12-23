$(document).ready(function(){
    $('.welcome-text').fadeIn(1000, function(){
        $('.more-info').fadeIn(1000, function() {
            setTimeout(function() {window.location.replace('calculator.html');}, 1000);
        });
    });
});
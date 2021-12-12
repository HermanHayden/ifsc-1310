$(document).ready(function() {

    $('.toFade').click(function() {
        $('.gallery').cycle({
            fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
        });
    });

    $('.toZoom').click(function() {
        $('.gallery').cycle({
            fx: 'zoom',
            sync: false,
            delay: -2000
        });
    });

    $('.toTurnDown').click(function() {
        $('.gallery').cycle({
            fx: 'turnDown',
            delay: -4000
        });
    });

});

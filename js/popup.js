$(document).ready(function () {
    $('.btn-popup-close').click(function (event) {
        event.preventDefault();
        $('.popup').hide("slow");
    });
});
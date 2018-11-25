$(document).ready(function () {

    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            this.offset = '300px';
            $('nav').removeClass('sticky');

        }
    }, { offset: '60px' })
});
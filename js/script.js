$(document).ready(function () {
    let $btns = $('.portfolio-area .button-group button');
    $btns.click(function (e) {
        $('.portfolio-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.portfolio-area .grid').isotope({
            filter: selector
        });
        return false;
    });

    $('.portfolio-are .button-group #btn-one').trigger('click');

    $('.grid .our-project .test-popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.client-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            544: {
                items: 2
            }
        }
    })
});
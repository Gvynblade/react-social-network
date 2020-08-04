// Скрипт слайдера

let slideNow = 1;
let slideCount = $('#slider__wrapper').children().length;
let slideInterval = 4000;
let navBtnId = 0;
let translateWidth = 0;

$(document).ready(function() {


    let switchInterval = setInterval(nextSlide, slideInterval);
    $('#slider__nav-btns .slide-nav-btn').eq(0).addClass('active');

    $('#slider__viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#slider__nav-btns .slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#slider__viewport').width() * (navBtnId);
            $('#slider__wrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            $(this).addClass('active');
            let i = slideNow - 1;
            $('#slider__nav-btns .slide-nav-btn').eq(i).removeClass('active');
            slideNow = navBtnId + 1;
        }
    });

});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slider__wrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
        $('#slider__nav-btns .slide-nav-btn').eq(0).addClass('active');
        $('#slider__nav-btns .slide-nav-btn').eq(2).removeClass('active');
    } else {
        translateWidth = -$('#slider__viewport').width() * (slideNow);
        $('#slider__wrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        let i = slideNow - 1;
        $('#slider__nav-btns .slide-nav-btn').eq(i).removeClass('active');
        let j = slideNow;
        $('#slider__nav-btns .slide-nav-btn').eq(j).addClass('active');
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#slider__viewport').width() * (slideCount - 1);
        $('#slider__wrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slider__wrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}

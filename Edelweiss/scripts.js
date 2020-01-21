// Скрипт слайдера

let slideNow = 1;
let slideCount = $('#slider__wrapper').children().length;
let slideInterval = 4000;
let navBtnId = 0;
let translateWidth = 0;

$(document).ready(function() {


    let switchInterval = setInterval(nextSlide, slideInterval);
    $('#slider__nav-btns .slide-nav-btn').eq(0).css('background' , '#fff');

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
            $(this).css('background' , '#fff');
            let i = slideNow - 1;
            $('#slider__nav-btns .slide-nav-btn').eq(i).css('background' , '');
            slideNow = navBtnId + 1;
        }
    });


    // разворачиваем субменю при нажатии на кнпку и добавляем css тили

    $('.nav-arrow').on('click', function() {

      let currentNavArrow = $(this).children().attr('src');

      if (currentNavArrow == 'img/arrow-menu-open.png') {
        $(this).children().attr('src' , 'img/arrow-menu-close.png');
        $(this).parent().css('background' , '');
        $(this).parent().children('a').css('color' , '#fff');
        $(this).siblings('.nav__item__subnav').css('height' , '0');
      } else {
        $(this).children().attr('src' , 'img/arrow-menu-open.png');
        $(this).parent().css('background' , '#fce561');
        $(this).parent().children('a').css('color' , '#323131');
        $(this).siblings('.nav__item__subnav').css('height' , 'auto');
      }

    });

});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slider__wrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
        $('#slider__nav-btns .slide-nav-btn').eq(0).css('background' , '#fff');
        $('#slider__nav-btns .slide-nav-btn').eq(2).css('background' , '');
    } else {
        translateWidth = -$('#slider__viewport').width() * (slideNow);
        $('#slider__wrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        let i = slideNow - 1;
        $('#slider__nav-btns .slide-nav-btn').eq(i).css('background' , '');
        let j = slideNow;
        $('#slider__nav-btns .slide-nav-btn').eq(j).css('background' , '#fff');
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

// разворачиваем мобильное меню при нажатии на кнпку

$('#mobile-menu').click(function() {
  $('#nav').toggleClass('display-toggle');


});

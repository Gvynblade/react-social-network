$(document).ready( () => {

    /* ------ Слайдер услуг ------ */

    let currentSlide = 1;
    let sliderNavLinks = $('#our-services__navlinks .our-services__navlinks__Item');
    let sliderPrevBtn = $('#our-services__slider__prev');
    let sliderMextBtn = $('#our-services__slider__next');
    let sliderContainer = $('#our-services__slider');
    let sliderCatName = 'Правовой консалтинг';
    let sliderCatNameBox = $('#our-services__category-name');


    // переключаем слайды при клике на ссылки с названиями категорий

    sliderNavLinks.on('click', function() {

        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        for( let i = 0; i < sliderContainer.children().length; i++) {

            if (sliderContainer.children('.our-services__category-list').eq(i).attr('data-id') === $(this).attr('data-id')){

                sliderContainer.children().eq(i).addClass('active');
                sliderContainer.children().eq(i).siblings().removeClass('active');
                sliderCatNameBox.html($(this).text())
                currentSlide = $(this).attr('data-id');
            }

        }

    })

    // переключаем слайды при клике на кнопки предыдущего и следующего слайда

    sliderPrevBtn.on('click', function() {

        if(currentSlide != 1 && currentSlide != 0) {

            currentSlide--;
            sliderContainer.children('.our-services__category-list').eq(currentSlide -1).addClass('active');
            sliderContainer.children('.our-services__category-list').eq(currentSlide -1).siblings().removeClass('active');

            $('#our-services__navlinks').children().eq(currentSlide - 1).addClass('active');
            $('#our-services__navlinks').children().eq(currentSlide - 1).siblings().removeClass('active');

            sliderCatNameBox.html($('#our-services__navlinks').children().eq(currentSlide - 1).text())

        } else {
            currentSlide = sliderContainer.children().length - 2;
            sliderContainer.children('.our-services__category-list').eq(currentSlide - 1).addClass('active');
            sliderContainer.children('.our-services__category-list').eq(currentSlide - 1).siblings().removeClass('active');

            $('#our-services__navlinks').children().eq(currentSlide - 1).addClass('active');
            $('#our-services__navlinks').children().eq(currentSlide - 1).siblings().removeClass('active');

            sliderCatNameBox.html($('#our-services__navlinks').children().eq(currentSlide - 1).text())
        }

    })

    sliderMextBtn.on('click', function() {

        if(currentSlide < sliderContainer.children().length - 2) {

            currentSlide++;
            sliderContainer.children('.our-services__category-list').eq(currentSlide -1).addClass('active');
            sliderContainer.children('.our-services__category-list').eq(currentSlide -1).siblings().removeClass('active');

            $('#our-services__navlinks').children().eq(currentSlide - 1).addClass('active');
            $('#our-services__navlinks').children().eq(currentSlide - 1).siblings().removeClass('active');

            sliderCatNameBox.html($('#our-services__navlinks').children().eq(currentSlide - 1).text());

        } else {
            currentSlide = 1;
            sliderContainer.children('.our-services__category-list').eq(currentSlide - 1).addClass('active');
            sliderContainer.children('.our-services__category-list').eq(currentSlide - 1).siblings().removeClass('active');

            $('#our-services__navlinks').children().eq(currentSlide - 1).addClass('active');
            $('#our-services__navlinks').children().eq(currentSlide - 1).siblings().removeClass('active');

            sliderCatNameBox.html($('#our-services__navlinks').children().eq(currentSlide - 1).text());
        }

    })

})

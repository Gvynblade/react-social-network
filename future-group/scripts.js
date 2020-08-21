$(document).ready( () => {

  // переключаем вклади товаров по клику

  $('#trendy-collection__nav a').on('click', function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    for(let i = 0; i < $('#trendy-bags__container').children().length; i++){
      if ($('#trendy-bags__container').children().eq(i).attr('id') === $(this).attr('data-b-name')){

          $('#trendy-bags__container').children().eq(i).addClass('active');
          $('#trendy-bags__container').children().eq(i).siblings().removeClass('active');

      }
    }

  });


})

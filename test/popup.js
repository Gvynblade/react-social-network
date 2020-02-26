$(document).ready(function(){

  $('.popup1').click(
    function(){

      $(this).toggleClass('open');

    }
  )

  $('#popup2').click(
    function(){

      if ($('.popup2__wrapper').hasClass('open') != false) {
        $('.popup2__wrapper').removeClass('open');
        $('.popup2__block').removeClass('open');
      } else {
        $('.popup2__wrapper').addClass('open');
        $('.popup2__block').addClass('open');
      }

    }
  )

  $('.popup2__wrapper').click(
    function(){

      $('.popup2__wrapper').removeClass('open');
      $('.popup2__block').removeClass('open');

    }
  )

});

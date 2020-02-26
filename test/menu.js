$(document).ready(function(){

  $('#menu-toggle').click(
    function(){

      let menuStatus = $('.main').hasClass('push');
      if (menuStatus == false) {
        $('.main').addClass('push');
      } else {
        $('.main').removeClass('push');
      }

    }
  )

});

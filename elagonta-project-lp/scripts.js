$(document).ready( () => {

        // Переключаем секции по клику на пункты меню

        $('#sidebar-nav .container__sidebar__item').on('click', function() {
          $(this).addClass('active');
          $(this).siblings().removeClass('active');

          for(let i = 0; i < $('#container__main').children().length; i++){
            if ($('#container__main').children().eq(i).attr('id') === $(this).attr('data-s-name')){

                $('#container__main').children().eq(i).addClass('active');
                $('#container__main').children().eq(i).siblings().removeClass('active');

            }
          }

          // отображаем окно уведомления пополнения счета при открытии вкладки настроек

          if($('#gear').hasClass('active')) {
              $('#header .header__nav__cabinet__balance__notofication').addClass('show');
          } else {
              $('#header .header__nav__cabinet__balance__notofication').removeClass('show');
          }

        });

        // Активируем и деактивируем процесс копирования сделок

        $('#gear .container__gear__buttons button').on('click', function() {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');

            let activate = $('#container__gear__activate');

            if (activate.hasClass('active')) {
                $('#container__gear__transactions .container__gear__transactions-header__pocess').removeClass('hide');
                $('#container__gear__transactions .container__gear__transactions-header__status .status').addClass('active')
                $('#container__gear__transactions .container__gear__transactions-header__status .status').html('активен');
            } else {
                $('#container__gear__transactions .container__gear__transactions-header__pocess').addClass('hide');
                $('#container__gear__transactions .container__gear__transactions-header__status .status').removeClass('active')
                $('#container__gear__transactions .container__gear__transactions-header__status .status').html('деактивирован');
            }

        });

    }
)

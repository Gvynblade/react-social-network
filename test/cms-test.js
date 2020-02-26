$(document).ready(function(){

 // Выводим форму входа и регистрации при клике на ссылку

  $('#loginLink').click(function(){

    $('.login__wrapper').addClass('display');

  });

  $('#registerLink').click(function(){

    $('.register__wrapper').addClass('display');

  });

  // Закрываем форму входа и регистрации при клике на кнопку

  $('#login-button-close').click(function(){

    $('.login__wrapper').removeClass('display');

  });

  $('#register-button-close').click(function(){

    $('.register__wrapper').removeClass('display');

  });

  // регистрируем нового пользователя при заполнении формы и клике на конпку

  $('#register-button').click(function(){

    let rUserName = $('#register-login').val();
    let rUserPassword = $('#register-password').val();

    if (rUserName != '' && rUserPassword != '') {

      users.push(
        rUserName = {
          username: `${rUserName}`,
          role: 'user',
          password:  `${rUserPassword}`
        }
      );

      $('.register__box').append('<p>Регистрация прошла успешно</p>');

    } else {
      $('.register__box').append('<p style="color:red;">Поле логина и /или пароля пустое!</p>');
    }

  });

  // логиним пользователя, предоставляем возможности по уровню прав

  let cUserName;
  let cUserRole = 'guest';
  let cUserPassword;

  $('#login-button').click(function(){

    cUserName = $('#user-login').val();
    cUserPassword = $('#user-password').val();

    if (cUserName != '' && cUserPassword != '') {

      for (i = 0; i <= users.length; ++i) {

        if (i == users.length){
          $('.login__box').append('<p style="color:red;">Не верный логин и /или пароль!</p>');
        }

        if (cUserName == users[i].username && cUserPassword == users[i].password) {

          cUserRole = users[i].role;
          $('.login__box').append('<p>Авторизация прошла усспешно</p>');
          $('header .container').html(`<b>${cUserName}</b>, Роль: ${cUserRole}`);
          break;

        };

      }

    } else {
      $('.login__box').append('<p style="color:red;">Поле логина и /или пароля пустое!</p>');
    }

  });



});

let users = [
  admin = {
    username: 'admin',
    role: 'administrator',
    password: 'ertert'
  },
  mod = {
    username: 'mod',
    role: 'moderator',
    password: 'moder'
  },

  muzmoder = {
    username: 'muzmoder',
    role: 'moderator',
    password: 'muzmoder123'
  },

  vitalya = {
    username: 'vitalya',
    role: 'user',
    password: '123ip654'
  },

  masha = {
    username: 'masha',
    role: 'user',
    password: '1p0tr43zxa'
  }

]

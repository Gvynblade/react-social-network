  // Задание №1

  document.querySelector('#button').onclick = function() { // обрабатываем клик по кнопке 'скопировать'

    let = copyUrl = document.querySelector('#url').value; // присваиваем переменной текущее значение input

    navigator.clipboard.writeText(copyUrl) // добавляем значение в буфер обмена
    .then(() => { // в случае успеха, выполняем следующее
      console.log(`Значение ${copyUrl} успешно добавленно в буфер обмена`);
    })
    .catch(err => { // в случае ошибки, выполняем следующее
      console.log('что-то пошло не так', err);
    });

  };

  // Задание #2

  function changeURL (newData) { // меняем урл по клику на кнопку 'изменить данные'

    let currentUrl = window.location.search.split('&'); //Получаем массив разбитых GET параметров, символом &
    currentUrl[0] = currentUrl[0].slice(1); // удаляем разделитель ?
    let arr = []
    currentUrl.forEach(function(elem, i, currentUrl) { // пробегаемся по масиву и делим значения ключей, записываем в массив arr
      arr[i] = elem.split('=');
    });

    /* Проверяем при запуске функции changeURL какие параметры были указаны,
    а какие нет. Производим замену значений в массиве*/

    if (newData.a != undefined) {arr[0][1] = newData.a};
    if (newData.b != undefined) {arr[1][1] = newData.b};
    if (newData.test != undefined) {arr[2][1] = newData.test};
    if (newData.clear != undefined) {arr[3][1] = newData.clear};

    let newUrl = `?${arr[0][0]}=${arr[0][1]}&${arr[1][0]}=${arr[1][1]}&${arr[2][0]}=${arr[2][1]}&${arr[3][0]}=${arr[3][1]}`;
    newUrl = window.location.pathname+newUrl;
    history.pushState('', '', newUrl);

  };

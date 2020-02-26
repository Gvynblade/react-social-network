let rangeTopLeft = document.querySelector('#border-form input[name="rtl"]');
let textTopLeft = document.querySelector('#border-form input[name="ttl"]');
let rangeTopRight = document.querySelector('#border-form input[name="rtr"]');
let textTopRight = document.querySelector('#border-form input[name="ttr"]');
let rangeBottomRight = document.querySelector('#border-form input[name="rbr"]');
let textBottomRight = document.querySelector('#border-form input[name="tbr"]');
let rangeBottomLeft = document.querySelector('#border-form input[name="rbl"]');
let textBottomLeft = document.querySelector('#border-form input[name="tbl"]');

let borderBox = document.querySelector('#border-box');

function changeProp () {

  textTopLeft.value = rangeTopLeft.value;
  textTopRight.value = rangeTopRight.value;
  textBottomRight.value = rangeBottomRight.value;
  textBottomLeft.value = rangeBottomLeft.value;

  let rtl = textTopLeft.value;
  let rtr = textTopRight.value
  let rbr = textBottomRight.value
  let rbl = textBottomLeft.value

  borderBox.style.borderRadius = `${rtl}px ${rtr}px ${rbr}px ${rbl}px`

}


rangeTopLeft.oninput = changeProp;

rangeTopRight.oninput = changeProp;

rangeBottomRight.oninput = changeProp;

rangeBottomLeft.oninput = changeProp;


// Перемещаем обьекты при клике на область

let moveArea = document.querySelector('#move-area');
let moveitem1 = document.querySelector('#move-area .move-item1');
let moveitem2 = document.querySelector('#move-area .move-item2');
let moveitem3 = document.querySelector('#move-area .move-item3');
let moveitem4 = document.querySelector('#move-area .move-item4');

moveArea.onclick = function () {
  moveArea.classList.add('moved');
  moveitem1.classList.add('moved1');
  moveitem2.classList.add('moved1');
  moveitem3.classList.add('moved1');
  moveitem4.classList.add('moved1');
}

// Фильтрация списка при введении поискового запроса

let input, filter, ul, li, a, i;

input = document.querySelector('.search-filter input');
ul = document.querySelector('#search-filter__list');
li = ul.getElementsByTagName('li');

input.onkeyup = function () {

  filter = input.value.toUpperCase();

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName('a')[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
}

// Конвертер валют

let convInput = document.querySelector('#currInput');
let convResult = document.querySelector('#convResult');

let currCource;

fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(async(result) => {
  // результат запроса
  if (result.status === 200 && result.ok) {
    // превращение в JSON
    return result.json()
  }
}).then((JSON_DATA) => {
  // вывод данных
  currCource = JSON_DATA.Valute.USD.Value;
  // действия с данными...
}).catch((error) => {
  // обработка ошибок
  console.error('Ошибка получения списка: ', error);
})

convInput.oninput = function () {

  let convType = document.querySelector('#convType').value;

  if (convType == 'Перевести в доллары') {
    let result = convInput.value / currCource;
    convResult.innerHTML = result.toFixed(2) + ' $'
  } else {
    let result = convInput.value * currCource;
    convResult.innerHTML = result.toFixed(2) + ' &#8381;'
  }
}

// Делаем график на canvas

let usersCounter = [0, 50, 120, 70, 100, 150, 200, 201, 180, 300, 400];
let viewsCounter = [0, 70, 230, 150, 300, 470, 490, 500, 390, 700, 750];
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let step = 0;
canvas.height = 800;
canvas.width  = 400;
ctx.strokeStyle = "green";
ctx.beginPath();
for (let i = 0; i <= usersCounter.length; i++) {
  ctx.lineTo(step, 800 - usersCounter[i]);
  step += 40;
  console.log(step);
}
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "orange";
step = 0;
for (let i = 0; i <= viewsCounter.length; i++) {
  ctx.lineTo(step, 800 - viewsCounter[i]);
  step += 40;
  console.log(step);
}
ctx.stroke();

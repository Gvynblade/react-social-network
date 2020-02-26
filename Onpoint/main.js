// скрипт основного слайдера

let slideNow = 1; // текущий слайд
let slideCount = document.querySelector('#slider__items').children.length; // количество слайдов
let navBtnId = 0; // id кнпки навигации между слайдами
let translateHeight = 0; // на сколько нужно смесить блок со слайдами
let navBtn = 0;
// Аналог $(document).ready(function(){
window.onload = function(){

    let sNavList = document.querySelectorAll('#slider__nav .slider__nav-item');
    console.log(sNavList);
    console.log(typeof sNavList);
    sNavList.forEach(function(clicked) {
      clicked.addEventListener("click", function (event){
        navBtn = this;
        console.log(navBtn);
      });
    });

    // console.log(sNavList.indexOf(navBtn));

};

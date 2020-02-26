$(document).ready(function(){

// получаем название, стоимсоть и путь к картинке у выбранного с помощью клика типа сайта

  let siteType, siteTypeCost, siteTypeImg;

  $('#site-type .site-type-item').on('click', function () {
    siteType = $(this).attr('title');
    siteTypeCost = $(this).attr('data-site-type-cost');
    siteTypeCost = Number.parseInt(siteTypeCost);
    siteTypeImg = $(this).attr('data-img-src');

    // подставляем полученные значения в блок корзины

    $('#shopping-cart img').attr('src' , siteTypeImg);

    $('#shopping-cart .shopping-cart-site-type').text(siteType);

    $('#site-cost').text(siteTypeCost);

  });

  // Добавляем в корзину выбраные доп опции

  $('#site-additional input').on('click', function() {

    let checkedAdditionalElemTitle, checkedAdditionalElemCost, uncheckedAdditionalElemTitle, uncheckedAdditionalElemCost;

    if ($(this).is(':checked')){
    	checkedAdditionalElemTitle = $(this).val();
      checkedAdditionalElemCost = $(this).attr('data-additional-type-cost');
      checkedAdditionalElemCost = Number.parseInt(checkedAdditionalElemCost);
      $("#shopping-cart-additional").append(`<li>${checkedAdditionalElemTitle}</li>`);
      let sitecost = $('#site-cost').text();
      sitecost = Number.parseInt(sitecost);
      sitecost += checkedAdditionalElemCost;
      $('#site-cost').text(sitecost);
    } else {
      uncheckedAdditionalElemTitle = $(this).val();
      uncheckedAdditionalElemCost = $(this).attr('data-additional-type-cost');
      uncheckedAdditionalElemCost = Number.parseInt(uncheckedAdditionalElemCost);
      let a = $("#shopping-cart-additional").html();
      let b = a.replace(`<li>${uncheckedAdditionalElemTitle}</li>`, '');
      $("#shopping-cart-additional").html(b);
      let sitecost = $('#site-cost').text();
      sitecost = Number.parseInt(sitecost);
      sitecost -= uncheckedAdditionalElemCost;
      $('#site-cost').text(sitecost);
    }

  });

});

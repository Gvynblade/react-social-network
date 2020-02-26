let content = document.querySelector('#content');
let img = content.getElementsByTagName('img');
let wrapper = document.querySelector('#wrapper');
let currentImg = 0;
let images = [];
let gallery = document.querySelector('#wrapper .gallery');
let galleryItemWidth;

for (let i = 0; i < img.length; i++) {

  images.push(img[i] ={
    obj: img[i],
    imgId: i,
    src: img[i].src,
    alt: img[i].alt
  });

  gallery.insertAdjacentHTML('beforeend' ,
  `<li class="gallery__item">
    <img src="${images[i].src}" alt="${images[i].alt}">
    <div class="gallery__item__title">${images[i].alt}</div>
  </li>`);

  images[i].obj.addEventListener('click', function(){
    wrapper.classList.add('active');
    document.body.classList.add('stop-scrolling');
    currentImg = this;
    for (let i = 0; i < images.length; i++) {

      document.querySelectorAll('#wrapper .gallery .gallery__item')[i].style.width = `calc(100% / ${images.length})`

      if (images[i].obj == currentImg) {
        currentImg = images[i].imgId;
      }

    }

    showCurrentSlide();

  });

}

document.querySelector('#wrapper .close').onclick = function () {
  wrapper.classList.remove('active');
  document.body.classList.remove('stop-scrolling');
}

  gallery.style.width = `calc(100% * ${images.length})`

function nextSlide() {

  galleryItemWidth = document.querySelector('#wrapper .gallery .gallery__item').offsetWidth;

  if (currentImg == images.length - 1) {
    gallery.style.transform = "translate(0)";
    currentImg = 0;
  } else {
    currentImg++
    let imgMove = galleryItemWidth * currentImg;
    gallery.style.transform = `translate(-${imgMove}px)`;
  }

}

function prevSlide() {

  galleryItemWidth = document.querySelector('#wrapper .gallery .gallery__item').offsetWidth;

  if (currentImg == 0) {
    let imgMove = galleryItemWidth * (images.length - 1);
    gallery.style.transform = `translate(-${imgMove}px)`;
    currentImg = images.length - 1;
    console.log(currentImg);
  } else {
    --currentImg;
    imgMove = galleryItemWidth * currentImg;
    gallery.style.transform = `translate(-${imgMove}px)`;
    console.log(currentImg);
  }

}

function showCurrentSlide () {
  galleryItemWidth = document.querySelector('#wrapper .gallery .gallery__item').offsetWidth;
  let imgMove = galleryItemWidth * currentImg;
  gallery.style.transform = `translate(-${imgMove}px)`;
}

document.querySelector('#gallery__nav .gallery__nav__next').onclick = nextSlide;
document.querySelector('#gallery__nav .gallery__nav__prev').onclick = prevSlide;

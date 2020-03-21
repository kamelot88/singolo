/* Слайдер_начало */
var buttonL = document.querySelector('.chevLeft');
var buttonR = document.querySelector('.chevRight');
var left = 0;
var slide1 = document.querySelector('.slide1');
var clonSlide1 = slide1.cloneNode(true);
var ekran = document.querySelector('.ekran');

buttonL.onclick = function () {
  left = left - 1020;
  if (left < -1020) {
    left = 0;
  }
  ekran.style.left = left + 'px';
}

buttonR.onclick = function () {
  var ekran = document.querySelector('.ekran');
  left = - 1020;
  if (left > -1020) {
    left = 0;
  }
  ekran.style.left = left + 'px'
}
/* Слайдер_конец */


// Переключение табов_начало
var btn_all = document.querySelector("#Portfolio > div.wrapper > nav > button");
var btn_port1 = document.querySelector("#Portfolio > div.wrapper > nav > button:nth-child(1)");
var btn_port2 = document.querySelector("#Portfolio > div.wrapper > nav > button:nth-child(2)");
var btn_port3 = document.querySelector("#Portfolio > div.wrapper > nav > button:nth-child(3)");
var btn_port4 = document.querySelector("#Portfolio > div.wrapper > nav > button:nth-child(4)");
var gallery = document.querySelector("#Portfolio > div.wrapper > div.wrap > div");
btn_port1.classList.add('btn_gallery_active');

btn_port1.onclick = function () {
  btn_port2.classList.remove('btn_gallery_active');
  btn_port3.classList.remove('btn_gallery_active');
  btn_port4.classList.remove('btn_gallery_active');
  btn_port1.classList.add('btn_gallery_active');
  gallery.classList.remove('main_flex_rev');
  document.querySelector('.b8').classList.remove('flex__order_01');
  document.querySelector('.b5').classList.remove('flex__order_02');
  document.querySelector('.b2').classList.remove('flex__order_03');
  document.querySelector('.b11').classList.remove('flex__order_04');
  document.querySelector('.b1').classList.remove('flex__order_05');
  document.querySelector('.b7').classList.remove('flex__order_06');
  return;
}
btn_port2.onclick = function () {
  btn_port1.classList.remove('btn_gallery_active');
  btn_port3.classList.remove('btn_gallery_active');
  btn_port4.classList.remove('btn_gallery_active');
  btn_port2.classList.add('btn_gallery_active');
  gallery.classList.add('main_flex_rev');
  return;
}
btn_port3.onclick = function () {
  btn_port1.classList.remove('btn_gallery_active');
  btn_port2.classList.remove('btn_gallery_active');
  btn_port4.classList.remove('btn_gallery_active');
  btn_port3.classList.add('btn_gallery_active');
  gallery.classList.remove('main_flex_rev');
  document.querySelector('.b8').classList.add('flex__order_01');
  document.querySelector('.b5').classList.add('flex__order_02');
  document.querySelector('.b2').classList.add('flex__order_03');
  document.querySelector('.b11').classList.add('flex__order_04');
  document.querySelector('.b1').classList.add('flex__order_05');
  document.querySelector('.b7').classList.add('flex__order_06');
  return;
}
btn_port4.onclick = function () {
  btn_port2.classList.remove('btn_gallery_active');
  btn_port3.classList.remove('btn_gallery_active');
  btn_port1.classList.remove('btn_gallery_active');
  btn_port4.classList.add('btn_gallery_active');
  gallery.classList.remove('main_flex_rev');
  document.querySelector('.b8').classList.remove('flex__order_01');
  document.querySelector('.b5').classList.remove('flex__order_02');
  document.querySelector('.b2').classList.remove('flex__order_03');
  document.querySelector('.b11').classList.remove('flex__order_04');
  document.querySelector('.b1').classList.remove('flex__order_05');
  document.querySelector('.b7').classList.remove('flex__order_06');
  document.querySelector('.b7').classList.add('flex__order_01');
  document.querySelector('.b12').classList.add('flex__order_02');
  document.querySelector('.b5').classList.add('flex__order_03');
  document.querySelector('.b1').classList.add('flex__order_04');
  document.querySelector('.b9').classList.add('flex__order_05');
  document.querySelector('.b3').classList.add('flex__order_06');
  return;
}
// Переключение табов_конец

// Картинки в portfolio_начало
document.querySelector('.b1').onclick = function () {
  document.querySelector('.block_images > img').classList.remove('block_images_border');
  document.querySelector('.b1 > img').classList.add('block_images_border');
}
document.querySelector('.b2').onclick = function () {
  document.querySelector('.block_images > img').classList.remove('block_images_border');
  document.querySelector('.b2 > img').classList.add('block_images_border');
}
document.querySelector('.b3').onclick = function () {
  document.querySelector('.block_images > img').classList.remove('block_images_border');
  document.querySelector('.b3 > img').classList.add('block_images_border');
}
document.querySelector('.b4').onclick = function () {
  document.querySelector('.block_images > img').classList.remove('block_images_border');
  document.querySelector('.b4 > img').classList.add('block_images_border');
}
document.querySelector('.b5').onclick = function () {
  document.querySelector('.block_images > img').classList.remove('block_images_border');
  document.querySelector('.b5 > img').classList.add('block_images_border');
}
document.querySelector('.b6').onclick = function () {
  document.querySelector('.block_images > img').classList.remove('block_images_border');
  document.querySelector('.b6 > img').classList.add('block_images_border');
}
document.querySelector('.b7').onclick = function () {
  document.querySelector('.block_images > img').classList.remove('block_images_border');
  document.querySelector('.b7 > img').classList.add('block_images_border');
}
document.querySelector('.b8').onclick = function () {
  document.querySelector('.block_images > img').classList.remove('block_images_border');
  document.querySelector('.b8 > img').classList.add('block_images_border');
}
document.querySelector('.b9').onclick = function () {
  document.querySelector('.block_images > img').classList.remove('block_images_border');
  document.querySelector('.b9 > img').classList.add('block_images_border');
}
document.querySelector('.b10').onclick = function () {
  document.querySelector('.block_images > img').classList.remove('block_images_border');
  document.querySelector('.b10 > img').classList.add('block_images_border');
}
document.querySelector('.b11').onclick = function () {
  document.querySelector('.block_images > img').classList.remove('block_images_border');
  document.querySelector('.b11 > img').classList.add('block_images_border');
}
document.querySelector('.b12').onclick = function () {
  document.querySelector('.block_images > img').classList.remove('block_images_border');
  document.querySelector('.b12 > img').classList.add('block_images_border');
}
// Картинки в portfolio_конец










// Якоря_начало
var home = document.querySelector("body > header > div > div > nav > ul > li:nth-child(1) > a");
var services = document.querySelector("body > header > div > div > nav > ul > li:nth-child(3) > a");
var portfolio = document.querySelector("body > header > div > div > nav > ul > li:nth-child(5) > a");
var about = document.querySelector("body > header > div > div > nav > ul > li:nth-child(7) > a");
var contakt = document.querySelector("body > header > div > div > nav > ul > li:nth-child(9) > a");

window.onscroll = function () {
  var scrollTop = window.pageYOffset;

  if (scrollTop >= 0 && scrollTop < 600) {
    services.classList.remove('red_text');
    portfolio.classList.remove('red_text');
    about.classList.remove('red_text');
    contakt.classList.remove('red_text');
    home.classList.add('red_text');
  }
  if (scrollTop >= 600 && scrollTop < 1100) {
    home.classList.remove('red_text');
    portfolio.classList.remove('red_text');
    about.classList.remove('red_text');
    contakt.classList.remove('red_text');
    services.classList.add('red_text');
  }
  if (scrollTop >= 1100 && scrollTop < 1970) {
    home.classList.remove('red_text');
    services.classList.remove('red_text');
    about.classList.remove('red_text');
    contakt.classList.remove('red_text');
    portfolio.classList.add('red_text');
  }
  if (scrollTop >= 1970 && scrollTop < 2570) {
    home.classList.remove('red_text');
    services.classList.remove('red_text');
    portfolio.classList.remove('red_text');
    contakt.classList.remove('red_text');
    about.classList.add('red_text');
  }
  if (scrollTop >= 2570) {
    home.classList.remove('red_text');
    services.classList.remove('red_text');
    portfolio.classList.remove('red_text');
    about.classList.remove('red_text');
    contakt.classList.add('red_text');
  }
};
// Якоря_конец
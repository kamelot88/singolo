// Якоря_начало
var home = document.querySelector("body > header > div > div > nav > ul > li:nth-child(1) > a");
var services = document.querySelector("body > header > div > div > nav > ul > li:nth-child(3) > a");
var portfolio = document.querySelector("body > header > div > div > nav > ul > li:nth-child(5) > a");
var about = document.querySelector("body > header > div > div > nav > ul > li:nth-child(7) > a");
var contakt = document.querySelector("body > header > div > div > nav > ul > li:nth-child(9) > a");

var scrollTop = window.pageYOffset;
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
home.addEventListener('click', function () {
  nav.style.display = 'none';
  hamburger.classList.remove('rotation');
  logo.style.marginLeft = 'calc(50% - 70px)';
});
services.addEventListener('click', function () {
  nav.style.display = 'none';
  hamburger.classList.remove('rotation');
  logo.style.marginLeft = 'calc(50% - 70px)';
});
portfolio.addEventListener('click', function () {
  nav.style.display = 'none';
  hamburger.classList.remove('rotation');
  logo.style.marginLeft = 'calc(50% - 70px)';
});
about.addEventListener('click', function () {
  nav.style.display = 'none';
  hamburger.classList.remove('rotation');
  logo.style.marginLeft = 'calc(50% - 70px)';
});
contakt.addEventListener('click', function () {
  nav.style.display = 'none';
  hamburger.classList.remove('rotation');
  logo.style.marginLeft = 'calc(50% - 70px)';
});
if (document.documentElement.clientWidth <= 767 && document.documentElement.clientWidth >= 375) {

  window.onscroll = function () {
    var scrollTop = window.pageYOffset;
    if (scrollTop >= 0 && scrollTop < 294) {
      services.classList.remove('red_text');
      portfolio.classList.remove('red_text');
      about.classList.remove('red_text');
      contakt.classList.remove('red_text');
      home.classList.add('red_text');
    }
    if (scrollTop >= 295 && scrollTop < 890) {
      home.classList.remove('red_text');
      portfolio.classList.remove('red_text');
      about.classList.remove('red_text');
      contakt.classList.remove('red_text');
      services.classList.add('red_text');
    }
    if (scrollTop >= 891 && scrollTop < 1538) {
      home.classList.remove('red_text');
      services.classList.remove('red_text');
      about.classList.remove('red_text');
      contakt.classList.remove('red_text');
      portfolio.classList.add('red_text');
    }
    if (scrollTop >= 1538 && scrollTop < 3147) {
      home.classList.remove('red_text');
      services.classList.remove('red_text');
      portfolio.classList.remove('red_text');
      contakt.classList.remove('red_text');
      about.classList.add('red_text');
    }
    if (scrollTop >= 3147) {
      home.classList.remove('red_text');
      services.classList.remove('red_text');
      portfolio.classList.remove('red_text');
      about.classList.remove('red_text');
      contakt.classList.add('red_text');
    }
  }
}







// Якоря_конец











// @media(min - width: 320px) and(max - width: 374px) {



/* Слайдер_начало */
const buttonL = document.querySelector('.chevLeft');
const buttonR = document.querySelector('.chevRight');


const colectionSlid = document.querySelectorAll("#home > div > div > .slide"); // получаю коллекцию элементов слайдера
const slide = document.querySelector("#home > div > div > .slide");
const sliderLine = document.querySelector('.ekran');

let count = 0;

let width;

function init() {
  // console.log('risize');
  width = document.querySelector('.slide_wrap').offsetWidth;
  sliderLine.style.width = width * colectionSlid.length + 'px';
  colectionSlid.forEach( item => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSlider();
}
window.addEventListener('resize', init);
init();

buttonL.addEventListener('click', function() {
  count--;
  if (count < 0) {
    count = colectionSlid.length - 1;
  }
  rollSlider();
});


buttonR.addEventListener('click', function() {
  count++;
  if (count >= colectionSlid.length) {
    count = 0;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = 'translate(-'+count*width+'px)';
}


















/* Слайдер_конец */

// Отключение дисплеев_начало
var display1 = document.querySelector("#home > div > div > div.slide.slide1.main_flex.flex__align-items_center > div.phone1.main_flex_column.flex__align-items_center > div.display1");
var display2 = document.querySelector("#home > div > div > div.slide.slide1.main_flex.flex__align-items_center > div.phone2.main_flex.flex__align-items_center > div.display2");

display1.onclick = function () {
  if (display1.style.background === "black") {
    display1.style.background = "url(assets/bg_phone_1.png)";
  } else {
    display1.style.background = "black";
  }
}

display2.onclick = function () {
  if (display2.style.background === "black") {
    display2.style.background = "url(assets/bg_phone_2.png)";
  } else {
    display2.style.background = "black";
  }
}
// Отключение дисплеев_конец


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
  gallery.classList.add('main_flex');
  document.querySelector('.b8').classList.remove('flex__order_01');
  document.querySelector('.b5').classList.remove('flex__order_02');
  document.querySelector('.b2').classList.remove('flex__order_03');
  document.querySelector('.b11').classList.remove('flex__order_04');
  document.querySelector('.b1').classList.remove('flex__order_05');
  document.querySelector('.b7').classList.remove('flex__order_06');
  document.querySelector('.b1').classList.remove('flex__order_06');
  document.querySelector('.b3').classList.remove('flex__order_05');
  document.querySelector('.b5').classList.remove('flex__order_04');
  document.querySelector('.b7').classList.remove('flex__order_03');
  document.querySelector('.b9').classList.remove('flex__order_02');
  document.querySelector('.b11').classList.remove('flex__order_01');
  return;
}
btn_port2.onclick = function () {
  btn_port1.classList.remove('btn_gallery_active');
  btn_port3.classList.remove('btn_gallery_active');
  btn_port4.classList.remove('btn_gallery_active');
  gallery.classList.remove('main_flex');
  btn_port2.classList.add('btn_gallery_active');
  gallery.classList.add('main_flex_rev');
  document.querySelector('.b1').classList.remove('flex__order_06');
  document.querySelector('.b3').classList.remove('flex__order_05');
  document.querySelector('.b5').classList.remove('flex__order_04');
  document.querySelector('.b7').classList.remove('flex__order_03');
  document.querySelector('.b9').classList.remove('flex__order_02');
  document.querySelector('.b11').classList.remove('flex__order_01');
  return;
}
btn_port3.onclick = function () {
  btn_port1.classList.remove('btn_gallery_active');
  btn_port2.classList.remove('btn_gallery_active');
  btn_port4.classList.remove('btn_gallery_active');
  btn_port3.classList.add('btn_gallery_active');
  gallery.classList.remove('main_flex_rev');
  gallery.classList.add('main_flex');
  document.querySelector('.b1').classList.remove('flex__order_06');
  document.querySelector('.b3').classList.remove('flex__order_05');
  document.querySelector('.b5').classList.remove('flex__order_04');
  document.querySelector('.b7').classList.remove('flex__order_03');
  document.querySelector('.b9').classList.remove('flex__order_02');
  document.querySelector('.b11').classList.remove('flex__order_01');
  document.querySelector('.b8').classList.add('flex__order_01');
  document.querySelector('.b5').classList.add('flex__order_02');
  document.querySelector('.b2').classList.add('flex__order_03');
  document.querySelector('.b11').classList.add('flex__order_04');
  document.querySelector('.b1').classList.add('flex__order_05');
  document.querySelector('.b7').classList.add('flex__order_06');
  return;
}
btn_port4.onclick = function () {
  btn_port1.classList.remove('btn_gallery_active');
  btn_port2.classList.remove('btn_gallery_active');
  btn_port3.classList.remove('btn_gallery_active');
  btn_port4.classList.add('btn_gallery_active');
  gallery.classList.remove('main_flex_rev');
  document.querySelector('.b8').classList.remove('flex__order_01');
  document.querySelector('.b5').classList.remove('flex__order_02');
  document.querySelector('.b2').classList.remove('flex__order_03');
  document.querySelector('.b11').classList.remove('flex__order_04');
  document.querySelector('.b1').classList.remove('flex__order_05');
  document.querySelector('.b7').classList.remove('flex__order_06');
  gallery.classList.add('main_flex_rev');
  gallery.classList.remove('main_flex');
  document.querySelector('.b1').classList.add('flex__order_06');
  document.querySelector('.b3').classList.add('flex__order_05');
  document.querySelector('.b5').classList.add('flex__order_04');
  document.querySelector('.b7').classList.add('flex__order_03');
  document.querySelector('.b9').classList.add('flex__order_02');
  document.querySelector('.b11').classList.add('flex__order_01');
  return;
}
// Переключение табов_конец

// Картинки в portfolio_начало
document.querySelector(".b1").onclick = function () {
  document.querySelector(".b2 > img").classList.remove("block_images_border");
  document.querySelector(".b3 > img").classList.remove("block_images_border");
  document.querySelector(".b4 > img").classList.remove("block_images_border");
  document.querySelector(".b5 > img").classList.remove("block_images_border");
  document.querySelector(".b6 > img").classList.remove("block_images_border");
  document.querySelector(".b7 > img").classList.remove("block_images_border");
  document.querySelector(".b8 > img").classList.remove("block_images_border");
  document.querySelector(".b9 > img").classList.remove("block_images_border");
  document.querySelector(".b10 > img").classList.remove("block_images_border");
  document.querySelector(".b11 > img").classList.remove("block_images_border");
  document.querySelector(".b12 > img").classList.remove("block_images_border");
  document.querySelector(".b1 > img").classList.toggle("block_images_border");
}
document.querySelector(".b2").onclick = function () {
  document.querySelector(".b1 > img").classList.remove("block_images_border");
  document.querySelector(".b3 > img").classList.remove("block_images_border");
  document.querySelector(".b4 > img").classList.remove("block_images_border");
  document.querySelector(".b5 > img").classList.remove("block_images_border");
  document.querySelector(".b6 > img").classList.remove("block_images_border");
  document.querySelector(".b7 > img").classList.remove("block_images_border");
  document.querySelector(".b8 > img").classList.remove("block_images_border");
  document.querySelector(".b9 > img").classList.remove("block_images_border");
  document.querySelector(".b10 > img").classList.remove("block_images_border");
  document.querySelector(".b11 > img").classList.remove("block_images_border");
  document.querySelector(".b12 > img").classList.remove("block_images_border");
  document.querySelector(".b2 > img").classList.toggle("block_images_border");
}
document.querySelector(".b3").onclick = function () {
  document.querySelector(".b1 > img").classList.remove("block_images_border");
  document.querySelector(".b2 > img").classList.remove("block_images_border");
  document.querySelector(".b4 > img").classList.remove("block_images_border");
  document.querySelector(".b5 > img").classList.remove("block_images_border");
  document.querySelector(".b6 > img").classList.remove("block_images_border");
  document.querySelector(".b7 > img").classList.remove("block_images_border");
  document.querySelector(".b8 > img").classList.remove("block_images_border");
  document.querySelector(".b9 > img").classList.remove("block_images_border");
  document.querySelector(".b10 > img").classList.remove("block_images_border");
  document.querySelector(".b11 > img").classList.remove("block_images_border");
  document.querySelector(".b12 > img").classList.remove("block_images_border");
  document.querySelector(".b3 > img").classList.toggle("block_images_border");
}
document.querySelector(".b4").onclick = function () {
  document.querySelector(".b1 > img").classList.remove("block_images_border");
  document.querySelector(".b2 > img").classList.remove("block_images_border");
  document.querySelector(".b3 > img").classList.remove("block_images_border");
  document.querySelector(".b5 > img").classList.remove("block_images_border");
  document.querySelector(".b6 > img").classList.remove("block_images_border");
  document.querySelector(".b7 > img").classList.remove("block_images_border");
  document.querySelector(".b8 > img").classList.remove("block_images_border");
  document.querySelector(".b9 > img").classList.remove("block_images_border");
  document.querySelector(".b10 > img").classList.remove("block_images_border");
  document.querySelector(".b11 > img").classList.remove("block_images_border");
  document.querySelector(".b12 > img").classList.remove("block_images_border");
  document.querySelector(".b4 > img").classList.toggle("block_images_border");
}
document.querySelector(".b5").onclick = function () {
  document.querySelector(".b1 > img").classList.remove("block_images_border");
  document.querySelector(".b2 > img").classList.remove("block_images_border");
  document.querySelector(".b3 > img").classList.remove("block_images_border");
  document.querySelector(".b4 > img").classList.remove("block_images_border");
  document.querySelector(".b6 > img").classList.remove("block_images_border");
  document.querySelector(".b7 > img").classList.remove("block_images_border");
  document.querySelector(".b8 > img").classList.remove("block_images_border");
  document.querySelector(".b9 > img").classList.remove("block_images_border");
  document.querySelector(".b10 > img").classList.remove("block_images_border");
  document.querySelector(".b11 > img").classList.remove("block_images_border");
  document.querySelector(".b12 > img").classList.remove("block_images_border");
  document.querySelector(".b5 > img").classList.toggle("block_images_border");
}
document.querySelector(".b6").onclick = function () {
  document.querySelector(".b1 > img").classList.remove("block_images_border");
  document.querySelector(".b2 > img").classList.remove("block_images_border");
  document.querySelector(".b3 > img").classList.remove("block_images_border");
  document.querySelector(".b4 > img").classList.remove("block_images_border");
  document.querySelector(".b5 > img").classList.remove("block_images_border");
  document.querySelector(".b7 > img").classList.remove("block_images_border");
  document.querySelector(".b8 > img").classList.remove("block_images_border");
  document.querySelector(".b9 > img").classList.remove("block_images_border");
  document.querySelector(".b10 > img").classList.remove("block_images_border");
  document.querySelector(".b11 > img").classList.remove("block_images_border");
  document.querySelector(".b12 > img").classList.remove("block_images_border");
  document.querySelector(".b6 > img").classList.toggle("block_images_border");
}
document.querySelector(".b7").onclick = function () {
  document.querySelector(".b1 > img").classList.remove("block_images_border");
  document.querySelector(".b2 > img").classList.remove("block_images_border");
  document.querySelector(".b3 > img").classList.remove("block_images_border");
  document.querySelector(".b4 > img").classList.remove("block_images_border");
  document.querySelector(".b5 > img").classList.remove("block_images_border");
  document.querySelector(".b6 > img").classList.remove("block_images_border");
  document.querySelector(".b8 > img").classList.remove("block_images_border");
  document.querySelector(".b9 > img").classList.remove("block_images_border");
  document.querySelector(".b10 > img").classList.remove("block_images_border");
  document.querySelector(".b11 > img").classList.remove("block_images_border");
  document.querySelector(".b12 > img").classList.remove("block_images_border");
  document.querySelector(".b7 > img").classList.toggle("block_images_border");
}
document.querySelector(".b8").onclick = function () {
  document.querySelector(".b1 > img").classList.remove("block_images_border");
  document.querySelector(".b2 > img").classList.remove("block_images_border");
  document.querySelector(".b3 > img").classList.remove("block_images_border");
  document.querySelector(".b4 > img").classList.remove("block_images_border");
  document.querySelector(".b5 > img").classList.remove("block_images_border");
  document.querySelector(".b6 > img").classList.remove("block_images_border");
  document.querySelector(".b7 > img").classList.remove("block_images_border");
  document.querySelector(".b9 > img").classList.remove("block_images_border");
  document.querySelector(".b10 > img").classList.remove("block_images_border");
  document.querySelector(".b11 > img").classList.remove("block_images_border");
  document.querySelector(".b12 > img").classList.remove("block_images_border");
  document.querySelector(".b8 > img").classList.toggle("block_images_border");
}
document.querySelector(".b9").onclick = function () {
  document.querySelector(".b1 > img").classList.remove("block_images_border");
  document.querySelector(".b2 > img").classList.remove("block_images_border");
  document.querySelector(".b3 > img").classList.remove("block_images_border");
  document.querySelector(".b4 > img").classList.remove("block_images_border");
  document.querySelector(".b5 > img").classList.remove("block_images_border");
  document.querySelector(".b6 > img").classList.remove("block_images_border");
  document.querySelector(".b7 > img").classList.remove("block_images_border");
  document.querySelector(".b8 > img").classList.remove("block_images_border");
  document.querySelector(".b10 > img").classList.remove("block_images_border");
  document.querySelector(".b11 > img").classList.remove("block_images_border");
  document.querySelector(".b12 > img").classList.remove("block_images_border");
  document.querySelector(".b9 > img").classList.toggle("block_images_border");
}
document.querySelector(".b10").onclick = function () {
  document.querySelector(".b1 > img").classList.remove("block_images_border");
  document.querySelector(".b2 > img").classList.remove("block_images_border");
  document.querySelector(".b3 > img").classList.remove("block_images_border");
  document.querySelector(".b4 > img").classList.remove("block_images_border");
  document.querySelector(".b5 > img").classList.remove("block_images_border");
  document.querySelector(".b6 > img").classList.remove("block_images_border");
  document.querySelector(".b7 > img").classList.remove("block_images_border");
  document.querySelector(".b8 > img").classList.remove("block_images_border");
  document.querySelector(".b9 > img").classList.remove("block_images_border");
  document.querySelector(".b11 > img").classList.remove("block_images_border");
  document.querySelector(".b12 > img").classList.remove("block_images_border");
  document.querySelector(".b10 > img").classList.toggle("block_images_border");
}
document.querySelector(".b11").onclick = function () {
  document.querySelector(".b1 > img").classList.remove("block_images_border");
  document.querySelector(".b2 > img").classList.remove("block_images_border");
  document.querySelector(".b3 > img").classList.remove("block_images_border");
  document.querySelector(".b4 > img").classList.remove("block_images_border");
  document.querySelector(".b5 > img").classList.remove("block_images_border");
  document.querySelector(".b6 > img").classList.remove("block_images_border");
  document.querySelector(".b7 > img").classList.remove("block_images_border");
  document.querySelector(".b8 > img").classList.remove("block_images_border");
  document.querySelector(".b9 > img").classList.remove("block_images_border");
  document.querySelector(".b10 > img").classList.remove("block_images_border");
  document.querySelector(".b12 > img").classList.remove("block_images_border");
  document.querySelector(".b11 > img").classList.toggle("block_images_border");
}
document.querySelector(".b12").onclick = function () {
  document.querySelector(".b1 > img").classList.remove("block_images_border");
  document.querySelector(".b2 > img").classList.remove("block_images_border");
  document.querySelector(".b3 > img").classList.remove("block_images_border");
  document.querySelector(".b4 > img").classList.remove("block_images_border");
  document.querySelector(".b5 > img").classList.remove("block_images_border");
  document.querySelector(".b6 > img").classList.remove("block_images_border");
  document.querySelector(".b7 > img").classList.remove("block_images_border");
  document.querySelector(".b8 > img").classList.remove("block_images_border");
  document.querySelector(".b9 > img").classList.remove("block_images_border");
  document.querySelector(".b10 > img").classList.remove("block_images_border");
  document.querySelector(".b11 > img").classList.remove("block_images_border");
  document.querySelector(".b12 > img").classList.toggle("block_images_border");
}
// Картинки в portfolio_конец

/* Форма_начало */
var form = document.querySelector("#GetQuote > div.wrapper2 > div.container.main_flex__nowrap > div.form > form");


var nameF = document.querySelector("#GetQuote > div.wrapper2 > div.container.main_flex__nowrap > div.form > form > input[type=text]:nth-child(1)");
var email = document.querySelector("#GetQuote > div.wrapper2 > div.container.main_flex__nowrap > div.form > form > input[type=email]:nth-child(2)");
var messageForm = document.querySelector("#GetQuote > div.wrapper2 > div.container.main_flex__nowrap > div.form > div")
var topic = document.querySelector("#GetQuote > div.wrapper2 > div.container.main_flex__nowrap > div.form > div > p.topic");
var inputTopic = document.querySelector("#GetQuote > div.wrapper2 > div.container.main_flex__nowrap > div.form > form > input[type=text]:nth-child(3)");
var inputDescription = document.querySelector("#GetQuote > div.wrapper2 > div.container.main_flex__nowrap > div.form > form > textarea");
var description = document.querySelector("#GetQuote > div.wrapper2 > div.container.main_flex__nowrap > div.form > div > p.description");
var bodyBg = document.createElement('div');
form.appendChild(bodyBg);

form.onsubmit = function () {
  messageForm.style.display = "block";
  bodyBg.classList.add('body-bg');
  if (inputTopic.value === "") {
    topic.textContent = "Без темы";
  } else {
    topic.textContent = "Тема: " + inputTopic.value;
  }
  if (inputDescription.value === "") {
    description.textContent = "Без описания";
  } else {
    description.textContent = "Описание: " + inputDescription.value;
  }
  nameF.value = "";
  email.value = "";
  inputTopic.value = "";
  inputDescription.value = "";
  return false;
};

var closedB = document.querySelector("#GetQuote > div.wrapper2 > div.container.main_flex__nowrap > div.form > div > div > img");

closedB.addEventListener('click', function () {
  messageForm.style.display = "none";
  bodyBg.classList.remove('body-bg');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    messageForm.style.display = "none";
    bodyBg.classList.remove('body-bg');
  }
});

// var numbF = function (num) {
//   num = String(num);
//   var result = 'Обычный';
//   if (Number(num[num.length - 1]) + Number(num[num.length - 2]) + Number(num[num.length - 3]) === Number(num[num.length - 4]) + Number(num[num.length - 5]) + Number(num[num.length - 6])) {
//     result = 'Счастливый';
//   }
//   return result;
// };

var hamburger = document.querySelector("body > header > div > div > div");
var nav = document.querySelector("body > header > div > div > nav");
var logo = document.querySelector("body > header > div > div > h1");

hamburger.addEventListener('click', function () {
  if (nav.style.display === 'block') {
    nav.style.display = 'none';
    hamburger.classList.remove('rotation');
    logo.style.marginLeft = 'calc(50% - 70px)';
  } else {
    nav.style.display = 'block';
    hamburger.classList.add('rotation');
    logo.style.marginLeft = '30px';
  }
});



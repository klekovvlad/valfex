$('.slider__img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider__tumb'
  });
  $('.slider__tumb').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    asNavFor: '.slider__img',
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }]
  });

const tapInfo = document.getElementById('about');
const tapNum1 = document.getElementById('number1');
const tapNum2 = document.getElementById('number2');
const tapNum3 = document.getElementById('number3');
const tapNum4 = document.getElementById('number4');
const lineNum1 = document.getElementById('line1');
const lineNum2 = document.getElementById('line2');
const lineNum3 = document.getElementById('line3');
const lineNum4 = document.getElementById('line4');

tapNum1.addEventListener('click', () => {
    tapInfo.innerHTML = '<img src="img/1num.png"><div class="info"><span>Информация с 1 кнопки</span><a>Посмотреть в каталоге</a></div>';
    tapNum1.classList.add('number-active');
    tapNum2.classList.remove('number-active');
    tapNum3.classList.remove('number-active');
    tapNum4.classList.remove('number-active');
    tapNum1.innerHTML = '1 <span>Текст для первого</span>';
    tapNum2.innerHTML = '2';
    tapNum3.innerHTML = '3';
    tapNum4.innerHTML = '4';
    lineNum1.style.display = 'block';
    lineNum2.style.display = 'none';
    lineNum3.style.display = 'none';
    lineNum4.style.display = 'none';
});
tapNum2.addEventListener('click', () => {
    tapInfo.innerHTML = '<img src="img/1num.png"><div class="info"><span>Изготовлена из латунного сплава ЛС59-1</span><a>Посмотреть в каталоге</a></div>';
    tapNum2.classList.add('number-active');
    tapNum1.classList.remove('number-active');
    tapNum3.classList.remove('number-active');
    tapNum4.classList.remove('number-active');
    tapNum2.innerHTML = '2 <span>Высокое качество материалов</span>';
    tapNum1.innerHTML = '1';
    tapNum3.innerHTML = '3';
    tapNum4.innerHTML = '4';
    lineNum1.style.display = 'none';
    lineNum2.style.display = 'block';
    lineNum3.style.display = 'none';
    lineNum4.style.display = 'none';
});
tapNum3.addEventListener('click', () => {
    tapInfo.innerHTML = '<img src="img/1num.png"><div class="info"><span>Информация с 3 кнопки</span><a>Посмотреть в каталоге</a></div>';
    tapNum3.classList.add('number-active');
    tapNum2.classList.remove('number-active');
    tapNum1.classList.remove('number-active');
    tapNum4.classList.remove('number-active');
    tapNum3.innerHTML = '3 <span>Текст для третьего</span>';
    tapNum2.innerHTML = '2';
    tapNum1.innerHTML = '1';
    tapNum4.innerHTML = '4';
    lineNum1.style.display = 'none';
    lineNum2.style.display = 'none';
    lineNum3.style.display = 'block';
    lineNum4.style.display = 'none';
});
tapNum4.addEventListener('click', () => {
    tapInfo.innerHTML = '<img src="img/1num.png"><div class="info"><span>Информация с 4 кнопки</span><a>Посмотреть в каталоге</a></div>';
    tapNum4.classList.add('number-active');
    tapNum2.classList.remove('number-active');
    tapNum3.classList.remove('number-active');
    tapNum1.classList.remove('number-active');
    tapNum4.innerHTML = '4 <span>Текст для четвертого</span>';
    tapNum2.innerHTML = '2';
    tapNum3.innerHTML = '3';
    tapNum1.innerHTML = '1';
    lineNum1.style.display = 'none';
    lineNum2.style.display = 'none';
    lineNum3.style.display = 'none';
    lineNum4.style.display = 'block';
});

const mobBtn = document.getElementById('mobButton');
const mobMenu = document.getElementById('mobMenu');

mobBtn.addEventListener('click', () => {
    mobMenu.classList.toggle('mobmenu');
})
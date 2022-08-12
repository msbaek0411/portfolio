/* HEADER */
window.onload = function() {scrollFunction()};
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var header = document.getElementById('header');

    if(document.documentElement.scrollTop > 70) {
        if(!header.classList.contains('navbar-fixed')) {
            header.classList.add('navbar-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '70px';
            header.style.display = 'none';
            setTimeout(function(){
                header.style.display = 'block';
            }, 40);
        }
    } else {
        if(header.classList.contains('navbar-fixed')) {
            header.classList.remove('navbar-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '0';
        }
    }
}

function menuToggle() {
    document.getElementById('menu').classList.toggle('show');
}

document.getElementById('toggleBtn').addEventListener('click', menuToggle);


/* WELCOME AREA */

/* 해당 보여주는 슬라이드 이미지 값 0이면 4번째 , 5는 1번째 */
var imageSlideIndex = 1;
showImageSlides(imageSlideIndex);



/* 시간 지난 후 이미지 이동*/
function imageSlideTimer() {
  plusImageSlides(1);
}

var imageTimer = 0

function plusImageSlides(n) {
  clearInterval(imageTimer); /* 보안 코드 (첫번째넘어갓을때 다른거 눌르면 문제생김방지*/
  imageTimer = 0;
  showImageSlides(imageSlideIndex += n);
}


function currentImageSlide(n){
  clearInterval(imageTimer);
  imageTimer = 0;
  showImageSlides(imageSlideIndex = n);
}

function showImageSlides(n) {
  var i;
  var slides = document.getElementsByClassName('image-slide'); 
  var dots = document.getElementsByClassName('dot'); 
  if (n > slides.length) {imageSlideIndex = 1}    
  if (n < 1) {imageSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';                         /*사진 안보이게 하기*/
  } 
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');/* dot 안보이게 하기*/
  }
  slides[imageSlideIndex-1].style.display = 'block';  
  dots[imageSlideIndex-1].className += ' active';
}
/* bind라 plusImageSlides를 바로 실행한다 */
document.getElementById('imagePrev').addEventListener('click', plusImageSlides.bind(null,-1));
document.getElementById('imageNext').addEventListener('click', plusImageSlides.bind(null,1));

document.getElementById('firstDot').addEventListener('click', currentImageSlide.bind(null,1));
document.getElementById('secondDot').addEventListener('click', currentImageSlide.bind(null,2));
document.getElementById('thirdDot').addEventListener('click', currentImageSlide.bind(null,3));
document.getElementById('forthDot').addEventListener('click', currentImageSlide.bind(null,4));
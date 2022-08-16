$(document).ready(function () {
  slider();
})

function slider(){
  $(".slider").each(function(index){
      var $this = $(this);
      var winW = window.innerWidth; //화면 가로사이즈
      var swiper = undefined;
      var viewNum = ''; //슬라이드 개수 (옵션)
      var loopChk = ''; //무한반복 체크
      var slideNum =  $this.find('.swiper-slide').length //슬라이드 총 개수
      var slideInx = 0; //현재 슬라이드 index
      
      //디바이스 체크
      var winWChk = '';
      $(window).on('load resize', function (){
          winW = window.innerWidth;
          if(winWChk != 'mo' && winW <= 768){ //모바일 버전으로 전환할 때
              sliderAct();
              winWChk = 'mo';
          }

          if(winWChk != 'pc' && winW >= 769){ //PC 버전으로 전환할 때
              sliderAct();
              winWChk = 'pc';
          }
      })
      
      function sliderAct(){
          //슬라이드 인덱스 클래스 추가
          $this.addClass("slider-" + index);

          //슬라이드 초기화 
          if (swiper != undefined){ 
              swiper.destroy();
              swiper = undefined;
          }

          //slidesPerView 옵션 설정
          if (winW > 768){ //PC 버전
              viewNum = 5;
          }else{ //mobile 버전
              viewNum = 2;
          }
          
          //loop 옵션 체크
          if (slideNum > viewNum){
              loopChk = true;
          }else{ 
              loopChk = false;
          }

          swiper = new Swiper('.slider-' + index + ' .inner', {
              slidesPerView: viewNum,
              initialSlide :slideInx,
              spaceBetween: 10,
              slidesPerGroup: 1,
              loop: loopChk,
              navigation: {
                  nextEl: $('.slider-' + index).find('.swiper-button-next'),
                  prevEl: $('.slider-' + index).find('.swiper-button-prev'),
              },
              on: {
                  activeIndexChange: function () {
                      slideInx = this.realIndex; //현재 슬라이드 index 갱신
                  }
              },
          });
      }
  });
}
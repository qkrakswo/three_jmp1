$(document).ready(function(){
  let wt = $(window).width()

  if(wt>700){
      pc()
  }else{
      mo()
  }
  
  
  



  //메인 배너 이미지 스와이프
    var swiper = new Swiper(".mySwiper01", {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
      });//메인 배너 이미지 스와이프
      
      //row5스와이프
      var swiper = new Swiper(".mySwiper04", {
        slidesPerView: 1.0,
        spaceBetween: 30,
        autoplay: {
                  delay: 3500,
                  disableOnInteraction: false,
                },/*스와이퍼 반응형용 명령어*/
                breakpoints: {700: {
            slidesPerView: 2.0,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
                  delay: 3500,
                  disableOnInteraction: false,
                },
          },  
        }
      });
      /*배경용*/
    var swiper = new Swiper(".mySwiper03", {
   

      autoplay: {
                delay: 3500,
                disableOnInteraction: false,
              }

    });//row5스와이프 끝

      //모바일시작
      function mo(){
        //바이크 스와이프
        var swiper = new Swiper(".mySwiper02", {
          slidesPerView: 2,
          
          freeMode: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        });
        //바이크 스와이프 끝
        //글자이동 gsap모바일
        const ani = gsap.timeline()
  ani.to(".row2_txt_box",{x:-130,y:200,scale:0.5,
    color:"black",fontWeight:"bold"});

  ScrollTrigger.create({
    animation:ani,
    trigger:".row2",
    start:"top 20%",
    end:"70% 50%",
    // pin:true,
    scrub:true,
    // markers:true,
  });
  //이미지 증가
  const ani1 = gsap.timeline()
  ani1.to(".row2_bg",{scale:1.2});

  ScrollTrigger.create({
    animation:ani1,
    trigger:".row2",
    start:"top 20%",
    end:"70% 50%",
    // pin:true,
    scrub:true,
    // markers:true,
  })
  //글자이동 gsap모바일 끝
      }//mo끝

      //pc시작
      function pc(){
        //바이크 스와이프
        var swiper = new Swiper(".mySwiper02", {
          slidesPerView: 3,
          
          freeMode: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        });
        //바이크 스와이프 끝

        //글자이동 gsap
        const ani = gsap.timeline()
  ani.to(".row2_txt_box",{x:-100,y:550,scale:0.8,
    color:"black",fontWeight:"bold"});

  ScrollTrigger.create({
    animation:ani,
    trigger:".row2",
    start:"10% 20%",
    end:"70% 80%",
    // pin:true,
    scrub:true,
    // markers:true,
  });
  //이미지 크기증가
  const ani1 = gsap.timeline()
  ani1.to(".row2_bg",{scale:1.2});

  ScrollTrigger.create({
    animation:ani1,
    trigger:".row2",
    start:"top 20%",
    end:"70% 50%",
    // pin:true,
    scrub:true,
    // markers:true,
  })
  //글자이동 gsap끝
      }//pc끝

      //pc,mo공동 이벤트\
      //01. 한개 섹션 고정시키기-섹션1번이 고정됨
const panel =document.querySelector(".row4_txtbox");
//02 .여러개 섹션 고정시키기
gsap.utils.toArray(".item").forEach((panel,i) => {
    ScrollTrigger.create({
        trigger:panel,
        start:"top top",
        pin:true,
        pinSpacing:false
    });
});

      $(window).on("resize",function(){
        document.location.reload()
    })//기기변경시 자동 적용
})//documnet 끝
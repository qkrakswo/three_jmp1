$(document).ready(function(){

    let wt = $(window).width()
  if(wt<700){
    mo()
}else{
    pc()
}

  function mo(){
    
  }

  function pc(){
    const ani = gsap.timeline();
    ani.from(".row1",{yPercent:100,delay:2})
    ani.from(".row2",{yPercent:350,delay:2})
    ani.from(".row3",{yPercent:600,delay:2})
    ani.from(".row4",{yPercent:850,delay:2})
    ani.from(".row5",{yPercent:1200,delay:2})
  
    ScrollTrigger.create({
      animation:ani,
      trigger:"#canvas",
      start:"top top",
      end:"+=6000",
      scrub:true,
      pin:true,
      markers:true
  
    })
  }//222
  

  $(window).on("resize",function(){
    document.location.reload()
})//기기변경시 자동 적용



})//document
  


$(documnet).ready(function(){
    let wt = $(window).width()

    if(wt>700){
        pc()
    }else{
        mo()
    }
})
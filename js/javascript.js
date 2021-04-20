$(document).ready(function(){


  $('.fa-chevron-right').click(nextImg);

  $('.fa-chevron-left').click(prevImage);




  function nextImg(){
    var activeImg = $(".imagenes img.active");
    var activePallino = $(".palline i.active_pallino")

    activeImg.removeClass("active");
    activePallino.removeClass("active_pallino");

    
    if(activeImg.hasClass("last")){
      $(".imagenes img.first").addClass("active")
      $(".palline i.first").addClass("active_pallino")

    }else{
      activeImg.next("img").addClass("active")
      activePallino.next("i").addClass("active_pallino")
    }
  }

  function prevImage(){
    var activeImg = $(".imagenes img.active");
    var activePallino = $(".palline i.active_pallino")

    activeImg.removeClass("active");
    activePallino.removeClass("active_pallino");

    
    if(activeImg.hasClass("first")){
      $(".imagenes img.last").addClass("active")
      $(".palline i.last").addClass("active_pallino")

    }else{
      activeImg.prev("img").addClass("active")
      activePallino.prev("i").addClass("active_pallino")
    }
  }


  








  

});
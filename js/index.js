$( window ).on( "load", function() {
   console.log( "로딩성공" );
   // $(".loading").css("visibility","hidden");
   // $(".main_background").css("display","flex");
 });

function menubar_active(){
  // var menucon = document.getElementsByClassName("menu-container")[0].style = "z-index:5;opacity:1;"
  $(".menu-container").addClass("animated");
  $(".menu-container").removeClass("animated-after");
}

function menubar_disable(){
  $(".menu-container").removeClass("animated");
  $(".menu-container").addClass("animated-after");
}

console.log("test complete");

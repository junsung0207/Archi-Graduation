$( window ).on( "load", function() {
   console.log( "로딩성공" );
   // $(".loading").css("visibility","hidden");
   // $(".main_background").css("display","flex");
 });

function menubar_active(){
  var menucon = document.getElementsByClassName("menu-container")[0].style = "display:block;"
}

function menubar_disable(){
  var menucon = document.getElementsByClassName("menu-container")[0].style = "display:none;"
}

console.log("test complete")

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

window.addEventListener('scroll', onScroll);


function onScroll(){
  console.log(scrollY);
  if(scrollY >= 200 && scrollY <= 1400)
  var sc = (1400 - scrollY)/10;
  var sc_v = (63+sc*0.3);
  var test = sc_v+'vw';
   $('#Feed1 img').width(test);
}

console.log("test complete");

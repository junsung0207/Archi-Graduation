$( window ).on( "load", function() {
   console.log( "로딩성공" );
   console.log(window.scrollY);
   // $(".loading").css("visibility","hidden");
   // $(".main_background").css("display","flex");
 });

window.addEventListener('scroll', onScroll);


  var introbox2_switch = 0;
  var stlist_switch = 0;

function onScroll(){
  var doc = document.documentElement;
  // console.log(scrollY);

  if(scrollY > 800 && introbox2_switch == 0){
    $(".introbox2").addClass("introbox2-animated");
    introbox2_switch = 1;
  }

  if(scrollY > 1600 && stlist_switch == 0){
    $(".stlist-p").addClass("stlist-p-animated");
    stlist_switch = 1;
  }

}

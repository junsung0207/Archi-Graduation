$( window ).on( "load", function() {
   console.log( "로딩성공" );
   // $(".loading").css("visibility","hidden");
   // $(".main_background").css("display","flex");
   $(".loading").css("display","none");
   $(".main_background").css("display","flex");
 });

window.addEventListener('scroll', onScroll);


var brightlevel = 0.5;

function onScroll(){
  console.log(scrollY);
  if(scrollY >= 200 && scrollY <= 1400)
  var sc = (1400 - scrollY)/10;
  var sc_v = (63+sc*0.1);
  var test = sc_v+'vw';
   $('#Feed1 img').width(test);

   if(scrollY > 600 && scrollY < 1400){
     var brscroll = (scrollY-600) / 800.0;
     brightlevel = 1.0 -brscroll;
     var bright = "brightness(" + brightlevel + ")";
     console.log(bright);
     $('.main_background').css("filter",bright);
   }
}

function preloading (imageArray) {
    let n = imageArray.length;
    for (let i = 0; i < n; i++) {
        let img = new Image();
        img.src = imageArray[i];
    }
}

preloading([
    './im/b-alpha.gif'
])

$( window ).on( "load", function() {
   console.log( "로딩성공" );
   // $(".loading").css("visibility","hidden");
   // $(".main_background").css("display","flex");
//화면숨기기 컨트롤
   $(".loading").css("display","none");
   $(".main_background").css("display","flex");
   if(window.screen.width>=1024){
     $(".warning_com").css("display","flex");
   }
   $('.downer').css("display","block");
 });

window.addEventListener('scroll', onScroll);


var brightlevel = 0.5;
var done_downer = 0;

function onScroll(){
  //console.log(scrollY);
  if(scrollY >= 200 && scrollY <= 1400){
    var sc = (1400 - scrollY)/10;
    if(window.screen.width<1024){
      var sc_weight = 0.15;
      var sc_init = 60;
    }else{
      var sc_weight = 0.25;
      var sc_init = 35;
    }
    var sc_v = (sc_init+sc*sc_weight);
    var test = sc_v+'vw';
     $('#Feed1 img').width(test);
     // console.log(test);
  }
  else if(scrollY <200){
    $('#Feed1 img').width("63.65vw");
  }
  if(window.screen.width<1024){
    var br_init = 600;
  }
  else{
    var br_init = 0;
  }
   if(scrollY > br_init && scrollY < br_init+800){
     var brscroll = (scrollY-br_init) / 800.0;
     //console.log('brscroll: '+brscroll)
     brightlevel = 1.0 -brscroll;
     var bright = "brightness(" + brightlevel + ")";
     //console.log(bright);
     $('.main_background').css("filter",bright);
   }
   else if(scrollY <= br_init){
     var bright = "brightness(" + '1.0' + ")";
     $('.main_background').css("filter",bright);
     // console.log("bright 1.0")
   }

   if(scrollY < 1000 && done_downer == 0){
     $('.downer').css("display","block");
   }
   else {
     $('.downer').css("display","none");
     done_downer = 1;
   }
}

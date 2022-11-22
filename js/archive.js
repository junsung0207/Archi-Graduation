$( window ).on( "load", function() {
   console.log( "로딩성공" );
   // $(".loading").css("visibility","hidden");
   // $(".main_background").css("display","flex");
   $(".loading").css("display","none");
   $(".main_container").css("display","block");
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

  if(scrollY > 8500){
    $('.upper').css("display","block");
  }
  else if (scrollY < 5000) {
    $('.upper').css("display","none");
  }
}

var detail_isopen = 0;

function deopen(n){
  if(detail_isopen == 0){
    $($(".archivedetail")[n-1]).css({
      "display":"flex",
      "opacity":"1"
    });
  }
  detail_isopen = 1;
}

function declose(n){
  $($(".archivedetail")[n-1]).css({
    "display":"none",
    "opacity":"0"
  });
  detail_isopen = 0;
}

function upper_clicked(){
  window.scrollTo(0, 3150);
}

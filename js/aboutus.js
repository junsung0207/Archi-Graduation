$( window ).on( "load", function() {
   console.log( "로딩성공" );
   // $(".loading").css("visibility","hidden");
   // $(".main_background").css("display","flex");
 });

window.addEventListener('scroll', onScroll);


function onScroll(){
  console.log(scrollY);
  if(scrollY > 2200){
    $("#Introfeed1 p").addClass("fade");
  }
  if(scrollY > 3000){
    $("#Introfeed2 p").addClass("fade");
  }
  if(scrollY > 3800){
    $("#Introfeed3 p").addClass("fade");
  }
  if(scrollY > 4600){
    $("#Introfeed4 p").addClass("fade");
  }
}

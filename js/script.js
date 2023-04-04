// Mobile menu
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let closer = document.querySelector('.closer');

menuBtn.onclick = () => {

	menu.classList.toggle('active');
   

}
closer.onclick = () => {
   menu.classList.toggle('active')
 }


// Slick
// Подкючение slick
$(document).ready(function(){
   $('.slider').slick({
      arrows:true,
      dots:true,
      adaptiveHeight:true,
      slidesToShow: 1,
      infinity: true,
      initialSlide:0,
      autoplay:true,
      autoplaySpeed:1500,
      pauseOnFocus:true,
      pauseOnHover:true,
      pauseOnDotsHover:true,
      draggable:false,
      swipe:true,
      touchThreshold:10,
      touchMove:true,
      waitForAnimate:false,
      centerMode:false,
      variableWidth:false,
      rows:1,
      slidesPerRow:1,
      vertical:false,
      verticalSwiping:true,
      responsive:[
         {
            breakpoint: 768,
            settings:{
               slidesToShow:1
            }
         },{
            breakpoint: 480,
            settings:{
               slidesToShow:1
            }
         }
      ]
   });
});
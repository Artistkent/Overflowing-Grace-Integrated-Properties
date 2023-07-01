//Button press collapses Navbar

function navToggle() {
  var x = document.getElementById("navbar_listicle");
  if (x.className === "navbar_collapse") {
    x.className += " collapse";
  } else {
    x.className = "navbar_collapse";
  }
};

//Button press switches the white to transparent 

$('.button_switch_button').click(function(){
  $(this).addClass('button_white');
  $('.button_switch_button').not(this).removeClass('button_white');
});

//Button hover switches the white to transparent 

$('.button_switch_button').hover(function(){
  
  $('.button_switch_button').not(this).addClass('button_transparent');},
  function(){
    $('.button_switch_button').not(this).removeClass('button_transparent');
  
});

//Button click changes content buy sell

$(document).ready(function (){
  $('#button_switch_button1').click(function (){
      $('#Content_1_1').css('display',"block");
          $('#Content_1_2').css('display',"none");
  });

  $('#button_switch_button2').click(function (){
    $('#Content_1_1').css('display',"none");
        $('#Content_1_2').css('display',"block");
});
});

  

//Button press animates hamburger

  $('#nav-icon2').click(function(){
    $(this).toggleClass('open');
  });
 

//Scroll changes Navbar a and hamburger color from black to white JQUERY//

/*$(document).ready(function() {
$('.nav_a').css('color', 'black');
$('#nav-icon2 span').css('background-color', 'black');
var scroll_pos = $(this).scrollTop();
$(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 0.1) {
        $('.nav_a').css('color', 'white');
        $('#nav-icon2 span').css('background-color', 'white');
    } else {
        $('.nav_a').css('color', 'black');
        $('#nav-icon2 span').css('background-color', 'black');
    }
});
});*/


/*----------------------------------------------------*/
/*---------------START OF CAROUSEL-------------------*/
/*---------------------------------------------------*/
var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "flex";
  circles[slidePosition-1].className += " enable";
} 
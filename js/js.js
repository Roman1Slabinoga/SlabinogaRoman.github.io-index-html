// var a = document.getElementById('first');
// console.log(a)
// a.addEventListener('click',function(){
//     var b = document.getElementById('main_sec');
//     b.style.display = 'none';
// })
// $(document).mousemove(function(e){
//     var x = e.pageX / 25;
//     var y = e.pageY / 25;
//     $('.letters').css({
//         transform: 'translate(-'+x+'px, -'+y+'px)'
//     });
// });




const slider = document.querySelector(".slider");
const btns = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".img");
const options = document.querySelectorAll(".option");
const button = document.querySelector(".link");
const url = [
  "https://roman1slabinoga.github.io/RomanS.github.io/",
  "https://music.youtube.com/browse/VLPL-95FHe5Zg6c37Qlj9owMno8D6UGG5c31",
  "https://www.youtube.com/"
];

var index = 2;
var size = slides[index].clientWidth;

function update() {
  slider.style.transform = "translateX(" + -size * index + "px)";
}

slide();

function slide() {
  slider.style.transition = "transform .5s ease-in-out";
  button.setAttribute("href", url[index]);

  update();
}

function btnCheck() {
  if (this.id === "prev") {
    if (index === 0) {
      index++;
    } else {
      index--;
    }
  } else {
    if (index === 4) {
      index--;
    } else {
      index++;
    }
  }

  slide();
}

btns.forEach(btn => btn.addEventListener("click", btnCheck));

$(function() {
  $(".menu-trigger").on("click", function() {
    $(this).toggleClass("active");
    $("#menu").toggleClass("active");

    return false;
  });
});



$(document).ready(function () {
  $('.submit').click(function (event) {
    console.log('roma lox')

    var email = $(".email").val()
    var subject = $(".name").val()
    var massage = $(".message").val()
    const options = document.querySelectorAll(".status");

    
    if(email.length > 5 && email.includes('@') && email.includes('.')){
      options.innerHTML('email valid')
    } else {
      event.preventDefault();
      options.innerHTML('email not valid')
    }
    if(subject.length > 2){
      options.innerHTML('subjuct valid')
    } else {
      event.preventDefault();
      options.innerHTML('subjuct not valid')
    }
    if(massage.length > 30){
      options.innerHTML('massage valid')
    } else {
      options.innerHTML('massage not valid')
      event.preventDefault();
    }
  })
})
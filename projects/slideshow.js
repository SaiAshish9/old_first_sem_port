$('#toggle').click(function() {
 $(this).toggleClass('active');
 $('#overlay').toggleClass('open');
});


$(document).ready(function(){
const projects=[
  'addresslocator.jpg',
  'chatapp.jpg',
  'chatbot.jpg',
  'codeEditor.jpg',
  'datadashboard.jpg',
  'electricity.jpg',
  'facedetector.jpg',
  'feelathome.jpg',
  'fileexplorer.jpg',
  'googlemaps.jpg',
  'hackathon.jpg',
  'shoppingcart.jpg'
]

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

// $('.projects').hide()

$('#project-pic').hide()

$('.card').hide()

function show(){
  // $('.projects').fadeIn()

// sleep(1000)
  $('.card').fadeIn()

  $('#project-pic').slideDown()
}

setInterval(show,1000)


// function change(){
// const random=Math.floor(Math.random() * projects.length)
//   $('#project-pic').attr("src",'pics/'+ projects[random])
//
// }
//
// setInterval(change,1000)
//




var i = 0;
var txt = 'Projects';
var speed = 50;

function typeWriter() {
if (i < txt.length) {
  document.getElementById("projects").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
}
}

typeWriter()





}
)


$('#toggle').click(function() {
 $(this).toggleClass('active');
 $('#overlay').toggleClass('open');
});

$(document).ready(function(){


  $('img').hide()
  $('#icons').hide()
  $('a').hide()
  $('i').hide()

function heading(){
  $('img').fadeIn()
  $('#icons').fadeIn()
  $('a').show()
  $('i').show()
}

setInterval(heading,2000)


var i = 0;
var txt = `Let's Get Connected!`;
var speed = 50;

function typeWriter() {
if (i < txt.length) {
  document.getElementById("skillsheading").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
}
}

typeWriter()





})

$('#toggle').click(function() {
 $(this).toggleClass('active');
 $('#overlay').toggleClass('open');
});

$(document).ready(function(){


  // $("#skillsheading").hide()
  $('#default').hide()
  $('#next').hide()

function heading(){
  // $("#skillsheading").fadeIn()
  $('#default').show()
  $('#next').hide()
}

setInterval(heading,2000)



function alternate(){
  // console.log(  $('#default').hide());
  $('#default').toggle()
$('#next').toggle()

}

//slideToggle

  setInterval(alternate,5000)

  var i = 0;
  var txt = 'My Skills';
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

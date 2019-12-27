$('#toggle').click(function() {
 $(this).toggleClass('active');
 $('#overlay').toggleClass('open');
});

$(document).ready(function(){
  $('img').hide()
$('p').hide()
$('.btn').hide()

 function show(){
   $('img').fadeIn()

}

// function desc(){

const desc=[
  '',
  'I love simplicity',
  'A MERN stack developer',
  'A programmer',
  'CSE Student At MSIT',
  'A true cricket lover'
]


// var i = Math.floor(Math.random() * 6);
// $('p').fadeIn()
//
// for(i=0;i<5;i=i+1){
//   $('p').fadeIn()
//
// function display(){
//   $('p').html(desc[i])
// }








// }

  setInterval(show,1000)

  var i = 0;
  var txt = `Hi, I'm Sai`;
  var speed = 50;

  function typeWriter() {
  if (i < txt.length) {
    document.getElementById("heading").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  }
 typeWriter()





 function display(i){
     if(i >= desc.length){
         i = 0;
     }
     if(i==0){
       $('p').hide()

     }else{
       $('p').fadeIn()

     }

     document.getElementById('desc').innerHTML=desc[i];

     console.log(desc[i]);
     setTimeout(function(){
        display(i + 1)
     }, 3000)
 }



 display(0)


function buttons(){
$('.btn').fadeIn()

}


  setInterval(buttons,4000)
})

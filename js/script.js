//alert("radi")
/******************R e g u l a r   e x p r e s s i o n s****************/
function check(){ 

  var name=document.getElementById("name");
  var email=document.getElementById("emailField");
  var subject=document.getElementById("subject");
  var pic=document.getElementById("bike");
  var text=document.getElementById("textArea");

  var regName=/^[A-Z][a-z]{1,10}(\s[A-Z][a-z]{1,12})+$/;
  var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var regSubject=/^[A-z0-9\-\.]+$/;
  var regPic=/^(.)+(\.jpg|\.png|\.jpeg)$/;
  var regText=/^[A-z]+$/;

  //name checking
  if(regName.test(name.value)){
    var elem=document.getElementById("nameIncorrect");
    elem.style="visibility:hidden";
    name.style="border:2px solid #4ed808"
  }else{
    var elem=document.getElementById("nameIncorrect");
    elem.style="visibility:visible";
    name.style="border:2px solid #ff0000"
  }
  
  //email checking
 var elem1=document.getElementById("emailIncorrect");
  var cutName=name.value.split(" ");
  var firstNAme=cutName[0].toLowerCase();  
  var nesto=email.value.indexOf(firstNAme);

  //alert(firstNAme);
  if(firstNAme==email.value.substring(0,firstNAme.length)){   
    if(regEmail.test(email.value)){
      elem1.style="visibility:hidden";
      email.style="border:2px solid #4ed808"
    }else{
      elem1.style="visibility:visible";
      email.style="border:2px solid #ff0000"
    }
  }else{
    elem1.style="visibility:visible";
    email.style="border:2px solid #ff0000"
  }  

//subject checking
var elem2=document.getElementById("subjectIncorrect");
  if(regSubject.test(subject.value)){
    elem2.style="visibility:hidden";
    subject.style="border:2px solid #4ed808"
  }else{
    elem2.style="visibility:visible";
    subject.style="border:2px solid #ff0000"
  }

  //picture extension checking
var elem3=document.getElementById("picIncorrect");
  if(regPic.test(pic.value)){
    elem3.style="visibility:hidden";
    pic.style="border:2px solid #4ed808"
  }else{
    elem3.style="visibility:visible";
    pic.style="border:2px solid #ff0000"
  }

//text checking
var elem4=document.getElementById("textIncorrect");
if(regText.test(text.value)){
  elem4.style="visibility:hidden";
  text.style="border:2px solid #4ed808"
}else{
  elem4.style="visibility:visible";
  text.style="border:2px solid #ff0000"
}
}
/*************************S l i d e S h o w *******************************/
function rotatePics(currentPhoto) {
  var numberOfPhotos = $('#slider img').length;
  currentPhoto = currentPhoto % numberOfPhotos;

  $('#slider img').eq(currentPhoto).fadeOut(function() {
		// re-order the z-index
    $('#slider img').each(function(i) {
      $(this).css(
        'zIndex', ((numberOfPhotos - i) + currentPhoto) % numberOfPhotos
      );
    });
    $(this).show();
    setTimeout(function() {rotatePics(++currentPhoto);}, 3000);
  });
}
$(document).ready(function(){
  rotatePics(1);
  /********************* T o g g l e **********************/
    $('.articleSize #title1').click(function(){
    if($('#text1').is(':visible')) {
      $('#pics1, #text1').hide('slow');
    } else {
      $('#pics1, #text1').show('slow');
    }
  });
  $('.articleSize #title2').click(function(){
    if($('#text2').is(':visible')) {
      $('#pics2, #text2').hide('slow');
    } else {
      $('#pics2, #text2').show('slow');
    }
  });
  $('.articleSize #title3').click(function(){
    if($('#text3').is(':visible')) {
      $('#pics3, #text3').hide('slow');
    } else {
      $('#pics3, #text3').show('slow');
    }
  });
/********************** D r o p  d o w n  m e n u*************************/
  $('nav li ul').css({
    display: "none",
    left: "auto",
  });
  $('nav li').hover(function() {
    $(this)
      .find('ul')
      .stop(true, true)
      .slideDown('slow');
  }, function() {
    $(this)
      .find('ul')
      .stop(true,true)
      .slideUp('slow');
  });

/************************A u t h o r*********************/
  $('#photos').cycle({
    fx: 'shuffle'
  });
/***********************G a l l e r y********************/
  $('.lightbox').fancybox();
})
/***************S u r v e y ************************/
function vote(){
var choose = document.survey.rbRate;
var choosen = "";

for(var i=0; i<choose.length; i++){
	if(choose[i].checked){
		choosen = choose[i].value;
	}
}
document.getElementById("wrapper").style = 'display:none;';
document.getElementById("thanks").style = 'display:block;';
document.getElementById("thanks").innerHTML = '<div id="top"></div>THANK YOU!</br>Your answer is:</br>'+choosen+"<input type='button' id='btnClose' name='btnClose' value='CLOSE' onClick='exit();'/>";
}
function exit(){
	document.getElementById("thanks").style = 'display:none;';
	document.getElementById("wrapper").style = 'display:none;';
}
/***********************T a b l e*********************/


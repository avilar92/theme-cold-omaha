// update clock
var clockEl = $('.clock');
setTimeout(function(){
  clockEl.text(formatAMPM(new Date()));
}, 60000);

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

//For Navigation Dropdown
$(function(){

	$("li").has(".sub-menu").hover(
		function(){
			$(this).find(".sub-menu").slideDown();
		},
		function(){
			$(this).find(".sub-menu").slideUp("fast");
		}
	);
	$(".sub-menu li").has(".sub-menu-2").hover(
		function(){
			$(this).find(".sub-menu-2").slideDown();
		},
		function(){
			$(this).find(".sub-menu-2").slideUp("fast");
		}
	);
	$(".sub-menu-2 li").has(".sub-menu-3").hover(
		function(){
			$(this).find(".sub-menu-3").slideDown();
		},
		function(){
			$(this).find(".sub-menu-3").slideUp("fast");
		}
	);
	
	// make it responsive
  if($(window).width()<=750){
  	$("ul.sub-menu-3").removeClass('sub-menu-3').addClass("subMneu3");
  	$("ul.sub-menu-2").removeClass('sub-menu-2').addClass("subMneu2");
  	$("ul.sub-menu").removeClass('sub-menu').addClass("subMneu1");
  }
  else
  {
  	$("ul.subMneu3").removeClass('subMneu3').addClass("sub-menu-3");
  	$("ul.subMneu2").removeClass('subMneu2').addClass("sub-menu-2");
  	$("ul.subMneu1").removeClass('subMneu1').addClass("sub-menu");
  }
	
});

//For Navigation Dropdown Responsive - Works on window resize
$(window).resize(function(){
  
   if($(window).width()<=750){
  	$("ul.sub-menu-3").removeClass('sub-menu-3').addClass("subMneu3");
  	$("ul.sub-menu-2").removeClass('sub-menu-2').addClass("subMneu2");
  	$("ul.sub-menu").removeClass('sub-menu').addClass("subMneu1");
  }
  else{
  	$("ul.subMneu3").removeClass('subMneu3').addClass("sub-menu-3");
  	$("ul.subMneu2").removeClass('subMneu2').addClass("sub-menu-2");
  	$("ul.subMneu1").removeClass('subMneu1').addClass("sub-menu");
  }
  
});
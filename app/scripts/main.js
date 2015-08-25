console.log('welcome to the big game!');



$(document).ready(function(){

	$('.menu').on('click', function(){
		if ($('.nav-menu').css('visibility') == 'hidden') {
				$('.nav-menu').css('visibility', 'visible');
		}
		else {
				$('.nav-menu').css('visibility', 'hidden');
		}
	});

	var stickyNavTop = $('.nav').offset().top;  
  
	var stickyNav = function(){  
	var scrollTop = $(window).scrollTop();  
	       
	if (scrollTop > stickyNavTop) {   
	    $('.nav').addClass('sticky');  
	} else {  
	    $('.nav').removeClass('sticky');   
	}  
	};  
  
stickyNav();  
  
$(window).scroll(function() {  
    stickyNav();  
});  

$('.nav-item').bind('click', function(e){

	e.preventDefault();
	var location = $(this).attr('href')

	$('html, body').animate({
		scrollTop: $(location).offset().top - 15 }, 1500);

	


});

});

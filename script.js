//Java Script Document


//mobile nav bar function

$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});


const $body = document.querySelector('body');   
const $btnMobileMenu = document.querySelector('.btn-mobile-menu');      

$btnMobileMenu.addEventListener('click', function(){
	
	$body.classList.toggle('show-mobile-menu');	
	
});



// video responsive
const $elementWithEmbeddedVideos = $('.video');

$elementWithEmbeddedVideos.fitVids();










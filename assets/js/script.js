// this is for hambarger menu 
(function () {
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
    $('.mobile-menu').toggleClass('active');
    return false;
	})
  $('.has-children').on ('click', function() {
		   $(this).children('ul').slideToggle('slow', 'swing');
       $('.icon-arrow').toggleClass('open');
	});
})();

// use for sticky navbar bar 
var navbar = document.querySelector(".mainHeader");
var menu = document.querySelector(".menu"); 

window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}
// this is use for AOS animation 
AOS.init();
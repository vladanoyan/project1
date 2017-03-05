
/*Carousel Head*/
$(document).ready(function(){
/*toggle icon*/
$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});



    $('.ourNewCarousel').owlCarousel({
    	loop: true,
        items:1,
        autoplay:true,
		animateOut: 'fadeOut'   
    });
   

    $('.ourSecondCarousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplay:true,
		nav: true,
		autoplayTimeout:3000,
		navText: ["<",">"],
		responsive:{
    		0:{
	            items:1,
	            nav:true
	        },
	        550:{
	            items:2,
	            nav:true
	        },
	        1000:{
	            items:3,
	            nav:true
	        },
	        1200:{
	            items:4,
	            nav:true
	        }
    }
    });
    });
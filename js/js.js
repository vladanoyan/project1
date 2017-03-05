
/*Carousel Head*/
$(document).ready(function(){
/*toggle icon*/
$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});



    $('.ourNewCarousel').owlCarousel({
        loop:true,
        items:1,
   
    });
   

    $('.ourSecondCarousel').owlCarousel({
         loop:true,
   		 nav:true,
   		 margin:20,
    	 responsive:{
	        0:{
	            items:1
	        },
	        450:{
	            items:2
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
    }
    });
    });
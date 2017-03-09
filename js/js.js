
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
/*chenge btn text*/

    	$('#equipment').click(function(){
    	$('#equipment').toggleClass('flashOn flash')
    });

   /*__________Listing Model3 Functions Start_________*/
/* Match Item heights for Listing Item */
var matchHeightLstItm=function(){
    if(window.innerWidth>=992)
    {
        if($('.listing-item-content').length)
            $('.listing-item-content').css('height', 'auto');

        if($('.listing-item-img').length)
            $('.listing-item-img').outerHeight($('.listing-item-content').outerHeight());
    }
    else
        $('.listing-item-img').css('height','auto');
};

});
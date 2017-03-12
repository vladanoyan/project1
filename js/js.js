
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

/*__________Listing Details Gallery Starts ________*/
/* Lightbox Gallery */
$(function(){
    if($('.listing-dtl-gallery').length)
    {
        var gallery = $('.listing-dtl-gallery .gal-class').simpleLightbox({
            navText:['',''],
        })
        var gallery1 = $('.listing-dtl-gallery .gal-class1').simpleLightbox({
            navText:['',''],
        })

        var galCustomStyleForNav=function(){
            var imgWidth = $('.sl-image').width();
            var windowWidth = window.innerWidth;
            var marg=(windowWidth-imgWidth)/2;
            $('.sl-prev').css('left', marg);
            $('.sl-next').css('right', marg);
            $('.sl-prev').css('visibility', 'visible');
            $('.sl-next').css('visibility', 'visible');
        };

        $('.listing-dtl-gallery .gal-class').on('shown.simplelightbox', function () {
            galCustomStyleForNav();
        });
        $('.listing-dtl-gallery .gal-class1').on('shown.simplelightbox', function () {
            galCustomStyleForNav();
        });
        $(window).bind('resize', function(){
            galCustomStyleForNav();
        });

    }
});
/*__________Listing Details Gallery Ends ________*/




    /*__________DPE GES Hover Effect Starts________*/
    $(document).on({
        mouseenter: function(e) {
            $(".btn-hover-container").not(this).find(".hover-content").stop(true, true).delay(300).slideUp(300);
            $(this).find(".hover-content").stop(true, true).delay(400).slideToggle(400);
        },
        mouseleave: function(e) {
            $(this).find(".hover-content").stop(true, true).delay(300).slideUp(300);
        },
    }, '.no-touchevents .btn-hover-container');

    $(document).on('click','.touchevents .btn-hover-container',function(e){
        e.stopPropagation();
        $(".btn-hover-container").not(this).find(".hover-content").stop(true, true).slideUp(400);
        $(this).find(".hover-content").stop(true, true).slideToggle(400);
    });
    $(document).on("click", function(e) {
        $(".hover-content").stop(true, true).slideUp(400);
    });
    /*__________DPE GES Hover Effect Ends________*/

});
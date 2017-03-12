/*_________Header Menu  Model2 Version5 Starts __________*/
if($('.header-menu-m2-v5').length)
	$(window).scroll(function(){
		if($(window).innerWidth() > 992)
		{
			var scrollTopHeight=120;
			if($(window).innerWidth() > 1200)
				var scrollTopHeight=195;

			if($(window).scrollTop() > scrollTopHeight)
			{
				$('.header-menu-m2-v5').css('margin-top',0);
				$('.header-menu-m2-v5').css('width','100%');
			}
			else
			{
				$('.header-menu-m2-v5').removeAttr('style');
			}
		}
	})
/*_________ Header Menu  Model2 Version5 Ends __________*/


/*_________Home Slider Model2 Version1 Starts__________*/
if($(".home-slider-m2-v1 .one-item-image-slider").length)
	$(document).ready(function() {
		var owl=$(".one-item-image-slider");

		if (getInternetExplorerVersion() <= 9) {
			owl.owlCarousel({
				singleItem:true,
				navigation: true,
				loop:true,
				autoPlay:true,
				autoPlayTimeout:5000,
				autoplaySpeed:5000,
				afterMove: function (elem) {
					centerImage('.one-item-image-slider-container');
				},
				beforeMove: function (elem) {
					centerImage('.one-item-image-slider-container');
				},
			});
		}
		else {
			owl.owlCarousel({
				singleItem:true,
				navigation: true,
				loop:true,
				autoPlay:true,
				autoPlayTimeout:5000,
				autoplaySpeed:5000,
				/* Is not supportted by IE9 */
				transitionStyle : "fade",/* backSLide, goDown, fadeUp  */
				afterMove: function (elem) {
					centerImage('.one-item-image-slider-container');
				},
				beforeMove: function (elem) {
					centerImage('.one-item-image-slider-container');
				},
			});

		}

		$( ".owl-next" ).empty();
		$( ".owl-prev" ).empty();
	});
/*_________Home Slider Model2 Version1 Ends__________*/


///*______________Thumbnail starts________________*/
//
//$(document).ready(function() {
//	$('#myCarousel').carousel({
//		interval: 10000
//	})
//
//	$('#myCarousel').on('slid.bs.carousel', function() {
//		//alert("slid");
//	});
//
//
//});
///*______________Thumbnail ends________________*/


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


/*__________Listing Details Slider Starts ________*/

/* Function for Flex Slider Initialization */
$(window).load(function(){

	if($('#thumbnails').length)
		$('#thumbnails').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			itemWidth: 94,
			itemMargin: 2,
			asNavFor: '#slider'
		});


	if($('#slider').length)
		$('#slider').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: true,
			slideshow: false,
			sync: "#thumbnails",
			start: function(slider){
				$('body').removeClass('loading');
				//setListItmDtlDescHeight();
			}
		});

});


/* Function for Adding Listing Details Gallery Thumbnails Starts */
function addFakeThumbs() {
	$('#thumbnails').css('width', 'auto');
	var curThumbCnt=$('.real-thumb').length;
	var thumbContWidth=$('#thumbnails').outerWidth()-36;
	var fitThumbCnt=thumbContWidth/96;
	var addThumbCnt= Math.floor(fitThumbCnt-curThumbCnt);
	for(i=0; i<addThumbCnt; i++)
	{
		if(i==0)
			$('.real-thumb').last().
			after('<li style="margin-right: 2px; float: left; display: block;" class="fake-thumb"><div class="row-col lst-itm-dtl-thumb" ></div></li>');
		else
			$('.fake-thumb').last().
			after('<li style="margin-right: 2px; float: left; display: block;" class="fake-thumb"><div class="row-col lst-itm-dtl-thumb" ></div></li>');
	}
	if(addThumbCnt>0)
		$('#thumbnails .flex-direction-nav').css('display','none');

	$('.fake-thumb').unbind('click');
};

$(function(){
	addFakeThumbs();
});
$(window).bind('resize', function() {
	addFakeThumbs();
});
$(window).load(function(){
	addFakeThumbs();
});

/*__________Listing Details Slider Ends ________*/


/*__________Listing Details Gallery Starts________*/
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
/*__________Listing Details Gallery Ends________*/


/*__________Modal Model2 Initialization Starts__________*/
var centerModalImg = function(el){
	var parentSelector=$(el).attr('id');
	centerImage('#'+parentSelector + ' .modal-img-container');
}
$('.popup-contact-m1').each(function(){
	$(this).on('shown.bs.modal', function (e) {
		centerModalImg(this);
	});
	$(window).bind('resize',function(){
		centerModalImg(this);
	});
})
/*__________Modal Model2 Initialization Ends__________*/



/*_________Home Ads Slider Model2 Version3 Starts__________*/
if($(".home-ads-slider-m2-v3 .multi-item-image-slider").length)
	$(document).ready(function() {
		var owl=$(".multi-item-image-slider");

		owl.owlCarousel({
			autoPlay: false,
			pagination: false,
			scrollPerPage : true,
			itemsCustom : [
				[0, 1],
				[480, 1],
				[650, 1],
				[768, 2],
				[992, 2],
				[1350, 3]
			],
			navigation : true,
			transitionStyle : "fade",
			slideSpeed : 1000
		});

		$( ".owl-next" ).empty();
		$( ".owl-prev" ).empty();

		/* Remove transition hover shaking of owl item in IE */
		$(".no-touchevents .multi-item-slider-caption figcaption").hover(
			function() {
				if(getInternetExplorerVersion()!=-1)
					$(".owl-item").addClass("owl-item-no-transform");
			}
		)

	});
/*_________Home Ads Slider Model2 Version3 Ends__________*/










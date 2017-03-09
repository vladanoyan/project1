

/*__________Listing Details Slider Starts ________*/

/* Function for Flex Slider Initialization */

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
addFakeThumbs();
/*__________Listing Details Slider Ends ________*/


/*__________Listing Details Gallery Starts ________*/
/* Lightbox Gallery */
$(function(){
	if($('.listing-dtl-gallery').length)
	{
	
		var gallery = $('.listing-dtl-gallery .gal-class').simpleLightbox({
			navText:['',''],
		})
		// var gallery1 = $('.listing-dtl-gallery .gal-class1').simpleLightbox({
		// 	navText:['',''],
		// })

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
			console.log('ddd');
			galCustomStyleForNav();
		});
		$('.listing-dtl-gallery .gal-class1').on('shown.simplelightbox', function () {
			console.log('dddd');
			galCustomStyleForNav();
		});
		$(window).bind('resize', function(){
			galCustomStyleForNav();
		});

	}
});
/*__________Listing Details Gallery Ends ________*/


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

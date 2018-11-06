$(document).ready(function(){
	$('#img_intro').slick({
	    infinite: true,
	    autoplay: false,
	    autoplaySpeed:3000,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
	    dots: false,
	    prevArrow: '<span class="icon-Arrow-left"></span>',
        nextArrow: '<span class="icon-Arrow-right"></span>',
	});
});
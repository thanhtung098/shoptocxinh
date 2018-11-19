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
	$('.thum_imgpd').slick({
	    infinite: true,
	    autoplay: false,
	    autoplaySpeed:3000,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    arrows: true,
	    dots: false,
	    prevArrow: '<span class="icon-Arrow-left"></span>',
        nextArrow: '<span class="icon-Arrow-right"></span>',
	});
	$('.thum_imgpd .it_img img').click(function(){
		var link_thum = $(this).attr('src');
		$('#myimage').attr('src',link_thum);
		$('.img_zoom_lens').remove();
		imageZoom("myimage", "myresult");
	});
});
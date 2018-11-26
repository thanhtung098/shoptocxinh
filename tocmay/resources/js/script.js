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
	    focusOnSelect: true,
	    autoplay: true,
	    autoplaySpeed:3000,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    arrows: true,
	    dots: false,
	    prevArrow: '<span class="icon-Arrow-left"></span>',
        nextArrow: '<span class="icon-Arrow-right"></span>',
	});
	$('#main_pd').slick({
	    infinite: true,
	    focusOnSelect: true,
	    autoplay: true,
	    autoplaySpeed:3000,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    arrows: false,
	    dots: true,
	    prevArrow: '<span class="icon-Arrow-left"></span>',
        nextArrow: '<span class="icon-Arrow-right"></span>',
        responsive: [
	    {
	      breakpoint: 720,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 425,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    }
	    ]
	});
	$('.ct_article').slick({
	    infinite: true,
	    focusOnSelect: true,
	    autoplay: true,
	    autoplaySpeed:3000,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    arrows: false,
	    dots: true,
	    prevArrow: '<span class="icon-Arrow-left"></span>',
        nextArrow: '<span class="icon-Arrow-right"></span>',
        responsive: [
	    {
	      breakpoint: 720,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 425,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    ]
	});
	$('.tab_pd ul').slick({
	    infinite: true,
	    focusOnSelect: true,
	    autoplay: false,
	    autoplaySpeed:3000,
	    slidesToShow: 6,
	    slidesToScroll: 1,
	    arrows: false,
	    dots: false,
	    prevArrow: '<span class="icon-Arrow-left"></span>',
        nextArrow: '<span class="icon-Arrow-right"></span>',
        responsive: [
	    {
	      breakpoint: 720,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true,
	    	autoplay: true,

	      }
	    },
	    {
	      breakpoint: 425,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true,
	        autoplay: true,
	      }
	    },
	    ]
	});
	
	$('.thum_imgpd .it_img img').click(function(){
		var link_thum = $(this).attr('src');
		$('#myimage').attr('src',link_thum);
		$('.img_zoom_lens').remove();
		imageZoom("myimage", "myresult");
	});
	function tabImfor(){
		var ltab = $('#tab_all').children();
		$('.tab_point li').click(function(){
			var pshow = $(this).index();
			$('.tab_point li').removeClass('active');
			$(this).addClass('active');
			ltab.removeClass('active');
			ltab.eq(pshow).addClass('active');
		});
	}
	tabImfor();
	function showMenumb(){
        $('.mobile-toggle').click(function(){
            $('.mobile-toggle .button_toggle .line2').toggleClass('line_hidden');
            $('.mobile-toggle .button_toggle .line:nth-child(1)').toggleClass('line-close-1');
            $('.mobile-toggle .button_toggle .line:nth-child(3)').toggleClass('line-close-3');
            $('.mid_hd').toggleClass('content_menu_show');
        });
        $('.mid_hd>nav>ul>li>span').click(function(){
            $('.mid_hd>ul>li>span').removeClass('arrow_mn');
            if($(this).parent().find('ul').first().hasClass('menu_show')){
                $(this).parent().find('ul').first().removeClass('menu_show');
                $(this).removeClass('arrow_mn');
            }else{
                $('.mid_hd>nav>ul>li>ul').removeClass('menu_show');
                $(this).parent().find('ul').first().addClass('menu_show');
                $(this).addClass('arrow_mn');
            }
        });
        $('.mid_hd>nav>ul>li>ul>li>span').click(function(){
            $('.mid_hd>nav>ul>li>ul>li span').removeClass('arrow-smb');
            if($(this).parent().find('ul').hasClass('menu_show')){
                $(this).parent().find('ul').removeClass('menu_show');
                $(this).removeClass('arrow_mn');
            }else{
                $('.mid_hd>nav>ul>li>ul>li ul').removeClass('menu_show');
                $(this).parent().find('ul').addClass('menu_show');
                $(this).addClass('arrow_mn');
            }
        });
    }
    showMenumb();
    $('.to_toppage').click(function(){
        $('html, body').animate({scrollTop : 0},500);
        return false;
    });
	$('.ct_lcrt').perfectScrollbar();

});
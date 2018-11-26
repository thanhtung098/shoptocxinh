var player;
function onYouTubeIframeAPIReady() {

	const elVideo = document.getElementById("video_banner");
	console.log(elVideo);
	if(!elVideo){return;}

    player = new YT.Player('video_banner', {
        videoId: 'O-NBzwxauZE',
        playerVars: {
        	'autoplay': 1,
        	'loop': 0,
            'color': 'white',
            'controls':1,
            'mute':1
        }
    });
}

$('.btn-pVideo').on('click', function () {
    player.playVideo();
});

// end run video


const common = (function(){

	var iframe;    	

	const _generateSlider = function(){

		const elIndexBanner = document.getElementById('banner');
	
		if(!elIndexBanner){return;}
		
		$(elIndexBanner).slick({
	        infinite: true,
	        autoplay: false,
	        autoplaySpeed:2000,
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: true,
	        dots: false,
	        prevArrow: '<span class="icon-Arrow-left"></span>',
        	nextArrow: '<span class="icon-Arrow-right"></span>',
	    }).on('afterChange', function(event, slick, currentSlide, nextSlide){
	        if(currentSlide == 0){
	            player.playVideo();
	            $(elIndexBanner).slick('slickPause');
	        }
	    });
	}; //end_generateSlider

	const _generateFacebookFanpage = function(){
		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v3.2&appId=704558949717927&autoLogAppEvents=1';
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}; //end_generateFacebookFanpage

  const _preventEvent = function(){
    const elHasPrevent = document.getElementsByClassName('prevent-event-pc');
    if(elHasPrevent.length == 0){return;}

    $(elHasPrevent).on("click",function($elHasPreventItem){
      if(window.outerWidth > 640){
        $elHasPreventItem.preventDefault();
      }      
    })
  }; //end_preventEvent

  const _generateBlogDetailSlider = function() {

    const elBlogDetailSlider = document.getElementById('blog-detail__list');
    console.log("run");
    if(!elBlogDetailSlider) {return;}

    $(window).resize(function () {
      $('.js-slider').not('.slick-initialized').slick('resize');
    });

    $(elBlogDetailSlider).slick({
      infinite: true,
      autoplay: false,
      autoplaySpeed:2000,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      dots: false,
      centerPadding: '14.5px',
      prevArrow: '<span class="icon-Arrow-left"></span>',
      nextArrow: '<span class="icon-Arrow-right"></span>',      
      responsive: [
        {
          breakpoint: 641,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,            
            centerPadding: '12px',            
            arrows : false,
          }
        },
        {
          breakpoint: 426,
          settings: {            
            centerPadding: '5px',                        
            slidesToShow: 2,
            slidesToScroll: 2,            
            arrows : false,
          }
        },
      ],
    })
  };

  const _generateReviewSlider = function() {
    const elReviewSlider = document.getElementById('review-slider__list');

    if(!elReviewSlider) { return; }

    $(elReviewSlider).slick({
      infinite: true,
      autoplay: false,      
      slidesToShow: 5,
      centerMode: true,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      centerPadding: '50px',      
      prevArrow: '<span class="icon-Arrow-left review-slider__arrow-left"></span>',
      nextArrow: '<span class="icon-Arrow-right review-slider__arrow-right"></span>',      
      responsive: [
        {
          breakpoint: 1920,
          settings: {            
            centerPadding: '30px',             
          }
        },
        {
          breakpoint: 641,
          settings: {        
            slidesToShow: 3,
            centerPadding: '30px',             
          }
        },
        {
          breakpoint: 521,
          settings: {       
            slidesToShow: 3,             
            centerPadding: '20px',             
          }
        },
        {
          breakpoint: 426,
          settings: {                    
            slidesToShow: 3,
            centerPadding: '10px',             
          }
        },
      ],
    })
  };

	return {
		init(){
			_generateSlider();
			_generateFacebookFanpage();
      _preventEvent();
      _generateBlogDetailSlider();
      _generateReviewSlider();
		}
	}
})();

common.init();
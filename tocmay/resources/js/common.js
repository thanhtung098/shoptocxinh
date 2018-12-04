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
            'mute':1,
            'rel': 0,
            'suggestions': 0,
            'topicDetails': 0,
            'snippet.title': 0
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

	return {
		init(){
			_generateSlider();
			_generateFacebookFanpage();
      _preventEvent();
		}
	}
})();

common.init();
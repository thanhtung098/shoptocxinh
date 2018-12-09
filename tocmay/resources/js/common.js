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

  const _generateBlogDetailSlider = function() {

    const elBlogDetailSlider = document.getElementById('blog-detail__list');    
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
  }; // end_generateBlogDetailSlider

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
  };// end__generateReviewSlider

  const _detectDevice = function() {
    var isMobile = false; //initiate as false
    
    // device detection
    const is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
      is_android = navigator.platform.toLowerCase().indexOf("android") > -1;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
    else if (is_firefox && is_android) { isMobile = true; }
    return isMobile;
  }; //end_detectDevice 

  const _formatMoney = function(val){
    var v = Number(val);
    if (isNaN(v)) { return val; }
    var sign = (v < 0) ? '-' : '';
    var res = Math.abs(v).toString().split('').reverse().join('').replace(/(\d{3}(?!$))/g, '$1,').split('').reverse().join('');
    return sign + res;
  } // end_formatMoney

  const _calcAndPrintPriceProduct = function(elCurrent) {
      const $elCartDetailInfoGroup = $($(elCurrent).parents('.cart-detail__info-group')[0]);    
      const elCartDetailPriceCol = $elCartDetailInfoGroup.find('.cart-detail__price-col')[0];
      const elCartDetailFinalPriceCol = $elCartDetailInfoGroup.find('.cart-detail__final-price-col')[0];

      const intPriceValue = elCartDetailPriceCol.dataset.price;
      const intFinalPriceValue = elCartDetailFinalPriceCol.dataset.finalPrice;          
      
      $(elCartDetailPriceCol).find('.cart-detail__price-txt').html(_formatMoney(intPriceValue * parseInt(elCurrent.value)) + ' VNĐ');
      $(elCartDetailFinalPriceCol).find('.cart-detail__final-price-txt').html(_formatMoney(intFinalPriceValue * parseInt(elCurrent.value)) + ' VNĐ');
  }

  const _showOrHideQuantityBlock = function() {
    const $objElQuantityInputOuter = $('.cart-detail__quantity-input-controls'),
          $objElQuantitySelectOuter = $('.cart-detail__quantity-select-controls');
          $objElQuantityInput = $('.-quantity-input');
          $objElQuantitySelect = $('.-quantity-select');

    if($objElQuantityInputOuter.length <= 0 || $objElQuantitySelectOuter.length <= 0) {return;}

    var dataCurQuantity;
    function setIsShow() {      
      if(_detectDevice()) {        
        $objElQuantityInputOuter.removeClass('is-show');
        $objElQuantitySelectOuter.addClass('is-show');   
        $objElQuantitySelect.each(function(key, $elQuantitySelect) {          
          dataCurQuantity = parseInt($($elQuantitySelect).parents('.cart-detail__quanity-col')[0].dataset.curQuantity);          
          console.log(dataCurQuantity);
          $($elQuantitySelect).find('option').removeAttr('selected');
          $($elQuantitySelect[dataCurQuantity - 1]).prop('selected','selected');
        })     
      } else {        
        $objElQuantityInputOuter.addClass('is-show');
        $objElQuantitySelectOuter.removeClass('is-show');        
        $objElQuantityInput.each(function(key, $elQuantityInput) {
          dataCurQuantity = $($elQuantityInput).parents('.cart-detail__quanity-col')[0].dataset.curQuantity;
          $elQuantityInput.value = dataCurQuantity;
        })
      }
    }

    setIsShow();

    $(window).on('resize',function() {
      setIsShow();
    });    
  }; // end_showOrHideQuantityBlock

  const _validateCartDetailForm = function() {
    const objElQuantityInput = document.getElementsByClassName('-quantity-input');
    const objElQuantitySelect = document.getElementsByClassName('-quantity-select');

    const objElQuantityIncreaseBtn = document.getElementsByClassName('-increase-btn');
    const objElQuantityDecreaseBtn = document.getElementsByClassName('-decrease-btn');

    if(!objElQuantityInput || 
       !objElQuantitySelect) {
          return;
      }

    var quantityValue, quantityLimit, currentKeyValue, elCurrent, controlsOuter, elQuantityCol;
    var increaseInput,decreaseInput;
    
    const regexLetter = /^[a-zA-Z]+$/,
          regexSpecialChar = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
          exceptKey = [13,17,35,36,46];

    $(objElQuantityInput).on('keydown',function(ev) {
      elCurrent = ev.target;            
      controlsOuter = $(elCurrent).parents('.-quantity-select')[0];      
      quantityLimit = elCurrent.dataset.limitQuantity;
      currentKeyValue = ev.keyCode;                  

      if(exceptKey.indexOf(currentKeyValue) != -1) {        
        return;
      } else {
        elQuantityCol = $(elCurrent).parents('.cart-detail__quanity-col')[0];
        if(currentKeyValue == 8) {                    
          setTimeout(function(){
            if(elCurrent.value != '') {
              elQuantityCol.dataset.curQuantity = parseInt(elCurrent.value);
              _calcAndPrintPriceProduct(elCurrent);
            }            
          });
          return;
        }
        currentKeyValue = ev.key;      
        if(regexLetter.test(currentKeyValue) || regexSpecialChar.test(quantityValue)) {        
          ev.preventDefault();      
          return;
        }
        
        setTimeout(function() {          
          quantityValue = elCurrent.value;          
          if(parseInt(quantityValue) > parseInt(quantityLimit)) {
            elCurrent.value = parseInt(quantityLimit);
          }  
          
          elQuantityCol.dataset.curQuantity = parseInt(elCurrent.value);          

          _calcAndPrintPriceProduct(elCurrent);          
        });
      }      

    });

    $(objElQuantitySelect).on('change',function(ev) {
      elCurrent = ev.target;      

      $(elCurrent).parents('.cart-detail__quanity-col')[0].dataset.curQuantity = parseInt(elCurrent.value);      

      _calcAndPrintPriceProduct(elCurrent);          
    });

    $(objElQuantityIncreaseBtn).on('click',function(ev) {            
      ev.preventDefault();
      elCurrent = ev.target;      
      increaseInput = $(elCurrent).prev()[0];
      if(parseInt(increaseInput.value) < parseInt(increaseInput.dataset.limitQuantity)) {
        increaseInput.value = parseInt(increaseInput.value) + 1;
        $(increaseInput).parents('.cart-detail__quanity-col')[0].dataset.curQuantity = increaseInput.value;
      }      

      _calcAndPrintPriceProduct(increaseInput); 
    });

    $(objElQuantityDecreaseBtn).on('click',function(ev) {            
      ev.preventDefault();
      elCurrent = ev.target;      
      decreaseInput = $(elCurrent).next()[0];      
      if(parseInt(decreaseInput.value) > 0) {
        decreaseInput.value = parseInt(decreaseInput.value) - 1;
        $(decreaseInput).parents('.cart-detail__quanity-col')[0].dataset.curQuantity = decreaseInput.value;
      }

      _calcAndPrintPriceProduct(decreaseInput);             
    });
    
  }; // end_validateCartDetailForm

  const _setClickEventForOrderBtn = function() {
    const elOrderBtn = document.getElementById('cart-detail__order-btn');

    if(!elOrderBtn) {return;}

    elOrderBtn.addEventListener('click',function(ev) {
      ev.preventDefault();
      const $objElQuantityCol = $('.cart-detail__quanity-col'),
            $objElProductTd = $('.cart-detail__info-group');
      var objCartProducts = {}; // tạo object json cho thông tin order
        
      $objElQuantityCol.each(function(id,item) {
        objCartProducts[$objElProductTd[id].dataset.productId] = {};
        objCartProducts[$objElProductTd[id].dataset.productId] = {quanity: item.dataset.curQuantity};
      });
      console.log(objCartProducts);
      ev.preventDefault();
    });
  }

  const _validateCustomerInfoForm = function() {    
    const elPaymentComfirmBtn = document.getElementById('payment__confirm-btn');
          $elPaymentCustomerNameField = $('#payment__customer-infor-name-field'),
          $elPaymentCustomerPhoneField = $('#payment__customer-infor-phone-field'),
          $elPaymentCustomerEmailField = $('#payment__customer-infor-email-field');          
    
    const regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
          regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    

    if(!elPaymentComfirmBtn || 
       !$elPaymentCustomerNameField ||
       !$elPaymentCustomerPhoneField ||
       !$elPaymentCustomerEmailField ) { return; }
    
    var elWrongField, isFail = false;
    elPaymentComfirmBtn.addEventListener('click',function(ev) {            
      $elWrongField = $elPaymentCustomerNameField.next();
      
      if($elPaymentCustomerNameField.val().length <= 1) {
        $elWrongField.addClass('is-show');
        isFail = true;
      } else {
        $elWrongField.removeClass('is-show');
      }
      
      $elWrongField = $elPaymentCustomerPhoneField.next();
      if(!regexPhone.test($elPaymentCustomerPhoneField.val())) {
        $elWrongField.addClass('is-show');
        isFail = true;
      } else {
        $elWrongField.removeClass('is-show');
      }

      $elWrongField = $elPaymentCustomerEmailField.next();
      if(!regexEmail.test($elPaymentCustomerEmailField.val())) {
        $elWrongField.addClass('is-show');
        isFail = true;
      } else {
        $elWrongField.removeClass('is-show');
      }

      $elRadioChecked = $('input[name=payment]:checked');
            
      if(isFail) {            
        ev.preventDefault();
        return;        
      }

      const $strPaymentCustomerNameVal = $elPaymentCustomerNameField.val(),
            $strPaymentCustomerPhoneVal = $elPaymentCustomerPhoneField.val(),
            $strPaymentCustomerEmailVal = $elPaymentCustomerEmailField.val(),
            $strPaymentRadioCheckedVal = $elRadioChecked[0].dataset.payment;

      const objDataCustomerInfo = {
        name: $strPaymentCustomerNameVal,
        phone: $strPaymentCustomerPhoneVal,
        email: $strPaymentCustomerEmailVal,
        paymentMethod: $strPaymentRadioCheckedVal,
      };      
      console.log(objDataCustomerInfo);
      ev.preventDefault();
      // do something with your data, post ...
    });
  }; // end_validateCustomerInfoForm

  const _showMenuMoblie = function(){
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
  };
  const _ArrayIntroSlider = function(){
    const objArrayIntro = document.getElementById('img_intro');   
    if(!objArrayIntro) { return }               
    $(objArrayIntro).slick({
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
  }
  const _ArrayMainProduct = function(){
    const objMainProduct = document.getElementById('main_pd');
    if(!objMainProduct) { return } 
      $(objMainProduct).slick({
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
  }
  const _ArrayArticle = function(){
    const objArticle = document.getElementById('listarticle');
    if(!objArticle) { return } 
      $(objArticle).slick({
      infinite: true,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed:3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
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
  }

  const _ArrayThumdetail = function(){
  const objThumnailDetail = document.getElementById('thumnailDetail');
  if(!objThumnailDetail) { return } 
    $(objThumnailDetail).slick({
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
  }

  const _arrListTab = function(){
  const objListTab = document.getElementById('list_tab');
  if(!objListTab) { return } 
    $(objListTab).slick({
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
  }

  const _tabImfor = function (){
    var ltab = $('#tab_all').children();
    $('.tab_point li').click(function(){
      var pshow = $(this).index();
      $('.tab_point li').removeClass('active');
      $(this).addClass('active');
      ltab.removeClass('active');
      ltab.eq(pshow).addClass('active');
    });
  }
  const _checkHederMb = function(){
    const widthScrem = $(window).width();
    if(widthScrem > 640){
      $(window).scroll(function(){
        if ($(this).scrollTop() > 80) {
            $('header').addClass('header_scroll');
        } else {
            $('header').removeClass('header_scroll');
        }
      });
    }else{
      $('header').removeClass('header_scroll');
    }
    var timer = false;
    $(window).resize(function() {
      if (timer) clearTimeout(timer);
      timer = setTimeout(function(){
          $(window).scroll(function(){
            if($(window).width() > 640){
              if ($(this).scrollTop() > 80) {
                  $('header').removeClass('header_scroll');
              } else {
                  $('header').removeClass('header_scroll');
              }
            }else{
              $('header').removeClass('header_scroll');
            }
          });
      }, 300);
    });
  }
  const _zoomImage = function(){
    $('.thum_imgpd .it_img img').click(function(){
      var link_thum = $(this).attr('src');
      $('#myimage').attr('src',link_thum);
      $('.img_zoom_lens').remove();
      imageZoom("myimage", "myresult");
    });
  }

  const _toToppage = function(){
    const objToTop = document.getElementsByClassName('to_toppage');
    if(!objToTop) return false;
    $(objToTop).on('click',function(){
        $('html, body').animate({scrollTop : 0},500);
    });
  }
  
  const _scrollCart = function(){
    const ctscrollCart = document.getElementsByClassName('ct_lcrt');
    if(!ctscrollCart) return false;
    $(ctscrollCart).perfectScrollbar();
  }
  // google_map

  // end_google_map
  const _showCart = function(){
    const objShowcart = document.getElementById('showCart');
    if(!objShowcart){ return}
    if($(window).width() < 641){
      $('#showCart').click(function(){
        $('.shoping_cart').toggleClass('shoping_cart_show');
      })
    }
    var timer = false;
    $(window).resize(function() {
      if (timer) clearTimeout(timer);
      timer = setTimeout(function(){
        if($(window).width() < 641){
          $('#showCart').click(function(){
            $('.shoping_cart').toggleClass('shoping_cart_show');
          })
        }
      }, 300);
    });
  }
	return {
		init(){
			_generateSlider();
			_generateFacebookFanpage();
      _preventEvent();
      _generateBlogDetailSlider();
      _generateReviewSlider();
      _validateCartDetailForm();
      _setClickEventForOrderBtn();
      _validateCustomerInfoForm();
      _showOrHideQuantityBlock();
      _showMenuMoblie();
      _ArrayIntroSlider();
      _ArrayMainProduct();
      _ArrayArticle();
      _ArrayThumdetail();
      _tabImfor();
      _arrListTab();
      _checkHederMb();
      _zoomImage();
      _toToppage();
      _showCart();
      _scrollCart();
		}
	};
})();

common.init();
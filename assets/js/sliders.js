
$('.kasvu-hero').slick({
  	infinite: true,
  	dots: false,
    	prevArrow: false,
    	nextArrow: false,
  	autoplay: true,
  	autoplaySpeed: 1000,
  	speed: 1000,
	pauseOnHover: false,
        pauseOnFocus: false,
        touchMove: false,
        touchThreshold: false,
	fade: true,
  	cssEase: 'ease-in-out'
});

$('.kasvu-testimonial').slick({
        infinite: true,
        dots: true,
    	prevArrow: false,
    	nextArrow: false,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 1300,
        pauseOnHover: false,
        fade: true,
        cssEase: 'ease-in-out'
});

$('.kasvu-hero').on('touchstart', e => {
  $('.kasvu-hero').slick('slickPlay');
});

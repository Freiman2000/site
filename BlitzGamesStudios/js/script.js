jQuery(function($) {
	$(window).scroll(function(){
		if($(this).scrollTop()>140){
			$('#navigation').addClass('fixed-top');
		}
		else if ($(this).scrollTop()<140){
			$('#navigation').removeClass('fixed-top');
		}
	});
});


$(document).ready(function(){
   $('.slaidername').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.myslaider',
});
$('.myslaider').slick({
  slidesToShow: 12,
  slidesToScroll: 1,
  asNavFor: '.slaidername',
  dots: false,
  focusOnSelect: true,
  arrows: true,
  centerMode: true,
  centerPadding: '0px',
  nextArrow: '<img class="right" src="img/team/Right.png">',
  prevArrow: '<img class="left" src="img/team/Left.png">',
  mobileFirst: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 11,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 9,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1
      }
    },
        {
      breakpoint: 300,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
  ]
});
});
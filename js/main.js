$(document).ready(function() {
$('.button_portfolio[filter="wd"]').click(function(){
	if($(this).attr('val') == 'off') {
		$('.button_portfolio[filter]').attr('val', 'off');
		$(this).attr('val', 'on');
		$('.button_portfolio[filter]').removeClass('focused');
		$(this).addClass('focused');

		
		$('.filter > div').hide(300);
$('.filter > div[filter="wd"]').show(300);

	}

})
});

$(document).ready(function() {
$('.button_portfolio[filter="ud"]').click(function(){
	if($(this).attr('val') == 'off') {
		$('.button_portfolio[filter]').attr('val', 'off');
		$(this).attr('val', 'on');
			$('.button_portfolio[filter]').removeClass('focused');
		$(this).addClass('focused');

		
		$('.filter > div').hide(300);
$('.filter > div[filter="ud"]').show(300);

	}

})
});

$(document).ready(function() {
$('.button_portfolio[filter="moc"]').click(function(){
	if($(this).attr('val') == 'off') {
		$('.button_portfolio[filter]').attr('val', 'off');
		$(this).attr('val', 'on');
			$('.button_portfolio[filter]').removeClass('focused');
		$(this).addClass('focused');

		
		$('.filter > div').hide(300);
$('.filter > div[filter="moc"]').show(300);

	}

})
});



$(document).ready(function() {
$('.button_portfolio[filter="all"]').click(function(){
	$(this).addClass('focused');
	if($(this).attr('val') == 'off') {
		$('.button_portfolio[filter]').attr('val', 'off');
		$(this).attr('val', 'on');
			$('.button_portfolio[filter]').removeClass('focused');
		$(this).addClass('focused');

		
$('.filter > div').show(300);

}
})



});




//Слайди

    $(document).ready(function() {
        $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dotsClass: 'dots-style',
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
      });
     
    });

//Выпадающее меню
 $(document).ready(function() {$('.menu-icon').click(function() {

 	$('nav').slideToggle(500);
 	$('ul').css({'display':'flex', 'flex-direction':'column'})
 	
 })
 })

	// В начяло страницы
   $(document).ready(function() {$(window).scroll(function () {
      if ($(this).scrollTop() != 0)
         $('#toTop').fadeIn();
      else
         $('#toTop').fadeOut();
   });
   $('#toTop').click(function () {
      $('body,html').animate({
         scrollTop: 0
      }, 800);
   });})






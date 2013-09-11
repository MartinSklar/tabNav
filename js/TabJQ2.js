$(function () {
	$('.tabList li').click(function () {				
		$('.tabList li').removeClass('active');
		$(this).addClass('active');
		$('.tab').removeClass('active');
		$('.tab[data-tab="' + $(this).data('tab') + '"]').addClass('active');
	});

	$('h1').animate({'opacity': .5});
	$('h1').hover(function() {
		$(this).animate({'opacity': 1});
	});
});


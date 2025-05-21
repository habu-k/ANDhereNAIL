$(function(){
	function FixedAnime() {
		var headerH = $('#header').outerHeight(true);
		var scroll = $(window).scrollTop();
		if (scroll >= headerH){
				$('.openbtn').addClass('fadedown');
				$('#header').addClass('dnone');
			}else{
				$('.openbtn').removeClass('fadedown');
				$(".openbtn").removeClass('active');
				$(".openbtn_sp").removeClass('active');
				$('#header').removeClass('dnone');
				$("#header").removeClass('panelactive');
				$("#g-nav").removeClass('panelactive');
				$(".circle-bg").removeClass('circleactive');
			}
		}
	$(window).scroll(function () {
		FixedAnime();
	});
	$(".openbtn").click(function () {
		$(this).toggleClass('active');
		$("#header").toggleClass('panelactive');
		$(".circle-bg").toggleClass('circleactive');
	});
	$(".openbtn_sp").click(function () {
		$(this).toggleClass('active');
		$('#header').addClass('dnone');
		$("#header").toggleClass('panelactive');
		$(".circle-bg").toggleClass('circleactive');
	});
	$(".openbtn_sp.active").click(function () {
		$(".openbtn_sp").removeClass('active');
		$("#header").removeClass('panelactive');
		$('#header').removeClass('dnone');
		$("#g-nav").removeClass('panelactive');
		$(".circle-bg").removeClass('circleactive');
	});
	$("nav a").click(function () {
		$('.openbtn').removeClass('fadedown');
		$(".openbtn").removeClass('active');
		$(".openbtn_sp").removeClass('active');
		$("#header").removeClass('panelactive');
		$('#header').removeClass('dnone');
		$("#g-nav").removeClass('panelactive');
		$(".circle-bg").removeClass('circleactive');
	});
	$(window).scroll(function (){
			$('.fadein_fast').each(function(){
					var targetElement = $(this).offset().top;
					var scroll = $(window).scrollTop();
					var windowHeight = $(window).height();
					if (scroll > targetElement - windowHeight + 50){
							$(this).css('opacity','1');
							$(this).css('transform','translateY(0)');
					}
			});
	});
	$(window).scroll(function (){
			$('.fadein').each(function(){
					var targetElement = $(this).offset().top;
					var scroll = $(window).scrollTop();
					var windowHeight = $(window).height();
					if (scroll > targetElement - windowHeight + 100){
							$(this).css('opacity','1');
							$(this).css('transform','translateY(0)');
					}
			});
	});
});
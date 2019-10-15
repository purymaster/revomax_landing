$(function () {

	$('.ie9').find('button').on('click', function () {
		$('.ie9').fadeOut();
	});

	/******************** 페이지 스크롤링 ********************/

	var page_val = 1;

	function set_page(val) {
		$('.content:eq(' + val + '),.side_menu li:eq(' + val + ')').addClass('on').siblings().removeClass('on');
	}

	$('.side_menu').find('a').on('click', function () {
		page_val = $(this).parent().index();
		set_page(page_val);
	});

	setInterval(function () {
		set_page(page_val);
		page_val++;
		if (page_val > 4) page_val = 0;
	}, 3000);


	/******************** 스크롤 애니메이션 정의 ********************/

	var move_el = $('[data-animation]'), //무빙 요소
		move_name, //무빙 정의
		move_delay, //순차무빙 딜레이
		move_duration, //순차무빙 시간
		scroll, //스크롤 값
		top_btn = $('.move_top'), //TOP 버튼
		top_btn_flag = 0; //TOP 버튼 상태

	move_el.addClass('wait-animation');
	$(window).on('load scroll', function () {
		scroll = $(this).scrollTop();

		//순차 애니메이션 제어
		move_el.each(function () {
			move_name = $(this).data('animation');
			move_delay = $(this).data('delay') * 100; //단위 0.1초
			move_duration = $(this).data('duration') * 1000; //단위 1초
			$(this).addClass('animated ' + move_name);
			if (move_delay >= 0)
				$(this).css({
					'-webkit-animation-delay': move_delay + 'ms',
					'animation-delay': move_delay + 'ms'
				});
			if (move_duration >= 0)
				$(this).css({
					'-webkit-animation-duration': move_duration + 'ms',
					'animation-duration': move_duration + 'ms'
				});
			$(this).removeClass('wait-animation');
		});

	});

});
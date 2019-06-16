function hints(msg) {
	$('.hints').remove()
	$('body').append(
		$('<div>')
			.attr('class', 'hints')
			.html(msg)
	)
	setTimeout(function() {
		$('.hints').remove()
	}, 3000)
}
function selected(id) {
	$('.btns .circle').attr('class', 'circle')
	$(id).attr('class', 'circle selected')
}
function submit() {
	if ($('.name').val() == '') {
		hints('请留下你的称呼^_^')
		return
	}
	if ($('.tel').val() == '') {
		hints('请留下你的联系电话^_^')
		return
	}
	$.ajax({
		url: 'messages.api',
		method: 'put',
		data: {
			type: '招商加盟',
			content:
				'<div class="content"><div class="line"><div class="caption">称呼</div><div class="info">' +
				$('.name').val() +
				'</div></div><div class="line"><div class="caption">电话</div><div class="info">' +
				$('.tel').val() +
				'</div></div></div>',
			text: $('.name').val() + ',' + $('.tel').val()
		},
		success: function() {
			hints('您的需求我们已经收到，期待详聊^_^')
			$('.name').val('')
			$('.tel').val('')
		}
	})
}
$(function() {
	var owl = $('.owl-carousel')
	owl.owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		animateOut: 'lightSpeedOut',
		animateIn: 'lightSpeedIn'
	})
	owl.on('changed.owl.carousel', function(event) {
		$('.dots div').removeAttr('class')
		$('#dot' + (event.page.index + 1)).attr('class', 'selected')
	})
	$('#dot1').click(function() {
		owl.trigger('to.owl.carousel', [0])
	})
	$('#dot2').click(function() {
		owl.trigger('to.owl.carousel', [1])
	})
	$('#dot3').click(function() {
		owl.trigger('to.owl.carousel', [2])
	})
	$('#dot4').click(function() {
		owl.trigger('to.owl.carousel', [3])
	})
	$(document).scroll(function() {
		if ($(document).scrollTop() > $('#coperate').offset().top - 10) selected('#tag-coperate')
		else if ($(document).scrollTop() >= $('#product-g').offset().top - 10) selected('#tag-product-g')
		else if ($(document).scrollTop() >= $('#product-s').offset().top - 10) selected('#tag-product-s')
		else if ($(document).scrollTop() >= $('#product-m').offset().top - 10) selected('#tag-product-m')
		else selected('#tag-home')
	})
	$('.submit').click(submit)
})

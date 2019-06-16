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
				'</div></div><div class="line"><div class="caption">邮箱</div><div class="info">' +
				$('.mail').val() +
				'</div></div><div class="line"><div class="caption">描述</div><div class="info">' +
				$('.desc').val() +
				'</div></div></div>',
			text: $('.name').val() + ',' + $('.tel').val() + ',' + $('.mail').val() + ',' + $('.desc').val()
		},
		success: function() {
			hints('您的需求我们已经收到，期待详聊^_^')
			$('.name').val('')
			$('.tel').val('')
			$('.mail').val('')
			$('.desc').val('')
		}
	})
}
$(function() {
	$('.submit').click(submit)
})

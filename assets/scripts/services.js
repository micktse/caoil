function load() {
	$.post('/sites.api', { id: 'Cfedd7040915a11e992b55796fb705920', invoke: 'loadArticles' }, function(res) {
		for (var i = 0; i < res.data.length; i++) {
			$('.faq').append(
				$('<div>')
					.attr('class', 'item')
					.append($('<div>').attr('class', 'logo'))
					.append(
						$('<div>')
							.attr('class', 'faq')
							.append(
								$('<div>')
									.attr('class', 'question')
									.html(res.data[i].title)
							)
							.append(
								$('<div>')
									.attr('class', 'answer')
									.html(res.data[i].content)
							)
					)
			)
		}
	})
	// <div class="item">
	// 	<div class="logo" />
	// 	<div class="faq">
	// 		<div class="question">This's the question. What's caoil?</div>
	// 		<div class="answer">This is the answer! a oil brand which is best oil.</div>
	// 	</div>
	// </div>
}
var tabs = {
	faq: '',
	points: '',
	sold: ''
}
function changeTab(tab) {
	$('.list').hide()
	$('.func div').removeAttr('class')
	tab.attr('class', 'choose')
	$('.' + tab.attr('id')).show()
}
$(function() {
	$('.func div').click(function() {
		changeTab($(this))
	})

	if (location.href.split('?')[1] == 'points') {
		changeTab($('#points'))
	} else if (location.href.split('?')[1] == 'sold') {
		changeTab($('#sold'))
	} else {
		changeTab($('#faq'))
	}
	load()
})

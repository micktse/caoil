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
})

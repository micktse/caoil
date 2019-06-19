var pageSize = 5
var pageList = 5
var page = 1
var groupId = 'G0c2b65908b6111e9a203ebf5b105516d'
function list(res, id) {
	$('.list').empty()
	for (var i = 0; i < res.data.length; i++) {
		var text = res.data[i].text
		text = text.replace(/<img src=\"\S+\" \/>/g, '')
		$('.list').append(
			$('<div>')
				.attr('class', 'item')
				.attr('data-id', res.data[i].id)
				.click(function() {
					location.href = 'page.html?id=' + $(this).attr('data-id') + '&source=school'
				})
				.append(
					$('<div>')
						.attr('class', 'pic')
						.append($('<img/>').attr('src', res.data[i].banner))
				)
				.append(
					$('<div>')
						.attr('class', 'content')
						.append(
							$('<div>')
								.attr('class', 'caption')
								.html(res.data[i].title)
						)
						.append(
							$('<div>')
								.attr('class', 'description')
								.html(text.length > 200 ? text.substr(0, 200) + '...' : text)
						)
						.append(
							$('<div>')
								.attr('class', 'column')
								.html(res.data[i].column_name)
						)
				)
		)
	}
	var page = res.page
	var pageCount = res.pageCount
	var footer = $('<div>').attr('class', 'footer-row')
	var pageEnd = pageCount > pageList ? pageList : pageCount
	var pageStart = 1

	if (page > Math.floor(pageList / 2)) {
		pageStart = page - Math.floor(pageList / 2)
		pageEnd = pageStart + pageList - 1
	}
	if (pageEnd > pageCount) {
		pageStart = pageCount - (pageList - 1)
		pageEnd = pageCount
	}
	for (var i = pageStart; i <= pageEnd; i++) {
		var css = 'page'
		if (i == page) {
			css = 'page-selected'
		}
		footer.append(
			$('<div>')
				.attr('class', css)
				.html(i)
				.click(function() {
					page = $(this).html()
					location.href = '#start'
					if (id) {
						$.post('/sites.api', { id, invoke: 'loadArticles', pageSize, page }, function(res) {
							list(res, id)
						})
					} else {
						$.post('/sites.api', { id: groupId, invoke: 'loadAllArticles', pageSize, page }, function(res) {
							list(res)
						})
					}
				})
		)
	}
	$('.list').append(footer)
	$('.list .description img').remove()
}
function loadAllArticles() {
	$.post('/sites.api', { id: groupId, invoke: 'loadAllArticles', pageSize, page }, function(res) {
		list(res)
	})
}
function loadArticles(id) {
	$.post('/sites.api', { id, invoke: 'loadArticles', pageSize, page }, function(res) {
		list(res, id)
	})
}
function loadColumns() {
	$.post('/sites.api', { id: groupId, invoke: 'loadColumns' }, function(res) {
		$('.columns').append(
			$('<div>')
				.attr('class', 'selected')
				.html('全部')
				.click(function() {
					$('.columns div').removeAttr('class')
					$(this).attr('class', 'selected')
					loadAllArticles()
				})
		)
		for (var i = 0; i < res.data.length; i++) {
			$('.columns').append(
				$('<div>')
					.html(res.data[i].name)
					.attr('data-id', res.data[i].id)
					.click(function() {
						$('.columns div').removeAttr('class')
						$(this).attr('class', 'selected')
						loadArticles($(this).attr('data-id'))
					})
			)
		}
	})
}
$(function() {
	loadColumns()
	loadAllArticles()
})

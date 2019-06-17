$(function() {
	$.post('/sites.api', { id: 'G0c2b65908b6111e9a203ebf5b105516d', invoke: 'loadAllArticles', random: 8 }, function(
		res
	) {
		console.info(res)
		for (var i = 0; i < res.data.length; i++) {
			var text = res.data[i].text
			text = text.replace(/<img src=\"\S+\" \/>/g, '')
			$('.guide').append(
				$('<div>')
					.attr('class', 'item')
					.attr('data-id', res.data[i].id)
					.click(function() {
						location.href = 'page.html?id=' + $(this).attr('data-id')
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
									.html(text.length > 50 ? text.substr(0, 50) + '...' : text)
							)
					)
			)
		}
	})
})

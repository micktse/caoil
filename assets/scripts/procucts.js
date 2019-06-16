$(function() {
	$.post('/zproducts.api', {}, function(data) {
		for (var i = 0; i < data.result.length; i++) {
			var list = $('<div>').attr('class', 'products-list')
			for (var j = 0; j < data.result[i].articles.length; j++) {
				list.append(
					$('<div>')
						.attr('class', 'product')
						.append(
							$('<div>')
								.attr('class', 'pic')
								.append($('<img>').attr('src', data.result[i].articles[j].banner))
						)
						.append(
							$('<div>')
								.attr('class', 'title')
								.html(data.result[i].articles[j].title)
						)
						.append(
							$('<div>')
								.attr('class', 'detail')
								.append(
									$('<div>')
										.attr('class', 'word')
										.html('查看详细')
								)
								.append(
									$('<div>')
										.attr('class', 'icon')
										.append(
											$('<i>')
												.attr('class', 'iconfont')
												.html('&#xe602;')
										)
								)
						)
				)
			}
			$('.products').append(
				$('<div>')
					.attr('class', 'item')
					.attr('id', data.result[i].id)
					.append(
						$('<div>')
							.attr('class', 'caption')
							.append(
								$('<div>')
									.attr('class', 'caption-1')
									.html(data.result[i].name)
							)
							.append(
								$('<div>')
									.attr('class', 'caption-2')
									.html(data.result[i].keyword)
							)
					)
					.append(list)
			)
			$('.navigator').append(
				$('<a>')
					.attr('href', 'products.html#' + data.result[i].id)
					.html(data.result[i].name)
			)
		}
	})
})

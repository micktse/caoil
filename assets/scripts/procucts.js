$(function() {
	$.post(
		'/sites.api',
		{ id: 'G03bd31908b6111e9a203ebf5b105516d', invoke: 'loadColumnsAndArticles', asc: true },
		function(res) {
			for (var i = 0; i < res.data.length; i++) {
				var list = $('<div>').attr('class', 'products-list')
				for (var j = 0; j < res.data[i].articles.length; j++) {
					list.append(
						$('<div>')
							.attr('class', 'product')
							.append(
								$('<div>')
									.attr('class', 'pic')
									.append($('<img>').attr('src', res.data[i].articles[j].banner))
							)
							.append(
								$('<div>')
									.attr('class', 'title')
									.html(res.data[i].articles[j].title)
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
						.attr('id', res.data[i].id)
						.append(
							$('<div>')
								.attr('class', 'caption')
								.append(
									$('<div>')
										.attr('class', 'caption-1')
										.html(res.data[i].name)
								)
								.append(
									$('<div>')
										.attr('class', 'caption-2')
										.html(res.data[i].keyword)
								)
						)
						.append(list)
				)
				$('.navigator').append(
					$('<a>')
						.attr('href', 'products.html#' + res.data[i].id)
						.html(res.data[i].name)
				)
			}
		}
	)
})

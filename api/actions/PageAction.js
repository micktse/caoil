const { Sites } = require('../models')
const dateft = ts => {
	if (ts) {
		var date = new Date(ts)
		return (
			date.getFullYear() +
			'-' +
			(date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) +
			'-' +
			(date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) +
			' ' +
			(date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) +
			':' +
			(date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) +
			':' +
			(date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
		)
	}
	return ts
}
class PageAction {
	get({ id, source }) {
		if (id) {
			let article = new Sites().loadArticle(id)
			article.create = dateft(article.createTime)
			article.modified = dateft(article.lastModify)
			article.source = source
			return article
		}
		return {}
	}
}
module.exports = { PageAction }

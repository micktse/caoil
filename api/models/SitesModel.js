const db = require('../../db')
class SitesModel {
	loadColumnsAndArticles(groupId, asc) {
		let columns = Object.assign(
			[],
			db.columns
				.filter(c => c.group_id === groupId)
				.orderBy('createTime', asc ? 'asc' : 'desc')
				.value()
		)
		columns.forEach(({ id }, i) => {
			columns[i].articles = db.articles
				.filter(a => a.column_id === id && a.release)
				.orderBy('createTime', asc ? 'asc' : 'desc')
				.value()
		})
		return columns
	}
	loadAllArticles(groupId, asc) {
		let articles = []
		db.columns
			.filter(c => c.group_id === groupId)
			.value()
			.forEach(({ id, name }) => {
				Object.assign([], db.articles.filter(a => a.column_id === id && a.release).value()).forEach(a => {
					a.column_name = name
					articles.push(a)
				})
			})
		articles.sort((a, b) => (a.createTime < b.createTime === asc ? 1 : -1))
		return articles
	}
	loadColumns(groupId, asc) {
		return db.columns
			.filter(c => c.group_id === groupId)
			.orderBy('createTime', asc ? 'asc' : 'desc')
			.value()
	}
	loadArticles(columnId, asc) {
		return db.articles
			.filter(a => a.column_id === columnId && a.release)
			.orderBy('createTime', asc ? 'asc' : 'desc')
			.value()
	}
	loadArticle(articleId) {
		return db.articles.find(a => a.id === articleId).value()
	}
}
module.exports = { SitesModel }

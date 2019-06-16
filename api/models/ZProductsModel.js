const db = require('../../db')
const groupId = 'G03bd31908b6111e9a203ebf5b105516d'
class ZProductsModel {
	load() {
		let columns = Object.assign([], db.columns.filter(c => c.group_id === groupId).value())
		columns.forEach(({ id }, i) => {
			columns[i].articles = db.articles.filter(a => a.column_id === id).value()
		})
		return columns
	}
}
module.exports = { ZProductsModel }

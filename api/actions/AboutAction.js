const articleId = 'A8199a500911d11e9b72b6f397f38446d'
const { Articles } = require('../models')
class AboutAction {
	get() {
		let { title, content } = new Articles().get(articleId)
		return { title, content }
	}
}
module.exports = { AboutAction }

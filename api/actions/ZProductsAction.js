const { ZProducts } = require('../models')
class ZProductsAction {
	post() {
		return { result: new ZProducts().load() }
	}
}
module.exports = { ZProductsAction }

const { Sites } = require('../models')
class SitesAction {
	post({ id, invoke, pageSize, page, asc, random }) {
		let sites = new Sites()
		if (sites[invoke]) {
			let data = sites[invoke](id, asc)
			if (page && pageSize) {
				return {
					pageCount: Math.ceil(data.length / pageSize),
					page,
					data: data.slice((page - 1) * pageSize, page * pageSize)
				}
			} else {
				if (random) {
					data.sort(() => (Math.random() >= 0.5 ? 1 : -1))
					return { data: data.slice(0, random) }
				} else {
					return {
						data
					}
				}
			}
		} else {
			return { data: [] }
		}
	}
}
module.exports = { SitesAction }

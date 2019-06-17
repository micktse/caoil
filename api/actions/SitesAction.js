const { Sites } = require('../models')
class SitesAction {
	post({ id, invoke, pageSize, page, asc }) {
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
				return {
					data
				}
			}
		} else {
			return { data: [] }
		}
	}
}
module.exports = { SitesAction }

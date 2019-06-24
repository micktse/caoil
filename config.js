let development = false
let debug = false
console.info(development ? '开发模式' : debug ? '调试模式' : '生产模式')
module.exports = {
	http_port: development || debug ? 80 : 80,
	https_port: 443,
	development,
	debug,
	https_key: '2404076_caoilusa.com.key',
	https_cert: '2404076_caoilusa.com.pem',
	host_name: 'www.caoilusa.com',
	sign_in_url: 'login.html',
	main_url: '',
	home_url: 'home.html',
	session_expire_minutes: 20,
	dirname: __dirname,
	db_name: 'caoil'
}

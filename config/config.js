var development = {
	db: 'mongodb://localhost/streamapp',
	port: 8000,
	github_clientID: 'd267d4096edf2f3b0180',
	github_clientSecret: '5d9830f534cc7477bd857f616845977f16f28605',
	github_callback: 'http://127.0.0.1:8000/auth/github/callback',
	stream_app_id: '2350',
	stream_key: 'w2dnzgtjezph',
	stream_secret: '7zy6jrpmzdfrnv9yhjaw9ss6etsrn62hdet4vbyyprkgdqpddhjuugrywqh74war'
};

var production = {
	db: 'remotemongourl',
	port: process.env.PORT
};

module.exports = {
	development: development,
	production: production,
}[process.env.NODE_ENV || 'development'];
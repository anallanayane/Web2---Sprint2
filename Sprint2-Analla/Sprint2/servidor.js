var http = require ('http'),
host = '127.0.0.1',
port = '9000'

var server = http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

	if (req.url === '/'){
		res.write('<h1>Página Inicial</h1>');
	} else if (req.url === '/sobre'){
		res.write('<h1>Sobre</h1>');
	} else {
		res.write('<h1>Página não encontrada!</h1>');
	}

	res.end();

}).listen(port, host,function(){
	console.log('Servidor rodando em http://' + host + ':' + port);
});
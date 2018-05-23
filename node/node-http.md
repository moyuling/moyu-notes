# node中的HTTP模块知识 By 魔芋

### Q: 请创建一个HTTP服务器？
	var http = require(‘http’);
	var server = http.createServer();
	server.on(‘request’, function(req, res) {
	  res.end(‘hello world’);
	});
	server.listen(8080);



### Q： 通常的HTTP服务器有哪些？

Apache，IIS，Nginx














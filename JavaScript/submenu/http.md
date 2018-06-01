# http

### 【Q】http状态码及含义?206、302、303、304、307？

【17】HTTP状态码及其含义

**1XX：信息状态码**
100 Continue：客户端应当继续发送请求。这个临时相应是用来通知客户端它的部分请求已经被服务器接收，且仍未被拒绝。客户端应当继续发送请求的剩余部分，或者如果请求已经完成，忽略这个响应。服务器必须在请求万仇向客户端发送一个最终响应

101 Switching Protocols：服务器已经理解力客户端的请求，并将通过Upgrade消息头通知客户端采用不同的协议来完成这个请求。在发送完这个响应最后的空行后，服务器将会切换到Upgrade消息头中定义的那些协议。

**2XX：成功状态码**
200 OK：请求成功，请求所希望的响应头或数据体将随此响应返回
201 Created：
202 Accepted：
203 Non-Authoritative Information：
204 No Content：
205 Reset Content：
206 Partial Content：

**3XX：重定向**
300 Multiple Choices：
301 Moved Permanently：
302 Found：
303 See Other：
304 Not Modified：
305 Use Proxy：
306 （unused）：
307 Temporary Redirect：

**4XX：客户端错误**
400 Bad Request:
401 Unauthorized:
402 Payment Required:
403 Forbidden:
404 Not Found:
405 Method Not Allowed:
406 Not Acceptable:
407 Proxy Authentication Required:
408 Request Timeout:
409 Conflict:
410 Gone:
411 Length Required:
412 Precondition Failed:
413 Request Entity Too Large:
414 Request-URI Too Long:
415 Unsupported Media Type:
416 Requested Range Not Satisfiable:
417 Expectation Failed:

**5XX: 服务器错误**
500 Internal Server Error:
501 Not Implemented:
502 Bad Gateway:
503 Service Unavailable:
504 Gateway Timeout:
505 HTTP Version Not Supported:

**



### 【Q】HTTP和HTTPS？





### 【Q】http请求头报文的结构

1. 首行是Request-Line包括：请求方法，请求URI，协议版本，CRLF
2. 首行之后是若干行请求头，包括general-header，request-header或者entity-header，每个一行以CRLF结束
3. 请求头和消息实体之间有一个CRLF分隔
4. 根据实际请求需要可能包含一个消息实体 一个请求报文例子如下：

```
GET /Protocols/rfc2616/rfc2616-sec5.html HTTP/1.1
Host: www.w3.org
Connection: keep-alive
Cache-Control: max-age=0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36
Referer: https://www.google.com.hk/
Accept-Encoding: gzip,deflate,sdch
Accept-Language: zh-CN,zh;q=0.8,en;q=0.6
Cookie: authorstyle=yes
If-None-Match: "2cc8-3e3073913b100"
If-Modified-Since: Wed, 01 Sep 2004 13:24:52 GMT

name=qiu&age=25
```

 

### 【Q】HTTP response报文结构是怎样的 ？

1. 首行是状态行包括：HTTP版本，状态码，状态描述，后面跟一个CRLF
2. 首行之后是若干行响应头，包括：通用头部，响应头部，实体头部
3. 响应头部和响应实体之间用一个CRLF空行分隔
4. 最后是一个可能的消息实体 响应报文例子如下：

```
HTTP/1.1 200 OK
Date: Tue, 08 Jul 2014 05:28:43 GMT
Server: Apache/2
Last-Modified: Wed, 01 Sep 2004 13:24:52 GMT
ETag: "40d7-3e3073913b100"
Accept-Ranges: bytes
Content-Length: 16599
Cache-Control: max-age=21600
Expires: Tue, 08 Jul 2014 11:28:43 GMT
P3P: policyref="http://www.w3.org/2001/05/P3P/p3p.xml"
Content-Type: text/html; charset=iso-8859-1

{"name": "qiu", "age": 25}
```

 





### 【Q】http和https的区别，https在哪一层加密





### 【Q】缓存处理（用http2.0）



### 【Q】http、https、http2.0区别





### 【Q】https是否绝对安全？





### 【Q】http1.0和http1.1的区别？





### 【Q】能说下304具体怎样实现吗？



### 【Q】http缓存逻辑是怎样的？协商缓存与强缓存？Last-Modified / Etag / Expires / Cache-Control ？



### 【Q】osi七层协议和tcp/ip四层协议





### 【Q】三次握手和四次握手？



### 【Q】http2具体内容？SDPY了解么？



### 【Q】HTTPS如何实现？tsl/ssl是什么？对称加密、非对称加密在什么时候、对什么数据加密？



### 【Q】DNS劫持是什么？



### 【Q】服务器怎样判断返回304？




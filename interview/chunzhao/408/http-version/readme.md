# http 版本

- 0.9
 GET 请求 不包含头信息
- 1.0
  POS等 
  HTTP Head
  text/plain image/jpg text/css
  status code
- 1.1
tcp/ip 每次都连接，断开？
 - keep-alive 允许在同一个TCP连接上发送多个HTTP请求和响应，减少了连接的建立和关闭开销
 - 管道化(pipelining): 允许客户端在同一连接上发送多个请求，而无需等待每个请求的响应，这可以减少延迟，提高性能。
 1.请求HTML 文档 GET index.html
 2.请求 css 文件 GET style.css
 3.请求图片1
 4.请求图片2
 由于共享一个TCP 连接， 对头阻塞
  http 并发数提升了
- 2.0
 多路复用
 允许在同一个链接上同时处理多个请求和响应。相互之间不受影响

 服务器推送
 服务器可以主动向客户端发送资源，而不需要客户端请求。

 二进制分帧
 分割成更小的帧，提高传输效率和安全性，支持多路复用

- 3.0
性能优化包含,
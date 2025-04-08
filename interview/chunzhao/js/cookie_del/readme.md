# 如何删除cookie

- cookie 本地存储 请求传输 4KB
- Domain 域名
 document.cookie = 'token=123;domain=baidu.com;'
- patch 路径
 document.cookie = 'token=123;domain=baidu.com;path=/a/b/c;'
- Expires/Max-Age
 document.cookie = 'token=123;domain=baidu.com;path=/a/b/c;expires=2023-12-31;'
- Secure 安全 只能在https协议下传输
- HttpOnly 禁止js 读取 XSS
- SameSite 限制第三方cookie
  - Strict 完全禁止第三方cookie
  - Lax 允许部分第三方cookie
  - None 允许所有第三方cookie
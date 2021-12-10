- login

  1. 跨层级共享登录状态
     useContext + useReducer + createContext

  2. token 令牌

- 登陆后, 前端要做哪些细节

  1. 用 cookie 方案的话,
     cookie 是 http 每次请求的时候都会带上, cookie 存在浏览器的文件中(缺点: 不能太长),一般存放 uid

  2. 所以余下的信息放在 localStorage 里面

  3. 用 token 不用 cookie, 因为有时候 cookie 不安全

  4. HTTP 请求头需要如下理解?
     为什么要 Content-Type 字段? 用于处理服务器端如何处理客户端(前端)发送出来的内容
     Authorization 可以带上 token

  token
  你授权给第三方小程序或网站？ yes
  微信就会把一个令牌交给第三方 access token

  fetch('weixin.com',{
  header: {
  Authorization: "token"
  }
  })

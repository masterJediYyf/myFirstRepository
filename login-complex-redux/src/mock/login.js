const tokens = {
  admin: "admin-token",
  guest: "guest-token",
  editor: "editor-token"
}
export default {
  login: (config) => {
    // axios 拦截请求  config
    // axios 在做post 请求时候 会先把JSON数据序列化
    console.log(config, "????????")
    const { username } = JSON.parse(config.body);
    // console.log(username)
    const token = tokens[username]

    if (!token) {
      return {
        // 出错了
        status: 1,
        message: '用户名或密码错误'
      }
    }
    return {
      status: 0,
      token
    }
  }
}
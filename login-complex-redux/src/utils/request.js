// 请求工具类
import axios from "axios"

const service = axios.create({
  baseURL: '/dev-api',
  timeout: 5000
})

// export function request(url, method, data) {
//   return new Promise((resolve, reject) => {
  
//   })
// }

export default service;
import { LoginParams } from '../interface/user/login';
import { request } from './request';

// axios 封装 所有的请求都有一些共同的需求
// 1. baseURL 
// 2. 请求头 token localStorage
// 3. 失败 超时
// 4. 成功 status: true  message 
export const apiLogin = (data:LoginParams) => request('post','/user/login',data);


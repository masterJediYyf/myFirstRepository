import Mock from "mockjs";
import loginAPI from './login';

Mock.mock(/\/login/, "post", loginAPI.login); // 在这里拦截指定的 url 请求


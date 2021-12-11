import Mock from "mockjs";
import tableAPI from './table';

// 匹配接口 api  拦截请求
Mock.mock(/\/table\/list/, "post", tableAPI.tableList);
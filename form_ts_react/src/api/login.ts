import { LoginEntity } from "../model/login";

// ts 开发接口条理
// 1. api 都是 promise, 可以通过泛型的约定 可以对 resolve, reject 后的结果去约定
// 2. 接口请求时, 会带上参数, 接口约定参数
// 好处  多人协作的时候 
// 接口一般不变, 组件每天都可能变
export const isValidLogin = 
    (loginInfo:LoginEntity):Promise<boolean> => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(loginInfo.login === 'admin' && loginInfo.password === '123456');
        }, 1000);
    })

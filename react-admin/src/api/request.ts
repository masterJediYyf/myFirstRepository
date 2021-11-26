import axios from 'axios';

const axiosIntance = axios.create({
    timeout:6000
})

type Method = 'get' | 'post'; // ts 元组

export const request = (
    method: Method,
    url:string,
    // data 可选择要或者不要
    data?:any
) => {
    if(method === 'post'){
        return axiosIntance.post(url, data)
    }else {
        return axiosIntance.get(url,{
            params:data   
        })
    }

}
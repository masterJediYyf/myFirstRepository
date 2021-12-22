import { useState, useEffect } from 'react';

// 自定义 hook
function useCustomFetch(fetcher) {
    // fetcher 执行
    // then data
    // 返回给左侧
    // 数据请求会推迟组件渲染
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetcher()
            .then((res) => {
                console.log('fetch',  res);
                setData(res);
            })
            // 成功 失败
            .finally(() => {
                setLoading(false);
            })
    }, [fetcher])

    if(loading) {
        // 组件树 子组件不给父组件数据, 父组件就一直被挂起(suspense 状态)
        throw Promise.resolve(null);
    } else {
        return data;
    }
} 

export default useCustomFetch;
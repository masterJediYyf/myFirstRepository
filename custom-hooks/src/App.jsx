import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
// Fragment 文档碎片组件

// 自定义一个 hooks  复用
const useHackerNewsAPI = () => {
  const [data, setData] = useState({ hits: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=redux')

  // useEffect 不只是在 mount unMount执行, 它还会在更新(update)阶段执行(可能会陷入死循环)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      // 如果请求数据时发生错误就用 try catch 捕获
      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [url])

  // 外面需要什么就传什么   外面需要状态就传状态,需要方法就传递方法
  return [{ data, isLoading, isError }, setUrl];
}

function App() {
  const [{ data, isLoading, isError }, doFetch] = useHackerNewsAPI();
  const [query, setQuery] = useState("redux");
  return (
    <Fragment>
      {/* 性能开销 防抖节流 */}
      <form onSubmit={(e) => {
        doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
        e.preventDefault();
      }}>
        <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
        {isError && <div>Something went wrong</div>}
        <button type="submit">Search</button>
      </form>

      {
        isLoading ?
          (<div>Loading....</div>)
          :
          (<ul>
            {
              data.hits.map(item => (
                <li key={item.ObjectID}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))
            }
          </ul>)
      }

    </Fragment>
  )
}

export default App

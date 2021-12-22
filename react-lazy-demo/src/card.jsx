import React, { useEffect, useState,  } from 'react';
import styled from 'styled-components';
import useCustomFetch from './useCustomFetch';

const CardDiv = styled.div`
  width: 350px;
  height: 400px;
  background-color: #e3e3e3;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  img {
    object-fit: cover; // 等比例缩放自己 
    height: 100%;
    width: 100%;
  }
  .info {
    padding: 10px;
    h3 {
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
`

const initialState ={
  imgUrl: '',
  title: '',
  desc: ''
}

function fetcher() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        imgUrl: "https://source.unsplash.com/random/350x200",
        title: "Lorem ipsum dolor sit amet",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
      })
    }, 2000);
  })
}
// 为异步加载的数据提供占位符功能
// data 异步, 导致父组件挂载推迟
// react 中有一种能力可以延迟加载, 可以很方便的设计一个占位符
const Card = () => {
  // console.log('+++++');
  const [data, setData] = useState(initialState);
  // 模拟异步 promise
  const res = useCustomFetch(fetcher);

  useEffect(() => {
    if(res) {
      setData(res);
    }
  },[res])

  return (
    <CardDiv>
      <img src={data.imgUrl} alt="" />
        <div className='info'>
          <h3>{data.title}</h3>
          <p>{data.desc}</p>
        </div>  
    </CardDiv>
  )
}

export default Card;
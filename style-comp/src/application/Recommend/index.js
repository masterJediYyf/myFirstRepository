import React from 'react';
import Slider from '../../components/slider';
import {renderRoutes} from 'react-router-config';
//  UI组件 和 数据流之间的中间件
import { connect } from 'react-redux';
import { Content } from './style';
import RecommendList from '../../components/list';

function Recommend (props) {
  // store -> Provider -> connect -> Recommend
  const { route, songsCount } = props;

  //mock 数据
  const bannerList = [1,2,3,4].map (item => {
    return { imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg" }
  });

  const recommendList = [1,2,3,4,5,6,7,8,9,10].map (item => {
    return {
      id: 1,
      picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
      playCount: 17171122,
      name: "朴树、许巍、李健、郑钧、老狼、赵雷"
    }
  });

  return (
    <Content play={songsCount}>
      <Slider bannerList={bannerList}></Slider>
      <RecommendList recommendList={recommendList}></RecommendList>
      {renderRoutes(route.routes)}
    </Content>
  )
}

const mapStateToProps = (state) => ({
  songsCount:1
})

const mapDispatchToProps = () => {
  return {
    
  }
}

// 高阶组件 connect -> Provider -> Store
// 高阶组件: 参数或返回值是函数,connect() 返回值也是函数,Recommend UI 作为他的参数,返回值和参数也是一个组件
export default connect(mapStateToProps, mapDispatchToProps)(React.memo (Recommend));
import React, { createRef, RefObject, useEffect, useRef } from 'react'
import { IProps } from './type';
import * as echarts from 'echarts';
import { echartsResize } from '../../utils';

const Index:React.FC<IProps> = (props) => {
  const chartRef:any = useRef();

  useEffect(() => {
    const chart = echarts.init(chartRef.current);   //echart初始化容器
    console.log(chartRef,'chart-----------')
    let option = {  //配置项(数据都来自于props)
        title: {
            text: props.title ? props.title : "暂无数据",
        },
        xAxis: {
            type: 'category',
            data: props.xData,
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: props.seriesData,
            type: 'line'
        }]
    };

    chart.setOption(option);
    echartsResize(chart);
  },[props]);

  return (
    <>
      <div ref={chartRef} className='chart'></div>
    </>
  )
}

export default Index;
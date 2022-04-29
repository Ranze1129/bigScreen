import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart9 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    {name: '0', value: 0.19},
    {name: '18', value: 0.20},
    {name: '28', value: 0.26},
    {name: '38', value: 0.35},
    {name: '48', value: 0.26},
    {name: '58', value: 0.20},
    {name: '68', value: 0.08},
    {name: '78', value: 0.06},
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        {name: '0', value: Math.random() * (0.25 - 0.15) + 0.15},
        {name: '18', value: Math.random() * (0.25 - 0.15) + 0.15},
        {name: '28', value: Math.random() * (0.30 - 0.20) + 0.20},
        {name: '38', value: Math.random() * (0.40 - 0.30) + 0.30},
        {name: '48', value: Math.random() * (0.30 - 0.20) + 0.20},
        {name: '58', value: Math.random() * (0.25 - 0.15) + 0.15},
        {name: '68', value: Math.random() * 0.10},
        {name: '78', value: Math.random() * 0.10},
      ];
      x(newData);
    }, 1000);
  });
  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      grid: {
        x: px(12),
        y: px(20),
        x2: px(14),
        y2: px(16),
        containLabel: true
      },
      color: '#F7A110',
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.map(i => i.name),
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: [{
        type: 'line',
        data: data.map(i => i.value),
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#F7A110'
          }, {
            offset: 1,
            color: '#1B1D52'
          }]),
        }
      }]
    }));
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="年龄段-图3">
      <h3>犯罪年龄趋势图</h3>
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};
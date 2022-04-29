import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart10 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const random = () => {
    return Math.random() * 50;
  };
  const data = [
    {name: '入室抢劫', value: 40},
    {name: '当街偷盗', value: 22},
    {name: '团伙诈骗', value: 20},
    {name: '刑事案件', value: 18},
    {name: '民事案件', value: 32},
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        {name: '入室抢劫', value: random()},
        {name: '当街偷盗', value: random()},
        {name: '团伙诈骗', value: random()},
        {name: '刑事案件', value: random()},
        {name: '民事案件', value: random()},
      ];
      x(newData);
    }, 1000);
  });
  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      xAxis: {
        data: data.map(i => i.name),
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },

      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        }
      },
      series: [{
        type: 'bar',
        data: data.map(i => i.value),
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#0A97FB'
        }, {
          offset: 1,
          color: '#1E34FA'
        }]),
      }]
    }));
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div ref={divRef} className="chart">

    </div>
  );
};
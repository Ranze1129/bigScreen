import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import {caseData} from '../shared/caseData';

export const Chart12 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = caseData().data;
  useEffect(() => {
    setInterval(() => {
      x(caseData().newData);
    }, 1000);
  });
  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      xAxis: {show: false},
      yAxis: {show: false},
      grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 'center',
        textStyle: {color: 'white'},
        itemWidth: px(10),
        itemHeight: px(10),
        formatter(name) {
          //@ts-ignore
          const value = (data.find(i => i.name === name)?.value * 100).toFixed(0) + '%';
          return name + ' ' + value;
        }
      },
      series: [
        {
          center: ['60%', '50%'],
          type: 'pie',
          radius: '80%',
          label: {show: false},
          labelLine: {show: false},
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }));
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="年龄段-图1">
      <div className="chart">
        <div className="main" ref={divRef}/>
      </div>
    </div>
  );
};
import {px} from './px';

export const baseEchartOptions = {
  textStyle: {
    fontSize: px(12),
    color: '#79839E'
  },
  title: {show: false},
  legend: {show: false},
  grid: {
    x: px(14),
    y: px(20),
    x2: px(22),
    y2: px(20),
    containLabel: true
  },
}
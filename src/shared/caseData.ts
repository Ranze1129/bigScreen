const random = () => {
  return Math.random() * 0.15;
};


export const caseData = () => {
  const data = [
    {value: 0.08, name: '东岗路'},
    {value: 0.06, name: '段家滩'},
    {value: 0.11, name: '雁北'},
    {value: 0.09, name: '五泉山'},
    {value: 0.12, name: '中山路'},
    {value: 0.06, name: '庆阳路'},
    {value: 0.08, name: '武都路'},
    {value: 0.08, name: '酒泉路'},
    {value: 0.08, name: '天水路'},
  ];
  const newData = [
    {value: random(), name: '东岗路'},
    {value: random(), name: '段家滩'},
    {value: random(), name: '雁北'},
    {value: random(), name: '五泉山'},
    {value: random(), name: '中山路'},
    {value: random(), name: '庆阳路'},
    {value: random(), name: '武都路'},
    {value: random(), name: '酒泉路'},
    {value: random(), name: '天水路'},
  ];
  return {data, newData};
};
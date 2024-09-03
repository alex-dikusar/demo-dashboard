import { DollarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Column, BarConfig, ColumnConfig } from '@ant-design/plots';

const ColumnChart = () => {
  const data = [
    { month: 'Jan', type: 'Waste 1', value: 1200 },
    { month: 'Jan', type: 'Waste 2', value: 800 },
    { month: 'Feb', type: 'Waste 1', value: 1500 },
    { month: 'Feb', type: 'Waste 2', value: 700 },
    { month: 'Mar', type: 'Waste 1', value: 2000 },
    { month: 'Mar', type: 'Waste 2', value: 1000 },
    { month: 'Apr', type: 'Waste 1', value: 800 },
    { month: 'Apr', type: 'Waste 2', value: 500 },
    { month: 'May', type: 'Waste 1', value: 1600 },
    { month: 'May', type: 'Waste 2', value: 1400 },
    { month: 'Jun', type: 'Waste 1', value: 1800 },
    { month: 'Jun', type: 'Waste 2', value: 1600 },
  ];

  const config: ColumnConfig = {
    data,
    isStack: true, // Включаем режим накопления
    xField: 'month',
    yField: 'value',
    seriesField: 'type',
    color: ({ type }: any) => {
      if (type === 'Waste 1') {
        return '#ff4d4f'; // Красный
      }
      return '#52c41a'; // Зеленый
    },
    columnWidthRatio: 0.1, // Ширина колонок
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    interactions: [{ type: 'element-active' }],
  };

  return (
    <Card
    // style={{ width: '200px', height: '200px' }}
    // headStyle={{ padding: '8px 16px' }}
    // bodyStyle={{ padding: '24px 24px 0 24px' }}
    // title={
    //   <div
    //     style={{
    //       display: 'flex',
    //       alignItems: 'center',
    //       gap: '8px',
    //     }}
    //   >
    //     <Text size="sm" style={{ marginLeft: '0.5rem' }}>
    //       Jobs
    //     </Text>
    //   </div>
    // }
    >
      <Column {...config} />
    </Card>
  );
};

export default ColumnChart;

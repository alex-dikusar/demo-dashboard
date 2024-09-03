import { Card } from 'antd';
import { Column, ColumnConfig } from '@ant-design/plots';
import { PropsWithChildren } from 'react';

interface ColumnChartProps {
  data: ColumnConfig['data'];
  title?: string;
  resultValue?: string;
  showGrid?: boolean;
  columnsWidth?: number;
}

const ColumnChart = ({
  data,
  title,
  resultValue,
  showGrid = false,
  columnsWidth = 0.1,
  children,
}: PropsWithChildren<ColumnChartProps>) => {
  const config: ColumnConfig = {
    data,
    isStack: true,
    xField: 'month',
    yField: 'value',
    seriesField: 'type',
    color: ({ type }: any) => {
      if (type === 'Failed') {
        return '#ff4d4f';
      }
      return '#52c41a';
    },
    columnWidthRatio: columnsWidth,
    legend: false,
    label: undefined,
    ...(!showGrid
      ? {
          xAxis: {
            grid: null,
          },
          yAxis: {
            grid: null,
          },
        }
      : {}),
    interactions: [{ type: 'element-active' }],
  };

  return (
    <Card
      style={{
        width: '100%',
        aspectRatio: '1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}
      bodyStyle={{ padding: ' 0 1rem 1rem', justifyContent: 'space-between' }}
      title={title}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontWeight: '500',
            fontSize: '2rem',
            paddingBottom: '1rem',
          }}
        >
          {resultValue}
        </span>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          {children}
        </div>
      </div>
      <Column
        {...config}
        style={{
          height: '200px',
          width: '300px',
          marginTop: '4rem',
          justifySelf: 'flex-end',
          alignSelf: 'flex-end',
        }}
      />
    </Card>
  );
};

export default ColumnChart;

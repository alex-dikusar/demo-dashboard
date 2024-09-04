import { Card } from 'antd';
import { Column, ColumnConfig } from '@ant-design/plots';
import { PropsWithChildren } from 'react';
import { CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';

interface ColumnChartProps {
  data: ColumnConfig['data'];
  title?: string;
  resultValue?: string;
  showGrid?: boolean;
  columnsWidth?: number;
  nextPage?: () => void;
  prevPage?: () => void;
}

const ColumnChart = ({
  data,
  title,
  resultValue,
  showGrid = false,
  columnsWidth = 0.1,
  nextPage,
  prevPage,
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
        // aspectRatio: '1',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}
      bodyStyle={{ padding: ' 0 1rem 1rem', width: '100%' }}
      title={title}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          marginTop: '1rem',
        }}
      >
        <span
          style={{
            fontWeight: '500',
            fontSize: '2rem',
            paddingBottom: '1rem',
            flexGrow: '1',
          }}
        >
          {resultValue}
        </span>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            flexGrow: '2',
          }}
        >
          {children}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {prevPage && (
          <button
            onClick={prevPage}
            style={{
              height: '2rem',
              background: 'transparent',
              border: 'none',
            }}
          >
            <CaretLeftOutlined />
          </button>
        )}
        <Column
          {...config}
          style={{
            height: '200px',
            flexGrow: '1',
            marginTop: '2rem',
            justifySelf: 'flex-end',
            alignSelf: 'flex-end',
          }}
        />
        {nextPage && (
          <button
            onClick={nextPage}
            style={{
              height: '2rem',
              background: 'transparent',
              border: 'none',
            }}
          >
            <CaretRightOutlined size={50} />
          </button>
        )}
      </div>
    </Card>
  );
};

export default ColumnChart;

import {
  buildSuccess,
  machineMaterialSuccess,
  overallSuccess,
} from '@/data/success';
import { Col, Row } from 'antd';
import ColumnChart from './column-chart';
import PlotDropdown from './plot-dropdown';
import { buildAnomaly, overallAnomaly } from '@/data/anomalies';
import { buildWaste, machineMaterialWaste, overallWaste } from '@/data/waste';
import OverallSuccessChart from './OverallSuccessChart';

const ColumnChartsDashBoard = () => {
  return (
    <Row gutter={[32, 32]}>
      <Col xs={24} sm={24} lg={12} xl={8}>
        <Row style={{ padding: '1rem' }}>
          <OverallSuccessChart />
        </Row>
        <Row style={{ padding: '1rem' }}>
          <ColumnChart
            data={machineMaterialSuccess}
            title={'Machine/Material Success'}
            resultValue="30%"
          >
            <PlotDropdown
              options={[
                { label: 'Machine', value: 'machine' },
                { label: 'Material', value: 'material' },
              ]}
              defaultValue={'machine'}
            />
            <PlotDropdown
              options={[
                { label: 'EOS 290 Sally', value: 'sally' },
                { label: 'EOS 290 Molly', value: 'molly' },
              ]}
              defaultValue="sally"
            />
          </ColumnChart>
        </Row>
        <Row style={{ padding: '1rem' }}>
          <ColumnChart
            data={buildSuccess}
            title={'Build Success'}
            resultValue="66%"
            columnsWidth={0.5}
          >
            <PlotDropdown
              options={[
                { label: 'heat exchanger 1', value: 'ex1' },
                { label: 'heat exchanger 2', value: 'ex2' },
              ]}
              defaultValue="ex1"
            />
          </ColumnChart>
        </Row>
      </Col>
      <Col xs={24} sm={24} lg={12} xl={8}>
        <Row style={{ padding: '1rem' }}>
          <ColumnChart
            data={overallAnomaly}
            title={'Overall Anomaly Layer %'}
            resultValue="00.01%"
          />
        </Row>
        <Row style={{ padding: '1rem' }}>
          <ColumnChart
            data={overallAnomaly}
            title={'Machine/Material Anomaly Layer %'}
            resultValue="1.23%"
          >
            <PlotDropdown
              options={[
                { label: 'Machine', value: 'machine' },
                { label: 'Material', value: 'material' },
              ]}
              defaultValue={'machine'}
            />
            <PlotDropdown
              options={[
                { label: 'EOS 290 Sally', value: 'sally' },
                { label: 'EOS 290 Molly', value: 'molly' },
              ]}
              defaultValue="sally"
            />
          </ColumnChart>
        </Row>
        <Row style={{ padding: '1rem' }}>
          <ColumnChart
            data={buildAnomaly}
            title={'Build Anomaly Layer %'}
            resultValue="1.23%"
            columnsWidth={0.5}
          >
            <PlotDropdown
              options={[
                { label: 'heat exchanger 1', value: 'ex1' },
                { label: 'heat exchanger 2', value: 'ex2' },
              ]}
              defaultValue="ex1"
            />
          </ColumnChart>
        </Row>
      </Col>
      <Col xs={24} sm={24} lg={12} xl={8}>
        <Row style={{ padding: '1rem' }}>
          <ColumnChart
            data={overallWaste}
            title={'Overall Waste'}
            resultValue="$66,482"
          />
        </Row>
        <Row style={{ padding: '1rem' }}>
          <ColumnChart
            data={machineMaterialWaste}
            title={'Machine Material Waste'}
            resultValue="$8,453"
          >
            <PlotDropdown
              options={[
                { label: 'Machine', value: 'machine' },
                { label: 'Material', value: 'material' },
              ]}
              defaultValue={'machine'}
            />
            <PlotDropdown
              options={[
                { label: 'EOS 290 Sally', value: 'sally' },
                { label: 'EOS 290 Molly', value: 'molly' },
              ]}
              defaultValue="sally"
            />
          </ColumnChart>
        </Row>
        <Row style={{ padding: '1rem' }}>
          <ColumnChart
            data={buildWaste}
            title={'Build Waste'}
            resultValue="$4,246"
          >
            <PlotDropdown
              options={[
                { label: 'heat exchanger 1', value: 'ex1' },
                { label: 'heat exchanger 2', value: 'ex2' },
              ]}
              defaultValue="ex1"
            />
          </ColumnChart>
        </Row>
      </Col>
    </Row>
  );
};

export default ColumnChartsDashBoard;

import { DashboardTotalCountCard, DealsChart } from '@/components';
import ColumnChartsDashboard from '@/components/home/dashboard/column-charts-dashboard';
import { DASHBOARD_TOTAL_COUNTS_QUERY } from '@/graphql/queries';
import { DashboardTotalCountsQuery } from '@/graphql/types';
import { useCustom } from '@refinedev/core';
import { Col, Row } from 'antd';

export const Home = () => {
  const { data, isLoading } = useCustom<DashboardTotalCountsQuery>({
    url: '',
    method: 'get',
    meta: {
      gqlQuery: DASHBOARD_TOTAL_COUNTS_QUERY,
    },
  });

  return (
    <div>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource="companies"
            isLoading={isLoading}
            totalCount={data?.data.companies.totalCount}
          />
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource="contacts"
            isLoading={isLoading}
            totalCount={data?.data.contacts.totalCount}
          />
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource="deals"
            isLoading={isLoading}
            totalCount={data?.data.deals.totalCount}
          />
        </Col>
      </Row>

      <ColumnChartsDashboard />

      <Row
        gutter={[32, 32]}
        style={{
          marginTop: '32px',
        }}
      >
        <Col
          xs={24}
          sm={24}
          xl={24}
          style={{
            height: '460px',
          }}
        >
          <DealsChart />
        </Col>
      </Row>
    </div>
  );
};

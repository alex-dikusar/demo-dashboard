import { overallSuccess } from '@/data/success';
import ColumnChart from './column-chart';
import usePlotPagination from './usePlotPagination';

const OverallSuccessChart = () => {
  const { startIndex, endIndex, nextPage, prevPage } = usePlotPagination(
    overallSuccess.length
  );

  return (
    <ColumnChart
      data={overallSuccess.slice(startIndex, endIndex)}
      title={'Overall Success'}
      resultValue="90%"
      nextPage={nextPage}
      prevPage={prevPage}
    />
  );
};

export default OverallSuccessChart;

const overallAnomaly = [
  { month: 'Jan', type: 'Failed', value: 20 },
  { month: 'Jan', type: 'Success', value: 800 },
  { month: 'Feb', type: 'Failed', value: 50 },
  { month: 'Feb', type: 'Success', value: 900 },
  { month: 'Mar', type: 'Failed', value: 10 },
  { month: 'Mar', type: 'Success', value: 700 },
  { month: 'Apr', type: 'Failed', value: 3 },
  { month: 'Apr', type: 'Success', value: 1500 },
  { month: 'May', type: 'Failed', value: 60 },
  { month: 'May', type: 'Success', value: 1400 },
  { month: 'Jun', type: 'Failed', value: 50 },
  { month: 'Jun', type: 'Success', value: 600 },
];

const buildAnomaly = [
  { month: 'Jan 05', type: 'Failed', value: 1.4 },
  { month: 'Feb 01', type: 'Failed', value: 0.89 },
  { month: 'Feb 14', type: 'Failed', value: 1 },
];

export { overallAnomaly, buildAnomaly };

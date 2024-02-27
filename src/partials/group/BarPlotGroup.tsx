import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};
const dataset = [
  {
    active: 59,
    inactive: 57,
    newYork: 86,
    seoul: 21,
    month: 'Jan',
  },
  {
    active: 50,
    inactive: 52,
    newYork: 78,
    seoul: 28,
    month: 'Fev',
  },
  {
    active: 47,
    inactive: 53,
    newYork: 106,
    seoul: 41,
    month: 'Mar',
  },
  {
    active: 54,
    inactive: 56,
    newYork: 92,
    seoul: 73,
    month: 'Apr',
  },
  {
    active: 57,
    inactive: 69,
    newYork: 92,
    seoul: 99,
    month: 'May',
  },
  {
    active: 60,
    inactive: 63,
    newYork: 103,
    seoul: 144,
    month: 'June',
  },
  {
    active: 59,
    inactive: 60,
    newYork: 105,
    seoul: 319,
    month: 'July',
  },
  {
    active: 65,
    inactive: 60,
    newYork: 106,
    seoul: 249,
    month: 'Aug',
  },
  {
    active: 51,
    inactive: 51,
    newYork: 95,
    seoul: 131,
    month: 'Sept',
  },
  {
    active: 60,
    inactive: 65,
    newYork: 97,
    seoul: 55,
    month: 'Oct',
  },
  {
    active: 67,
    inactive: 64,
    newYork: 76,
    seoul: 48,
    month: 'Nov',
  },
  {
    active: 61,
    inactive: 70,
    newYork: 103,
    seoul: 25,
    month: 'Dec',
  },
];

const valueFormatter = (value: number) => `${value}mm`;

export default function BarPlotGroup() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'active', label: 'Active Group', valueFormatter },
        { dataKey: 'inactive', label: 'Inactive Group', valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}

import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = (props) => {
  const data = props.data;
  // console.log(data);
  const chartData = {
    series: [data[0], data[1], data[2], data[3], data[4]],
    options: {
      chart: {
        width: '100%',
        type: 'pie',
      },
      labels: [
        'Users',
        'Enabled',
        'Disabled',
        'Pending Approval',
        'Pending Registration',
      ],
      theme: {
        monochrome: {
          enabled: true,
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            offset: -5,
          },
        },
      },
      title: {
        text: 'Users',
      },
      dataLabels: {
        formatter(val, opts) {
          const name = opts.w.globals.labels[opts.seriesIndex];
          return [name, val.toFixed(1) + '%'];
        },
      },
      legend: {
        show: false,
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        width={'350'}
        height={'350'}
      />
    </div>
  );
};

export default PieChart;

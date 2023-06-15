import React from 'react';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

import Chart from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'doughnut2d', // Tip Charta
    width: '100%', // Sirina chart
    height: '400', // Visina chart
    dataFormat: 'json', // Data tip
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Stars Per Language:',
        decimals: 0,

        doughnutRadius: '45%',

        showPercentValues: 0,

        theme: 'candy',
      },
      // Chart Data
      data: data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;

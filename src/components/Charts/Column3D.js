// Include react
import React from 'react';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

import Chart from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'column3d', // Tip Charta
    width: '100%', // Sirina chart
    height: '400', // Visina chart
    dataFormat: 'json', // Data tip
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Most Popular:',

        yAxisName: 'Stars',

        xAxisName: 'Repos',

        xAxisNameFontSize: '16px',

        yAxisNameFontSize: '16px',
      },
      // Chart Data
      data: data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;

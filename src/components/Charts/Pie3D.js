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
    type: 'pie3d',
    width: '400',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Languages:',
        theme: 'fusion',
        decimals: 0, //Da stavimo bez decimala, samo celi brojevi
        pieRadius: '45%', //Da povecamo ceo Chart
      },
      // Chart Data
      data: data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;

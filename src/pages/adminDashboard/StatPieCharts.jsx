import React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';


export default function StatPieCharts({data}) {

  const siteStats = [
    { label: 'Posts', value:data?.postCount, color: '#1976d2' },
    { label: 'Comments', value: data?.commentCount, color: '#9c27b0' },
    { label: 'Users', value:data?.userCount, color: '#ff9800' },
  ];


  return (
    <div style={{ width: 300, margin: 'auto' }}>
      <PieChart
        series={[
          {
            data: siteStats,
            valueFormatter: (item) => item.value.toString(),
            arcLabel: (item) => item.label,
            arcLabelMinAngle: 20,
            arcLabelRadius: '70%',
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fontWeight: 'bold',
            fill: '#fff',
          },
          '& .MuiChartsLegend-root': {
            color: '#fff',
          },
        }}
        width={300}
        height={300}
      />
    </div>
  );
}

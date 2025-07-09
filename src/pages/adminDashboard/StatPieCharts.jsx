import React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const siteStats = [
  { label: 'Posts', value: 1234, color: '#1976d2' },
  { label: 'Comments', value: 568, color: '#9c27b0' },
  { label: 'Users', value: 2847, color: '#ff9800' },
];

export default function StatPieCharts() {
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
        }}
        width={300}
        height={300}
      />
      <div style={{ marginTop: 20, textAlign: 'center' }}>
        {siteStats.map((item) => (
          <div key={item.label} style={{ marginBottom: 6, fontWeight: 'bold', color: item.color }}>
            <span
              style={{
                display: 'inline-block',
                width: 12,
                height: 12,
                backgroundColor: item.color,
                borderRadius: 4,
                marginRight: 8,
                verticalAlign: 'middle',
              }}
            />
            {item.label}: {item.value.toLocaleString()}
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const lineColor = '#274C87';

const AxisDescription = ({ position, label, text }) => (
  <g>
    <text
      x={position === 'x' ? '50%' : 10}
      y={position === 'x' ? 235 : '50%'}
      textAnchor={position === 'x' ? 'middle' : 'start'}
      dominantBaseline={position === 'x' ? 'middle' : 'hanging'}
      fontWeight="bold"
      fill="#333"
    >
      {text}
    </text>
    <text
      x={position === 'x' ? '50%' : 10}
      y={position === 'x' ? 250 : '55%'}
      textAnchor={position === 'x' ? 'middle' : 'start'}
      dominantBaseline={position === 'x' ? 'hanging' : 'middle'}
      fill="#333"
    >
      {label}
    </text>
  </g>
);

const SingleLineChart = ({ data }) => {
  return (
    <div style={{ width: '80%', height: 250, margin: '1vw', marginTop: '2vw', display: 'flex', justifyContent: 'center' }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="package"
            tick={{ fontSize: 12, fontWeight: 'bold' }}
            axisLine={{ stroke: '#333' }}
          />
          <YAxis
            tick={{ fontSize: 12, fontWeight: 'bold' }}
            axisLine={{ stroke: '#333' }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="students"
            stroke={lineColor}
            strokeWidth={2}
            dot={{ r: 3, fill: lineColor, stroke: 'none' }}
            activeDot={{ r: 5, strokeWidth: 2 }}
          />
          <AxisDescription position="y" label="Number of Students" text="Y Axis" />
          <AxisDescription position="x" label="Placement Package" text="X Axis" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SingleLineChart;

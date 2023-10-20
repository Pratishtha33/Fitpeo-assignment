import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PlacementPackagesChart = ({ data }) => {
  return (
    <div style={{ height: 400 }}>
      <ResponsiveContainer>
        <ScatterChart data={data}>
          <CartesianGrid />
          <XAxis dataKey="package" type="category" />
          <YAxis dataKey="students" type="number" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Number of Students" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PlacementPackagesChart;

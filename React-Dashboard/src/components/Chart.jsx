import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey, grid, classs }) => {
  return (
    <div className={ classs }>
      <h3 className="mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height="100%" aspect={3 / 2}>
        <AreaChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {grid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" stroke="#00513a"/>
          {/* <YAxis /> */}
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke="#00513a"
            fill="#00aa7a"
            activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" /> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

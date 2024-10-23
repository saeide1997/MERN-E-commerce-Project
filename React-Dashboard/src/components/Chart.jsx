
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey, grid, classs, height1, height2, c1, c2, c3 }) => {
  return (
    <div className={ classs }>
      <h3 className="mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height="100%" aspect={height1 / height2}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {grid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" stroke={c1}/>
          {/* <YAxis /> */}
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={c2}
            fill={c3}
            activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" /> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

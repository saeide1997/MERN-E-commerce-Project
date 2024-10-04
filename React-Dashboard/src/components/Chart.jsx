import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({title, data, dataKey,grid}) => {
    
  return (
          
    <div className='m-5 p-5 shadow'>
      <h3 className='mb-5'>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              {grid && <CartesianGrid strokeDasharray="3 3" />}
              <XAxis dataKey="name" stroke='#5550bd'/>
              {/* <YAxis /> */}
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
              {/* <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" /> */}
            </LineChart>
          </ResponsiveContainer>


    </div>
  );
};

export default Chart;



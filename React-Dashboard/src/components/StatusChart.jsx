import React, { PureComponent,  useEffect, useMemo, useState  } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { userRequest } from "../requestMethods";

const StatusChart = ()=> {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [orderAmount, setOrderAmount] = useState([]);

  const months = useMemo(
    () => [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/year");
        console.log(res);
        const pendingStatus = res.data.filter(item => item.stat[0] === 'pending')
        const cancelledStatus = res.data.filter(item => item.stat[0] === 'cancelled')
        const complitedStatus = res.data.filter(item => item.stat[0] === 'complited')
          setOrderAmount( [           
            {
              name: "در انتظار",
              count: pendingStatus.length,
            },
            {
              name: "لغو شده",
              count: cancelledStatus.length,
            },
            {
              name: "کامل شده",
              count: complitedStatus.length,
            },
          ]);
        
      } catch {}
    };
    getStats();
  },[]);
console.log(orderAmount);
  const data = [
      { name: 'Geeksforgeeks', students: 400 },
      { name: 'Technical scripter', students: 700 },
      { name: 'Geek-i-knack', students: 200 },
      { name: 'Geek-o-mania', students: 1000 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const onPieEnter = (_, index) => {
      setActiveIndex(index);
  };

  return (
      <PieChart width={300} height={300}>
          <Pie
              activeIndex={activeIndex}
              data={data}
              dataKey="students"
              outerRadius={150}
              fill="green"
              onMouseEnter={onPieEnter}
              style={{ cursor: 'pointer', outline: 'none' }} // Ensure no outline on focus
          >
              {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
          </Pie>
          <Tooltip />
      </PieChart>
  );
}
 export default StatusChart
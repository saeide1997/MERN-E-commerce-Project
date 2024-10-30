import React, {  useEffect,  useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from "recharts";
import { userRequest } from "../requestMethods";

const StatusChart = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [orderAmount, setOrderAmount] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/year");
        // console.log(res);
        const pendingStatus = res.data.filter(
          (item) => item.stat[0] === "pending"
        );
        const cancelledStatus = res.data.filter(
          (item) => item.stat[0] === "cancelled"
        );
        const complitedStatus = res.data.filter(
          (item) => item.stat[0] === "complited"
        );
        setOrderAmount([
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
  }, []);
  // console.log(orderAmount);

  const COLORS = ["#ff7139db", "#ff2121de", "#21ff2f91", "#686868"];

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className=" shadow p-3 m-5 min-w-[500px] ">
      <h2 className=" m-2">وضعیت سفارشات</h2>
      <div className="flex items-center">
        <div>
          <PieChart width={200} height={200}>
            <Pie
              activeIndex={activeIndex}
              data={orderAmount}
              dataKey="count"
              outerRadius={100}
              fill="green"
              onMouseEnter={onPieEnter}
              style={{ cursor: "pointer", outline: "none" }} // Ensure no outline on focus
            >
              {orderAmount.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        <div className="mx-10">
          <div className="flex my-3 items-center">
            <div className="h-5 w-5 bg-orange-600 rounded-full mx-3"></div>
            <span className="">در انتظار برسی</span>
          </div>
          <div className="flex my-3 items-center">
            <div className="h-5 w-5 bg-green-600 rounded-full mx-3"></div>
            <span className="">تکمیل شده</span>
          </div>
          <div className="flex my-3 items-center">
            <div className="h-5 w-5 bg-red-600 rounded-full mx-3"></div>
            <span className="">لغو شده</span>
          </div>
          <div className="flex my-3 items-center">
            <div className="h-5 w-5 bg-gray-600 rounded-full mx-3"></div>
            <span className="">پیشنویس شده</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StatusChart;

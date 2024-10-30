import React, { useEffect, useMemo, useState } from "react";
import Chart from "../components/Chart";
import { userRequest } from "../requestMethods";

const SellChart = () => {
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
        res.data.map((item) => {
          setOrderAmount((prev) => [
            ...prev,
            {
              name: months[item._id - 1],
              "جمع فروش ": item.total,
            },
          ]);
        });
      } catch {}
    };
    getStats();
  }, [months]);
  return (
    <div className="w-[400px] h-[300px] ">
      <Chart
        classs="m-5 py-3 px-5 shadow"
        c1= "#ff5400"
        c2= "#ff5400"
        c3= "#ff854a"
        height1="3"
        height2="2"
        data={orderAmount}
        title="فروش ماهانه"
        grid
        dataKey="جمع فروش "
      />
    </div>
  );
};

export default SellChart;
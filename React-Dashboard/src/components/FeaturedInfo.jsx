import {
  ArrowDownward,
  ArrowUpward,
  PointOfSaleOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { userRequest } from "../requestMethods";
import React, { useEffect, useState } from "react";

const FeaturedInfo = () => {
  var nf = new Intl.NumberFormat();

  const [income, setIncomes] = useState([]);
  const [incomepercent, setIncomePercent] = useState(0);
  const [sellpercent, setSellPercent] = useState(0);
  useEffect(() => {
    const getincomes = async () => {
      try {
        const res = await userRequest.get("orders/income");
        console.log("res345", res.data);

        setIncomes(res.data[1]);
        setIncomePercent((res.data[1].total * 100) / res.data[0].total - 100);
        setSellPercent(
          (res.data[1].quantity * 100) / res.data[0].quantity - 100
        );
      } catch {}
    };
    getincomes();
  }, []);

  let monthName;
  const monthDefini = () => {
    income._id === "01" && (monthName = "فروردین");
    income._id === "02" && (monthName = "اردیبهشت");
    income._id === "03" && (monthName = "خرداد");
    income._id === "04" && (monthName = "تیر");
    income._id === "05" && (monthName = "مرداد");
    income._id === "06" && (monthName = "شهریور");
    income._id === "07" && (monthName = "مهر");
    income._id === "08" && (monthName = "آبان");
    income._id === "09" && (monthName = "آذر");
    income._id === "10" && (monthName = "دی");
    income._id === "11" && (monthName = "بهن");
    income._id === "12" && (monthName = "اسفند");
    return monthName;
  };

  // console.log('w',income);

  return (
    <div className="w-full flex justify-between">
      <div className="flex-1 flex items-center justify-between h-[150px] mx-5 p-7 shadow">
        <div>
          <span className="flex text-2xl">
            درآمد <h3 className="mr-2 text-teal-800 ">{monthDefini()}</h3>
          </span>
          <div className="my-4 items-center flex">
            <span className="text-2xl"> {nf.format(income.total)} ریال </span>
            <span className="flex items-center mr-5 ltr">
              {Math.floor(incomepercent)}%{" "}
              {incomepercent > 0 && (
                <ArrowUpward className="text-sm ml-1 text-green-500" />
              )}
              {incomepercent < 0 && (
                <ArrowDownward className="text-sm ml-1 text-red-500" />
              )}
            </span>
          </div>
        </div>
        <PointOfSaleOutlined className="!text-[70px] !text-teal-900 ml-5" />
      </div>
      <div className="flex-1  flex items-center justify-between h-[150px] mx-5 p-7 shadow">
        <div>
          <span className="flex text-2xl">
            فروش <h3 className="mr-2 text-teal-800 ">{monthDefini()}</h3>
          </span>
          <div className="my-4 items-center flex">
            <span className="text-2xl">
              {" "}
              {nf.format(income.quantity)} محصول{" "}
            </span>
            <span className="flex items-center mr-5 ltr">
              {Math.floor(sellpercent)}%{" "}
              {sellpercent > 0 && (
                <ArrowUpward className="text-sm ml-1 text-green-500" />
              )}
              {sellpercent < 0 && (
                <ArrowDownward className="text-sm ml-1 text-red-500" />
              )}
            </span>
          </div>
        </div>
        <ShoppingCartOutlined className="!text-[70px] !text-teal-900 ml-5" />
      </div>
    </div>
  );
};

export default FeaturedInfo;

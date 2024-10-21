import React, { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { format } from "timeago.js";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/apiCalls";
import { Link } from "react-router-dom";

const WidgetLg = () => {
  var nf = new Intl.NumberFormat();
  const dispatch = useDispatch();
  const userInf = useSelector((state) => state.user.users);
  let statusColor
  // console.log(userInf);
  const statusCl = (status)=>{
  if (status === "pending") {
    statusColor = "bg-orange-500/50";
  }
  if (status === "cancelled") {
    statusColor = "bg-red-500/50";
  }
  if (status === "complited") {
    statusColor = "bg-green-500/50";
  }
  if (status === "draft") {
    statusColor = "bg-gray-500/50";
  }
  return statusColor
}
  useEffect(() => {
    getProduct(dispatch);
  }, [dispatch]);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders/orders/?new=true");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);
  return (
    <div className="flex-2 shadow p-5 ml-5">
      <span className="text-3xl">آخرین تراکنشها</span>
      <table className="border-separate border-spacing-6 w-full">
        <thead className="text-center ">
          <th className="">مشتری</th>
          <th className="">تاریخ</th>
          <th className="">مقدار</th>
          <th className="">وضعیت</th>
          <th className="">عملیات</th>
        </thead>
        <tbody className="text-center">
          {orders.map((order) => (
            <tr key={order._id} className=" items-center !h-10">
              <td className="flex items-center">
                <img
                  className="w-10 object-cover rounded-full ml-5"
                  src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                  alt=""
                />
                <span className="">
                  {userInf.find((item) => item._id === order.userId).userName}{" "}
                </span>
              </td>
              <td className="mr-6 text-gray-500">{format(order.CreatedAt)}</td>
              <td className="mr-6 text-gray-500">{nf.format(order.amount)}</td>
              <td className="mr-6">
                <button className={" w-20 h-8 flex items-center justify-center rounded-xl !text-sm " + statusCl(order.status)}>
                  {" "}
                  {order.status}
                </button>
              </td>
              <td className="bg-teal-600/50 shadow mr-6 h-10 text-black rounded-md  hover:shadow-none flex justify-center items-center">              
              <button className=" ">
                <Link to={"/order/" + order._id}>
                جزییات سفارش
            </Link>
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;

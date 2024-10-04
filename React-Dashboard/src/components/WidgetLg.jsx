import React, { useEffect, useState } from "react";
import { userRequest } from '../requestMethods';
import {format} from "timeago.js"

const WidgetLg = () => {
    const [orders, setOrders] =useState([])
    useEffect(()=>{
        const getOrders = async ()=>{
            try{
                const res = await userRequest.get("orders/?new=true")
                // console.log(res);
                setOrders(res.data)
            }
            catch{
                console.log('no');
            }
        }
        getOrders()
    }, [])
  return (
    <div className="flex-2 shadow p-5 ml-5">
     <span className="text-3xl">آخرین تراکنشها</span>
     <table className="border-separate border-spacing-6 w-full">
        <thead className="text-justify">
            <th className="">مشتری</th>
            <th className="">تاریخ</th>
            <th className="">مقدار</th>
            <th className="">وضعیت</th>
        </thead>
        <tbody className="">
            {orders.map((order)=>
            <tr key={order._id}>
            <td className="flex">
                <img className="w-10 h-10 object-cover rounded-full ml-5" src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
                <span className="">{order.userId} </span>
            </td>
            <td className="mr-6 text-gray-500">{format(order.CreatedAt)}
            </td>
        <td className="mr-6 text-gray-500">{order.amount}</td>
            <td className="mr-6">
                <button className=" p-1 rounded-l bg-green-100 text-green-700"> {order.status}</button>
            </td>
            </tr>
            )}
        </tbody>
     </table>
    </div>
  );
};

export default WidgetLg;

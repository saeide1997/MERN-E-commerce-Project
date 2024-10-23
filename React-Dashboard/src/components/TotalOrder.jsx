import React, { useEffect } from "react";
import { getOrder } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import fa from "timeago.js/lib/lang/fa";
import * as timeago from "timeago.js";
import { AddShoppingCart } from "@mui/icons-material";
timeago.register("fa", fa);

const TotalOrder = () => {
    var nf = new Intl.NumberFormat();
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.order.orders);
    const totalOrder = orders.length
  
    useEffect(() => {
      getOrder(dispatch);
    }, [dispatch]);


  
    return (
        <div className="!text-red-700 shadow w-64 h-28 m-5 justify-center flex items-center">
        <AddShoppingCart className="!text-[50px]" />
        <div className="flex flex-col">
          <div className="text-[20px] m-2">جمع سفارشات</div>
          <div className="text-[20px] mr-2">{nf.format(totalOrder)} عدد</div>
        </div>
      </div>
    );
};

export default TotalOrder;
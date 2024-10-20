import React, { useEffect, useMemo, useState } from "react";
import Chart from "../components/Chart";
import { userRequest } from "../requestMethods";

const SellChart = () => {
    const [orderQuantity, setOrderQuantity] = useState([])
    const months = useMemo(()=>[
        'فروردین' ,
        'اردیبهشت' ,
        'خرداد' ,
        'تیر' ,
        'مرداد' ,
        'شهریور' ,
        'مهر' ,
        'آبان' ,
        'آذر' ,
        'دی' ,
        'بهمن' ,
        'اسفند' ,
      ],[])
    
      useEffect(()=>{
        const getStats = async()=>{
          try{
            const res =  await userRequest.get("orders/year")
            res.data.map(item => {
              setOrderQuantity(prev => [
                ...prev,
                {
                  name:months[item._id-1], "کاربر جدید": item.quantity
                }
              ])
            })
          }
          catch{}
        }
        getStats()
      }, [months])
    return(
        <div className="w-[400px] h-[300px] ">
    <Chart classs="m-5 py-3 px-5 shadow"
        data={orderQuantity}
        title="ثبتنام کاربران"
        grid
        dataKey="کاربر جدید"
      />
        </div>
    )
    
    }
    
    export default SellChart;
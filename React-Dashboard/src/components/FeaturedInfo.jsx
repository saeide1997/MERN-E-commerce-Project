import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { userRequest } from '../requestMethods';
import React, { useEffect, useState } from "react";

const FeaturedInfo = () => {
  var nf = new Intl.NumberFormat();
  let perc
  const [income, setIncomes] =useState([])
  const [percent, setPercent] =useState(0)
    useEffect(()=>{
        const getincomes = async ()=>{
            try{
              const res = await userRequest.get("orders/income")
              console.log('res345', res.data);

                setIncomes(res.data)
                setPercent((res.data[1].total*100)/ res.data[0].total -100)                
              }
              catch{
              }
            }
        getincomes()
    }, [])

let monthName
const monthDefini = ()=>{
  income[1]._id == '01'&& (monthName = 'فروردین')
  income[1]._id == '02' &&( monthName = 'اردیبهشت')
  income[1]._id == '03' &&( monthName = 'خرداد')
  income[1]._id == '04' &&( monthName = 'تیر')
  income[1]._id == '05' &&( monthName = 'مرداد')
  income[1]._id == '06' &&( monthName = 'شهریور')
  income[1]._id == '07' &&( monthName = 'مهر')
  income[1]._id == '08' &&( monthName = 'آبان')
  income[1]._id == '09' &&(monthName = 'آذر')
  income[1]._id == '10' &&(monthName = 'دی')
  income[1]._id == '11' &&( monthName = 'بهن')
  income[1]._id == '12' &&( monthName = 'اسفند')
  return monthName
}

// console.log('w',income[1]);

  return (
    <div className="w-full flex justify-between">   
      <div className="flex-1 h-[150px] mx-5 p-7 shadow">
        <span className="flex text-2xl">درآمد <h3 className="mr-2 text-teal-800 ">{monthDefini()}</h3></span>
        <div className="my-4 items-center flex">
          <span className="text-2xl"> {nf.format(income[1].total)} ریال </span>
          <span className="flex items-center mr-5 ltr">
          {Math.floor(percent)}% {(percent>0)&&<ArrowUpward className="text-sm ml-1 text-green-500"/>}{(percent<0)&&<ArrowDownward className="text-sm ml-1 text-red-500"/>}
          </span>
        </div>
      </div>

    </div>
  );
};

export default FeaturedInfo;

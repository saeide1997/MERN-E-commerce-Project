import React, { useEffect, useMemo, useState } from "react";
import FeaturedInfo from "../components/FeaturedInfo";
import Chart from "../components/Chart";
import WidgetLg from "../components/WidgetLg";
import WidgetSm from "../components/WidgetSm";
import { userRequest } from "../requestMethods";

const Home = () => {
  const [userStats, setUserStats] = useState([])
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
        const res =  await userRequest.get('/users/stats')
        res.data.map(item => {
          setUserStats(prev => [
            ...prev,
            {
              name:months[item._id-1], "کاربر جدید": item.total
            }
          ])
        })
      }
      catch{}
    }
    getStats()
  }, [months])
  return (
    <div className="flex-6 mt-10">
      <FeaturedInfo />
      <Chart
      height1= '4'
      height2= '1'
      classs="m-5 p-5 shadow"
        data={userStats}
        title="فعالیت کاربران"
        grid
        dataKey="کاربر جدید"
      />
      <div className="flex m-5 ">
        <WidgetLg/>
        <WidgetSm/>
      </div>
    </div>
  );
};

export default Home;

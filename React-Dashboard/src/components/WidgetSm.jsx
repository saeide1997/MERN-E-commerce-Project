import React, { useEffect, useState } from 'react';
import { Sync, Visibility } from "@mui/icons-material";
import { userRequest } from '../requestMethods';


const WidgetSm = () => {
    const [users, setUsers] =useState([])
    useEffect(()=>{
        const getusers = async ()=>{
            try{
                const res = await userRequest.get("users/?new=true")
                // console.log(res);
                setUsers(res.data)
            }
            catch{
                console.log('no');
            }
        }
        getusers()
    }, [])
    return (
        <div className='flex-1 shadow p-5 '>
             <span className="text-3xl">کاربران جدید</span>
      <ul className="m-0 p-0 w-full ">
        {users.map((user)=>
        <li className="flex items-center justify-center my-5">
            <img className="w-10 h-10 rounded-full object-cover " src={user.img || "https://cdn-icons-png.flaticon.com/512/219/219969.png"} alt="" />
            <div className="flex flex-col mx-5">
                <span className="">{user.username} </span>
                <span className="">{user.email}  </span>
            </div>
            <button
            className="flex w-[35%] items-center border-none rounded-lg p-2 bg-violet-400/50 text-gray-800 cursor-pointer">
                <Visibility className="text-lg ml-1"/>
                مشاهده
            </button>
        </li>
        )}
      </ul>
        </div>
    );
};

export default WidgetSm;
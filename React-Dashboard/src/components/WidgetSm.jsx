import React, { useEffect, useState } from 'react';
import {  Visibility } from "@mui/icons-material";
import { userRequest } from '../requestMethods';
import { Link } from 'react-router-dom';


const WidgetSm = () => {
    const [users, setUsers] =useState([])
    useEffect(()=>{
        const getusers = async ()=>{
            try{
                const res = await userRequest.get("users/?new=true")
                setUsers(res.data)
            }
            catch{
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
            <img className="flex-1 w-10 h-10 rounded-full object-cover " src={user.img || "https://cdn-icons-png.flaticon.com/512/219/219969.png"} alt="" />
            <div className="flex-5 flex flex-col mr-2">
                <span className="">{user.userName} </span>
                <span className="">{user.email}  </span>
            </div>
            <button
            className="flex-2 shadow  hover:shadow-none flex items-center border-none rounded-lg p-2 bg-teal-400/50 text-gray-800 cursor-pointer">
                <Link to={"/user/" +user._id}>
                <Visibility className="text-lg ml-1"/>
                مشاهده
                </Link>
            </button>
        </li>
        )}
      </ul>
        </div>
    );
};

export default WidgetSm;
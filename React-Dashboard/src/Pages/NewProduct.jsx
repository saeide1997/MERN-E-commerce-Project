import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Chart from "../components/Chart";
import { productData } from "../dummyData";
import { Publish } from "@mui/icons-material";
import {addProduct,updateProduct} from '../redux/apiCalls'
import { useDispatch, useSelector } from "react-redux";

const NewProduct = () => {
  const [userInf, setUserInf] = useState([]);
  const [cat, setCat] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserInf((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleColor = (e) => {
    setColor(e.target.value.split(","));
  };

  const handleSize = (e) => {
    setSize(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
      const product = { ...userInf, categories: cat, color:color, size:size };
      addProduct(product, dispatch);
  };

    return (
        <div className="flex-6 p-5 items-start">
            {/* <h1 className="">کاربر جدید</h1> */}
            <div className=" p-5 m-5 shadow">
        <form className="flex justify-between mt-5" action="">
          <div className="flex flex-wrap">
            <div className="flex flex-col w-[50%] mt-3">
              <label className="mb-1 text-base" htmlFor="">
                نام محصول
              </label>
              <input
                className=" w-[50%] h-8 mb-10"
                onChange={handleChange}
                style={{ borderBottom: "1px solid gray" }}
                type="text"
                
                name="title"
                id=""
              />
            </div>
            <div className="flex flex-col w-[50%] mt-3">
              <label className="mb-1 text-base" htmlFor="">
                توضیحات محصول
              </label>
              <input
                className=" w-[50%] h-8 mb-10"
                onChange={handleChange}
                style={{ borderBottom: "1px solid gray" }}
                type="text"
                name="desc"
                id=""
              />
            </div>
            <div className="flex flex-col w-[50%] mt-3">
              <label className="mb-1 text-base" htmlFor="">
                قیمت محصول
              </label>
              <input
                className=" w-[50%] h-8 mb-10"
                onChange={handleChange}
                style={{ borderBottom: "1px solid gray" }}
                type="text"
                name="price"
                id=""
              />
            </div>
            <div className="flex flex-col w-[50%] mt-3">
              <label className="mb-1 text-base" htmlFor="">
                کتگوری محصول
              </label>
              <input
                className=" w-[50%] h-8 mb-10"
                style={{ borderBottom: "1px solid gray" }}
                type="text"
                onChange={handleCat} 
                name="Categories"
                id=""
              />
            </div>
            <div className="flex flex-col w-[50%] mt-3">
              <label className="mb-1 text-base" htmlFor="">
                رنگ محصول
              </label>
              <input
                className=" w-[50%] h-8 mb-10"
                onChange={handleColor} 
                style={{ borderBottom: "1px solid gray" }}
                type="text"
                name="color"
                id=""
              />
            </div>
            <div className="flex flex-col w-[50%] mt-3">
              <label className="mb-1 text-base" htmlFor="">
                سایز محصول
              </label>
              <input
                className=" w-[50%] h-8 mb-10"
                onChange={handleSize} 
                style={{ borderBottom: "1px solid gray" }}
                type="text"
                name="size"
                id=""
              />
            </div>
            <div className="flex flex-col w-[50%] mt-3">
              <label className="mb-1 text-base" for="stock">
                موجودی
              </label>
              <select onChange={handleChange} className="h-10 w-[50%] rounded-md pr-2" name="inStock" id="stock">
                <option value="true">بله</option>
                <option value="false">خیر</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex justify-center items-center">
              <label htmlFor="img">
                <Publish className="cursor-pointer" />
              </label>
              <input className="hidden" type="file" name="" id="img" />
              <img
                className="w-44 h-44"
                src=''
                alt=""
              />
            </div>
            <button onClick={handleClick} className="p-1 rounded-md bg-teal-600 text-white">
              ایجاد
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default NewProduct;
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Chart from "../components/Chart";
import { productData } from "../dummyData";
import { Publish } from "@mui/icons-material";
import { useSelector } from "react-redux";

const Product = () => {
  const location = useLocation()
  console.log(location.pathname.split('/')[2]);
  const productId = location.pathname.split('/')[2]
  const product = useSelector(state=> state.product.products.find(product => product._id == productId))
  return (
    <div className="flex-6 p-5 items-start">
      <div className=" flex justify-between items-center">
        <h1 className=""> </h1>
        <Link to={"/newProduct"}>
          <button className="w-20 p-1 bg-teal-500 rounded text-white ">
            ایجاد
          </button>
        </Link>
      </div>
      <div className="flex ">
        <div className="flex-1">
          <Chart data={productData} title=" فروش" grid dataKey="فروش" />
        </div>
        <div className="flex-1 p-5 m-5 shadow">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full object-cover ml-5"
              src={product.img}
              alt=""
            />
            <span className="">محصول</span>
          </div>
          <div className="mt-3">
            <div className="w-36 flex justify-between">
              <span className="">شناسه:</span>
              <span className="">{product._id}</span>
            </div>
            <div className="w-36 flex justify-between">
              <span className="">نام کالا:</span>
              <span className="">{product.title}</span>
            </div>
            <div className="w-36 flex justify-between">
              <span className="">موجودی:</span>
              <span className="">{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-5 m-5 shadow">
        <form className="flex justify-between mt-5" action="">
          <div className="">
            <div className="flex flex-col mt-3">
              <label className="mb-1 text-base" htmlFor="">
                نام محصول
              </label>
              <input
                className=" w-[250px] h-8"
                style={{ borderBottom: "1px solid gray" }}
                type="text"
                placeholder = {product.title}
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col mt-3">
              <label className="mb-1 text-base" for="stock">
                {" "}
                موجودی{" "}
              </label>
              <select className="h-10 rounded-md pr-2" name="" id="stock">
                <option value="yes">بله</option>
                <option value="no">خیر</option>
              </select>
            </div>
            {/* <div className="flex flex-col mt-3">
              <label className="mb-1 text-base" for="active">
                {" "}
                دسترسی{" "}
              </label>
              <select className="h-10 rounded-md pr-2" name="active" id="stock">
                <option value="yes">بله</option>
                <option value="no">خیر</option>
              </select>
            </div> */}
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex justify-center items-center">
              <label htmlFor="img">
                <Publish className="cursor-pointer" />
              </label>
              <input className="hidden" type="file" name="" id="img" />
              <img
                className="w-24 h-24"
                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                alt=""
              />
            </div>
            <button className="p-1 rounded-md bg-teal-600 text-white">
              به روز رسانی
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;

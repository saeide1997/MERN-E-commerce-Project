import { Publish } from '@mui/icons-material';
import React from 'react';

const NewProduct = () => {
    return (
        <div className="flex-4 p-5 items-start">
            <h1 className="">کاربر جدید</h1>
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
                placeholder="محصول"
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
            <div className="flex flex-col mt-3">
              <label className="mb-1 text-base" for="active">
                {" "}
                دسترسی{" "}
              </label>
              <select className="h-10 rounded-md pr-2" name="active" id="stock">
                <option value="yes">بله</option>
                <option value="no">خیر</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col justify-between ml-36">
            <div className="flex justify-center items-center">
              <label htmlFor="img">
                <Publish className="cursor-pointer" />
              </label>
              <input className="hidden" type="file" name="" id="img" />
              <img
                className="w-44 h-44"
                src="https://img.freepik.com/premium-photo/glycolic-acid-product-packaging-minimalist-design_1298745-4413.jpg"
                alt=""
              />
            </div>
            <button className="p-1 rounded-md bg-violet-600 text-white">
              به روز رسانی
            </button>
          </div>
        </form>
        </div>
    );
};

export default NewProduct;
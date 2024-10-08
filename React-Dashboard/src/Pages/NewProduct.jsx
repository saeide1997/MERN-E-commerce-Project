import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Chart from "../components/Chart";
import { productData } from "../dummyData";
import { Publish } from "@mui/icons-material";
import { addProduct, updateProduct } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";

const NewProduct = () => {
  const [userInf, setUserInf] = useState([]);
  const [cat, setCat] = useState([]);
  const [file, setFile] = useState([]);
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
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            ...userInf,
            img: downloadURL,
            categories: cat,
            color: color,
            size: size,
          };
          console.log(product);
          addProduct(product, dispatch);
        });
      }
    );
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
              <select
                onChange={handleChange}
                className="h-10 w-[50%] rounded-md pr-2"
                name="inStock"
                id="stock"
              >
                <option value="true">بله</option>
                <option value="false">خیر</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex justify-center items-center">
              <label htmlFor="file">
                <Publish className="cursor-pointer" />
              </label>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                className="hidden"
                type="file"
                name=""
                id="file"
              />
              <img className="w-44 h-44" src="" alt="" />
            </div>
            <button
              onClick={handleClick}
              className="p-1 rounded-md bg-teal-600 text-white"
            >
              ایجاد
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;

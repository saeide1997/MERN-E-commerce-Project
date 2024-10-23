import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Publish } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { userRequest } from "../requestMethods";
import { Progress } from "semantic-ui-react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "../redux/productRedux";

const NewProduct = (props) => {
  // console.log(props);
  const [userInf, setUserInf] = useState([]);
  const [cat, setCat] = useState([]);
  const [file, setFile] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [avatar, setAvatar] = useState([]);
  const [avatarPreview, setAvatarPreview] = useState(
    "https://st4.depositphotos.com/13324256/24475/i/450/depositphotos_244751462-stock-photo-top-view-product-lettering-made.jpg"
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [percentage, setPercentage] = useState(0);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // State for the main progress bar
  const [progressMain, setProgressMain] = useState();
  const ProgressBar = ({ uploadState, percentUploaded }) =>
    uploadState === "uploading" && (
      <Progress
        className="progress__bar"
        percent={percentUploaded}
        progress
        indicating
        size="medium"
        inverted
      />
    );

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

  const updateProductImg = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const uploadImage = (e) => {
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
        setIsLoading(true)
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercentage(Math.round(progress));
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
          return downloadURL;
          
        });
        setIsLoading(false)
      }
    );
  };
  const handleClick = async (e) => {
    const product = {
      ...userInf,
      img: uploadImage(),
      categories: cat,
      color: color,
      size: size,
    };
    try {
      dispatch(addProductStart());
      const res = await userRequest.post(`/product/`, product);
      dispatch(addProductSuccess(res.data));
      navigate("/products");
    } catch (err) {
      dispatch(addProductFailure());
      return err;
    }
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
            <div className="flex flex-col justify-center items-center">
              <img className="flex-2 w-44 h-44" src={avatarPreview} alt="" />
              <div className="flex-1 flex justify-center items-center my-5 flex-col">
                <label htmlFor="avatar">
                  <Publish className="my-3 cursor-pointer" />
                  <button className="w-28 shadow mr-1" onClick={uploadImage}>آپلود</button>
                </label>
                <div className="w-full h-10 bg-gray-100 relative text-teal-950">
                  {percentage ? (
                    <div
                      className="h-10 flex justify-center items-center"
                      style={{
                        width: `${percentage}`,
                        background: "linear-gradient(45deg,teal,white)",
                      }}
                    >
                      {percentage + "%"}
                    </div>
                  ) : (
                    <div className="h-10 flex justify-center items-center" >0%</div>
                  )}
                </div>
                
                {isLoading ? (
                  <span className="">در حال بارگذاری ...</span>
                ) : (
                  <></>
                )}
                <input
                  onChange={(e) => {
                    updateProductImg(e);
                    setFile(e.target.files[0]);
                  }}
                  className="hidden"
                  type="file"
                  name="avatar"
                  id="avatar"
                />
              </div>
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

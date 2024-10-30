import {    Publish } from "@mui/icons-material";
  import { useState } from "react";
  import { useDispatch } from "react-redux";
  import {addUser} from '../redux/apiCalls'

const NewUser = () => {

    const [userInf, setUserInf] = useState([]);
    const dispatch = useDispatch();
  
    const handleChange = (e) => {
      setUserInf((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    };
  
    const handleClick = (e) => {
      e.preventDefault();
      addUser(userInf, dispatch);
    };

    return (
        <div className="flex-6 p-5 items-start">
<div className=" p-5 m-5 shadow">
        <form className="  flex justify-between mt-5" action="">
          <div className="flex-3 flex flex-wrap">
            <div className="flex flex-col w-[50%] mt-3 mb-10">
              <label className="mb-1 text-base" htmlFor="">
                نام کاربری
              </label>
              <input
                className=" w-[250px] h-8"
                onChange={handleChange}
                style={{ borderBottom: "1px solid gray" }}
                type="text"
                name="userName"
                id=""
              />
            </div>
            <div className="flex flex-col w-[50%] mt-3 mb-10">
              <label className="mb-1 text-base" htmlFor="">
                نام و نام خانوادگی{" "}
              </label>
              <input
                className=" w-[250px] h-8"
                onChange={handleChange}
                style={{ borderBottom: "1px solid gray" }}
                type="text"
                name="fullname"
                id=""
              />
            </div>
            <div className="flex flex-col w-[50%] mt-3 mb-10">
              <label className="mb-1 text-base" htmlFor="">
                نقش{" "}
              </label>
              <input
                className=" w-[250px] h-8"
                onChange={handleChange}
                style={{ borderBottom: "1px solid gray" }}
                type="text"
                name="role"
                id=""
              />
            </div>
            <div className="flex flex-col w-[50%] mt-3 mb-10">
              <label className="mb-1 text-base" htmlFor="">
                شماره تماس{" "}
              </label>
              <input
                className=" w-[250px] h-8"
                onChange={handleChange}
                style={{ borderBottom: "1px solid gray" }}
                type="tel"
                name="mobile"
                id=""
              />
            </div>
            <div className="flex flex-col w-[50%] mt-3 mb-10">
              <label className="mb-1 text-base" htmlFor="">
                ایمیل{" "}
              </label>
              <input
                className=" w-[250px] h-8"
                onChange={handleChange}
                style={{ borderBottom: "1px solid gray" }}
                type="email"
                name="email"
                id=""
              />
            </div>
            <div className="flex flex-col w-[50%] mt-3 mb-10">
              <label className="mb-1 text-base" htmlFor="">
                رمز عبور{" "}
              </label>
              <input
                className=" w-[250px] h-8"
                onChange={handleChange}
                style={{ borderBottom: "1px solid gray" }}
                type="password"
                name="password"
                id=""
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex justify-center items-center">
              <label htmlFor="img">
                <Publish className="cursor-pointer" />
              </label>
              <input className="hidden" type="file" name="img" id="img" />
              <img
                className="w-24 h-24"
                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                alt=""
              />
            </div>
            <button
              onClick={handleClick}
              className="p-1 rounded-md bg-teal-600 text-white">
              به روز رسانی
            </button>
          </div>
        </form>
      </div>
      </div>
    );
};

export default NewUser;
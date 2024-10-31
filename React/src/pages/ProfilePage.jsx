import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { useAuth } from "../hooks/AuthProvider";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { updateUser } from "../redux/apiCalls";
import Navbar from "../component/Navbar";

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [userInf, setUserInf] = useState([]);
  const auth = useAuth();

  const handleChange = (e) => {
    setUserInf((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    auth.updateUser(user._id, userInf);
    document.getElementById("userName").value = "";
    document.getElementById("fullname").value = "";
    document.getElementById("role").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("mobile").value = "";
  };
  return (
    <div>
      <Navbar />
      <div className=" p-5 items-start">
        <div className=" flex justify-between items-center"></div>
        <div className=" flex ">
          <div className="flex-1 w-full p-5 shadow flex-col">
            <div className=" flex items-center">
              <img
                className="w-10 h-10 ml-10 rounded-full object-cover"
                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                alt=""
              />
              <div className="flex flex-col justify-between">
                <span className="boldShab">{user.fullname} </span>
                <span className="">{user.role} </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base boldShab text-gray-600 my-4">
                اطلاعات حساب
              </span>
              <div className="flex items-center mb-3 text-gray-800">
                <PermIdentity className="text-base" />
                <span className="mr-1">{user.userName}</span>
              </div>
              <div className="flex items-center mb-3 text-gray-800">
                <CalendarToday className="text-base" />
                <span className="mr-1">{user.role}</span>
              </div>
              <span className="text-base boldShab text-gray-600 my-4">
                اطلاعات کاربر
              </span>
              <div className="flex items-center mb-3 text-gray-800">
                <PhoneAndroid className="text-base" />
                <span className="mr-1">{user.mobile}</span>
              </div>
              <div className="flex items-center mb-3 text-gray-800">
                <MailOutline className="text-base" />
                <span className="mr-1">{user.email}</span>
              </div>
              <div className="flex items-center mb-3 text-gray-800">
                <LocationSearching className="text-base" />
                <span className="mr-1">ایران. تبریز</span>
              </div>
            </div>
          </div>
          <div className="flex-4 mr-5 p-5 shadow flex flex-col">
            <span className="text-2xl">ویرایش</span>
            <form className="flex justify-between mt-5" action="" 
                  onSubmit={handleClick}>
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
                    required
                    placeholder={user.userName}
                    name="userName"
                    id="userName"
                  />
                </div>
                <div className="flex flex-col w-[50%] mt-3 mb-10">
                  <label className="mb-1 text-base" htmlFor="">
                    نام و نام خانوادگی{" "}
                  </label>
                  <input
                    required 
                    className=" w-[250px] h-8"
                    onChange={handleChange}
                    style={{ borderBottom: "1px solid gray" }}
                    type="text"
                    aria-required="true"
                    placeholder={user.fullname}
                    name="fullname"
                    id="fullname"
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
                    required
                    type="text"
                    placeholder={user.role}
                    name="role"
                    id="role"
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
                    required
                    placeholder={user.mobile}
                    name="mobile"
                    id="mobile"
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
                    required
                    placeholder={user.email}
                    name="email"
                    id="email"
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
                    required
                    placeholder="*********"
                    name="password"
                    id="password"
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
                <input
                  type="submit"
                  value="به روز رسانی"
                  className="p-1 rounded-md bg-teal-600 text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

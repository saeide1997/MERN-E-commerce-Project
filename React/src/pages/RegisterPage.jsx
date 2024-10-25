import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userRequest } from "../requestMethods";
import Swal from 'sweetalert2'
import 'react-toastify/dist/ReactToastify.css';
import {
  addUserStart,
  addUserSuccess,
  addUserFailure,
} from "../redux/userRedux";
import { useAuth } from "../hooks/AuthProvider";

const RegisterPage = () => {
  const [userInf, setUserInf] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useAuth();

  const handleChange = (e) => {
    setUserInf((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const user = {
      ...userInf,
      role: "user",
    };
    auth.registerAction(user)

    // try {
    //   console.log(2);
    //   dispatch(addUserStart());
    //   console.log(1);
    //   const res = await userRequest.post(`/auth/register/`, user);
    //   console.log(res);
    //   dispatch(addUserSuccess(res.data));
    //   navigate("/");
    //   Swal.fire({
    //     position: "top-end",
    //     icon: "success",
    //     title: "با موفقیت وارد شدید",
    //     showConfirmButton: false,
    //     timer: 1500
    //   });
    // } catch (err) {
    //   dispatch(addUserFailure());
    //   Swal.fire({
    //     position: "top-end",
    //     icon: "error",
    //     title: "خطایی رخ داده است.",
    //     showConfirmButton: false,
    //     timer: 1500
    //   });
    //   return err;
    // }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-pink-300/50 flex items-center justify-center">
      <div className="p-5 w-[40%]  bg-white">
        <h1 className="text-[24px] text-center">به SOHO خوش آمدید.</h1>
        <form className=" flex flex-wrap items-center justify-center" action="">
          <input
            className="flex-1 min-w-[40%] mt-5 ml-4 p-2 border-1 border-pink-600"
            type="text"
            onChange={handleChange}
            name="fullname"
            id="fullname"
            placeholder="نام "
          />
          <input
            className="flex-1 min-w-[40%] mt-5 ml-4 p-2 border-1 border-pink-600"
            type="text"
            onChange={handleChange}
            name="userName"
            id="userName"
            placeholder="نام کاربری"
          />
          <input
            className="flex-1 min-w-[40%] mt-5 ml-4 p-2 border-1 border-pink-600"
            type="text"
            onChange={handleChange}
            name="mobile"
            id="mobile"
            placeholder="موبایل"
          />
          <input
            className="flex-1 min-w-[40%] mt-5 ml-4 p-2 border-1 border-pink-600"
            type="email"
            onChange={handleChange}
            name="email"
            id="email"
            placeholder="ایمیل"
          />
          <input
            className="flex-1 min-w-[40%] mt-5 ml-4 p-2 border-1 border-pink-600"
            type="password"
            onChange={handleChange}
            name="password"
            id="password"
            placeholder="رمز"
          />
          <input
            className="flex-1 min-w-[40%] mt-5 ml-4 p-2 border-1 border-pink-600"
            type="password"
            name=""
            id=""
            placeholder="تکرار رمز"
          />
          <input
            className="flex-1 hidden min-w-[40%] mt-5 ml-4 p-2 border-1 border-pink-600"
            type="text"
            onChange={handleChange}
            name="role"
            id="role"
          />
          <div className="flex-1 min-w-[100%] mt-5">
            <input className="p-1 ml-3" type="checkbox" name="checkbox" id="" />
            <label for="checkbox">شرایط و ضوابط را میپزیرم.</label>
          </div>
          <button
            onClick={handleClick}
            className="border-1 border-pink-600 px-5 py-2 mt-5 justify-center items-center hover:bg-pink-100"
          >
            ثبت نام
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

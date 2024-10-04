import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="flex-4 p-5 items-start">
      <div className=" flex justify-between items-center">
        <h1 className="">ویرایش کاربر</h1>
        <Link to={'/newUser'}>
        <button className="w-20 p-1 bg-teal-500 rounded text-white ">
          ایجاد
        </button>
        </Link>
      </div>
      <div className=" flex mt-5">
        <div className="flex-1 w-full p-5 shadow flex-col">
          <div className=" flex items-center">
            <img
              className="w-10 h-10 ml-10 rounded-full object-cover"
              src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
              alt=""
            />
            <div className="flex flex-col justify-between">
              <span className="">سعیده تاجمهر</span>
              <span className="">برنامه نویس</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base text-gray-600 my-5">اطلاعات حساب</span>
            <div className="flex items-center mb-5 text-gray-800" >
              <PermIdentity className="text-base"/>
              <span className="mr-1">savide</span>
            </div>
            <div className="flex items-center mb-5 text-gray-800">
              <CalendarToday className="text-base"/>
              <span className="mr-1">1376.04.25</span>
            </div>
            <span className="text-base text-gray-600 my-5">اطلاعات کاربر</span>
            <div className="flex items-center mb-5 text-gray-800">
              <PhoneAndroid className="text-base" />
              <span className="mr-1">09144839748</span>
            </div>
            <div className="flex items-center mb-5 text-gray-800">
              <MailOutline className="text-base" />
              <span className="mr-1">savide@gmail.com</span>
            </div>
            <div className="flex items-center mb-5 text-gray-800">
              <LocationSearching className="text-base" />
              <span className="mr-1">ایران. تبریز</span>
            </div>
          </div>
        </div>
        <div className="flex-2 mr-5 p-5 shadow flex flex-col">
            <span className="text-2xl">ویرایش</span>
            <form className="flex justify-between mt-5" action="">
                <div className="">
                <div className="flex flex-col mt-3">
                    <label className="mb-1 text-base" htmlFor="">نام کاربری</label>
                    <input className=" w-[250px] h-8" style={{borderBottom:'1px solid gray'}} type="text" placeholder="سعیده" name="" id="" />
                </div>
                <div className="flex flex-col mt-3">
                    <label className="mb-1 text-base" htmlFor="">تاریخ تولد </label>
                    <input className=" w-[250px] h-8" style={{borderBottom:'1px solid gray'}} type="text" placeholder="1376.04.25" name="" id="" />
                </div>
                <div className="flex flex-col mt-3">
                    <label className="mb-1 text-base" htmlFor="">شماره تماس </label>
                    <input className=" w-[250px] h-8" style={{borderBottom:'1px solid gray'}} type="text" placeholder="09144839748" name="" id="" />
                </div>
                <div className="flex flex-col mt-3">
                    <label className="mb-1 text-base" htmlFor="">ایمیل </label>
                    <input className=" w-[250px] h-8" style={{borderBottom:'1px solid gray'}} type="text" placeholder="savide@gmail.com" name="" id="" />
                </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="flex justify-center items-center">
                        <label htmlFor="img">
                            <Publish className="cursor-pointer"/>
                        </label>
                        <input className="hidden" type="file" name="" id="img" />
                        <img className="w-24 h-24" src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
                    </div>
                    <button className="p-1 rounded-md bg-violet-600 text-white">به روز رسانی</button>
                </div>
            </form>
            </div>
      </div>
    </div>
  );
};

export default User;

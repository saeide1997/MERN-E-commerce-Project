import {
  Facebook,
  Instagram,
  Mail,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className="footerGif h-fit flex">
      <div className="flex">
        <div className="flex-1 flex flex-col p-5">
          <h1 className="text-white">.SOHO</h1>
          <span className="my-5"></span>
          <div className="flex">
            <div className="ml-5 cursor-pointer w-[40px] h-[40px] text-white bg-blue-700 flex items-center justify-center rounded-full">
              <Facebook />
            </div>
            <div className="ml-5 cursor-pointer w-[40px] h-[40px] text-white bg-pink-500 flex items-center justify-center rounded-full">
              <Instagram />
            </div>
            <div className="ml-5 cursor-pointer w-[40px] h-[40px] text-white bg-blue-500 flex items-center justify-center rounded-full">
              <Twitter />
            </div>
          </div>
        </div>
        <div className="flex-1 p-5 text-white">
          <h3 className="mb-7"> صفحات کاربردی</h3>
          <ul className="m-0 p-0 flex flex-wrap">
            <li className="w-[50%] mb-3 cursor-pointer">خانه</li>
            <li className="w-[50%] mb-3 cursor-pointer">پوشاک زنانه</li>
            <li className="w-[50%] mb-3 cursor-pointer">پوشاک مردانه</li>
            <li className="w-[50%] mb-3 cursor-pointer">پروفایل</li>
            <li className="w-[50%] mb-3 cursor-pointer">محصولات محبوب</li>
            <li className="w-[50%] mb-3 cursor-pointer">تماس با ما</li>
            <li className="w-[50%] mb-3 cursor-pointer">درباره ما</li>
          </ul>
        </div>
        <div className="flex-1 p-5 text-white">
          <h3 className="mb-7">تماس با ما </h3>
          <div className="mb-3 flex items-center">
            <Room className="ml-2" />
            ایران. تبریز. الهی پرست
          </div>
          <div className="mb-3 flex items-center">
            <Phone className="ml-2" />
            09144839748
          </div>
          <div className="mb-3 flex items-center">
            <MailOutline className="ml-2" />
            Saeiide.tm@gmail.com
          </div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

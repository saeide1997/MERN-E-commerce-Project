import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Order = () => {
  const location = useLocation();
  // const alert = useAlert();
  const orderId = location.pathname.split("/")[2];
  const order = useSelector((state) =>
    state.order.orders.find((order) => order._id === orderId)
  );
  const productInf = useSelector((state) => state.product.products);
  console.log(order);

  return (
    <div className="flex-6 p-5 items-start ">
      <div className=" flex p-10 justify-between shadow">
          <div className="" style={{ flex: "3" }}>
        {order.products.map((product) => (
          <>
            <div className="flex justify-between h-28 my-5">
              <div className="flex-2 flex justify-center items-center">
                <img
                  className="w-[100px] h-[100px]"
                  src={
                    productInf.find((item) => item._id === product.productId)
                      .img
                  }
                  alt=""
                />
                <div className="p-5 flex flex-col justify-between">
                  <div className="N">
                    <b>محصول: </b>
                    {
                      productInf.find((item) => item._id === product.productId)
                        .title
                    }
                  </div>
                  <div className="I">
                    <b>کد: </b>
                    {product._id}
                  </div>
                  <div
                    className="w-[20px] h-[20px] rounded-full"
                    style={{ background: product.color }}
                  ></div>
                  <div className="S">
                    <b>سایز: </b>
                    {product.size}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center flex-col ">
                <div className="mt-5 text-[24px] ">
                  {Intl.NumberFormat().format(
                    productInf.find((item) => item._id === product.productId)
                      .price * product.quantity
                  )}{" "}
                  ریال
                </div>
              </div>

            </div>
          <hr className="text-teal-900 h-1 bg-teal-900/50" />
          </>
          ))}
          </div>
        <div
          className=" border-1 border-solid justify-center items-center mr-5 border-teal-400/50 rounded-lg p-5 h-[50vh]"
          style={{ flex: "1" }}
        >
          <h1 className="font-[200]">خلاصه سفارشات</h1>
          <div className="my-7 mx-0 justify-between flex">
            <span className="">جمع خرید</span>
            <span className="">
              {Intl.NumberFormat().format(order.amount)} ریال
            </span>
          </div>
          <div className="my-7 mx-0 justify-between flex">
            <span className="">تخفیف شما از خرید</span>
            <span className="">
              {Intl.NumberFormat().format(order.discount || 0)} ریال
            </span>
          </div>
          <div className="my-7 mx-0 justify-between flex font-[600]">
            <span className=""> مجموع</span>
            <span className="">
              {Intl.NumberFormat().format(order.amount + (order.discount || 0))}{" "}
              ریال
            </span>
          </div>
          <button className="p-2 w-100 font-[600] items-center rounded-md justify-center cursor-pointer bg-teal-900 shadow text-white hover:shadow-none">
            {" "}
            تغییر وضعیت
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;

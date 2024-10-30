import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import News from "../component/News";
import Footer from "../component/Footer";
import { Add, Favorite, FavoriteBorderOutlined, Remove } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";
import ProductsList from './ProductsListPage';
import Products from "../component/Products";
import { Checkbox, FormControlLabel } from "@mui/material";

const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const dispatch = useDispatch();
  const NumberFormat = new Intl.NumberFormat();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/product/find/" + id);
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "des") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const cartt = useSelector((state) => state.cart);

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  return (
    <div>
      <Navbar />
      <div className="p-10 justify-center !max-h-max flex">
        <div className="flex-1 flex justify-center  ">
          <img
            className="w-[100%] object-contain"
            src={product.img}
            alt=""
          />
        </div>
        <div className="flex-2 flex justify-between p-10 mx-10 bg-fuchsia-100 shadow">
          <div className="flex flex-col">
            <h1 className="font-[100] text-fuchsia-950">{product.title}</h1>
            <p className="my-5">{product.desc}</p>
            <span className="text-[30px] font-[100]">
              {NumberFormat.format(product.price)} ریال{" "}
            </span>
            <div className="flex my-5 ">
              <h5 className="mt-1">رنگ:</h5>
              {product.color?.map((c) => (
                <div
                  className="mr-3 cursor-pointer w-[30px] h-[30px] justify-center rounded-full border-1 border-black"
                  style={{ background: c }}
                  onClick={() => setColor(c)}
                ></div>
              ))}
            </div>
            <div className="flex ">
              <h5 className="mt-1">اندازه:</h5>
              <select className="mx-3 h-[30px] px-2 bg-fuchsia-100 rounded-md border-solid border-1 border-fuchsia-600">
                {product.size?.map((s) => (
                  <option
                    onChange={(e) => setSize(e.target.value)}
                    key={s}
                    value=""
                  >
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <FormControlLabel className=" mt-5 !mr-[-15px]" control={<Checkbox  />} label="موجود شد به من اطلاع بده " />
          </div>
          <div className="flex flex-col items-center justify-end w-[50%] ">
            <div className="flex justify-center items-center rounded-md p-2 w-max h-10 mt-0 mb-[50%] shadoww hover:shadow-none cursor-pointer bg-fuchsia-300 border-fuchsia-600 border-solid border-[1px]">
              <FavoriteBorderOutlined/> 
               افزودن به علاقه مندی ها</div>
            <div className="flex justify-center h-11 items-center border-fuchsia-600 border-solid border-[1px] font-[700]">
              <Remove
                className="cursor-pointer w-[30px]"
                onClick={() => handleQuantity("des")}
              />
              <span className="w-[30px] h-11  mx-2 flex border-x-2 border-solid border-fuchsia-600 justify-center items-center">
                {quantity}
              </span>
              <Add
                className="cursor-pointer w-[30px]"
                onClick={() => handleQuantity("inc")}
              />
            </div>
            <button
              onClick={handleClick}
              className="p-2 border-1 mt-10 bg-fuchsia-500/50 border-solid shadoww rounded-md border-fuchsia-700 cursor-pointer font-[500] hover:shadow"
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
      <Products  quantity={4}/>
      <Footer />
    </div>
  );
};

export default ProductPage;

import {
  Add,
  DeleteForeverTwoTone,
  DeleteOutline,
  Remove,
} from "@mui/icons-material";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { clearList } from "../redux/favoriteRedux";

const FavoritePage = () => {
  const favorite = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  console.log(favorite.products.length);

  const handleClick = () => {
    dispatch(clearList());
  };
  return (
    <div className="">
      <Navbar />
      <div className=" min-h-[60vh]">
        <h1 className="font-[300] text-center"></h1>
        <div className="flex items-center p-5 justify-end">
          {favorite.products.length > 0 ? (
            <button
              onClick={handleClick}
              className="p-3 font-[600] cursor-pointer w-max shadoww rounded-md hover:shadow-none bg-fuchsia-700 text-white"
            >
              حذف همه کالا های محبوب
            </button>
          ) : (
            <></>
          )}
        </div>
          <div className="px-5" >
            {favorite.products?.map((product) => (
              <>
                <div className="flex justify-between">
                  <div className="flex-2 flex">
                    <img
                      className="w-[200px] h-[200px]"
                      src={product.img}
                      alt=""
                    />
                    <div className="p-5 flex flex-col justify-between">
                      <div className="mb-3">
                        <b>محصول: </b>
                        {product.title}
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
                    <div className="flex items-center">
                      <DeleteOutline className="!text-[50px]" />
                    </div>
                    <div className="mt-3 text-[24px] ">
                      {Intl.NumberFormat().format(product.price)} ریال
                    </div>
                  </div>
                </div>
                <hr className="text-pink-600 h-1 bg-pink-600" />
              </>
            ))}
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default FavoritePage;

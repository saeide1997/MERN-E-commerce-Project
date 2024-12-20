import React from "react";
import { Favorite, FavoriteBorderOutlined, Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const quantity = useSelector((state) => state.cart.quantity);
  const favQuantity = useSelector((state) => state.favorite.quantity);
  const userFunction = useAuth()

  return (
    <div className=" headerImg h-[90px] sticky ">
      <div className="p-7  h-[90px] flex justify-between items-center">
        <div className="flex-1 flex">
          {/* <div className="cursor-pointer text-white justify-center items-center ml-10 text-[20px]">
            فارسی
          </div> */}
          <div className="border-none justify-center items-center ml-3  p-0">
            <Search className="text-white !text-3xl" />
            <input
              className="border-1 border-white h-[25px] border-solid relative "
              type="text"
            />
          </div>
        </div>
        <div className="flex-1 text-center text-[40px]">
          <Link className="text-white" to="/">
            .SOHO
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
          {(() => {
            if (user) {
              return (
                <div className="flex">
                 
                  <div className="mx-3 text-white !w-[100px] text-[20px] cursor-pointer">
                    <PopupState variant="popover" popupId="demo-popup-menu">
                      {(popupState) => (
                        <React.Fragment>
                          <Button className="!bg-fuchsia-100/10 !w-[100px]"
                            variant="contained"
                            {...bindTrigger(popupState)}
                          >
                            {user.fullname}
                          </Button>
                          <Menu  {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>
                            <Link className="text-white no-underline !w-[100px]"  to='/profile'>
                              پروفایل
                            </Link>
                            </MenuItem>
                            <MenuItem className=" text-white" onClick={ ()=> {popupState.close(); userFunction.logOut()} }>
                              خروج
                            </MenuItem>
                          </Menu>
                        </React.Fragment>
                      )}
                    </PopupState>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="flex">
                  <div className="mx-3 text-[20px] cursor-pointer">
                    <Link className="text-white no-underline" to="/register">
                      ثبت نام
                    </Link>
                  </div>
                  <div className="mx-3 text-[20px] cursor-pointer">
                    <Link className="text-white no-underline" to="/login">
                      ورود
                    </Link>
                  </div>
                </div>
              );
            }
          })()}
          <div className="mx-3 cursor-pointer">
            <Link to="/favorite">
              <Badge badgeContent={favQuantity} color= 'secondary' >
                <Favorite className="text-red-600 !text-[40px]" />
              </Badge>
            </Link>
          </div>
          <div className="mx-3 cursor-pointer">
            <Link to="/cart">
              <Badge badgeContent={quantity} color="secondary">
                <ShoppingCartOutlined className="text-black !text-[35px]" />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUserFailure, addUserStart, addUserSuccess, loginFailure, loginStart, loginSuccess } from "../redux/userRedux";
import { userRequest } from "../requestMethods";
import Swal from "sweetalert2";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const registerAction = async (data) => {

    try {
      console.log(2);
      console.log(data);
      dispatch(addUserStart());
      console.log(1);
      const res = await userRequest.post(`/auth/register/`, data);
      dispatch(addUserSuccess(res.data));
      console.log(res);
      loginAction(res.data.userName, res.data.password)
    }catch(err){
      dispatch(addUserFailure());
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "خطایی رخ داده است.",
        showConfirmButton: false,
        timer: 1500
      });
      return err;
    }
  }
  const loginAction = async (data) => {
    try {
      //saeidetajmehr
      dispatch(loginStart());
      console.log(data);
      const res = await userRequest.post(`/auth/login/`, data);
      // const res = await response.json();
      console.log('res',res);
      if (res.data) {
        setUser(res.data.user);
        setToken(res.data.token);
        localStorage.setItem("site", res.data.token);
        dispatch(loginSuccess(res.data));
        navigate("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "با موفقیت وارد شدید",
          showConfirmButton: false,
          timer: 3500
        });
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      dispatch(loginFailure());
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "نام کاربری یا رمز عبور نادرست است.",
        showConfirmButton: false,
        timer: 3500
      });
      return err;
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, registerAction, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
import { useState } from "react";
import { useDispatch } from 'react-redux';
import {login} from '../redux/apiCalls'
import { useNavigate } from "react-router-dom";
import { loginStart } from "../redux/userRedux"
import Swal from 'sweetalert2'

const LoginPage = () => {

    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleClick = async (e)=>{
        e.preventDefault() //Prevent to Refreshing the Page
        await login(dispatch, {userName, password})
        const user = dispatch(loginStart({userName, password}));
        if (user.payload !== 'undefined') {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "با موفقیت وارد شدید",
                showConfirmButton: false,
                timer: 1500
              });
            navigate("/")
        }else{return}
    }

    return (

        <div className="w-[100vw] h-[100vh] bg-pink-300/50 flex items-center justify-center">
            <div className="p-5 w-[25%]  bg-white">
                <h1 className="text-[24px]  text-center">به SOHO خوش آمدید.</h1>
                <form className="items-center flex flex-col justify-center" action="">
                    <input className="flex-1 min-w-[40%] mt-5 ml-4 p-2 border-1 border-pink-600" type="text" name="" onChange = {(e) => setUsername(e.target.value)} id="" placeholder="نام کاربری" />
                    <input className="flex-1 min-w-[40%] mt-4 ml-4 p-2 border-1 border-pink-600" type="password" name="" onChange = {(e) => setPassword(e.target.value)} id="" placeholder="رمز" />
                    <button className="border-1 border-pink-600 px-5 py-2 mt-5 justify-center items-center  hover:bg-pink-100" onClick={handleClick}>ورود </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import News from '../component/News';
import Footer from '../component/Footer';
import { Add, Remove } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/cartRedux';
import { publicRequest } from '../requestMethods';

const ProductPage = () => {

    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState()
    const [size, setSize] = useState()
    const dispatch = useDispatch()
    const NumberFormat = new Intl.NumberFormat()

    useEffect(()=>{
        const getProduct = async()=>{
            try{
                const res = await publicRequest.get('/product/find/' + id)
                setProduct(res.data)

            }catch(err){}
        }
        getProduct()
    },[id])

    const handleQuantity = (type)=>{
        if(type === 'des'){
            quantity>1 && setQuantity(quantity-1)
        }else{
            setQuantity(quantity+1)
        }
    }
    const cartt = useSelector(state=>state.cart)

    const handleClick = ()=>{
        dispatch(
            addProduct({ ...product, quantity, color, size})
            )
    }
    return (
        <div>
            <Navbar />
            <div className='p-10 flex'>
                <div className='flex-1'>
                    <img className='w-[100%] h-[90vh] object-contain' src={product.img} alt="" />
                </div>
                <div className='flex-1 px-10 mt-10'>
                    <h1 className=' font-[100]'>{product.title}</h1>
                    <p className='my-5'>{product.desc}</p>
                    <span className='text-[40px] font-[100]'>{NumberFormat.format(product.price)} ریال </span>
                    <div className='flex w-[80%] justify-between my-5 items-center'>
                        <div className='flex items-center justify-center'>
                        <h5>رنگ:</h5>
                        {product.color?.map((c) => (
                        
                        <div className='mr-3 cursor-pointer w-[30px] h-[30px] rounded-full border-1 border-black' style={{background: c }} onClick={()=>setColor(c)}></div>
                    ))}</div>
                        <div className='flex items-center justify-center'>
                        <h5>اندازه:</h5>
                        <select className="mx-3 h-[30px] px-2 bg-white border-solid border-1 border-gray-700" >
                        
                        {product.size?.map((s) => (
                            <option onChange={(e)=>setSize(e.target.value)} key={s} value="">{s}</option>
                        ))}

                        </select></div>
                    </div>
                    <div className='flex items-center w-[50%] justify-between'>
                        <div className='flex items-center font-[700]'>
                            <Remove className='cursor-pointer ' onClick={()=>handleQuantity('des')} />
                            <span className='w-[30px] h-[30px] mx-2 flex border-1 border-solid border-teal-600 justify-center items-center'>{quantity}</span>
                            <Add className='cursor-pointer ' onClick={()=>handleQuantity('inc')} />
                        </div>
                        <button onClick={handleClick} className='p-2 border-1 border-solid border-gray-700 cursor-pointer font-[500]'>افزودن به سبد خرید</button>
                    </div>
                </div>
            </div>
            <News />
            <Footer />
        </div>
    );
};

export default ProductPage;
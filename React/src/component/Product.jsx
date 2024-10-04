import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({item}) => {



    return (
        <div className='flex-1 m-1 h-[350px] min-w-[280px] flex items-center justify-center bg-gray-100 relative group'>
            <div></div>
            <img className='object-contain h-[75%] w-[80%] z-20' src={item.img} alt="" /> 
            <div className='z-30 opacity-5 w-[100%] h-[100%] absolute top-0 right-0 flex items-center justify-center bg-slate-500/30  group-hover:opacity-90 ' >
                <div className=' m-1 w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center cursor-pointer hover:scale-125'>
                    <ShoppingCartOutlined/>
                </div>
                <div className=' m-1 w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center cursor-pointer hover:scale-125'>
                    <Link to={`/product/${item._id}`}>
                    <SearchOutlined/>
                    </Link>
                </div>
                <div className=' m-1 w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center cursor-pointer hover:scale-125'>
                    <FavoriteBorderOutlined/>
                </div>
            </div>
        </div>
    )
};

export default Product;
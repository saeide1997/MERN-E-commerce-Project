import React from 'react';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const quantity = useSelector(state=>state.cart.quantity)

    return (
        <div className=' headerImg h-[90px]'>
            <div className='p-7  h-[90px] flex justify-between items-center'>
                <div className='flex-1 flex'>
                    <div className='cursor-pointer text-white justify-center items-center ml-10 text-[20px]'>
                        فارسی
                    </div>
                    <div className='border-none justify-center items-center ml-3  p-0'>
                        <Search className='text-white !text-3xl'/>
                        <input className='border-1 border-white h-[25px] border-solid relative ' type="text" />
                    </div>
                </div>
                <div className='flex-1 text-center text-[40px]'><Link className='text-white' to='/'>.SOHO</Link></div>
                <div className='flex-1 flex justify-end'>
                    <div className='mx-3 text-[20px] cursor-pointer'><Link className='text-white no-underline' to='/register'>ثبت نام</Link></div>
                    <div className='mx-3 text-[20px] cursor-pointer'><Link className='text-white no-underline' to='/login'>ورود</Link></div>
                    <div className='mx-3 cursor-pointer'>
                        <Link to='/cart'>
                        <Badge badgeContent={quantity} color='primary'>
                            <ShoppingCartOutlined/>
                        </Badge>
                        </Link>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Navbar;
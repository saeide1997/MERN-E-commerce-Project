import { Send } from '@mui/icons-material';
import React from 'react';

const News = () => {
    return (
        <div className=' h-[60vh] bg-slate-200 flex items-center justify-center flex-col'>
            <h1 className='text-[70px] mb-5'>تازه ها</h1>
            <div className='text-[24px] mb-5'>تازه ترین اخبارها را از محصول محبوب خود دریافت کنید.</div>
            <div className='w-[50%] h-[40px] bg-white flex justify-between border-1 border-solid border-gray-700'>
                <input className=' pr-2' style={{flex:"8"}} type="text" placeholder='ایمیل خود را وارد کنید...'/>
                <button className=' bg-violet-500/50' style={{flex:"1"}} >
                    <Send className='rotate-180'/>
                </button>
            </div>
            
        </div>
    );
};

export default News;
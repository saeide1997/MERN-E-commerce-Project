import { useLocation } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import News from "../component/News";
import Products from "../component/Products";
import { useState } from "react";


const ProductsList = () => {
    const location = useLocation()
    const category = location.pathname.split("/")[2]?decodeURIComponent(location.pathname.split("/")[2]) : ''
    const [filter, setFilter] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFilter = (e)=>{
        const value = e.target.value
        setFilter({
            ...filter,
            [e.target.name]: value
        })
    }
    
    return (
        <div>
            <Navbar/>
            <h2 className="m-4" > {category}</h2>
            <div className="flex justify-between mx-4">
                <div className="flex justify-center" >
                    <h5>فیلتر محصولات:</h5>
                    <select name="color" onChange={handleFilter} className="mx-2 h-[30px] px-2 border-solid border-1 bg-white border-gray-700">
                        <option value="" disabled>نوع</option>
                        <option value="gold">طلایی</option>
                        <option value="silver">نقره ای</option>
                        <option value="pelatin">پلاتین</option>
                        <option value="steel">استیل</option>
                        
                    </select>
                    <select name="size" onChange={handleFilter} className="mx-2 h-[30px] px-2 border-solid border-1 bg-white border-gray-700">
                        <option value="" disabled>سایز</option>
                        <option value="s">small</option>
                        <option value="md">medium</option>
                        <option value="l">larg</option>
                        <option value="xl">xlarg </option>
                        <option value="xxl">xxlarge </option>
                    </select>
                </div>
                <div className="flex">
                    <h5>ترتیب محصولات:</h5>
                    <select name="color" onChange={e=> setSort(e.target.value)}  className="mx-2 h-[30px] px-2 border-solid border-1 bg-white border-gray-700">
                        <option value="newest">تازه ترین</option>
                        <option value="asc">ارزان ترین</option>
                        <option value="dsc">گران ترین</option>
                    </select>
                </div>
            </div>
                <Products category={category} filters={filter} sort={sort} quantity={10000}/>
                <News/>
                <Footer/>
        </div>
    );
};

export default ProductsList;
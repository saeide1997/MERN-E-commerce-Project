import Menu from "../component/Menu";
import Navbar from "../component/Navbar";
import Slider from "../component/Slider";
import Categories from "../component/Categories";
import Products from "../component/Products";
import News from "../component/News";
import Footer from "../component/Footer";

const HomePage = () =>{
    return (
        <div>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products quantity={10}/>
            <News/>
            <Footer/>
        </div>
    )
}

export default HomePage
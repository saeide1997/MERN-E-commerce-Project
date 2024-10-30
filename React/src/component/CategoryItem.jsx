import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
    return (
        <div className='flex-1 m-4 h-[60vh] relative shadoww bg-fuchsia-100/50'>
            <img className='w-[100%] h-[100%] object-contain' src={item.img} alt="" />
            <div className='absolute w-[100%] h-[100%] top-0 left-0 flex items-center justify-center flex-col'>
                {/* <h4 className='mb-5 text-pink-700 bold text-[60px]'>{item.title}</h4> */}
                <button className='p-2 bg-fuchsia-200 rounded-md border-3 border-solid border-fuchsia-700'>
                    <Link className="no-underline text-gray-900" to={`/products/${item.title}`}>
                    حالا بخرید!
                    </Link>
                    </button>
            </div>
        </div>
    )
}

export default CategoryItem;
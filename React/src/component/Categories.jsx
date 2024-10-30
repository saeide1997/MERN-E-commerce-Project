import {categories} from '../data';
import CategoryItem from './CategoryItem';

const Categories = () => {
    return (
        <div className='flex m-4 shadoww  p-5 h-[80vh] items-center justify-between bg-fuchsia-700/50'>
            <h3>دسته‌بندی‌ها</h3>
        <div className='flex p-5 items-center justify-between'>
            {categories.map(item=>(
                <CategoryItem item={item} key={item.id}/>
            ))}
        </div>
        </div>
    );
};

export default Categories;
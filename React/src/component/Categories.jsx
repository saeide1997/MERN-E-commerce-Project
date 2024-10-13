import {categories} from '../data';
import CategoryItem from './CategoryItem';

const Categories = () => {
    return (
        <div className='flex p-5 h-[100vh] items-center justify-between bg-fuchsia-700/50'>
            {categories.map(item=>(
                <CategoryItem item={item} key={item.id}/>
            ))}
        </div>
    );
};

export default Categories;
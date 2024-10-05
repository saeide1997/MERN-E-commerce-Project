
import { popularProducts } from '../data';
import Product from './Product';
// import Product from '../../my-react/src/component/Product';
import { useEffect, useState } from 'react';
import axios from 'axios'

const Products = ({ category, filters, sort }) => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    // const fetchInfo = async()=>{
    // await fetch('http://localhost:7000/api/product/allProducts')
    // .then((res)=> res.json())
    // .then((data)=>{setProducts(data)})

    // }

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(category ? `http://localhost:7000/api/product/products?category=${category}` : 'http://localhost:7000/api/product/products')
                setProducts(res.data)
            } catch (err) {

            }
        }
        getProducts()
    }, [category])

    useEffect(() => {
        category && setFilteredProducts(products.filter(item => Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
        )
        )
        )
    }, [products, category, filters])

    useEffect(() => {
        if (sort === 'newest') {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            )
        } else if (sort === 'asc') {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            )
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            )
        }
    }, [sort])

    return (
        <div className='flex p-5 flex-wrap justify-between'>
            {category ? filteredProducts.map(item => (
                <Product item={item} key={item.id} />
            )) : products.slice(0, 8).map(item => (
                <Product item={item} key={item.id} />
            ))}
        </div>
    )
};

export default Products;
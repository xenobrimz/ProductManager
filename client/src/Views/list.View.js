import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductList from '../Components/productList.Component';
const List = () => {
    const [products, setProducts] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data.results);
                console.log(res.data.results)
            });
        setIsClicked(false)
    },[isClicked])
    return (
        <div>
           <ProductList products={products} setIsClicked={setIsClicked} isClicked={isClicked}/>
           <a href='/index'>Create new product</a>
        </div>
    )
}

export default List

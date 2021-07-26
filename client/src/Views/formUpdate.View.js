import React, {useState } from 'react'
import ProductUpdateForm from '../Components/productUpdateForm.Component';
const UpdateForm = props => {
    const [product, setProduct] = useState({})  
    
    return (
        <div>
           <ProductUpdateForm id={props.id} name={product.name} description={product.description} price={product.price} setProduct={setProduct}/>
        </div>
    )
}

export default UpdateForm


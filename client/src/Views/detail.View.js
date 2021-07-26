import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Detail = props => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data.results[0]))   
    }, [props.id])

    return (
        <div className='container d-flex flex-column justify-content-center md-5'>
            <div className="card w-50 md-4">
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <h5 className="card-title">{product.price}</h5>
                    <h5 className="card-title">{product.description}</h5>
                </div>
            </div>
        </div>
        
    )


}

export default Detail
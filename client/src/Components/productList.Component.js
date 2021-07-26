import React from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
const List = props => {
    const onDelete = e =>{
        axios.delete(`http://localhost:8000/api/products/${e.target.id}/delete/`)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))     
        props.setIsClicked(true)
    }

    const onUpdate = e =>{
        e.preventDefault();
        navigate(`/${e.target.id}/update`)
    }

    return (
       <div className="card">
           {props.products.map((product, idx) => {
               return( 
                <div key={idx} className="card">
                    <div className='card-title'>
                         <h4>{product.name.charAt(0).toUpperCase(0) + product.name.slice(1)}</h4>
                         <a href={`/${product._id}`}>view details</a> 
                         <button id={product._id} className='btn btn-primary m-1' onClick={onUpdate}>Edit</button>     
                         <button id={product._id} className='btn btn-danger m-1' onClick={onDelete}>Delete</button>
                    </div>
                </div> 
                )
           })}
       </div>
    )
}

export default List
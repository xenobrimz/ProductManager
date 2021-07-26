import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const Create = () => {
    const [name, setName] = useState(""); 
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [formError, setError] = useState('')
   
    const onSubmitHandler = e => {
        
        e.preventDefault();
      
        axios.post('http://localhost:8000/api/products/create/', {
            name,
            price,
            description
        })
            .then(res =>{     
                if(res.data.results){
                    console.log(res)
                    navigate('/')
                }else{
                    console.log('Whoops')
                    console.log(res)
                    setError(res.data.error.errors)
                }
            })    
    }
   
    return (
        <form className='container d-flex justify-content-center flex-column w-50' onSubmit={onSubmitHandler}>
            <div className='form-group d-flex flex-column w-50'>
                <label>Name:</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                {formError.name? <p className='text-danger'>{formError.name.message}</p>:''}
            </div>
            <div className='form-group d-flex flex-column w-50'>
                <label>Price:</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                {formError.price? <p className='text-danger'>{formError.price.message}</p>:''}
            </div>
            <div className='form-group d-flex flex-column w-50'>
                <label>Description:</label><br/>
                <textarea type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                {formError.description? <p className='text-danger'>{formError.description.message}</p>:''}
            </div>
            <input className='btn btn-primary w-25' type="submit"/>
            <a href='/viewAll'>view all products</a>
        </form>
    )   
}
export default Create;
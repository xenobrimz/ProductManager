import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const  Edit = props => {
    const [productInfo, setProductInfo] = useState({
        name:'',
        price:'',
        description:''
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.id}/`)
            .then(res=>{
                setProductInfo(res.data.results[0]);
                console.log(res.data.results)
            })
            .catch(err=>console.log(err))
            
    },[props.id])
   
    const onSubmitHandler = e => {  
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/products/${props.id}/update/`,productInfo)
            .then(res=>{
                console.log(res)
                
            })
            .catch(err=>console.log(err))
        navigate('/viewAll')
    }

    const onChangeHandler = e => { 
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }
   
    return (
        <>
        <h1 className='text-center'>Edit {props.name}</h1>
        <form className='container d-flex justify-content-center flex-column w-50' onSubmit={onSubmitHandler}>
            <div className='form-group d-flex flex-column w-50'>
                <label>Name</label><br/>
                <input type="text" name='name'onChange={onChangeHandler} value={productInfo.name}/>
            </div>
            <div className='form-group d-flex flex-column w-50'>
                <label>Price</label><br/>
                <input type="text" name='price' onChange={onChangeHandler} value={productInfo.price}/>
            </div>
            <div className='form-group d-flex flex-column w-50'>
                <label>Description</label><br/>
                <textarea type="text" name='description' onChange={onChangeHandler} value={productInfo.description}/>
            </div>
            <input className='btn btn-primary w-25' type="submit"/>
            <a href='/viewAll'>return to list</a>
        </form>
        </>
    )
}
export default Edit;
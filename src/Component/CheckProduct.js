import React from 'react'
// import StarIcon from '@material-ui/icons/Star'
import './CheckProduct.css'

// import { useState } from 'react'
import { useDispatch } from 'react-redux'


export default function CheckProduct({ id, image, title, price, flipimg, description, oldprice }) {

    let dispatch = useDispatch()
    return (
        <div className='CheckProduct'>
            <div className='CheckProduct_main'>
                <div className='CheckProduct_row'>
                    <div className='CheckProduct_image'>
                        <img src={image} alt="img1"></img>
                    </div>
                    <div className='CheckProduct_details'>
                        <span className='CheckProduct_title'>{title}</span>
                        <span className='CheckProduct_description'>{description}</span>
                        <span><img className='CheckProduct_flip' src={flipimg} alt="img2" /></span>
                    </div>
                    <div className='CheckProduct_cost'>

                        <span className='CheckProduct_inr'>INR</span>
                        <span className='CheckProduct_price'>{price}</span>
                        <span className='CheckProduct_oldprice'>{oldprice}</span>

                    </div>
                    <button className='CheckProduct_button' onClick={() => dispatch({ type: 'REMOVE_FROM_CART', id: id })}>Remove From Cart</button>

                </div>



            </div>

        </div>
    )
}

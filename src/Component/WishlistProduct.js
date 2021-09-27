import React from 'react'
// import StarIcon from '@material-ui/icons/Star'
import './WishlistProduct.css'

// import { useState } from 'react'
import { useDispatch } from 'react-redux'


export default function WishlistProduct({ id, image, title, price, flipimg, description, oldprice }) {

    let dispatch = useDispatch()
    return (
        <div className='WishlistProduct'>
            <div className='WishlistProduct_main'>
                <div className='WishlistProduct_row'>
                    <div className='WishlistProduct_image'>
                        <img src={image} alt="img1"></img>
                    </div>
                    <div className='wishlist_info'>
                        <div className='WishlistProduct_details'>
                            <span className='WishlistProduct_title'>{title}</span>
                            <span className='WishlistProduct_description'>{description}</span>
                            <span><img className='WishlistProduct_flip' src={flipimg} alt="img2" /></span>
                        </div>
                        <div className='WishlistProduct_cost'>

                            <span className='WishlistProduct_inr'>INR</span>
                            <span className='WishlistProduct_price'>{price}</span>
                            <span className='WishlistProduct_oldprice'>{oldprice}</span>

                        </div>
                        <button className='WishlistProduct_button' onClick={() => dispatch({ type: 'REMOVE_FROM_WISH', id: id })}>Remove From Wish</button>
                    </div>

                </div>



            </div>

        </div>
    )
}

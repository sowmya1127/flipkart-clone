import React from 'react'
// import StarIcon from '@material-ui/icons/Star'
import './Product.css'
import HeartIcon from '@material-ui/icons/Favorite'
import { useState } from 'react'
import { useDispatch } from 'react-redux'


export default function Product({ id, image, title, price, flipimg, description, oldprice }) {
    let [heart, setHeart] = useState(false)
    let dispatch = useDispatch()
    return (
        <div className='product'>
            <div className='product_main'>
                <div className='product_row'>
                    <div className='product_image'>
                        <img src={image} alt="img2"></img>
                    </div>
                    <div className='product_details'>
                        <span className='product_title'>{title}</span>
                        <span className='product_description'>{description}</span>
                        <span><img className='product_flip' src={flipimg} alt="img1" /></span>
                    </div>
                    <div className='product_cost'>

                        <span className='product_inr'>INR</span>
                        <span className='product_price'>{price}</span>
                        <span className='product_oldprice'>{oldprice}</span>

                    </div>
                    <button className='product_button' onClick={() => dispatch({ type: 'ADD_TO_CART', item: { id: id, title: title, image: image, price: price, description: description, oldprice: oldprice } })}>Add to cart</button>

                </div>
                <div>
                    <div onClick={heart ? () => setHeart(false) : () => setHeart(true)} ><HeartIcon className={heart ? 'hearticon1' : 'hearticon1_off'} onClick={() => dispatch({ type: 'REMOVE_FROM_WISH', id: id })} /></div>
                    <div onClick={heart ? () => setHeart(false) : () => setHeart(true)}><HeartIcon className={heart ? 'hearticon2' : 'hearticon2_off'} onClick={() => dispatch({ type: 'ADD_TO_WISH', item: { id: id, title: title, image: image, price: price, description: description, oldprice: oldprice } })} /></div>

                </div>


            </div>

        </div>
    )
}

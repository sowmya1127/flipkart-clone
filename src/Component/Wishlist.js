import React from 'react'
import Cart from '../images/cart.png'
import './Wishlist.css'
import WishlistProduct from './WishlistProduct'
import { useSelector } from 'react-redux'


export default function Wishlist() {
    let wish = useSelector(state => state.wish);
    console.log(wish);
    let WishlistProductDetails = wish.map(item => <WishlistProduct id={item.id} title={item.title} image={item.image} price={item.price} description={item.description} oldprice={item.oldprice} />)
    console.log(WishlistProductDetails);
    return (
        <div className='wishlist'>
            <div className={wish.length > 0 ? 'wishlist_main1off' : 'wishlist_main1'}>

                <div className='wishlist1 flex_none'>
                    <ul >
                        <p className='header'>ACCOUNT SETTING</p>
                        <p className='body'>Profile Information</p>
                        <p className='body'>Manage Adress</p>
                        <p className='body'>Pan Card Information</p>

                    </ul>
                    <ul>
                        <p className='header'>PAYMENTS</p>
                        <p className='body'>Gift Cards</p>
                        <p className='body'>Saved UPI</p>
                        <p className='body'>Saved Cards</p>
                    </ul>
                    <ul>
                        <p className='header'>MY STUFFs</p>
                        <p className='body'>My Coupons</p>
                        <p className='body'>My Ratings & Reviews</p>
                        <p className='body'>ALL Notification</p>
                    </ul>


                </div>
                <div className='wishlist2'>
                    <div className='wishlist_img'>
                        <img src={Cart} alt="img1" />
                    </div>
                    <div className='wishlist_descrption'>
                        <p>Missing Cart Items</p>
                        <p className='wishlist_login'>You have no items in your wishlist. Start adding!</p>

                    </div>

                </div>
            </div>
            <div className={wish.length > 0 ? 'wishlist_main2' : 'wishlist_main2off'}>
                <div className='wishlist1_item flex_none'>
                    <ul >
                        <p className='header'>ACCOUNT SETTING</p>
                        <p className='body'>Profile Information</p>
                        <p className='body'>Manage Adress</p>
                        <p className='body'>Pan Card Information</p>

                    </ul>
                    <ul>
                        <p className='header'>PAYMENTS</p>
                        <p className='body'>Gift Cards</p>
                        <p className='body'>Saved UPI</p>
                        <p className='body'>Saved Cards</p>
                    </ul>
                    <ul>
                        <p className='header'>MY STUFFs</p>
                        <p className='body'>My Coupons</p>
                        <p className='body'>My Ratings & Reviews</p>
                        <p className='body'>ALL Notification</p>
                    </ul>


                </div>
                <div className='wishlist2_item'>
                    <div className='wishlist_header'>
                        <span>My Wishlist</span>
                    </div>
                    <div className='wishlist_product'>
                        {WishlistProductDetails}

                    </div>

                </div>
            </div>

        </div>
    )
}


import React from 'react'
import './Cart.css'
import Cartimg from '../images/cart.png'
import { useSelector } from 'react-redux';
import CheckoutProduct from './CheckProduct';
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import { Link } from 'react-router-dom';


export default function Cart() {
    let basket = useSelector(state => state.basket);
    console.log(basket);
    let CheckoutProductDetails = basket.map(item => <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} description={item.description} oldprice={item.oldprice} />)
    return (
        <div className='cart'>
            <div className={basket.length > 0 ? 'cart_mainoff' : 'cart_main'}>
                <div className='cart1'>

                    <div className='cart_img'>
                        <div className='cart_font'>My Cart</div>
                        <img src={Cartimg} alt="img1" />
                    </div>
                    <div className='cart_descrption'>
                        <p>Missing Cart Items</p>
                        <p className='cart_login'>Login to see the items you added previously</p>
                        <button className='cart_button'> <Link to='/'><span>Shop for cart</span></Link></button>
                    </div>
                </div>
                <div className='cart2'>
                    <div className='cart_footer'>
                        <p>Policies:Returns/ PolicyTerms of useSecurity/Privacy/Infringement</p>

                    </div>
                    <div className='cart_footer flex_none'>
                        <p>© 2007-2021 Flipkart.com</p>
                    </div>
                    <div className='cart_footer flex_none'>
                        <span>Need help? Visit <span className='cart_color'>the Help Center</span> or<span className='cart_color'>Contact Us</span> </span>
                    </div>
                </div>


            </div>


            <div className={basket.length > 0 ? 'cart_main2' : 'cart_main2off'}>
                <div className='cart_items'>

                    <div className='cart_header1'>My Cart</div>
                    <div className='cart_header2'>
                        <div>
                            <LocationOnTwoToneIcon />
                            <span>Adress</span>
                        </div>

                    </div>

                </div>
                <div className='cart_products'>
                    {CheckoutProductDetails}

                </div>
                <div>
                    <Link to="/Payment">
                        <button className='cart_button'>Place Order</button>
                    </Link>
                </div>

            </div>
        </div>


    )
}

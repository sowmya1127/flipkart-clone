import React, { useState } from 'react'
import './Header.css'
import CartIcon from '@material-ui/icons/ShoppingCart';
// import { placeholder } from '@babel/types';
import SearchIcon from '@material-ui/icons/Search';
import Gift from '../images/gift.png'
import Grocery from '../images/grocery.png'
import Mobiles from '../images/mobiles.png'
import Fashion from '../images/fashion.png'
import Electronics from '../images/electronics.png'
import Home from '../images/home.jpg'
import Application from '../images/application.png'
import Travels from '../images/travel.png'
import Teddy from '../images/teddy.png'
import { Link } from 'react-router-dom';
import UserIcon from '@material-ui/icons/AccountCircleRounded'
import PlusIcon from '@material-ui/icons/AddAlertRounded'
import OrderIcon from '@material-ui/icons/CallToActionRounded'
import HeartIcon from '@material-ui/icons/FavoriteBorderRounded'
import RewardIcon from '@material-ui/icons/PaymentRounded'
import GiftIcon from '@material-ui/icons/Redeem'
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import GetAppIcon from '@material-ui/icons/GetApp';
import Loginimg from '../images/login.png'
import Close from '@material-ui/icons/Close'
import Star from '../images/title_star.png'
import { useSelector } from 'react-redux';




export default function Header() {

    let [dropdown, setDropdown] = useState(false)
    let [login, setLogin] = useState(false)
    let [dropdown2, setDropdown2] = useState(false)
    let [dropdown3, setDropdown3] = useState(false)
    let basket = useSelector(state => state.basket)
    let wish = useSelector(state => state.wish)











    return (
        <div className='header'>
            <div className='header_main1'>
                <div className='header1'>
                    <Link to='/'>
                        <div className='header1_stage1'>
                            <span className='header1_style1'>Flipkart</span>
                        </div>
                    </Link>
                    <div className='header1_stage2'>
                        <span className='header1_style2'>Explore<span className='header1_style3'>plus</span></span><img className='header1_star' src={Star} alt="img1" />
                    </div>
                </div>
                <div className='header2'>
                    <div className='header2_search'><input type='text' placeholder='Search for Products,brands and more' /><SearchIcon className='search_icon' /></div>


                </div>
                <div className='header3'>
                    <div className='header3_login' onClick={() => setLogin(true)} >

                        <span className='header3_style' onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} >Login</span>

                    </div>
                    <div className='header_more' onMouseEnter={() => setDropdown2(true)} onMouseLeave={() => setDropdown2(false)}> More</div>
                    <div className='header_cart'>
                        <div className='cart_icon'>
                            <CartIcon></CartIcon>
                            <span>{basket.length}</span>

                        </div>
                        <Link to='/Cart'>
                            <div className='cart_style' >Cart</div>
                        </Link>

                    </div>
                </div>
            </div>
            <div className='header_main2'>
                <div className='style' ><img className='main2_style' src={Gift} alt="img9" />Top offers</div>
                <div className='style'><img className='main2_style' src={Grocery} alt="img8" />Groceries</div>
                <div className='style'><img className='main2_style' src={Mobiles} alt="img7" />Mobiles</div>
                <div className='style'><img className='main2_style' src={Fashion} alt="img6" onMouseEnter={() => setDropdown3(true)} onMouseLeave={() => setDropdown3(false)} />Fashion</div>
                <div className='style'><img className='main2_style' src={Electronics} alt="img5" />Electronics</div>
                <div className='style'><img className='main2_style' src={Home} alt="img4" />Home</div>
                <div className='style'><img className='main2_style' src={Application} alt="img3" />Application</div>
                <div className='style'><img className='main2_style' src={Travels} alt="img2" />Travels</div>
                <div className='style'><img className='main2_style' src={Teddy} alt="img1" />Beauty toys & More</div>




            </div>

            <div className={dropdown ? 'dropdown_on' : 'dropdown_off'} onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                <div className='dropdown'>
                    <div className='dropdown_header' onClick={() => setLogin(true)}>
                        <span>New customer?</span>
                        <span>Signup</span>
                    </div>

                    <div className='dropdown_body'>
                        <ul>
                            <li>< UserIcon className='dropdown_icon' /> My Profile</li>
                            <li><PlusIcon className='dropdown_icon' /> FlipKart PlusZone</li>
                            <li><OrderIcon className='dropdown_icon' /> Orders</li>

                            <li><HeartIcon className='dropdown_icon' /><Link to='/Wishlist' > Whishlist {wish.length}</Link></li>

                            <li><RewardIcon className='dropdown_icon' /> Rewards</li>
                            <li><GiftIcon className='dropdown_icon' />GiftCards</li>
                        </ul>
                    </div>
                    <div className='dropdown_triangle'></div>
                </div>

            </div>
            <div className={dropdown2 ? 'dropdown_on2' : 'dropdown_off2'}>
                <div className='dropdown2'>
                    <div className='dropdown_body2'>
                        <ul>
                            <li><NotificationImportantIcon className='dropdown2_icon' /> Notification Preferance</li>
                            <li><CardGiftcardIcon className='dropdown2_icon' /> sell on FlipKart</li>
                            <li><LiveHelpIcon className='dropdown2_icon' /> 24*7 Customer Care</li>
                            <li><TrendingUpIcon className='dropdown2_icon' /> Advertise</li>
                            <li><GetAppIcon className='dropdown2_icon' /> Download App</li>
                        </ul>

                    </div>
                    <div className='dropdown2_triangle'></div>
                </div>
            </div>
            <div className={login ? 'login_on' : 'login_off'}>
                <div className='login_main'>
                    <div className='login_home'>
                        <div className='login_part1'>
                            <div className='login_header'>
                                <p>Login</p>
                                <span>Get access to Your Orders,Whishlist and Reccendations</span>

                            </div>
                            <div className='login_img'>
                                <img src={Loginimg} alt="img10" />

                            </div>
                        </div>
                        <div className='login_part2'>
                            <div className='login_email'>
                                <input type='text' placeholder='Enter Your Email' />
                            </div>
                            <div className='login_email'>
                                <input type='password' placeholder='Enter Your Password' />
                                <span className='forget'>Forget?</span>
                            </div>
                            <p>By continuing, you agree to Flipkart's <span className='color_blue'>Terms of Use </span>and<span className='color_blue'> Privacy Policy.</span> </p>
                            <button className='login_button'>Login</button>
                            <div className='login_or'>
                                <span>OR</span>
                                <p className='color_blue'>
                                    New to Flipkart? Create New Account
                                </p>
                            </div>
                            <button className='create_button'>Create New Account</button>
                        </div>
                        <Close className='login_close' onClick={() => setLogin(false)} />
                    </div>

                </div>

            </div>
            <div className={dropdown3 ? 'dropdown_on3' : 'dropdown_off3'} onMouseEnter={() => setDropdown3(true)} onMouseLeave={() => setDropdown3(false)}>
                <div className='dropdown3'>
                    <div className='dropdown_body3'>
                        <ul>
                            <li>Mens wear</li>
                            <li>Womens Ethinic Wear</li>
                            <li>Womens Western Wear</li>
                            <li>Mens Footwear</li>
                            <li>Watches and Accessories</li>
                            <li>Essentials</li>
                            <li>Kids</li>
                            <li>Winter</li>
                        </ul>
                    </div>
                    <div className='dropdown_triangle3'></div>
                </div>
            </div>
        </div>
    )
}

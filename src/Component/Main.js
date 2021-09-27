import React from 'react'
import './Main.css'
import Slider1 from '../images/slider_1.jpg'
import Slider2 from '../images/slider_2.png'
import Slider3 from '../images/slider_3.jpg'
import Slider4 from '../images/slider_4.jpg'
import Slider5 from '../images/slider_5.jpg'
import Swing from '../images/swing.jpeg'
import Charger from '../images/flat_charging.jpeg'
import Joggers from '../images/jogger_1.jpeg'
import Blankets from '../images/blanket.jpeg'
import Makeup from '../images/makeup.jpeg'
import Shoes from '../images/shoes.jpeg'
import Jwellary from '../images/jwellary.jpeg'
import MainAd from '../images/main_ad.jpg'
import Womensaree from '../images/sarees.jpeg'
import Watch from '../images/mainwatches.jpeg'
import Wallet from '../images/wallets.jpeg'
import Sportshoes from '../images/sportshoes.jpeg'
import Dress from '../images/dress_materials.jpeg'
import Handbags from '../images/handbags.jpeg'
import Mangalsutra from '../images/mangalsutra.jpeg'
import Glasses from '../images/glasses.jpeg'
import Logitech from '../images/logitech.jpeg'
import Wireheadphones from '../images/mwireheadphones.jpeg'
import Jio from '../images/jiowifi.jpeg'
import Wirelessheadphone from '../images/wireless_headphones.jpeg'
import Headset from '../images/headphones.jpeg'
import Keyboard from '../images/keyboard.jpeg'
import Keyboardskin from '../images/keyboard_skin.jpeg'
import Mobilecover from '../images/mobile_cover.jpeg'
import Bags from '../images/bags.jpeg'
import CoolingGls from '../images/cooling_gls.jpeg'
import Shoulderbags from '../images/shoulderbag.jpeg'
import Diesel from '../images/diesel_watch.jpeg'
import Stylishwatch from '../images/stylishwatch.jpeg'
import Laptop1 from '../images/laptop_bags.jpeg'
import Laptop2 from '../images/laptopbags.jpeg'
import Tshirt from '../images/womentshirt.jpeg'
import { Link } from 'react-router-dom'





export default function Main() {
    return (
        <div className='main'>
            <div className='main_home'>
                <div className='main1'>
                    <div><img alt="img1" src={Slider1} /></div>
                    <div><img alt="img2" src={Slider2} /></div>
                    <div><img alt="img3" src={Slider3} /></div>
                    <div> <img alt="img4" src={Slider4} /></div>
                    <div><img alt="img5" src={Slider5} /></div>
                </div>
                <div className='main2'>
                    <div className='main2_style1'>
                        <div className='main2_part1'>
                            <div className='main2_Deals'>
                                <div className='deals_header'><span>Deals of the Day</span></div>
                                <div className='deals_view'><Link to='/product1'><span>VIEW ALL</span></Link></div>
                            </div>
                            <div className='main2_images'>
                                <div className='style1'><img alt="img6" src={Swing} /><p>Swings,Store&Floor</p></div>
                                <div className='style1'><img alt="img7" src={Charger} /><p>Fast Charging PowerBank</p></div>
                                <div className='style1'><img alt="img8" src={Joggers} /><p>Joggers,Essentials</p></div>
                                <div className='style1'><img alt="img9" src={Blankets} /><p>Blankets</p></div>
                                <div className='style1'><img alt="img10" src={Makeup} /><p>Makeup BestSellers</p></div>
                                <div className='style1'><img alt="img11" src={Shoes} /><p>Carlton London,Skecher</p></div>
                                <div className='style1'><img alt="img12" src={Jwellary} /><p>Ethnic Jwellary</p></div>
                            </div>
                        </div>
                        <div className='main2_part2'><img alt="img13" src={MainAd} /></div>
                    </div>
                    <div className='main2_style2'>
                        <div className='main2_offers'>
                            <div className='deals_header'><span>Trending Offers</span></div>

                            <div className='deals_view'>
                                <Link to='/product2'><span>VIEW ALL</span></Link></div>

                        </div>
                        <div className='main2_images'>
                            <div className='style1'><img alt="img1" src={Womensaree} /><p>Women Sarees</p></div>
                            <div className='style1'><img alt="img1" src={Watch} /><p>Wrist Watches</p></div>
                            <div className='style1'><img alt="img1" src={Wallet} /><p>Wallets</p></div>
                            <div className='style1'><img alt="img1" src={Sportshoes} /><p>Sports Shoes</p></div>
                            <div className='style1'><img alt="img1" src={Dress} /><p>Western Dress Materials</p></div>
                            <div className='style1'><img alt="img1" src={Handbags} /><p>HandBags</p></div>
                            <div className='style1'><img alt="img1" src={Mangalsutra} /><p>Mangalsutra</p></div>
                            <div className='style1'><img alt="img1" src={Glasses} /><p>Glasses</p></div>
                        </div>
                    </div>
                    <div className='main2_style3'>
                        <div className='main2_offers'>
                            <div className='deals_header'><span>Top Deals On Electronics</span></div>
                            <div className='deals_view'><Link to='/product3'><span>VIEW ALL</span></Link></div>
                        </div>
                        <div className='main2_images'>
                            <div className='style1'><img alt="img1" src={Logitech} /><p>WebCames</p></div>
                            <div className='style1'><img alt="img1" src={Wireheadphones} /><p>Wired Earphones</p></div>
                            <div className='style1'><img alt="img1" src={Jio} /><p>Data Cards</p></div>
                            <div className='style1'><img alt="img1" src={Wirelessheadphone} /><p>Wireless Earphones</p></div>
                            <div className='style1'><img alt="img1" src={Headset} /><p>Bluetooth Headphones</p></div>
                            <div className='style1'><img alt="img1" src={Keyboard} /><p>Laptop Keyborad</p></div>
                            <div className='style1'><img alt="img1" src={Keyboardskin} /><p>Keyboard Skins</p></div>
                            <div className='style1'><img alt="img1" src={Mobilecover} /><p>Designer Mobile Cover</p></div>
                        </div>
                    </div>
                    <div className='main2_style4'>
                        <div className='main2_offers'>
                            <div className='deals_header'><span>Top Offers  On</span></div>
                            <div className='deals_view'><Link to='product4'><span>VIEW ALL</span></Link></div>
                        </div>
                        <div className='main2_images'>
                            <div className='style1'><img alt="img1" src={Bags} /><p>BackPacks</p></div>
                            <div className='style1'><img alt="img1" src={CoolingGls} /><p>Colling Glasses</p></div>
                            <div className='style1'><img alt="img1" src={Shoulderbags} /><p>Shoulder Bags</p></div>
                            <div className='style1'><img alt="img1" src={Diesel} /><p>Diesel</p></div>
                            <div className='style1'><img alt="img1" src={Stylishwatch} /><p>Get Stylish Watch</p></div>
                            <div className='style1'><img alt="img1" src={Laptop1} /><p>Laptop Bags</p></div>
                            <div className='style1'><img alt="img1" src={Laptop2} /><p>Keyboard HandBags</p></div>
                            <div className='style1'><img alt="img1" src={Tshirt} /><p>Womens Tshirt</p></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

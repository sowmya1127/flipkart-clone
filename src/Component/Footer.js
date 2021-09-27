import React from 'react'
import WorkIcon from '@material-ui/icons/Work';
import StarsIcon from '@material-ui/icons/Stars';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import HelpIcon from '@material-ui/icons/Help';
import './Footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer_main1'>
                <div className='footer1'>
                    <div className='footer_heading'>About</div>
                    <div className='footer_contet'>
                        <p className='style2'>Contact Us</p>
                        <p className='style2'>About Us</p>
                        <p className='style2'> Carrers</p>
                        <p className='style2'>Flipkart Stories</p>
                        <p className='style2'>Press</p>
                        <p className='style2'>Flipkart Wholesale</p>
                        <p className='style2'>Corporate information</p>
                    </div>
                </div>
                <div className='footer2'>
                    <div className='footer_heading'>Help</div>
                    <div className='footer_contet'>
                        <p className='style2'>Payments</p>
                        <p className='style2'>Shipping</p>
                        <p className='style2'> Cancellation & Returns</p>
                        <p className='style2'>FAQ</p>
                        <p className='style2'>Report Infringement</p>
                    </div>
                </div>
                <div className='footer3'>
                    <div className='footer_heading'>policy</div>
                    <div className='footer_contet'>
                        <p className='style2'>Return Policy</p>
                        <p className='style2'>Terms Of Use</p>
                        <p className='style2'> Security</p>
                        <p className='style2'>Privacy</p>
                        <p className='style2'>Sitemap</p>
                        <p className='style2'>ERR Compilance</p>
                    </div>
                </div>
                <div className='footer4 flex_none'>
                    <div className='footer_heading '>Social</div>
                    <div className='footer_contet'>
                        <p className='style2'>Facebook</p>
                        <p className='style2'>Twitter</p>
                        <p className='style2'> youtube</p>
                    </div>
                </div>
                <div className='footer5 flex_none'>
                    <div className='footer_heading'>Mail</div>
                    <div className='footer_contet'>
                        <p className='style2'>Flipkart Internet Private Limited,</p>
                        <p className='style2'>Buildings Alyssa, Begonia &</p>
                        <p className='style2'> Buildings Alyssa, Begonia &</p>
                        <p className='style2'>Outer Ring Road, Devarabeesanahalli Village,</p>
                        <p className='style2'>Bengaluru, 560103,</p>
                        <p className='style2'>Karnataka, India</p>

                    </div>

                </div>
                <div className='footer6 flex_none'>
                    <div className='footer_heading'>Registered Office Adress</div>
                    <div className='footer_contet'>
                        <p className='style2'>Flipkart Internet Private Limited,</p>
                        <p className='style2'>Buildings Alyssa, Begonia &</p>
                        <p className='style2'> Buildings Alyssa, Begonia &</p>
                        <p className='style2'>Outer Ring Road, Devarabeesanahalli Village,</p>
                        <p className='style2'>Bengaluru, 560103,</p>
                        <p className='style2'>Karnataka, India</p>
                        <p className='style2'>CIN : U51109KA2012PTC066107</p>
                        <p className='style2'>Telephone: 1800 202 9898</p>
                    </div>
                </div>

            </div>
            <div className='footer_main2'>
                <div className='footer_style'><img src={WorkIcon} alt="img1" />Sell On Flipkart</div>
                <div className='footer_style'><img src={StarsIcon} alt="img2" />Advertise</div>
                <div className='footer_style'><img src={CardGiftcardIcon} alt="img3" />GiftCards</div>
                <div className='footer_style'><img src={HelpIcon} alt="img4" />HelpCenter</div>
                <div className='footer_style flex_none' >© 2007-2021 Flipkart.com</div>
                <div className='footer_style flex_none' ><img src={WorkIcon} alt="img5" /></div>
            </div>
        </div>
    )
}

import React from 'react'
import Loginimg from '../images/login.png'
import './Login.css'


export default function Login() {
    return (
        <div className='login'>
            <div class='modal' id='my-modal'>
                <div className='modal-dialog modal-dialog-centered'>
                    <div className='login_main'>
                        <div className='login_stage1'>
                            <div className='login_heading'>
                                <span>Login</span>
                                <p>Get access to your</p>
                                <p>Orders, Wishlist and</p>
                                <p>Recommendations</p>
                            </div>
                            <div className='login_img'>
                                <img src={Loginimg} alt="img1" />

                            </div>
                        </div>
                        <div className='login_stage2'>
                            <div className='login1'>
                                <input className='text' type='text' placeholder='enter email'></input>
                                <div className='login1_password'>
                                    <input className='password' type='password' placeholder='enter password'></input>
                                    <div className='forget'>
                                        <span>Forget password</span>
                                    </div>
                                </div>
                            </div>
                            <div className='login2'>
                                <p className='login2_des'>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                                <button className='login_botton'>Login</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

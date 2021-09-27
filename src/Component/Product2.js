import React from 'react'
import Product from './Product'
import Assure from '../images/assure.png'
import './Product2.css'

export default function Product2() {
    return (
        <div className='Product2'>
            <div className='Product2_main'>
                <div className='Product2_stage1'>
                    <Product
                        id='211'
                        image='https://rukminim1.flixcart.com/image/580/696/kplisnk0/sari/v/3/a/free-mahek-saree-clemira-unstitched-original-imag3ssgv4efr4ym.jpeg?q=50'
                        title='Printed Mysore Art Silk Saree'
                        description='Fabwomen'
                        flipimg={Assure}
                        price={305}
                        oldprice={1335}
                    />
                    <Product
                        id='212'
                        image='https://rukminim1.flixcart.com/image/580/696/keq058w0-0/sari/k/b/2/free-vs-402-1-leelavati-unstitched-original-imafvc3gtbngca5h.jpeg?q=50'
                        title='Printed Daily Wear Georgette Saree'
                        description='Leelavati'
                        flipimg={Assure}
                        price={295}
                        oldprice={990}
                    />
                    <Product
                        id='213'
                        image='https://rukminim1.flixcart.com/image/580/696/khp664w0-0/fabric/6/g/c/yes-unstitched-varsha-2869-jevi-prints-original-imafxnue7gzjk3ph.jpeg?q=50'
                        title='Crepe Printed Salwar Suit Material  (Unstitched)'
                        description='Jevi Prints '
                        flipimg={Assure}
                        price={431}
                        oldprice={1299}
                    />

                </div>
                <div className='Product2_stage2'>
                    <Product
                        id='214'
                        image='https://rukminim1.flixcart.com/image/580/696/kn22m4w0/hand-messenger-bag/j/v/q/new-styles-0844-hand-held-bag-avnis-styles-original-imagftdff6hjdzgn.jpeg?q=50'
                        title=' Women Blue Shoulder Bag'
                        description='ASHLE'
                        flipimg={Assure}
                        price={347}
                        oldprice={1287}
                    />
                    <Product
                        id='215'
                        image='https://rukminim1.flixcart.com/image/580/696/krme93k0/hand-messenger-bag/p/y/w/upr-cut-blck-3-upr-cut-blck-pc3-shoulder-bag-like-style-original-imag5czenaqce9nq.jpeg?q=50'
                        title='Women Black Shoulder Bag'
                        description='LIKE STYLE'
                        flipimg={Assure}
                        price={599}
                        oldprice={2990}
                    />
                    <Product
                        id='216'
                        image='https://rukminim1.flixcart.com/image/580/696/jxrv4i80/mangalsutra-tanmaniya/n/9/u/mg35g15d3-frolics-india-original-imafd4meysmwwbak.jpeg?q=50'
                        title='Designer American Diamond Studded Short Black Beads Chain Alloy Mangalsutra'
                        description='Frolics India'
                        flipimg={Assure}
                        price={163}
                        oldprice={599}
                    />
                </div>
                <div className='Product2_stage3'>
                    <Product
                        id='217'
                        image='https://rukminim1.flixcart.com/image/580/696/jzhb24w0/mangalsutra-tanmaniya/4/j/s/zene-ms-05-zeneme-original-imaeepke8g8hjnzj.jpeg?q=50'
                        title='Latest Fashionable American Diamond Alloy Mangalsutra'
                        description='ZENEME  '
                        flipimg={Assure}
                        price={239}
                        oldprice={1299}
                    />
                    <Product
                        id='218'
                        image='https://rukminim1.flixcart.com/image/580/696/koono280/sunglass/c/j/z/l-round-aviator-3117-clear-frame-black-chawla-fashion-original-imag33dhgj4ydbz8.jpeg?q=50'
                        title='UV Protection, Riding Glasses Aviator Sunglasses (Free Size)  (For Men & Women, Clear)'
                        description='chawla fashion '
                        flipimg={Assure}
                        price={179}
                        oldprice={1279}
                    />
                    <Product
                        id='219'
                        image='https://rukminim1.flixcart.com/image/580/696/kog30y80/sunglass/d/w/w/m-round-clear-2combo-chawla-fashion-original-imag2wksrsrf3xjr.jpeg?q=50'
                        title='UV Protection, Riding Glasses Aviator Sunglasses (Free Size)  (For Men & Women, Clear)'
                        description='chawla fashion'
                        flipimg={Assure}
                        price={183}
                        oldprice={1249}
                    />
                </div>
            </div>
        </div>
    )
}

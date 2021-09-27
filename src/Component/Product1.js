import React from 'react'
import Product from './Product'
import Assure from '../images/assure.png'
import './Product1.css'

export default function Product1() {
    return (
        <div className='product1'>
            <div className='product1_main'>
                <div className='product1_stage1'>
                    <Product
                        id='111'
                        image='https://rukminim1.flixcart.com/image/612/612/kmp7ngw0/hammock-swing/b/j/l/premium-large-rectangle-shape-swing-chair-hanging-hammock-chair-original-imagfjf73dzthgtz.jpeg?q=70'
                        title='Swingzy Rectangle-Shape Swing Chair Hanging Polyester'
                        description='Black, DIY(Do-It-Yourself)'
                        flipimg={Assure}
                        price={2305}
                    />
                    <Product
                        id='112'
                        image='https://rukminim1.flixcart.com/image/612/612/kobspe80/hammock-swing/7/p/e/ccround-curio-centre-original-imag2sy9qqgyqtzp.jpeg?q=70'
                        title='Curio Centre Round Cotton Large Swing'
                        description='White,Pre-accesmbled'
                        flipimg={Assure}
                        price={1105}
                        oldprice={200}
                    />
                    <Product
                        id='113'
                        image='https://rukminim1.flixcart.com/image/612/612/khavrm80/power-bank/h/s/b/dx08-black-20k-mh-20000-dx08-black-msmi-original-imafxcfgdr7shfg2.jpeg?q=70'
                        title='MOJOMIGADGET 35000 mAh Power Bank (Fast Charging)'
                        description='Black, Lithium-ion'
                        flipimg={Assure}
                        price={1150}
                    />

                </div>
                <div className='product1_stage2'>
                    <Product
                        id='114'
                        image='https://rukminim1.flixcart.com/image/580/696/kn4xhu80/track-pant/i/w/b/m-blss21tp02b-billion-original-imagfvxgkapev6bh.jpeg?q=50'
                        title='Solid Men Grey Track Pants'
                        description='Billion'
                        flipimg={Assure}
                        price={647}
                    />
                    <Product
                        id='115'
                        image='https://rukminim1.flixcart.com/image/612/612/krf91u80/blanket/d/w/x/teal-single-60x90-cft-111-livpure-smart-original-imag57syq93usdsb.jpeg?q=70'
                        title='Livpure Smart Solid Double Comforter'
                        description='Polyester, Teal'
                        flipimg={Assure}
                        price={2005}
                    />
                    <Product
                        id='116'
                        image='https://rukminim1.flixcart.com/image/612/612/kckud8w0/lip-balm/4/e/a/9-6-essential-care-lip-balm-nivea-original-imaftz6vjfuhxsyw.jpeg?q=70'
                        title='NIVEA Essential Care Lip Balm Combo'
                        description='With SheaButter and Natural Oils'
                        flipimg={Assure}
                        price={133}
                    />
                </div>
                <div className='product1_stage3'>
                    <Product
                        id='117'
                        image='https://rukminim1.flixcart.com/image/580/696/kflftzk0-0/sandal/l/u/6/10538010-36-carlton-london-grey-original-imafwyzcq6y7fq3g.jpeg?q=50'
                        title='Women Grey,Sliver Wedges Sandal'
                        description='CARLTON LONDON '
                        flipimg={Assure}
                        price={647}
                    />
                    <Product
                        id='118'
                        image='https://rukminim1.flixcart.com/image/580/696/k23m4cw0/sandal/k/n/p/6989450-36-carlton-london-black-original-imafhg5qvh9ervfr.jpeg?q=50'
                        title='Women Black Wedges Sandal'
                        description='CARLTON LONDON '
                        flipimg={Assure}
                        price={2005}
                    />
                    <Product
                        id='119'
                        image='https://rukminim1.flixcart.com/image/580/696/jewellery-set/g/j/d/r1605-atasi-international-original-imaed2yhcwrfzdeh.jpeg?q=50'
                        title='Alloy Rhodium Jewel Set'
                        description='Atasi International'
                        flipimg={Assure}
                        price={583}
                    />
                </div>
            </div>
        </div>
    )
}

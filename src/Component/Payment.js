
import React from 'react'
import "./Payment.css"
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'


export default function Payment() {
    let bucket = useSelector(state => state.basket)
    let dispatch = useDispatch()
    let history = useHistory()
    const paymentDone = () => {
        alert("your payment is done.Happy shopping")
        dispatch({ type: "EMPTY_BASKET" })
        history.push("/")
    }

    return (
        <div classname="payment">
            <div className="payment_main">
                <div className="payment_header">
                    <button>{bucket.length}</button>
                    <div className=" payment_header2">Orders Summary</div>
                </div>
                <div className="payment_info">
                    <h3>Pay On Delivery Available</h3>
                    <label>
                        <input type="radio" name="Payment"></input>
                        DebitCard
                    </label>
                    <br></br>
                    <label>
                        <input type="radio" name="Payment"></input>
                        CreditCard
                    </label>
                    <br></br>
                    <label>
                        <input type="radio" name="Payment"></input>
                        Payment on Delivery
                    </label>
                    <br></br>
                </div>
                <div>
                    <button onClick={paymentDone} className="payment_button">PlaceHolder</button>
                </div>
            </div>

        </div>
    )
}

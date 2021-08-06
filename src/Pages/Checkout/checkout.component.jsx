import React from 'react';
import "./checkout.styles.scss";
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../Redux/cart/cart.selector';
import { selectCartItemTotal } from '../../Redux/cart/cart.selector';
import CheckoutCartItem from '../../Components/checkout-cartitem/checkout-cartitem.component';
import StripeCheckoutComponent from '../../Components/stripe-checkout/stripe-checkout.component';
const CheckoutPage = ({cartItems,total})=>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem=> <CheckoutCartItem key={cartItem.id} cartItem={cartItem}/>)
        }

        <div className='total'>
            <span>Total: ${total}</span>
        </div>
        <div className= "test-warning">
            Please use test credit card for payments
            <br/>
            4242 4242 4242 4242 - EXP: 01/22  - CVV:123
        </div>
        <StripeCheckoutComponent price={total}/>

    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total:selectCartItemTotal
})
export default connect(mapStateToProps)(CheckoutPage);
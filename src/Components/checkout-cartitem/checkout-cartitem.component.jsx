import React from 'react';
import "./checkout-cartitem.styles.scss";
import { clearItemFromCart } from '../../Redux/cart/cart.action';
import { addItem } from '../../Redux/cart/cart.action';
import { removeItem } from '../../Redux/cart/cart.action';
import {connect} from 'react-redux';

const CheckoutCartItem = ({cartItem,clear_item,add_item,remove_item})=>{
    const {name,imageUrl,price,quantity} = cartItem;
    return(
            <div className='checkout-item'>
                <div className= "image-container">
                    <img alt='item' src={imageUrl}/>
                </div>
                <span className='name'>{name}</span>
                <span className='quantity'>
                    <div className='arrow' onClick={()=> remove_item(cartItem)}>&#10094;</div>
                        <div className='value'>{quantity}</div>
                    <div className='arrow' onClick={()=> add_item(cartItem)}>&#10095;</div>
                </span>
                <span className='price'>{price}</span>
                <span className='remove-button' onClick={()=> clear_item(cartItem)}>&#10005;</span>
            </div>
    );
}

const mapDispatchToProps = dispatch=>(
    {
        clear_item: item=> dispatch(clearItemFromCart(item)),
        add_item: item => dispatch(addItem(item)),
        remove_item: item => dispatch(removeItem(item))
    }
)

export default connect(null,mapDispatchToProps)(CheckoutCartItem);
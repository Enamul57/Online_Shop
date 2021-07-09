import React from 'react';
import "./cart-icon.component.scss";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg.svg";
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../Redux/cart/cart.action';
import { selectCartItemsCount } from '../../Redux/cart/cart.selector';

const CartIcon = ({toggleCartHidden,itemCount})=>(
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}/>
        <span className='item-count'>{itemCount}</span>
    </div>
)
const mapStateToProps = (state)=>(
    {
        itemCount: selectCartItemsCount(state)
        //cartItems.reduce((accumulatedQuantity, cartItem) =>  accumulatedQuantity+ cartItem.quantity,0)
    }
)
const mapDispatchToProps = dispatch=>({
    toggleCartHidden: ()=>
        dispatch(toggleCartHidden())
    
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
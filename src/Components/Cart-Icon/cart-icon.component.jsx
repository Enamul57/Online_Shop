import React from 'react';
import "./cart-icon.component.scss";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg.svg";
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../Redux/cart/cart.action';

const CartIcon = ({toggleCartHidden})=>(
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}/>
        <span className='item-count'>0</span>
    </div>
)
const mapDispatchToProps = dispatch=>({
    toggleCartHidden: ()=>
        dispatch(toggleCartHidden())
    
})
export default connect(null,mapDispatchToProps)(CartIcon);
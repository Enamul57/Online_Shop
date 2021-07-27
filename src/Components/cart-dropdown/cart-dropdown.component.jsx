import React from 'react';
import "./cart-dropdown.styles.scss";
import CustomButton from "../CustomButton/custom-button.component";
import {connect} from 'react-redux';
import CartItem from '../Cart-Item/cart-item.component';
import { selectCartItems } from '../../Redux/cart/cart.selector';
import { toggleCartHidden } from '../../Redux/cart/cart.action';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
const CartDropdown = ({cartItems,history,dispatch})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {   
                cartItems.length ?
                (cartItems.map(cartitem=>
                    <CartItem key={cartitem.id} item={cartitem}/>
                )) : 
                <span className="empty-message">Your checkout is empty</span>
            }
        </div>
        <CustomButton onClick={()=>
           { history.push('/checkout');
            dispatch(toggleCartHidden())}
}
    >Go to Check Out</CustomButton>
    </div>
)
const mapStateToProps =createStructuredSelector(
    {
     cartItems : selectCartItems  
    }
)
export default withRouter(connect(mapStateToProps)(CartDropdown));
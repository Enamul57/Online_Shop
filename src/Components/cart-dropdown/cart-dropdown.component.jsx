import React from 'react';
import "./cart-dropdown.styles.scss";
import CustomButton from "../CustomButton/custom-button.component";
import {connect} from 'react-redux';
import CartItem from '../Cart-Item/cart-item.component';
import { selectCartItems } from '../../Redux/cart/cart.selector';
const CartDropdown = ({cartItems})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartitem=>
                    <CartItem key={cartitem.id} item={cartitem}/>
                )
            }
        </div>
        <CustomButton>Go to Check Out</CustomButton>
    </div>
)
const mapStateToProps = (state) =>(
    {
     cartItems : selectCartItems(state)  
    }
)
export default connect(mapStateToProps)(CartDropdown);
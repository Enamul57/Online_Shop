import React from 'react';
import "./cart-dropdown.styles.scss";
import CustomButton from "../CustomButton/custom-button.component";

const CartDropdown = ()=>(
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <CustomButton>Go to Check Out</CustomButton>
    </div>
)

export default CartDropdown;